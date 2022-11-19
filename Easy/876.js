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
var middleNode = function (head) {
    let l = 0
    let original_head = head
    while (head) {
        l++
        head = head.next
    }
    let target = Math.floor(l / 2)
    let c = 0
    while (c != target) {
        c++
        original_head = original_head.next
    }
    return original_head
};