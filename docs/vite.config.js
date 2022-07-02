import { resolve } from 'path'
import { MarkdownTransform } from './.vitepress/plugins/markdownTransform'
import { defineConfig } from 'vite'

export default defineConfig(async () => {
  return {
    server: {
      hmr: {
        overlay: false,
      },
      fs: {
        allow: [resolve(__dirname, '..')],
      },
    },
    // plugins: [
    //   // custom
    //   MarkdownTransform(),
    // ],
  }
})
