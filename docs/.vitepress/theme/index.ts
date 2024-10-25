import { h } from 'vue';
import defaultTheme from 'vitepress/theme';
import type { Theme } from 'vitepress';
import HomeHeroImage from './components/HomeHeroImage.vue';
import References from './components/References.vue';
import Flex from './components/Flex.vue';
import Speech from './components/Speech.vue';
import Map from './components/Map/index.vue';
import YouTube from './components/YouTube.vue';
import Weekdays from './components/Weekdays.vue';
import NavReddit from './components/NavReddit.vue';
// import Ads from './components/Ads.vue';
import Chinese from './components/Chinese.vue';
import Navigation from './components/Navigation.vue';
import CNY from './components/CNY.vue';
import CurrencyBar from './components/CurrencyBar.vue';
import CurrencyScreen from './components/CurrencyScreen.vue';
import Latest from './components/Latest.vue';
import Description from './components/Description.vue';
import Blog from './layouts/Blog.vue';
import './styles/index.css';

export default {
  ...defaultTheme,
  enhanceApp({ app }) {
    app.component('Flex', Flex);
    app.component('Speech', Speech);
    app.component('Map', Map);
    app.component('YouTube', YouTube);
    app.component('Weekdays', Weekdays);
    app.component('NavReddit', NavReddit);
    app.component('Chinese', Chinese);
    app.component('CNY', CNY);
    app.component('Description', Description);
    app.component('Navigation', Navigation);
    app.component('blog', Blog);
  },
  Layout() {
    return h(defaultTheme.Layout, null, {
      'home-hero-image': () => h(HomeHeroImage),
      'home-hero-after': () => h(Latest),
      'doc-footer-before': () => h(References),
      // 'aside-ads-before': () => h(Ads),
      'nav-bar-content-after': () => h(CurrencyBar),
      'nav-screen-content-after': () => h(CurrencyScreen),
    });
  },
} satisfies Theme;
