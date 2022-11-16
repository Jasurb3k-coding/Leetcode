# The isBadVersion API is already defined for you.
# def isBadVersion(version: int) -> bool:

class Solution:
    def firstBadVersion(self, n: int) -> int:
        l = 1
        r = n

        while l <= r:
            m = (l + r) // 2
            is_bad = isBadVersion(m)
            if is_bad:
                if not isBadVersion(m - 1):
                    return m
                r = m
            else:
                l = m + 1
        return r