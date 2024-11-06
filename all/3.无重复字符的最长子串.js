/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if(s.length<=1){
        return s.length;
    }
    let res = s[0];
    let i=0,j,str=s[0];
    while(i<s.length){
        j= i + str.length;
        if(j>=s.length || s.length-i<res.length){
            break
        }
        const index = str.indexOf(s[j]);
        if(index<0 ){
            str +=s[j]
            if(str.length>res.length){
                res = str;
            }
        }else{
            i = i+index+1;
            str =str.substring(index+1)+s[j]
        }
    }
    if(str.length>res.length){
        res = str;
    }
    return res.length;
};
// @lc code=end

lengthOfLongestSubstring("abcabcbb")