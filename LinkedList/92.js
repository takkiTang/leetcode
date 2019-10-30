/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function(head, m, n) {
    let prev = null
    let cur = head
    while(m-- > 1){
        n--
        prev = cur
        cur = cur.next
    }
    let con = prev
    let tail = cur 
    while(n-- > 0){
        [cur.next,prev,cur] = [prev,cur,cur.next]
    }
    if(con){
        con.next = prev
    }else{
        head = prev
    }
    tail.next = cur 
    return head
};
