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
var reverseList = function(head) {
    let [cur,prev] = [head,null]
    while(cur)
        [cur.next,prev,cur] = [prev,cur,cur.next]
    return prev
};