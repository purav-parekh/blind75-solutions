// find mid point of list
// reverse the second half
// alternatively join first and second half
// Leetcode Link - https://leetcode.com/problems/reorder-list/description/

const reorderList = (head) => {
  if(!head) return

  // mid-point
  let slow = head
  let fast = head
  while(fast && fast.next) {
    slow = slow.next
    fast = fast.next.next
  }

  // reverse second half
  let curr = slow.next
  let prev = null
  slow.next = null
  while(curr) {
    let next = curr.next
    curr.next = prev

    prev = curr
    curr = next
  }

  // merge alternatively
  let first = head
  let second = prev

  while(second) {
    let t1 = first.next
    let t2 = second.next

    first.next = second
    second.next = t1
    first = t1
    second = t2
  }
}
