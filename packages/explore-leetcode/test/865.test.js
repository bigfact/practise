import { subtreeWithAllDeepest } from '../src/865'
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

function arrToTreeNode(arr = []) {
  const root = new TreeNode(arr[0])
  let currentLevel = [root]
  let nextLevel = []
  let i = 1
  while (i < arr.length - 1) {
    currentLevel.forEach(el => {
      let left = null
      let right = null
      if (arr[i] !== null && arr[i] !== undefined) {
        left = new TreeNode(arr[i])
        nextLevel.push(left)
      }
      i++
      if (arr[i] !== null && arr[i] !== undefined) {
        right = new TreeNode(arr[i])
        nextLevel.push(right)
      }
      i++
      el.left = left
      el.right = right
    })
    currentLevel = nextLevel
    nextLevel = []
  }
  return root
}

function treeNodeToArr(root) {
  let currentLevel = [root]
  let nextLevel = []
  let result = []

  while (currentLevel.length > 0) {
    currentLevel.forEach(el => {
      if (el) {
        if (typeof el.val !== 'undefined') result.push(el.val)
        nextLevel.push(el.left)
        nextLevel.push(el.right)
      } else {
        result.push(null)
      }
    })
    currentLevel = nextLevel
    nextLevel = []
  }
  for (let i = result.length - 1; i >= 0; i--) {
    if (result[i] !== null) break
    result.pop()
  }
  return result
}

const cases = [
  {
    input: [1],
    result: [1]
  },
  {
    input: [3, 5, 1, 6, 2, 0, 8, null, null, 7, 4],
    result: [2, 7, 4]
  },
  {
    input: [0, 3, 1, 4, null, 2, null, null, 6, null, 5],
    result: [0, 3, 1, 4, null, 2, null, null, 6, null, 5]
  },
  {
    input: [0, 1, 3, null, 2],
    result: [2]
  },
  {
    input: [0, null, 1, null, 2, null, 3],
    result: [3]
  }
]

cases.forEach(el => {
  let input = arrToTreeNode(el.input)
  // console.log(JSON.stringify(input, '', 2))
  test(`具有所有最深结点的最小子树 input ${JSON.stringify(el.input)} result ${JSON.stringify(el.result)}`, () => {
    let result = treeNodeToArr(subtreeWithAllDeepest(input))
    // console.log(result)
    expect(result).toEqual(el.result)
  })
})
