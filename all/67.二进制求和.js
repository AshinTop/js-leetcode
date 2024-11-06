/*
 * @lc app=leetcode.cn id=67 lang=javascript
 *
 * [67] 二进制求和
 */

// @lc code=start
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  const alist = a.split('')
  const blist = b.split('')
  const res = []
  let prev = 0,
    aCurrent = alist.pop(),
    bCurrent = blist.pop()
  while (aCurrent != undefined || bCurrent != undefined) {
    aCurrent = aCurrent ? Number(aCurrent) : 0
    bCurrent = bCurrent ? Number(bCurrent) : 0
    const count = aCurrent + bCurrent + prev
    res.unshift(count % 2)
    prev = Math.floor(count / 2)
    aCurrent = alist.pop()
    bCurrent = blist.pop()
  }
  if (prev) {
    res.unshift(prev)
  }
  return res.join('')
}
// @lc code=end
