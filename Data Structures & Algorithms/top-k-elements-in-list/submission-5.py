class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        freq = {}
        res = []
        for i in nums:
            if i not in freq:
             freq[i] = 0
            freq[i]+=1
        sorted_freq = dict(sorted(freq.items(), key=lambda x: x[1], reverse=True))
        res = list(sorted_freq.keys())[:k]
        return res

            
        