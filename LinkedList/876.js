/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
    let slow = head 
    let fast = head 
    // 双指针遍历
    while(fast && fast.next && fast.next.next){
        slow = slow.next
        fast = fast.next.next
    }
    // 判断 fast 遍历是否完成
    return fast.next ? slow.next : slow 
};