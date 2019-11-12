/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    // 创建一个哈希表
    let hashmap = new Map()
    // 遍历数组
    for(let i=0;i<nums.length;i++){
        // 存在元素
        if(hashmap.has(nums[i])){
            // 返回结果
            return [hashmap.get(nums[i]),i]
         // 不存在该元素
        }else{
            // 设置对应结果
            hashmap.set(target - nums[i],i)
        }
    }
};