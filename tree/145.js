/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function(root) {
    if(!root){
        return []
    }
    let res = []
    let stack = []
    let cur
    stack.push(root)
    while(stack.length){
        cur = stack.pop()
        res.push(cur.val)
        if(cur.left){
            stack.push(cur.left)
        }
        if(cur.right){
            stack.push(cur.right)
        }
    }
    return res.reverse()
};