export const lang = 'en-XX';
export const langRoot = 'en';

export const locales = {
  root: {
    label: 'English',
    lang: 'en-XX',
    region: 'International',
    redirectTemplate:
      'We noticed your browser language is set to English. Visit our :locale site for the best experience.',
  },
  ja: {
    label: '日本語',
    lang: 'ja-JP',
    region: '日本',
    redirectTemplate:
      'ブラウザの言語設定が 日本語 です。最良の体験のために、:locale サイトをご利用ください。',
  },
  // ko: { label: '한국어', lang: 'ko-KR' },
  // th: { label: 'ภาษาไทย', lang: 'th-TH' },
  // ms: { label: 'Bahasa Melayu', lang: 'ms-MY' },
};

export const currencies = {
  CNY: {
    name: 'Chinese Yuan',
    ratio: 1,
    unit: '¥',
  },
  EUR: {
    name: 'Euros',
    ratio: 0.13,
    unit: '€',
  },
  USD: {
    name: 'U.S. Dollars',
    ratio: 0.14,
    unit: '$',
  },
  GBP: {
    name: 'British Pounds',
    ratio: 0.11,
    unit: '£',
  },
  JPY: {
    name: 'Japanese Yen',
    ratio: 21.39,
    unit: '¥',
  },
  KRW: {
    name: 'South Korean Won',
    ratio: 194.9,
    unit: '₩',
  },
  THB: {
    name: 'Thai Baht',
    ratio: 4.73,
    unit: '฿',
  },
  MYR: {
    name: 'Malaysian Ringgit',
    ratio: 4.34,
    unit: 'RM',
  },
  SGD: {
    name: 'Singapore Dollars',
    ratio: 1.32,
    unit: '$',
  },
};
