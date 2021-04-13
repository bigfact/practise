/*
 * @lc app=leetcode.cn id=103 lang=javascript
 *
 * [103] 二叉树的锯齿形层序遍历
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function (root) {
  const res = []
  const queue = [root]
  while (queue.length) {
    let level = []
    let len = queue.length
    for (let i = 0; i < len; i++) {
      let node = queue.shift()
      if (node) {
        if (res.length % 2 === 0) {
          level.push(node.val)
        } else {
          level.unshift(node.val)
        }
        if (node.left) queue.push(node.left)
        if (node.right) queue.push(node.right)
      }
    }
    if (level.length) res.push(level)
  }
  return res
}
// @lc code=end
