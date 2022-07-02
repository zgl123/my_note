import { getSidebar } from './sidebar'
import { resolve } from 'path'
const Vue = [
  { text: 'vue源码', link: '/vue/source/' },
]

const React = [
  { text: 'react', link: '/react' },
]

const report = [
  
]

const DefaultSideBar = [{ text: 'Guide', items: Vue }]

const config = {
  lang: 'en-US',
  title: 'VitePress',
  description: 'Vite & Vue powered static site generator.',
  themeConfig: {
    editLinks: true,
    editLinkText: 'Edit this page',
    lastUpdated: 'Last Updated',
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2022-present FC'
    },
    nav: [
      {
        text: '前端',
        items: [
          { text: 'Vue', items: Vue },
          { text: 'React', items: React },
        ],
      },
      {
        text: '财务',
        items: [
          { text: '财报', link: '/report' },
        ],
      },
    ],
    sidebar: {
      '/guide/': DefaultSideBar,
      '/vue/source/': getSidebar('vue源码', resolve(__dirname, '../vue/source'), '/vue/source/')
    },
  },
}

export default config
