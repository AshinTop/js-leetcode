/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function (head) {
  let map = new Map()
  let curr = head
  let res = head
  while (curr) {
    map.set(curr, new Node(curr.val))
    curr = curr.next
  }
  while (res) {
    map.get(res).next = map.get(res.next) ?? null
    map.get(res).random = map.get(res.random) ?? null
    res = res.next
  }
  return map.get(head)

};