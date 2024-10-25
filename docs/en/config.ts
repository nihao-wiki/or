import { defineConfig } from 'vitepress';
import { nav } from './nav';
import { bottomNav } from './bottom-nav';
import sidebar from './sidebar';

export default defineConfig({
  description:
    'Going to China? Get inspired, plan your trip with travel guides, destination information, and experience tips from local experts on Oriental Road.',
  themeConfig: {
    nav: nav(),
    // @ts-ignore
    bottomNav: bottomNav(),
    outlineTitle: 'On this page',
    sidebar,
    notFound: {
      quote: `As a child, winding down from school, I delighted in choosing untraveled paths home, even if they led me through narrow alleys and dead ends. With time, the maze became familiar, and I no longer got lost.`,
    },
  },
});
