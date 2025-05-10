class Solution(object):
    def countBits(self, n):
        ans = [0] * (n + 1)
        for i in range(1, n + 1):
            ans[i] = ans[i >> 1] + (i & 1)
        return ans

# n = 5
# -> ["0", 0, 0, 0, 0, 0]
# in 0th index
# -> [0,"0", 0, 0, 0, 0]
# in 1st index
# -> [0, 1, 0, 0, 0, 0]
# in 2nd index
# -> [0, 1, 1, 0, 0, 0]
# because divide 2nd index by 2, we get 1. How many 1's in 1 is 1. Since 2 is even, we add 0 to it
# in 3rd index
# -> [0, 1, 1, 2, 0, 0]
# because divide 3rd index by 2, we get 1. How many 1's in 1 is 1. Since 3 is odd, we add 1 to it