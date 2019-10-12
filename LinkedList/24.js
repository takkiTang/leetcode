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
var swapPairs = function(head) {
    let node = new ListNode(0)
    node.next = head 
    let prev = node
    while(prev.next && prev.next.next){
        let [a,b] = [prev.next,prev.next.next];
        [prev.next,b.next,a.next,prev] = [b,a,b.next,a]
    }
    return node.next
};
