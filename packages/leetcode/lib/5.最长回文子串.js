/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  function test(str) {
    let len = str.length
    let max = Math.floor(len / 2)
    for (let i = 0; i < max; i++) {
      if (str[i] !== str[len - i - 1]) return ''
    }
    return str
  }

  let res = ''
  for (let i = 0; i < s.length; i++) {
    for (let j = s.length - 1; j >= i; j--) {
      if (j - i + 1 <= res.length) break
      let tmp = test(s.slice(i, j + 1))
      res = tmp.length > res.length ? tmp : res
    }
  }

  return res
}
// @lc code=end

// console.log(longestPalindrome('abcd'))
// console.log(longestPalindrome(''))
// console.log(longestPalindrome('abcdabcd'))
// console.log(longestPalindrome('abccbacd'))
