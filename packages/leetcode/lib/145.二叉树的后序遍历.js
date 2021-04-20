/*
 * @lc app=leetcode.cn id=145 lang=javascript
 *
 * [145] 二叉树的后序遍历
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
 * @return {number[]}
 */
var postorderTraversal = function (root) {
  const stack = []
  const res = []
  while (root || stack.length) {
    if (root) {
      stack.push(root)
      res.unshift(root.val)
      root = root.right
    } else {
      root = stack.pop()
      root = root.left
    }
  }
  return res
}
// @lc code=end

var postorderTraversal2 = function (root) {
  if (!root) return []
  const left = postorderTraversal2(root.left)
  const right = postorderTraversal2(root.right)
  return left.concat(right).concat([root.val])
}
