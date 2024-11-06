/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const sort_nums =nums.map((value,index)=>{
        return {index,value}}).sort((a,b)=>a.value-b.value);
    let i = 0,j=sort_nums.length-1;
    while(1){
        const sum = sort_nums[i].value + sort_nums[j].value;
        if(sum==target){
            break
        }else if(sum>target){
            j--
        }else{
            i++
        }
    }
    return [sort_nums[i].index,sort_nums[j].index]
    
};
// @lc code=end
twoSum([2,7,11,15],9)
