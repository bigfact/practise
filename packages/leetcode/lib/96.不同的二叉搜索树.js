/*
 * @lc app=leetcode.cn id=96 lang=javascript
 *
 * [96] 不同的二叉搜索树
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function (n) {
  const res = new Array(n + 1).fill(0);
  res[0] = 1;
  res[1] = 1;
  for (let i = 2; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      res[i] += res[j - 1] * res[i - j];
    }
  }
  return res[n];
};
// @lc code=end

// const n = 20;

// console.log(numTrees(n));

// var numTrees2 = function (n) {
//   function initTree(start, end) {
//     if (start > end) return 1;
//     let count = 0;
//     for (let i = start; i <= end; i++) {
//       let countLeft = initTree(start, i - 1);
//       let countRight = initTree(i + 1, end);
//       count += countLeft * countRight;
//     }
//     return count;
//   }
//   return initTree(1, n);
// };

// console.log(numTrees2(n));

// var numTrees3 = function (n) {
//   let res = 1;
//   for (let i = 0; i < n; i++) {
//     res = (res * 2 * (2 * i + 1)) / (i + 2);
//   }
//   return res;
// };

// console.log(numTrees3(n));
