/**
 * 461. Hamming Distance
 * @see {@link https://leetcode-cn.com/problems/hamming-distance/}
 * @see {@link https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators}
 * @description
 * 两数按位异或，统计结果（二进制字符串）中 1 的个数
 */

/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
export function hammingDistance1(x, y) {
  let z2 = x ^ y
  let z2Arr = z2.split('')
  let result = 0
  for (let i = 0; i < z2Arr.length; i++) {
    result += parseInt(z2Arr[i])
  }
  return result
}

/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
export function hammingDistance(x, y) {
  return (x ^ y).toString(2).replace(/0/g, '').length
}
