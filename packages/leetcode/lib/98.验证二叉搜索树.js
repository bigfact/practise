/*
 * @lc app=leetcode.cn id=98 lang=javascript
 *
 * [98] 验证二叉搜索树
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
 * @return {boolean}
 */
var isValidBST = function (root, min = null, max = null) {
  function test(root, min, max) {
    if (!root) return true
    if (root.val <= min || root.val >= max) return false
    return test(root.left, min, root.val) && test(root.right, root.val, max)
  }
  return test(root, -Infinity, Infinity)
}
// @lc code=end

var isValidBST2 = function (root) {
  function getChildrenVal(root) {
    const res = []
    const stack = []
    while (root || stack.length) {
      if (root) {
        stack.push(root)
        res.push(root.val)
        root = root.left
      } else {
        root = stack.pop()
        root = root.right
      }
    }
    return res
  }

  if (!root) return true
  if (!isValidBST2(root.left)) return false
  if (!isValidBST2(root.right)) return false
  let isInvalidLeft = getChildrenVal(root.left).some((el) => {
    return el >= root.val
  })
  if (isInvalidLeft) return false
  let isInvalidRight = getChildrenVal(root.right).some((el) => {
    return el <= root.val
  })
  if (isInvalidRight) return false
  return true
}

// 错误的
var isValidBST3 = function (root) {
  if (!root) return true
  let left = !root.left || root.val > root.left.val
  let right = !root.right || root.val < root.right.val
  return left && right && isValidBST3(root.left) && isValidBST3(root.right)
}

const root = {
  val: 5,
  left: {
    val: 4,
  },
  right: {
    val: 6,
    left: {
      val: 3,
    },
    right: {
      val: 7,
    },
  },
}

console.log(isValidBST(root))
