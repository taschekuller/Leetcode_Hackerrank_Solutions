from typing import List

class Solution:
    def sortColors(self, nums: List[int]) -> None:
        count = [0, 0, 0]
        
        for num in nums:
            count[num] += 1
        
        index = 0
        for num in range(3):
            for _ in range(count[num]):
                nums[index] = num
                index += 1
        
        print([0] * count[0] + [1] * count[1] + [2] * count[2])


