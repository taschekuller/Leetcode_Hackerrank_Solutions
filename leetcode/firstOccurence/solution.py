class Solution:
    def strStr(self, haystack: str, needle: str) -> int:
        index = haystack.find(needle) #help us to find index without using for loop for each letter
        return index