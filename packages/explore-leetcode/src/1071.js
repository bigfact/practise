/**
 * 1071. 字符串的最大公因子
 * @see {@link https://leetcode-cn.com/problems/greatest-common-divisor-of-strings/}
 */

/**
 * 从最长子字符串开始递减，每次截取字符串构造正则进行匹配，都匹配成功则返回此次截取的字符串 (性能差)
 * @param {String} str1
 * @param {String} str2
 * @return {String}
 */
export function gcdOfStrings(str1, str2) {
  for (let i = str1.length; i > 0; i--) {
    let subStr = str1.substr(0, i)
    let reg = new RegExp(`^(${subStr})+$`)
    if (reg.test(str1) && reg.test(str2)) return subStr
  }
  return ''
}

/**
 * 官网数学解法，最大公约数法
 * @param {String} str1
 * @param {String} str2
 * @return {String}
 */
export function gcdOfStrings1(str1, str2) {
  if (str1 + str2 !== str2 + str1) return ''
  function gcd(a, b) {
    return b === 0 ? a : gcd(b, a % b)
  }
  return str1.substr(0, gcd(str1.length, str2.length))
}
