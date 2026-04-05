import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: '方块工坊',
  description: 'Minecraft 服务器实战博客，聚焦开服、联机与稳定运维。',
  head: [
    ['meta', { name: 'theme-color', content: '#5f8f2f' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    [
      'link',
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossorigin: ''
      }
    ],
    [
      'link',
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Ma+Shan+Zheng&family=Noto+Sans+SC:wght@400;500;700;900&family=JetBrains+Mono:wght@400;600&display=swap'
      }
    ]
  ],
  lastUpdated: true,
  themeConfig: {
    logo: '/images/mc-cube.svg',
    nav: [
      { text: '首页', link: '/' },
      { text: '教程', link: '/guide/' },
      { text: '开服实战', link: '/guide/minecraft-server' }
    ],
    sidebar: {
      '/guide/': [
        {
          text: '教程目录',
          items: [
            { text: 'Minecraft 开服教程', link: '/guide/minecraft-server' }
          ]
        }
      ]
    },
    search: {
      provider: 'local'
    },
    footer: {
      message:
        '<a href="https://beian.miit.gov.cn/" target="_blank" rel="noopener noreferrer" class="hover:text-secondary transition-colors">粤ICP备2024285635号</a>',
      copyright: 'Copyright © 2026'
    }
  }
})
