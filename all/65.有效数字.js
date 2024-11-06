/*
 * @lc app=leetcode.cn id=65 lang=javascript
 *
 * [65] 有效数字
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function (s) {
  const stack = []
  const canUseStr = ['.', '+', '-', 'e', 'E']
  let preStr = ''
  if (s.toLocaleLowerCase().split('e').length > 2) {
    return false
  }
  for (let i = 0; i < s.length; i++) {
    const current = s[i]
    const isnum = isNumberStr(current)
    if (!isnum && canUseStr.indexOf(current) < 0) {
      return false
    }
    switch (current) {
      case '.':
        if (preStr == '.' || preStr == 'e' || preStr == 'E') {
          return false
        }
        stack.push((stack.pop() || '') + current)
        break
      case 'e':
      case 'E':
        if (preStr == '+' || preStr == '-' || i == s.length - 1) {
          return false
        }
        stack.push(current)
        break
      case '-':
      case '+':
        if (preStr == '-' || preStr == '+' || preStr == '.' || isNumberStr(preStr) || i == s.length - 1) {
          return false
        }
        stack.push(current)
        break
      default:
        if (preStr == 'e' || preStr == 'E') {
          stack.push(current)
        } else {
          stack.push((stack.pop() || '') + current)
        }
    }
    preStr = current
  }
  console.log(stack)
  for (let i = 0; i < stack.length; i++) {
    if (stack[i].split('.').length > 2) {
      return false
    }
    if (stack[i].startsWith('+') || stack[i].startsWith('-')) {
      stack[i] = stack[i].substring(1)
    }
    if (stack[i] == '.') {
      return false
    }
    if (stack[i] == 'e' || stack[i] == 'E') {
      if (!stack[i - 1] || !stack[i + 1]) {
        return false
      }
      if (isNaN(Number(stack[i - 1]))) {
        return false
      }
      if (isNaN(Number(stack[i + 1])) || stack[i + 1].indexOf('.') > -1) {
        return false
      }
    }
    if (stack[i].startsWith('.')) {
      stack[i] = '0' + stack[i]
    }
    if (stack[i][stack[i].length - 1] == '.') {
      stack[i] = stack[i].substring(0, stack[i].length - 1)
    }
    if (stack[i] != 'e' && stack[i] != 'E' && !isNumberStr(stack[i])) {
      return false
    }
  }
  console.log(stack)

  return true
}

//判断是否是纯数字
function isNumberStr(str) {
  return /\d/.test(str)
}

// @lc code=end

// const data1 = ['2', '0089', '-0.1', '+3.14', '4.', '-.9', '2e10', '-90E3', '3e+7', '+6e-1', '53.5e93', '-123.456e789']
// data1.forEach((item) => {
//   console.log(isNumber(item))
// })

const data2 = ['abc', '1a', '1e', 'e3', '99e2.5', '--6', '2e0', '6.3.0', '.1.', '.44.8', '+.', '4e3.', '92e1740e91']
data2.forEach((item) => {
  console.log(isNumber(item))
})
