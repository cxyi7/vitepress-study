import { defineConfig } from 'vitepress'
import { createRequire } from 'module'

const require = createRequire(import.meta.url);
const pkg = require('vitepress/package.json');

// https://vitepress.vuejs.org/reference/site-config
export default defineConfig({
  base: 'vitepress-study',

  title: 'vitePress 中文网',
  description: 'vitePress 中文站点',

  lastUpdated: true,
  cleanUrls: true,

  head: [['meta',{ name: 'theme-color',content: '#3c8772' }]],

  themeConfig: {
    // https://vitepress.vuejs.org/reference/default-theme-config
    nav: nav(),

    sidebar: {
      '/guide/': sidebarGuide(),
      '/reference/': sidebarReference(),
    },

    editLink: {
      pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path',
      text: 'Edit this page on GitHub',
    },
  },
});

function nav() {
  return [
    { text: '导航',link: '/guide/what-is-vitepress',activeMatch: '/guide/' },
    {
      text: '参考',
      link: '/reference/site-config',
      activeMatch: '/reference/',
    },
    {
      text: pkg.version,
      items: [
        {
          text: '更新日志',
          link: 'https://github.com/vuejs/vitepress/blob/main/CHANGELOG.md',
        },
        {
          text: '捐助',
          link: 'https://github.com/vuejs/vitepress/blob/main/.github/contributing.md',
        },
      ],
    },
  ];
}

function sidebarGuide() {
  return [
    {
      text: '简介',
      collapsed: false,
      items: [
        { text: 'VitePress是啥',link: '/guide/what-is-vitepress' },
        { text: '入门',link: '/guide/getting-started' },
        { text: '路由',link: '/guide/routing' },
        { text: '部署',link: '/guide/deploy' },
      ],
    },
    {
      text: '编程',
      collapsed: false,
      items: [
        { text: 'Markdown拓展',link: '/guide/markdown' },
        { text: '资源处理',link: '/guide/asset-handling' },
        { text: '格式化',link: '/guide/frontmatter' },
        { text: 'Markdown中使用vue',link: '/guide/using-vue' },
        { text: '国际化',link: '/guide/i18n' },
      ],
    },
    {
      text: '定制',
      collapsed: false,
      items: [
        { text: '使用自定义主题',link: '/guide/custom-theme' },
        {
          text: '拓展默认主题',
          link: '/guide/extending-default-theme',
        },
        { text: 'Build-Time Data Loading',link: '/guide/data-loading' },
        { text: 'Connecting to a CMS',link: '/guide/cms' },
      ],
    },
    {
      text: 'Experimental',
      collapsed: false,
      items: [
        {
          text: 'MPA Mode',
          link: '/guide/mpa-mode',
        },
      ],
    },
    // {
    //   text: 'Migrations',
    //   collapsed: false,
    //   items: [
    //     {
    //       text: 'Migration from VuePress',
    //       link: '/guide/migration-from-vuepress'
    //     },
    //     {
    //       text: 'Migration from VitePress 0.x',
    //       link: '/guide/migration-from-vitepress-0'
    //     }
    //   ]
    // },
    {
      text: 'Config & API Reference',
      link: '/reference/site-config',
    },
  ];
}

function sidebarReference() {
  return [
    {
      text: 'Reference',
      items: [
        { text: 'Site Config',link: '/reference/site-config' },
        { text: 'Frontmatter Config',link: '/reference/frontmatter-config' },
        { text: 'Runtime API',link: '/reference/runtime-api' },
        { text: 'CLI',link: '/reference/cli' },
        {
          text: 'Default Theme',
          items: [
            {
              text: 'Overview',
              link: '/reference/default-theme-config',
            },
            {
              text: 'Nav',
              link: '/reference/default-theme-nav',
            },
            {
              text: 'Sidebar',
              link: '/reference/default-theme-sidebar',
            },
            {
              text: 'Home Page',
              link: '/reference/default-theme-home-page',
            },
            {
              text: 'Footer',
              link: '/reference/default-theme-footer',
            },
            {
              text: 'Layout',
              link: '/reference/default-theme-layout',
            },
            {
              text: 'Badge',
              link: '/reference/default-theme-badge',
            },
            {
              text: 'Team Page',
              link: '/reference/default-theme-team-page',
            },
            {
              text: 'Prev / Next Links',
              link: '/reference/default-theme-prev-next-links',
            },
            {
              text: 'Edit Link',
              link: '/reference/default-theme-edit-link',
            },
            {
              text: 'Last Updated Timestamp',
              link: '/reference/default-theme-last-updated',
            },
            {
              text: 'Algolia Search',
              link: '/reference/default-theme-search',
            },
            {
              text: 'Carbon Ads',
              link: '/reference/default-theme-carbon-ads',
            },
          ],
        },
      ],
    },
  ];
}

