import { type DefaultTheme } from 'vitepress';

export const destination: DefaultTheme.NavItemWithLink[] = [];

// export const srcExclude =
//   process.env.NODE_ENV === 'development'
//     ? []
//     : allDestination
//         .filter((dest) => dest.WIP)
//         .map((dest) => '*' + dest.link.split('/').slice(0, -1).join('/') + '/*');
