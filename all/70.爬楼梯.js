/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if(n==1){
        return 1
    }
    if(n==2){
        return 2
    }
    for(let i=1;i<n;i++){
        setDataMap(i)
    }
    return dataMap[n-1]+dataMap[n-2]
    
    
};

const dataMap = {}

var setDataMap = function(n){
    if(n==1){
        dataMap[n]=1
    }
    else if(n==2){
        dataMap[n]=2
    }else{
        dataMap[n] = dataMap[n-1]+dataMap[n-2]
    }
}
// @lc code=end

