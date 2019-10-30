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
var addTwoNumbers = function(l1, l2) {
    let node = new ListNode(0)
    let prev = node
    let p1 = l1
    let p2 = l2 
    let ten = 0
    while(p1 || p2){
        let sum = (p1 ? p1.val :0) + (p2 ? p2.val : 0) + ten
        ten = parseInt(sum / 10)
        prev.next = new ListNode(sum % 10)
        prev = prev.next
        p1 = p1 ? p1.next : p1
        p2 = p2 ? p2.next : p2
    }
    if(ten)  prev.next = new ListNode(ten)
    return node.next
};