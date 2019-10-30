/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
    let beforeHead = new ListNode(0) 
    let afterHead = new ListNode(0) 
    let before = beforeHead
    let after = afterHead
    let cur = head 
    while(cur){
        if(cur.val < x){
            before.next = cur
            before =  before.next
        }else{
            after.next = cur
            after =  after.next
        }
        cur = cur.next
    }
    after.next = null
    before.next = afterHead.next
    return beforeHead.next
};
