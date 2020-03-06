/**
 * 2、两数相加
 * @see {@link https://leetcode-cn.com/problems/add-two-numbers}
 * @example
 * ListNode { val: 2, next: ListNode { val: 4, next: ListNode { val: 3, next: null } } }
 */

export function ListNode(val) {
  this.val = val
  this.next = null
}

export function addTwo(l1, l2) {
  let l3 = null
  let l4 = null
  while (l1 || l2) {
    l1 = l1 || new ListNode(0)
    l2 = l2 || new ListNode(0)
    l3 = l3 || new ListNode(0)
    l4 = l4 || l3

    l4.val = l1.val + l2.val + l4.val
    l4.next = new ListNode(0)
    if (l4.val > 9) {
      l4.val = l4.val - 10
      l4.next.val = 1
    }

    l1 = l1.next
    l2 = l2.next
    if (!l1 && !l2) {
      if (l4.next.val < 1) {
        l4.next = null
      }
      break
    }
    l4 = l4.next
  }
  return l3
}
