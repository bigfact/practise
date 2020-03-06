/**
 * 1329、将矩阵对角线排序
 * @see {@link https://leetcode-cn.com/problems/sort-the-matrix-diagonally}
 */

/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
export function diagonalSort(mat) {
  let m = mat.length
  for (let i = 0; i < m - 1; i++) {
    let n = mat[i].length
    for (let j = 0; j < n - 1; j++) {
      let a1 = i + 1
      let a2 = j + 1
      while (a1 < m && a2 < n) {
        if (mat[i][j] > mat[a1][a2]) {
          let tmp = mat[i][j]
          mat[i][j] = mat[a1][a2]
          mat[a1][a2] = tmp
        }
        a1++
        a2++
      }
    }
  }
  return mat
}
