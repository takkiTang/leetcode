/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let fast = head 
    let slow = head 
    // 快慢指针遍历
    while(fast && fast.next && fast.next.next){
        slow = slow.next 
        fast = fast.next.next 
    }
    let reverse = null
    // 反转链表
    while(slow){
        [slow.next,reverse,slow] = [reverse,slow,slow.next]
    }
    let cur = head 
    // 反转链表对比原始链表
    while(cur && reverse){
        if(cur.val != reverse.val){
            return false
        }
        cur = cur.next
        reverse = reverse.next
    }
    return true
};