/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    // 单调栈
    let stack = []
    // 记录元素
    let hashmap = new Map()
    for(let val in nums2){ // 这里方便书写效率较差，建议使用常用for循环
        while(stack.length && stack[stack.length - 1] < val){
            hashmap.set(stack.pop(),val)
        }
        stack.push(val)
    }
    return nums1.map(v=>hashmap.get(v)||-1)
};