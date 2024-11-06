/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    //先排序
    nums.sort((a,b)=>a-b);
    let list=[]
    let first = 0;
    while(first<nums.length-2){
        let second = first+1,third = nums.length-1;
        //如果first开始的最小组合相加大于0，first再增加也都不成立（first偏大）
        if(nums[second]+nums[second+1]+nums[first]>0){
            break
        }
        while(second<third){
             //如果firsr开始的最大组合小于0,包含first的组合都不成立（first偏小）
            if(nums[third-1]+nums[third]+nums[first]<0){
                break;
            }
            // 开始验证first的组合
            if(nums[first]+nums[second]+nums[third]>0){
                const value =nums[third]
                third--
                while(third>second){
                    if(nums[third]<value){
                        break
                    }
                    third--
                }
            }else if(nums[first]+nums[second]+nums[third]<0){
                const value =nums[second]
                second++
                while(third>second){
                    if(nums[second]>value){
                        break
                    }
                    second++
                }
            }else{
                const result = [nums[first],nums[second],nums[third]];
                list.push(result)
                const value1 =nums[third]
                third--
                while(third>second){
                    if(nums[third]<value1){
                        break
                    }
                    third--
                }
                const value2 =nums[second]
                second++
                while(third>second){
                    if(nums[second]>value2){
                        break
                    }
                    second++
                }
            }
        }
        const value3 =nums[first]
        first++
        while(first<nums.length-2){
            if(nums[first]>value3){
                break
            }
            first++
        }
    }
    return list
};

// @lc code=end
