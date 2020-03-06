import { ListNode, addTwo } from '../src/2'

let a = new ListNode(2)
let a1 = new ListNode(4)
let a2 = new ListNode(3)
a.next = a1
a1.next = a2

let b = new ListNode(5)
let b1 = new ListNode(6)
let b2 = new ListNode(4)
b.next = b1
b1.next = b2

let c = new ListNode(7)
let c1 = new ListNode(0)
let c2 = new ListNode(8)
c.next = c1
c1.next = c2

const cases = [
  {
    l1: a,
    l2: b,
    result: c
  }
]

cases.forEach(({ l1, l2, result }) => {
  test(`两数之和 l1 ${JSON.stringify(l1)} l2 ${JSON.stringify(l2)}`, () => {
    expect(JSON.stringify(addTwo(l1, l2))).toEqual(JSON.stringify(result))
  })
})
