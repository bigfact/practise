/**
 * 39. Combination Sum
 * @see {@link https://leetcode-cn.com/problems/combination-sum/}
 */

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
export function combinationSum(candidates, target) {
  const result = []
  // let times = 0
  for (let i = 0; i < candidates.length; i++) {
    let bag = [candidates[i]]
    let bagVal = candidates[i]
    let j = i
    while (bag.length > 0) {
      if (j >= candidates.length || bagVal === target) {
        // console.log('times:', ++times, 'candidates:', candidates[i], bagVal, bag)
        if (bagVal === target) {
          result.push(bag.concat([]))
        }
        let val = bag.pop()
        bagVal -= val || 0
        j = candidates.indexOf(val) + 1
      } else {
        let val = candidates[j]
        bag.push(val)
        bagVal += val
        // console.log('times:', ++times, 'candidates:', candidates[i], bagVal, bag)
        if (bagVal > target) {
          bagVal -= bag.pop() || 0
          j++
        }
      }
    }
  }
  // console.log('result:', result)
  return result
}
