import fs from 'fs';
import path from 'path';
import { spawnSync } from 'child_process';
import { createContentLoader } from 'vitepress';
import jsdom from 'jsdom';

const cache = new Map<string, number>();

function getFileRelativePath(url: string): string {
  let file = url.replace(/(^|\/)$/, '$1index');
  file = file.replace(/(\.html)?$/, '.md');
  file = path.join(__dirname, '../../../', file);
  return file;
}

function getGitTimestamp(file: string) {
  const cached = cache.get(file);
  if (cached) return cached;

  if (!fs.existsSync(file)) return 0;

  const output = spawnSync('git', ['log', '-1', '--pretty="%ai"', path.basename(file)], {
    cwd: path.dirname(file),
  });

  if (output.stdout) {
    const timestamp = +new Date(output.stdout.toString());
    cache.set(file, timestamp);
    return timestamp;
  }

  return 0;
}

function parseTitle(html: string | void): string | void {
  if (!html) return undefined;
  const { JSDOM } = jsdom;
  const dom = new JSDOM(html);
  const h1 = dom.window.document.querySelector('h1');
  return h1?.textContent || undefined;
}

function getRoute(url: string): string {
  return url?.split?.('/')?.slice?.(2)?.join?.('/');
}

export default createContentLoader('en/**/*.md', {
  includeSrc: true,
  render: true,
  transform(rawData) {
    let lastUpdatePage: any;
    let titleProblemPages: any[] = [];
    rawData.forEach((rawData) => {
      const title = parseTitle(rawData.html);
      // SEO: check title
      if (process.env.NODE_ENV === 'development' && title && !rawData?.frontmatter?.ignoreCheck) {
        const tooLong = title.length > 60;
        const tooShort = title.length < 50;
        if (tooLong || tooShort) {
          titleProblemPages.push({
            title,
            gap: tooLong ? 60 - title.length : 50 - title.length,
            problem: tooLong ? 'too long' : 'too short',
            route: getRoute(rawData.url),
            ...rawData,
          });
        }
      }
      // ignore custom layout pages
      if (rawData?.frontmatter?.layout) return;
      // generate last update page data
      const timestamp = getGitTimestamp(getFileRelativePath(rawData.url));
      if (!lastUpdatePage || timestamp > lastUpdatePage?.timestamp) {
        lastUpdatePage = {
          title,
          timestamp,
          route: getRoute(rawData.url),
          ...rawData,
        };
      }
    });
    return {
      lastUpdatePage,
      titleProblemPages,
    };
  },
});
