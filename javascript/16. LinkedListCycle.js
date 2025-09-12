// fast and slow pointer
// Leetcode Link - https://leetcode.com/problems/linked-list-cycle/

const hasCycle = (head) => {
    if(!head) return false
    let slow = head
    let fast = head
    while(fast && fast.next) {
        slow = slow.next
        fast = fast.next.next
        if(slow === fast) return true
    }
    return false
};
