function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

var max = function (nums, start, end) {
    let max_val = -1
    let max_el_id = null
    for (let i = start; i <= end; i++) {

        if (nums[i] > max_val) {
            max_val = nums[i]
            max_el_id = i
        }
    }
    return max_el_id
}

var constructMaximumBinaryTree = function (nums) {
    return find(nums, 0, nums.length - 1)
};

var find = function (nums, start, end) {
    if (end < start) return null
    if (start === end) return new TreeNode(nums[start])
    let max_el_id = max(nums, start, end)
    console.log(start, end);
    return new TreeNode(nums[max_el_id], find(nums, start, max_el_id - 1), find(nums, max_el_id + 1, end))
}