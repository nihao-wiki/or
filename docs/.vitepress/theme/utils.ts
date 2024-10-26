import { ensureStartingSlash } from 'vitepress/dist/client/theme-default/support/utils.js';

export function normalizeLink(link: string, addPath: boolean, path: string, addExt: boolean) {
  return addPath
    ? link.replace(/\/$/, '') +
        ensureStartingSlash(
          path.replace(/(^|\/)index\.md$/, '$1').replace(/\.md$/, addExt ? '.html' : '')
        )
    : link;
}
