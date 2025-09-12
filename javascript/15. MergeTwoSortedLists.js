// two pointers (one for each list), compare each node, add lower value to new list
// Leetcode Link - https://leetcode.com/problems/merge-two-sorted-lists/description/

const mergeTwoLists = (list1, list2) => {
    if(!list1) return list2
    if(!list2) return list1
    let l1 = list1
    let l2 = list2
    let dummy = new ListNode(null)
    let tail = dummy
    while(l1 && l2) {
        let node = null;
        if(l1.val < l2.val) {
            node = new ListNode(l1.val)
            l1=l1.next
            }
        else { node = new ListNode(l2.val)
            l2 = l2.next
        }
        tail.next = node
        tail = tail.next 
    }
    if(!l1) tail.next = l2
    if(!l2) tail.next = l1
    return dummy.next
};
