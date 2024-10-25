import { type DefaultTheme } from 'vitepress';
import { destination } from './destinations';

function sidebarGuide(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Guide',
      items: [
        {
          text: 'Visa Strategies',
          link: 'visa',
        },
        {
          text: 'Best Seasons',
          link: 'seasons',
        },
        {
          text: 'Scan-to-Pay',
          link: 'paying',
        },
        {
          text: 'Mobile & Apps',
          link: 'communication',
        },
        {
          text: 'Safety Tips',
          link: 'safety',
        },
        {
          text: 'Regional Tastes',
          link: 'cuisine',
        },
      ],
    },
    {
      text: 'Transportation',
      items: [
        {
          text: 'High-Speed Train',
          link: 'train',
        },
      ],
    },
    {
      text: 'Destination',
      items: destination.map(({link, ...dest}) => {
        return {
          link: '..' + link,
          ...dest,
        };
      }),
    },
    {
      text: 'Wonders',
      items: [
        {
          text: 'Snow Mountains',
          link: 'snowmountains',
        },
      ],
    },
  ];
}

function sidebarChongqing(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Chongqing',
      items: [
        { text: 'Overview', link: 'impressions' },
        { text: 'Visa Requirements', link: 'visa-free' },
        {
          text: 'Must-see Attractions',
          items: [
            { text: '8D Cyberpunk', link: 'cityscape' },
            { text: 'Panda, Zoo', link: 'panda' },
          ],
        },
        { text: 'Religious Cultural', link: 'culture' },
        {
          text: 'Rural Attractions',
          items: [
            { text: 'Dazu Rock Carvings', link: 'dazu' },
            { text: 'Three Gorges', link: 'three-gorges' },
            { text: 'Fishing City', link: 'hechuan' },
            { text: 'Wulong Karst', link: 'wulong' },
          ],
        },
        {
          text: 'Must-eat Cuisine',
          base: '/chongqing/cuisine/',
          items: [
            { text: 'Noodles', link: 'noodles' },
            { text: 'Hot Pot', link: 'hot-pot' },
            { text: 'Street Food', link: 'street-food' },
            { text: 'Jianghu Cuisine', link: 'jianghu-cuisine' },
            { text: 'Sichuan Cuisine', link: 'sichuan-cuisine' },
            { text: 'Breakfast', link: 'breakfast' },
          ],
        },
      ],
    },
  ];
}

function sidebarYunnan(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Kunming',
      items: [
        { text: 'Overview', link: 'kunming/impressions' },
        { text: 'Kunming Lake', link: 'kunming/lake' },
        { text: 'Minority Cultures', link: 'kunming/minority' },
      ],
    },
    {
      text: 'Dali',
      items: [
        { text: 'Overview', link: 'dali/impressions' },
        { text: 'Around Erhai Lake', link: 'dali/erhai' },
      ],
    },
    {
      text: 'Lijiang',
      items: [
        { text: 'Overview', link: 'lijiang/impressions' },
        { text: 'Ancient Towns', link: 'lijiang/ancient' },
        { text: 'Alpine Wonders', link: 'lijiang/wonders' },
      ],
    },
    {
      text: 'Xishuangbanna',
      items: [{ text: 'Overview', link: 'xishuangbanna/impressions' }],
    },
    {
      text: 'Cuisine',
      items: [
        { text: '"Intoxicating" Mushroom', link: 'cuisine/mushroom' },
        { text: 'Crossing Bridge Noddles', link: 'cuisine/crossingbridge' },
        { text: 'Flowers', link: 'cuisine/flowercake' },
      ],
    },
  ];
}

function sidebarHainan(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Haikou',
      items: [{ text: 'Overview', link: 'haikou/impressions' }],
    },
    {
      text: 'Sanya',
      items: [
        { text: 'Overview', link: 'sanya/impressions' },
        { text: 'Coastline Experience', link: 'sanya/coastline' },
      ],
    },
  ];
}

function sidebarQingdao(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Qingdao',
      items: [
        { text: 'Overview', link: 'impressions' },
        {
          text: 'Cuisine',
          items: [
            { text: 'Tsingtao Beer', link: 'beer' },
            { text: 'Dumplings', link: 'dumplings' },
            { text: 'Seafood', link: 'seafood' },
          ],
        },
      ],
    },
  ];
}

function sidebarSichuan(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Chengdu',
      items: [
        { text: 'Overview', link: 'chengdu/impressions' },
        { text: 'Panda Base', link: 'chengdu/panda' },
        { text: 'Spicy Cuisine', link: 'chengdu/cuisine' },
      ],
    },
    {
      text: 'Sichuan',
      items: [{ text: 'Qingcheng Mountain', link: 'qingchengshan' }],
    },
    {
      text: 'Western Sichuan',
      items: [],
    },
  ];
}

function sidebarBeijing(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Beijing',
      items: [
        { text: 'Overview', link: 'impressions' },
        { text: 'Imperial Traces', link: 'imperial' },
        { text: 'Halal Culture', link: 'halal' },
      ],
    },
  ];
}

function sidebarNanjing(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Nanjing',
      items: [
        { text: 'Overview', link: 'impressions' },
        { text: 'Cuisine', link: 'cuisine' },
      ],
    },
  ];
}

function sidebarShanghai(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Shanghai',
      items: [{ text: 'Overview', link: 'impressions' }],
    },
  ];
}

function sidebarHangzhou(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Hangzhou',
      items: [{ text: 'Overview', link: 'impressions' }],
    },
  ];
}

export default {
  '/guide/': { base: '/guide/', items: sidebarGuide() },
  '/chongqing/': { base: '/chongqing/', items: sidebarChongqing() },
  '/yunnan/': { base: '/yunnan/', items: sidebarYunnan() },
  '/hainan/': { base: '/hainan/', items: sidebarHainan() },
  '/qingdao/': { base: '/qingdao/', items: sidebarQingdao() },
  '/sichuan/': { base: '/sichuan/', items: sidebarSichuan() },
  '/beijing/': { base: '/beijing/', items: sidebarBeijing() },
  '/nanjing/': { base: '/nanjing/', items: sidebarNanjing() },
  '/shanghai/': { base: '/shanghai/', items: sidebarShanghai() },
  '/hangzhou/': { base: '/hangzhou/', items: sidebarHangzhou() },
};
