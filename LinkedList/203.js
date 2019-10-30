/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    let node = new ListNode(0)
    node.next = head 
    let prev = node
    let cur = head 
    while(cur){
        if(cur.val == val){
            prev.next = cur.next
            cur = cur.next
        }else{
            cur = cur.next
            prev = prev.next
        }
    }
    return node.next 
};