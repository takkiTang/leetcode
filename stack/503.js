/**
 * @param {number[]} nums
 * @return {number[]}
 */

Array.prototype.top = function () {
    return this[this.length - 1]
}
var nextGreaterElements = function (nums) {
    let n = nums.length
    let stack = [] // 单调栈
    let res = [] // 返回结果
    for (let i = 2 * n - 1; i >= 0; i--) {
        while (stack.length && nums[i % n] >= stack.top()) { // 前置元素大于逆序单调栈内元素，出栈
            stack.pop()
        }
        if (i < n) res[i] = stack.length ? stack.top() : -1
        stack.push(nums[i % n])
    }
    return res
};