/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    // 头指针
    let head
    // 尾指针
    let end
    // 存放结果
    let res = []
    // 固定值
    let fixed
    // 排序
    nums.sort((a, b) => {
        return a - b;
    });
    // 推断数组内元素是不是都为整数或负数，直接返回
    if (nums[0] > 0 || nums[nums.length - 1] < 0) {
        return res
    }
    // 遍历数组，因为是三数只和 可以少遍历两次
    for (let i = 0; i < nums.length - 2; i++) {
        // 取固定值
        fixed = nums[i]
        // 如果固定值与前一个元素相同，跳过（会得到重复解）
        if (fixed === nums[i - 1]) continue
        // 最先的固定值为nums[0],所以头指针为 i+1 下一个元素
        head = i + 1
        // 尾指针
        end = nums.length - 1
        // 头指针小于尾指针
        while (head < end) {
            // 如果三数只和为0 
            if (fixed + nums[head] + nums[end] === 0) {
                // 得到一个解
                res.push([fixed, nums[head], nums[end]])
                // 头指针向后移动一位
                head++
                // 尾指针向前移动一位 
                end--
                //假如头指针满足小于尾指针且挪动后的指针和挪动前的指针元素相称，再往前挪动
                while (head < end && nums[head] === nums[head - 1]) {
                    head++
                }
                //假如头指针满足小于尾指针且挪动后的指针和挪动前的指针元素相称，再往后挪动
                while (head < end && nums[end] === nums[end + 1]) {
                    end--
                }
                //小于 0 须要挪动头指针，由于尝试着让数据比原有数据大一点
            } else if (fixed + nums[head] + nums[end] < 0) {
                head++
                //不然，尾指针向前挪动，让数据小于元数据
            } else {
                end--
            }
        }
    }
    return res
};