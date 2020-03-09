/**
 * 865. 具有所有最深结点的最小子树
 * @see {@link https://leetcode-cn.com/problems/smallest-subtree-with-all-the-deepest-nodes/}
 * @description
 * 1、自顶向下遍历到最后一层并存储到数组中（每个节点记录其父节点方便下一步回溯，欠佳的是会破坏原始数据结构）
 * 2、从最后一层，自底向上查找节点的唯一公共祖先
 * 3、返回最后剩下的公共祖先
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
function TreeNode(val) {
  this.val = val
  this.left = this.right = null
}

/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
export function subtreeWithAllDeepest(root) {
  let currentLevel = []
  let nextLevel = [root]
  let hasNextLevel = true
  do {
    currentLevel = nextLevel
    nextLevel = []
    hasNextLevel = false
    for (let i = 0; i < currentLevel.length; i++) {
      let parent = currentLevel[i] || {}
      let { left, right } = parent
      if (left) {
        left.parent = parent
        nextLevel.push(left)
        hasNextLevel = true
      }
      if (right) {
        right.parent = parent
        nextLevel.push(right)
        hasNextLevel = true
      }
    }
  } while (hasNextLevel)

  while (currentLevel.length > 1) {
    nextLevel = []
    currentLevel.forEach(el => {
      if (el && el.parent && nextLevel.indexOf(el.parent) < 0) {
        nextLevel.push(el.parent)
      }
    })
    currentLevel = nextLevel
  }

  return currentLevel[0]
}
