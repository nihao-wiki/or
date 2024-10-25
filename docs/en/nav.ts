import { type DefaultTheme } from 'vitepress';
import { destination } from './destinations';

export function nav(): DefaultTheme.NavItem[] {
  return [
    {
      text: 'Guide',
      link: '/guide/visa',
      activeMatch: '/guide/',
    },
    {
      text: 'Destinations',
      items: destination,
    },
    // {
    //   component: 'NavReddit',
    //   props: {
    //     text: 'Community',
    //     link: 'https://www.reddit.com/r/nihaowiki/',
    //   },
    // },
  ];
}
