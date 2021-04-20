/*
 * @lc app=leetcode.cn id=99 lang=javascript
 *
 * [99] 恢复二叉搜索树
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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var recoverTree = function (root) {
  function test(root, minNode, maxNode) {
    if (!root) return true
    let min = minNode ? minNode.val : -Infinity
    let max = maxNode ? maxNode.val : +Infinity
    if (root.val <= min) {
      let tmp = root.val
      root.val = minNode.val
      minNode.val = tmp
      return false
    }
    if (root.val >= max) {
      let tmp = root.val
      root.val = maxNode.val
      maxNode.val = tmp
      return false
    }
    return test(root.left, minNode, root) && test(root.right, root, maxNode)
  }
  while (!test(root)) {}
}
// @lc code=end

const root = {
  val: 2,
  left: {
    val: 3,
  },
  right: {
    val: 1,
  },
}
recoverTree(root)
console.log(root)
