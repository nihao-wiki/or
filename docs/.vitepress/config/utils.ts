import type {} from '.';
import locales from './locales';

interface LocaleDefinition {
  hostname: string;
  lang: string;
  rewrites: {
    [path: string]: string;
  };
  srcExclude: string[];
}

export function getLocaleDefinition(): LocaleDefinition {
  const [, , , , lang = 'en'] = process.argv;
  const config = require(`../../${lang}/config.ts`);
  return {
    ...config,
    hostname: `https://${lang === 'en' ? 'www' : lang}.orientalroad.com`,
    lang,
    rewrites: {
      [`${lang}/:rest*`]: ':rest*',
    },
    srcExclude: Object.keys(locales)
      .filter((key) => !['root', lang].includes(key))
      .map((lang) => `**/${lang}/**`),
  };
}
