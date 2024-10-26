import { defineConfig } from 'vitepress';
import { fileURLToPath, URL } from 'node:url';
import { getLocaleDefinition } from './utils';

const { hostname, ...configs } = getLocaleDefinition();

export default defineConfig({
  ...configs,
  title: 'Oriental Road',
  cleanUrls: true,
  appearance: false,
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico', type: 'image/x-icon' }],
    ['link', { rel: 'shortcut icon', href: '/favicon.ico', type: 'image/x-icon' }],
    ['link', { rel: 'icon', href: '/favicon.png', type: 'image/png' }],
    ['meta', { name: 'theme-color', content: '#3c8772' }],
  ],
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
  },
  vite: {
    resolve: {
      alias: [
        {
          find: /^.*\/VPFooter\.vue$/,
          replacement: fileURLToPath(new URL('../theme/components/VPFooter.vue', import.meta.url)),
        },
      ],
    },
  },
});
