/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层序遍历
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
var levelOrder = function (root) {
  const res = []
  const queue = [root]
  while (queue.length) {
    let len = queue.length
    let level = []
    for (let i = 0; i < len; i++) {
      let node = queue.shift()
      if (node) {
        level.push(node.val)
        if (node.left) queue.push(node.left)
        if (node.right) queue.push(node.right)
      }
    }
    if (level.length) res.push(level)
  }
  return res
}
// @lc code=end

var levelOrder2 = function (root) {
  function test(nodes) {
    let res = []
    let level = []
    let nextNodes = []
    for (let i = 0; i < nodes.length; i++) {
      let node = nodes[i]
      if (node) {
        level.push(node.val)
        if (node.left) nextNodes.push(node.left)
        if (node.right) nextNodes.push(node.right)
      }
    }
    if (level.length) res.push(level)
    if (nextNodes.length) res = res.concat(test(nextNodes))
    return res
  }
  return test([root])
}
