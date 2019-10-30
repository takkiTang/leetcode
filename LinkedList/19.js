/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let node = new ListNode(0)
    node.next = head 
    let prev = node
    let cur = head 
    while(cur){
        if(--n < 0){
         prev = prev.next   
        }
        cur = cur.next 
    }
    prev.next = prev.next.next
    return node.next
};