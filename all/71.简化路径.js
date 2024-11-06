/*
 * @lc app=leetcode.cn id=71 lang=javascript
 *
 * [71] 简化路径
 */

// @lc code=start
/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
  // 使用正则表达式将两个或更多的连续的 '/' 替换成一个 '/'
  let pathSimplify = path.replace(/\/+/g, '/')
  // 把最后一个/删了
  pathSimplify = pathSimplify.replace(/([a-zA-Z])\/$/, '$1')
  if (pathSimplify.indexOf('.') < 0) {
    return pathSimplify
  }
  const pathList = pathSimplify.split('/')
  const res = []
  for (let i = 0; i < pathList.length; i++) {
    const current = pathList[i]
    if (current === '.') {
      continue
    } else if (current === '..') {
      if (!res.length) {
        res.push('')
      } else if (res[res.length - 1] === '') {
        continue
      } else {
        res.pop()
      }
    } else {
      res.push(current)
    }
  }

  if (res.length > 0 && (res[res.length - 1] === '/' || res[res.length - 1] === '')) {
    res.pop()
  }
  return res.join('/') || '/'
}
// @lc code=end

const testList = ['/home/', '/home//foo/', '/home/user/Documents/../Pictures', '/../', '/.../a/../b/c/../d/./', '/.', '/.../']

testList.forEach((element) => {
  console.log(simplifyPath(element))
})
