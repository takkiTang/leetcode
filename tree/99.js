/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var recoverTree = function (root) {
    let stack = []
    let cur = root
    let p1, p2, prev
    while (cur || stack.length) {
        while (cur) {
            stack.push(cur)
            cur = cur.left
        }
        cur = stack.pop()
        if (prev && !p1 && prev.val >= cur.val) {
            p1 = prev
        }
        if (p1 && prev.val >= cur.val) {
            p2 = cur
        }
        prev = cur
        cur = cur.right
    }
    [p1.val, p2.val] = [p2.val, p1.val]
    return root
};