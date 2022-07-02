import type { Plugin } from 'vite'
export function MarkdownTransform(): Plugin {
  return {
    name: 'vueuse-md-transform',
    enforce: 'pre',
    async transform(code, id) {
      if (!id.endsWith('.md')) return null
      console.log(code)
      const [pkg, name, i] = id.split('/').slice(-3)
      return code
    },
  }
}
