import { type DefaultTheme } from 'vitepress';
import { destination } from './destinations';

export function bottomNav(): DefaultTheme.NavItem[] {
  return [
    {
      text: 'Top Destination',
      items: destination,
    },
    {
      text: 'Guide',
      items: [
        {
          text: 'Visa',
          link: '/guide/visa',
        },
        {
          text: 'Best Seasons',
          link: '/guide/seasons',
        },
        {
          text: 'Scan-to-Pay',
          link: '/guide/paying',
        },
        {
          text: 'Mobile & Apps',
          link: '/guide/communication',
        },
        {
          text: 'Safety Tips',
          link: '/guide/safety',
        },
      ],
    },
    {
      text: 'About',
      items: [
        {
          text: 'About Us',
          link: '/about',
        },
        {
          text: 'Privacy Policy',
          link: '/privacy',
        },
      ],
    },
  ];
}
