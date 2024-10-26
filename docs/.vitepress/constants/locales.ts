export const lang = 'en-XX';
export const langRoot = 'en';

export const locales = {
  root: { label: 'English', lang: 'en-XX', redirectTemplate: 'We noticed your browser language is set to English. Visit our :locale site for the best experience.' },
  ja: { label: '日本語', lang: 'ja-JP', redirectTemplate: 'ブラウザの言語設定が 日本語 です。最良の体験のために、:locale サイトをご利用ください。' },
  // ko: { label: '한국어', lang: 'ko-KR' },
  // th: { label: 'ภาษาไทย', lang: 'th-TH' },
  // ms: { label: 'Bahasa Melayu', lang: 'ms-MY' },
};

export const currencies = {
  CNY: {
    ratio: 1,
    unit: '¥',
  },
  EUR: {
    ratio: 0.13,
    unit: '€',
  },
  USD: {
    ratio: 0.14,
    unit: '$',
  },
  GPB: {
    ratio: 0.11,
    unit: '£',
  },
  JPY: {
    ratio: 21.39,
    unit: '¥',
  },
  KRW: {
    ratio: 194.9,
    unit: '₩',
  },
  THB: {
    ratio: 4.73,
    unit: '฿',
  },
  MYR: {
    ratio: 4.34,
    unit: 'RM',
  },
};
