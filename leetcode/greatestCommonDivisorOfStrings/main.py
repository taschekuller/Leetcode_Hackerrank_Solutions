### Naive approach
# class Solution:
#     def gcdOfStrings(self, str1: str, str2: str) -> str:
#         lenStr2 = len(str2)
#         for i in range(lenStr2):
#             if(str1[:lenStr2] == str2):
#                 return str2
#         return ""

### Optimized approach with recursion
# The idea is to check if str1 + str2 == str2 + str1. If not, return an empty string.
# If they are equal, we can find the GCD of the two strings by recursively calling the function with the shorter string and the remaining part of the longer string.
# The base case is when one of the strings is empty, in which case we return the other string.

class Solution(object):
    def gcdOfStrings(self, str1, str2):
        if str1 + str2 != str2 + str1:
            return ""
        if len(str1) == len(str2):
            return str1
        if len(str1) > len(str2):
            return self.gcdOfStrings(str1[len(str2):], str2)
        return self.gcdOfStrings(str1, str2[len(str1):])