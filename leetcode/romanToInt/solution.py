class Solution(object):
    def romanToInt(self, s):
        romanLetters = {
            'I':1,
            'V':5,
            'X':10,
            'L':50,
            'C':100,
            'D':500,
            'M':1000
        }
        total = 0
        for i in range(len(s)-1):
            if romanLetters[s[i]] < romanLetters[s[i+1]]:
                total-=romanLetters[s[i]]
            else:
                total+=romanLetters[s[i]]
        return total + romanLetters[s[-1]]


        