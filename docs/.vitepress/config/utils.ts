import type {} from '.';
import { lang, langRoot, locales } from '../constants/locales';
import { hostname } from '../constants/meta';

export function getHreflang(): any[] {
  return [
    ...Object.keys(locales)
      .filter((key) => key !== 'root')
      .map((hreflang) => [
        'link',
        { rel: 'alternate', href: `${hostname}/${hreflang}/`, hreflang },
      ]),
    ['link', { rel: 'alternate', href: `${hostname}/`, hreflang: 'x-default' }],
  ];
}

export function getLocales() {
  for (const lang in locales) {
    const dir = lang === 'root' ? 'en' : lang;
    const config = require(`../../${dir}/config.ts`);
    locales[lang] = {
      ...config.default,
      ...locales[lang],
    };
  }
  return locales;
}

export function getLocalesRewrite() {
  return {
    [`${langRoot}/:rest*`]: ':rest*',
  };
}

export function getLang() {
  return lang;
}
