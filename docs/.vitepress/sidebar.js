import fs from 'fs-extra'
export function getSidebar(text, path, link) {
  const files = fs.readdirSync(path)
  const tmpSidebar = []
  files.forEach((item) => {
    if(item === 'index.md') return
    const tmp = {
      text: item,
      link: link + item
    }
    tmp.text = tmp.text.replace(/\.md/g, '')
    tmp.link = tmp.link.replace(/\.md/g, '.html')
    tmpSidebar.push(tmp)
  })
  const sidebar = [
    {text, items: tmpSidebar}
  ]
  return sidebar
}