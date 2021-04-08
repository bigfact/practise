/*
 * @lc app=leetcode.cn id=95 lang=javascript
 *
 * [95] 不同的二叉搜索树 II
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
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function (n) {
  function generateTree(n, m) {
    if (n > m) return [null];
    let res = [];
    for (let i = n; i <= m; i++) {
      let left = generateTree(n, i - 1);
      let right = generateTree(i + 1, m);
      for (let p = 0; p < left.length; p++) {
        for (let q = 0; q < right.length; q++) {
          let node = new TreeNode(i, left[p], right[q]);
          res.push(node);
        }
      }
    }
    return res;
  }

  return generateTree(1, n);
};

// @lc code=end

// 根节点的值大于其左子树中任意一个节点的值，小于其右节点中任意一节点的值，这一规则适用于二叉查找树中的每一个节点

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

function levelTraverse(node) {
  let res = [];
  let stack = [node];
  while (stack.length) {
    node = stack.shift();
    if (node) {
      res.push(node.val);
      if (node.left || node.right) {
        stack.push(node.left);
        stack.push(node.right);
      }
    } else {
      res.push(null);
    }
  }
  if (!res[res.length - 1]) res.pop();
  return res;
}

generateTrees(3).forEach((el) => {
  console.log(levelTraverse(el));
});
