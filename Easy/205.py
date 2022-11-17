class Solution:
    def isIsomorphic(self, s: str, t: str) -> bool:
        used = {}
        used_values = {}
        for i in range(len(s)):
            cs = s[i]
            ct = t[i]
            if (cs in used and used[cs] != ct) or (not cs in used and ct in used_values):
                return False
            used[cs] = ct
            used_values[ct] = True
        return True