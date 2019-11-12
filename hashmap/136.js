/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let hashmap = new Map()
    for(let i=0;i<nums.length;i++){
        if(hashmap.has(nums[i])){
            hashmap.delete(nums[i])
        }else{
            hashmap.set(nums[i],1)
        }
    }
    return hashmap.keys().next().value
};