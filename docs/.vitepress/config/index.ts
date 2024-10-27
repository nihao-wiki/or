import { defineConfigWithTheme } from 'vitepress';
import type { UserConfig } from 'vitepress';
import type { DefaultTheme } from 'vitepress/theme';
import { fileURLToPath, URL } from 'node:url';
import { getLang, getLocalesRewrite, getHreflang, getLocales } from './utils';
import { title, hostname } from '../constants/meta';

export interface ThemeConfig extends DefaultTheme.Config {
  i18n: {
    [key: string]: string;
  };
}

export const defineConfig = (userConfig: UserConfig<ThemeConfig>): UserConfig<ThemeConfig> =>
  userConfig;

export default defineConfig({
  lang: getLang(),
  title,
  cleanUrls: true,
  appearance: false,
  locales: getLocales(),
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico', type: 'image/x-icon' }],
    ['link', { rel: 'shortcut icon', href: '/favicon.ico', type: 'image/x-icon' }],
    ['link', { rel: 'icon', href: '/favicon.png', type: 'image/png' }],
    // sync with .vitepress/theme/styles/overrides.css --vp-c-brand-1
    ['meta', { name: 'theme-color', content: '#0a5fde' }],
    ...getHreflang(),
  ],
  rewrites: getLocalesRewrite(),
  sitemap: { hostname },
  markdown: {
    image: {
      lazyLoading: true,
    },
  },
  themeConfig: {
    logo: { src: '/favicon.png', width: 24, height: 30 },
    outline: [2, 3],
    search: {
      provider: 'local',
    },
    footer: {
      copyright: `Copyright © ${new Date().getFullYear()} Oriental Road. All rights reserved.`,
    },
    notFound: {
      quote: `As a child, winding down from school, I delighted in choosing untraveled paths home, even if they led me through narrow alleys and dead ends. With time, the maze became familiar, and I no longer got lost.`,
    },
  },
  vite: {
    resolve: {
      alias: [
        {
          find: /^.*\/VPNavBarTranslations\.vue$/,
          replacement: fileURLToPath(
            new URL('../theme/components/overrides/VPNavBarTranslations.vue', import.meta.url)
          ),
        },
      ],
    },
  },
});
