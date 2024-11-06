/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let head = null,tail=null
    let pre = 0;
    while(l1||l2){
        if(l1){
            pre +=l1.val;
            l1=l1.next
        }
        if(l2){
            pre+=l2.val
            l2 = l2.next
        }
        if(!head){
            head = tail = new ListNode(pre % 10);
        }else{
            tail.next = new ListNode(pre % 10);
            tail = tail.next;
        }
        pre=Math.floor( pre/10)
    }
    if(pre>0){
        tail.next = new ListNode(pre);
    }
    return head
};
// @lc code=end

