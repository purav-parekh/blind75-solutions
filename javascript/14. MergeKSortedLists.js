// add to array, sort array, construct linked list
// Leetcode link - https://leetcode.com/problems/merge-k-sorted-lists/
const mergeKLists = lists => {
    let a = []
    for(let i =0;i<lists.length;i++) {
        let head = lists[i]
        while(head) {
            a.push(head.val)
            head = head.next
        }
    }   
    a.sort((a,b) => a-b)
    let dummy = new ListNode(null)
    let tail = dummy
    for(let i =0;i<a.length;i++) {
        let node = new ListNode(a[i])
        tail.next = node
        tail = tail.next
    }
    return dummy.next
};
