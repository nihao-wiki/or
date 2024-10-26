import type {} from '.';
import locales from './locales';

interface LocaleDefinition {
  hostname: string;
  rewrites: {
    [path: string]: string;
  };
  srcExclude: string[];
}

export function getLocaleDefinition(): LocaleDefinition {
  const [, , command, , lang = 'en'] = process.argv;
  const isDev = command === 'dev';
  const config = require(`../../${lang}/config.ts`);
  return {
    ...config,
    hostname: `https://${lang === 'en' ? 'www' : lang}.orientalroad.com`,
    rewrites: {
      [`${lang}/:rest*`]: ':rest*',
    },
    locales: isDev ? locales : {},
    srcExclude: isDev
      ? []
      : Object.keys(locales)
          .filter((key) => !['root', lang].includes(key))
          .map((lang) => `**/${lang}/**`),
  };
}
