/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
    if(!root) return 0
    let level = 0
    let stack = [root]
    while (stack.length) {
        let len = stack.length
        for (let i = 0; i < len; i++) {
            let node = stack.shift()
            if (node.left) {
                stack.push(node.left) 
            }
            if (node.right) {
                stack.push(node.right)
            }
        }
        level++
    }
    return level
};