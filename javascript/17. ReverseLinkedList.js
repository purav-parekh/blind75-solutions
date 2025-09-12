// add to array, reverse array, construct list - not optimal - O(n log n)
// reverse in place - optimal - O(n)
// Leetcode Link - https://leetcode.com/problems/reverse-linked-list/description/

// iterative
const reverse = head => {
  if(!head) return head
  let [prev,curr,next] = [null,head,null]
  while(curr) {
    next = curr.next
    curr.next = prev

    prev = curr
    curr = next
  }
  return prev
}

// recursive
const reverse = head => {
  if(!head || !head.next) return head

  const newHead = reverse(head.next)

  head.next.next = head
  head.next = nnull

  return newHead
}
