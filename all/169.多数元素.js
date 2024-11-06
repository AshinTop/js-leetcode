/*
 * @lc app=leetcode.cn id=169 lang=javascript
 *
 * [169] 多数元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let res = {}
    let minCount =Math.floor(nums.length/2) +1
    for(let i=0;i<nums.length;i++){
        const data = nums[i]
        if(res[data]){
            res[data] = res[data]+1
        }else{
            res[data] = 1
        }
        if(minCount<= res[data]){
            return data
        }
    }
};
// @lc code=end

