/**
 * 756. 金字塔转换矩阵
 * @see {@link https://leetcode-cn.com/problems/pyramid-transition-matrix/}
 */

/**
 * @param {string} bottom
 * @param {string[]} allowed
 * @return {boolean}
 */
export function pyramidTransition(bottom = '', allowed = []) {
  if (bottom.length <= 1) {
    return true
  }

  // allowed map
  const allowedMap = {}
  allowed.forEach(el => {
    let key = el.slice(0, 2)
    let value = el.slice(2, 3)
    allowedMap[key] = allowedMap[key] || []
    allowedMap[key].push(value)
  })

  // 合并数组去重
  function join(arr0 = [], arr1 = []) {
    let obj = {}
    arr0.forEach(el => {
      obj[el] = ''
    })
    arr1.forEach(el => {
      obj[el] = ''
    })
    return Object.keys(obj)
  }

  // 自底向上，构造每一层为二维数组，每层前后相邻两位数组内元素两两组合进行匹配
  let currentLevel = []
  bottom.split('').forEach(el => {
    currentLevel.push([el])
  })
  for (let i = 0; i < bottom.length; i++) {
    // i 层
    let nextLevel = []
    // console.log('\ncurrentLevel', bottom.length - i, JSON.stringify(currentLevel))
    for (let j = 0; j < currentLevel.length - 1; j++) {
      // j, j+1 相邻两位
      let current = currentLevel[j]
      let next = currentLevel[j + 1]
      let pairedArr = []
      // 组合
      for (let m = 0; m < current.length; m++) {
        for (let n = 0; n < next.length; n++) {
          // 组合匹配
          let pairStr = current[m] + next[n]
          let paired = allowedMap[pairStr]
          if (paired) {
            pairedArr = join(pairedArr, allowedMap[pairStr])
          }
        }
      }
      if (pairedArr.length <= 0) {
        // 当前相邻两位没有产生可匹配组，则失败
        // console.log('fail', current, next, nextLevel)
        return false
      }
      nextLevel.push(pairedArr)
      // console.log('paired', JSON.stringify(current), JSON.stringify(next))
    }
    currentLevel = nextLevel
  }
  return true
}
