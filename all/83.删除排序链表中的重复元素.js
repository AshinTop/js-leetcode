/*
 * @lc app=leetcode.cn id=83 lang=javascript
 *
 * [83] 删除排序链表中的重复元素
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
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
  if (!head || !head.next) {
    return head
  }
  let res = head
  let next = res.next
  while (res != null && next != null) {
    while (next != null && res.val === next.val) {
      next = next.next
    }
    res.next = next
    res = res.next
    if (res != null) next = res.next
  }
  return head
}
// @lc code=end

// [1,1,2,3,3]
