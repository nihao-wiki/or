import { defineConfig } from '../.vitepress/config';

export default defineConfig({
  description:
    '中国へ行く予定ですか？旅行ガイド、目的地情報、そしてOriental Roadの現地の専門家からの体験アドバイスで、旅の計画を立ててインスピレーションを得ましょう。',
  titleTemplate: ':title | 中国旅行ガイド & アドバイス',
  themeConfig: {
    nav: [
      {
        text: '目的地',
        items: [],
      },
      {
        text: '旅程計画',
        items: [],
      },
      {
        text: 'インスピレーション',
        items: [],
      },
    ],
    i18n: {
      'Region and Language': '地域と言語',
      'Currency': '通貨',
      'Suggested region and language': '提案された地域と言語',
      'Choose a region and language': '地域と言語を選択',
      'Choose a currency': '通貨を選択',
    },
  },
});
