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
var deleteDuplicates = function(head) {
    let node = new ListNode(0)
    node.next = head
    let prev = node 
    let cur = head
    while(cur && cur.next){
        if(cur.val == cur.next.val){
            let p1 = cur.next 
            while(p1 && p1.val==cur.val){
                p1 = p1.next
            }
            prev.next = p1 
            cur = p1 
        }else{
            cur = cur.next 
            prev = prev.next
        }
    }
    return node.next
};