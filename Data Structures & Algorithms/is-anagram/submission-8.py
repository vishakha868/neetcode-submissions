class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        if(len(s)!= len(t)):
            return False
        freq = {}
        for c in s:
            if c not in freq:
                freq[c] = 0
            freq[c]+=1
        for c in t:
            if c not in freq:
                return False
            freq[c] -=1
        for c in freq:
            if(freq[c]>0):
                return False
        return True