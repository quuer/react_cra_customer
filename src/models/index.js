// const files = require.context('./', false, /\.js$/)//批量读取模块文件
// console.log(files('./index.js'), files.keys().filter(i => i !== './index.js'))
// const modules = {}
// files.keys().filter(i => i !== './index.js').forEach((path, about) => {
//   const name = path.replace(/^\.\/(.*)\.js$/, '$1')
//   const module = files(path)
//   modules[name] = module.default
//   console.log(name, module, 333)
// })

const files = require.context('./', false, /\.js$/)
const modules = {}
files.keys().forEach(key => {
  if (key === './index.js') return
  modules[key.replace(/(\.\/|\.js)/g, '')] = files(key).default
})
export default modules

