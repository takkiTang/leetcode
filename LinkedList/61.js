/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    if(!head) return head 
    let cur = head 
    let n = 1
    // 获取链表长度
    while(cur.next){
        cur = cur.next
        n++
    }
    // 生成链表环
    cur.next = head
    // 减少重复
    k = k % n
    // 右移元素
    while(k++ < n){
        cur = cur.next
        head = head.next
    }
    // 断开链表环
    cur.next = null
    return head 
};
