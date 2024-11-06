/*
 * @lc app=leetcode.cn id=68 lang=javascript
 *
 * [68] 文本左右对齐
 */

// @lc code=start
/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function (words, maxWidth) {
  const resList = []
  let line = [],
    lineLen = 0
  for (let i = 0; i < words.length; i++) {
    const wordItme = words[i]
    const nowLen = lineLen + wordItme.length + line.length
    if (nowLen > maxWidth) {
      resList.push(createLineStr(line, lineLen, maxWidth))
      line = []
      lineLen = 0
    }
    line.push(wordItme)
    lineLen = lineLen + wordItme.length
  }
  if (line.length > 0) {
    let str = line.join(' ')
    if (maxWidth - str.length > 0) {
      str += ' '.repeat(maxWidth - str.length)
    }
    resList.push(str)
  }
  return resList
}

const createLineStr = (line, len, maxWidth) => {
  if (line.length < 1) {
    return ''
  }
  if (len + line.length - 1 == maxWidth) {
    return line.join(' ')
  }
  if (line.length == 1) {
    return line[0] + ' '.repeat(maxWidth - len)
  }
  const count = Math.floor((maxWidth - len) / (line.length - 1))
  const rest = (maxWidth - len) % (line.length - 1)
  if (rest == 0) {
    return line.join(' '.repeat(count))
  } else {
    let res = ''
    for (let i = 0; i < line.length; i++) {
      res += line[i]
      if (i != line.length - 1) {
        if (i < rest) {
          res += ' '.repeat(count + 1)
        } else {
          res += ' '.repeat(count)
        }
      }
    }
    return res
  }
}
// @lc code=end
