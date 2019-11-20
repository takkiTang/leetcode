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
var zigzagLevelOrder = function(root) {
    if(!root) return []
    let res = []
    let level = 0
    let queue = [root]
    while(queue.length){
        let len = queue.length
        res.push([])
        for(let i=0;i<len;i++){
            let node = queue.shift()
            level %2 == 0 ? res[level].push(node.val) : res[level].unshift(node.val)
            if(node.left)  queue.push(node.left)
            if(node.right)   queue.push(node.right)
        }
        level++
    }
    return res
};