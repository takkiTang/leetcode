/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    let node = new ListNode(0)
    let prev = node 
    let p1 = l1 
    let p2 = l2 
    while(l1 && l2){
        if(l1.val < l2.val){
            prev.next = l1  
            l1 = l1.next
        }else{
            prev.next = l2
            l2 = l2.next
        }
         prev = prev.next
    }
    prev.next = l1 ? l1 : l2
    return node.next 
};