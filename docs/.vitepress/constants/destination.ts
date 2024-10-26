export interface Destination {
  name: string;
  province: string;
  staying72144?: string;
  youtubeRank?: number;
}

export interface Destinations {
  [name: string]: Destination;
}

export const destinations: Destination[] = [
  {
    name: 'Beijing',
    province: 'Beijing',
    staying72144: 'Beijing Municipality, Tianjin Municipality, Hebei Province',
    youtubeRank: 7,
  },
  {
    name: 'Tianjin',
    province: 'Tianjin',
    staying72144: 'Beijing Municipality, Tianjin Municipality, Hebei Province',
    youtubeRank: 17,
  },
  {
    name: 'Shijiazhuang',
    province: 'Hebei',
    staying72144: 'Beijing Municipality, Tianjin Municipality, Hebei Province',
  },
  {
    name: 'Qinghuangdao',
    province: 'Hebei',
    staying72144: 'Beijing Municipality, Tianjin Municipality, Hebei Province',
  },
  {
    name: 'Shanghai',
    province: 'Shanghai',
    staying72144: 'Shanghai Municipality, Jiangsu Province, Zhejiang Province',
    youtubeRank: 1,
  },
  {
    name: 'Nanjing',
    province: 'Jiangsu',
    staying72144: 'Shanghai Municipality, Jiangsu Province, Zhejiang Province',
    youtubeRank: 14,
  },
  {
    name: 'Lianyungang',
    province: 'Jiangsu',
    staying72144: 'Shanghai Municipality, Jiangsu Province, Zhejiang Province',
  },
  {
    name: 'Suzhou',
    province: 'Jiangsu',
    staying72144: 'Shanghai Municipality, Jiangsu Province, Zhejiang Province',
    youtubeRank: 11,
  },
  {
    name: 'Hangzhou',
    province: 'Zhejiang',
    staying72144: 'Shanghai Municipality, Jiangsu Province, Zhejiang Province',
    youtubeRank: 20,
  },
  {
    name: 'Ningbo',
    province: 'Zhejiang',
    staying72144: 'Shanghai Municipality, Jiangsu Province, Zhejiang Province',
  },
  {
    name: 'Wenzhou',
    province: 'Zhejiang',
    staying72144: 'Shanghai Municipality, Jiangsu Province, Zhejiang Province',
  },
  {
    name: 'Zhoushan',
    province: 'Zhejiang',
    staying72144: 'Shanghai Municipality, Jiangsu Province, Zhejiang Province',
  },
  {
    name: 'Guangzhou',
    province: 'Guangdong',
    staying72144: 'Guangdong Province',
    youtubeRank: 6,
  },
  {
    name: 'Shenzhen',
    province: 'Guangdong',
    staying72144: 'Guangdong Province',
    youtubeRank: 4,
  },
  {
    name: 'Shantou',
    province: 'Guangdong',
    staying72144: 'Guangdong Province',
  },
  {
    name: 'Chengdu',
    province: 'Sichuan',
    staying72144:
      "Chengdu, Leshan, Deyang, Suining, Meishan, Ya'an, Ziyang, Neijiang, Zigong, Luzhou, Yibin",
    youtubeRank: 16,
  },
  {
    name: 'Chongqing',
    province: 'Chongqing',
    staying72144:
      "Chengdu, Leshan, Deyang, Suining, Meishan, Ya'an, Ziyang, Neijiang, Zigong, Luzhou, Yibin",
    youtubeRank: 2,
  },
  {
    name: 'Kunming',
    province: 'Yunnan',
    staying72144: "Kunming, Lijiang, Yuxi, Pu'er, Chuxiong, Dali, Xishuangbanna, Honghe, Wenshan",
  },
  {
    name: 'Lijiang',
    province: 'Yunnan',
    staying72144: "Kunming, Lijiang, Yuxi, Pu'er, Chuxiong, Dali, Xishuangbanna, Honghe, Wenshan",
    youtubeRank: 13,
  },
  {
    name: 'Dali',
    province: 'Yunnan',
    staying72144: "Kunming, Lijiang, Yuxi, Pu'er, Chuxiong, Dali, Xishuangbanna, Honghe, Wenshan",
    youtubeRank: 15,
  },
  {
    name: 'Xiamen',
    province: 'Fujian',
    staying72144: 'Xiamen',
    youtubeRank: 10,
  },
  {
    name: "Xi'an",
    province: 'Shanxi',
    staying72144: "Xi'an and Xianyang",
    youtubeRank: 19,
  },
  {
    name: 'Wuhan',
    province: 'Hubei',
    staying72144: 'Wuhan',
    youtubeRank: 9,
  },
  {
    name: 'Changsha',
    province: 'Hunan',
    youtubeRank: 18,
  },
  {
    name: 'Qingdao',
    province: 'Shandong',
    staying72144: 'Shandong Province',
    youtubeRank: 12,
  },
  {
    name: 'Sanya',
    province: 'Hainan',
  },
  {
    name: 'Zhangjiajie',
    province: 'Hebei',
    youtubeRank: 3,
  },
  {
    name: 'Dalian',
    province: 'Liaoning',
    youtubeRank: 5,
  },
  {
    name: 'Harbin',
    province: 'Heilongjiang',
    youtubeRank: 8,
  },
];
