/*
 * @lc app=leetcode.cn id=6 lang=javascript
 *
 * [6] Z 字形变换
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  const res = []
  let flag = false
  for (let i = 0, j = 0; i < s.length; i++) {
    res[j] = res[j] || ''
    res[j] += s[i]
    if ((j >= numRows - 1 || flag) && j > 0) {
      flag = true
      j--
    } else {
      flag = false
      j++
      if (j > numRows - 1) j = numRows - 1
    }
  }
  // console.log(res, res.join(''))
  return res.join('')
}
// @lc code=end

// console.log(convert('PAYPALISHIRING', 3) === 'PAHNAPLSIIGYIR')
// console.log(convert('PAYPALISHIRING', 4) === 'PINALSIGYAHRPI')
// console.log(convert('A', 1) === 'A')
// console.log(convert('ABC', 1) === 'ABC')
// console.log(convert('ABCD', 1) === 'ABCD')
