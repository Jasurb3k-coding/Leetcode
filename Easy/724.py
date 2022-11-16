from typing import List


class Solution:
    def pivotIndex(self, nums: List[int]) -> int:
        right_total = sum(nums) - nums[0]
        left_total = 0

        for i in range(len(nums) - 1):
            if right_total == left_total:
                return i
            right_total -= nums[i + 1]
            left_total += nums[i]

        if right_total == left_total:
            return len(nums) - 1
        else:
            return -1