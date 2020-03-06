/**
 * 1104、二叉树寻路
 * @see {@link https://leetcode-cn.com/problems/path-in-zigzag-labelled-binary-tree/}
 */

/**
 * @param {number} label
 * @return {number[]}
 */
export function pathInZigZagTree(label) {
  let level = 1
  while (label >= Math.pow(2, level)) {
    level++
  }
  const result = [label]
  let labelTmp = label
  while (labelTmp > 1) {
    let labelCount = Math.pow(2, level - 1)
    let labelPosition = labelTmp - labelCount
    let parentPosition = Math.floor(labelPosition / 2)
    labelTmp = labelCount - 1 - parentPosition
    level--
    result.unshift(labelTmp)
  }
  return result
}
