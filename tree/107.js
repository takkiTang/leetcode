/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function (root) {
    if (!root) return []
    let stack = [root]
    let level = 0
    let levels = []
    while (stack.length) {
        let len = stack.length
        levels.push([])
        for (let i = 0; i < len; i++) {
            let node = stack.shift()
            levels[level].push(node.val)
            if (node.left) stack.push(node.left)
            if (node.right) stack.push(node.right)
        }
        level++
    }
    return levels.reverse()
};