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
var mergeNodes = function(head) {
    let left = head
    let right = head.next
    let tmp_sum = 0
    while (right){
        tmp_sum += right.val
        if (right.val == 0){
            left = left.next3
            left.val = tmp_sum
            tmp_sum = 0
        }
        right = right.next
    }
    left.next = null
    // console.log(res)
    return head.next
};