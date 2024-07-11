class Solution(object):
    def lengthOfLongestSubstring(self, s):

        max_length = 0
        word_length = len(s)

        for length in range(1, word_length + 1):
            for i in range(word_length - length + 1):
                substring = s[i:i+length]
                if len(set(substring)) == len(substring): 
                    max_length = max(max_length, len(substring))
        
        return max_length