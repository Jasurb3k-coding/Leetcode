from typing import List


class Solution:
    def runningSum(self, nums: List[int]) -> List[int]:
        s = 0
        new_a = []
        for n in nums:
            s += n
            new_a.append(s)