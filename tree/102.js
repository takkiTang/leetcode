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
var levelOrder = function (root) {
    if (!root) return []
    let level = 0
    let levels = []
    let queue = [root]
    while (queue.length) {
        let len = queue.length
        levels.push([])
        for (let i = 0; i < len; i++) {
            let node = queue.shift()
            levels[level].push(node.val)
            if (node.left)
                queue.push(node.left)
            if (node.right)
                queue.push(node.right)
        }
        level++
    }
    return levels
};