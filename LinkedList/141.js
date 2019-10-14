/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */

// 快慢指针
var hasCycle = function (head) {
    let [fast, slow] = [head, head]
    while (fast && fast.next && fast.next.next) {
        [slow, fast] = [slow.next, fast.next.next]
        if (slow == fast) return true
    }
    return false
};

// 标记法
var hasCycle = function (head) {
    const flag = Symbol()
    let cur = head
    while (cur) {
        if (cur.val === flag) return true
        cur.val = flag
        cur = cur.next
    }
    return false
};