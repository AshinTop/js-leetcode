/*
 * @lc app=leetcode.cn id=4 lang=javascript
 *
 * [4] 寻找两个正序数组的中位数
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays2 = function(nums1, nums2) {
    const countlist = [...nums1,...nums2].sort((a,b)=>a-b);
    if(countlist.length%2==1){
        return countlist[Math.floor(countlist.length/2)];
    }else{
        const mid = countlist.length/2;
        return (countlist[mid-1]+countlist[mid])/2
    }
};

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    const totalNums = nums1.length+nums2.length
    const firstCount = Math.floor((totalNums-1)/2) 
    let index1 = 0,index2=0
    let mid1,preIndex=0,mid2=0
    while(preIndex<=firstCount){
        if(index1>=nums1.length||nums1[index1]>nums2[index2]){
            mid1 = nums2[index2]
            index2++
        }else{
            mid1 = nums1[index1]
            index1++
        }
        preIndex++
    }
    if(totalNums%2==0){
        if(index1>=nums1.length){
            mid2 = nums2[index2]
        }
       
        else if(index2>=nums2.length){
            mid2 = nums1[index1]
        }
    
        else{
            mid2 = Math.min(nums2[index2], nums1[index1])
        }
    }
    return mid2?(mid1+mid2) /2:mid1
};
// @lc code=end

// console.log(findMedianSortedArrays([1,2],[3,4])) 