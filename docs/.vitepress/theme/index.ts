import { h } from 'vue';
import defaultTheme from 'vitepress/theme';
import type { Theme } from 'vitepress';
import LayoutPlaces from './layouts/Places.vue';
import TopNotificationBar from './components/TopNotificationBar.vue';
import './styles/index.css';

export default {
  ...defaultTheme,
  enhanceApp({ app }) {
    // layouts
    app.component('places', LayoutPlaces);
  },
  Layout() {
    return h(defaultTheme.Layout, null, {
      'layout-top': () => h(TopNotificationBar),
      // 'home-hero-image': () => h(HomeHeroImage),
      // 'home-hero-after': () => h(Latest),
      // 'doc-footer-before': () => h(References),
      // 'aside-ads-before': () => h(Ads),
      // 'nav-bar-content-after': () => h(CurrencyBar),
      // 'nav-screen-content-after': () => h(CurrencyScreen),
    });
  },
} satisfies Theme;
