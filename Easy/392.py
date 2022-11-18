class Solution:
    def isSubsequence(self, s: str, t: str) -> bool:
        if len(s) > len(t): return False
        if s == '': return True
        sp, tp = 0, 0
        sl, tl = len(s), len(t)
        while sp < sl:
            while tp < tl and s[sp] != t[tp]:
                tp+=1
            if tp == tl and (sp != sl-1 or s[sp] != t[tp-1]):
                return False
            sp+=1
            tp+=1
        return True
