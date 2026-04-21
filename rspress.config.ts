import { defineConfig } from '@rspress/core';

export default defineConfig({
  lang: 'zh',
  base: '/rspress-template/',
  title: '指南模板',
  icon: '/rspress-icon.png',
  route: {
    cleanUrls: true,
  },
  logo: {
    light: '/rspress-light-logo.png',
    dark: '/rspress-dark-logo.png',
  },
  locales: [
    {
      lang: 'en',
      label: 'English',
      title: 'Rspress',
      description: 'Static Site Generator',
    },
    {
      lang: 'zh',
      label: '简体中文',
      title: 'Rspress',
      description: '静态网站生成器',
    },
  ],
  themeConfig: {
    socialLinks: [
      {
        icon: 'github',
        mode: 'link',
        content: 'https://github.com/NiButCrazy/rspress-template',
      },
    ],
  },
});
