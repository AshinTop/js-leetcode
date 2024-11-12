/*
 * @lc app=leetcode.cn id=86 lang=javascript
 *
 * [86] 分隔链表
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
 * @param {number} x
 * @return {ListNode}
 */
// var partition = function (head, x) {
//   // 创建两个虚拟头节点
//   let lessHead = new ListNode(0) // 小于 x 的链表
//   let greaterHead = new ListNode(0) // 大于等于 x 的链表
//   let less = lessHead // 指向小于 x 链表的末尾
//   let greater = greaterHead // 指向大于等于 x 链表的末尾

//   // 遍历原链表
//   while (head) {
//     if (head.val < x) {
//       less.next = head // 将当前节点连接到小于 x 的链表
//       less = less.next // 移动到小于 x 链表的末尾
//     } else {
//       greater.next = head // 将当前节点连接到大于等于 x 的链表
//       greater = greater.next // 移动到大于等于 x 链表的末尾
//     }
//     head = head.next // 移动到原链表的下一个节点
//   }

//   // 连接两个链表
//   greater.next = null // 确保大于等于 x 的链表的末尾指向 null
//   less.next = greaterHead.next // 将小于 x 的链表连接到大于等于 x 的链表

//   // 返回小于 x 的链表的头节点（去掉虚拟节点）
//   return lessHead.next
// }

var partition = function (head, x) {
  let lessListNode = new ListNode(0)
  let bigListNode = new ListNode(0)
  let less = lessListNode
  let big = bigListNode

  while (head) {
    if (head.val < x) {
      less.next = head
      less = less.next
    } else {
      big.next = head
      big = big.next
    }
    head = head.next
  }
  big.next = null
  less.next = bigListNode.next
  return lessListNode.next
}
// @lc code=end
// [1,4,3,0,2,5,2]\n3
