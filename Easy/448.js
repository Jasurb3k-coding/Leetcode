/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    let hm = []
    hm[nums.length+1] = true
    for (let num of nums){
        hm[num] = true
    }
    let ans = []
    for (let i=1; i <= nums.length; i++){
        if (!hm[i]) ans.push(i)
    }
    return ans
};