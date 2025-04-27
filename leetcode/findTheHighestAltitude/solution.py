class Solution:
    def largestAltitude(self, gain: List[int]) -> int:
        highest = 0
        current = 0
        for g in gain:
            current += g
            highest = max(highest, current)
        return highest
