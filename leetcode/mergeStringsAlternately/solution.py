class Solution:
    def mergeAlternately(self, word1: str, word2: str) -> str:
        mergedWordArr=[]
        maxLoop=max(len(word1), len(word2))
        for i in range(maxLoop):
            if(i<len(word1)):
                mergedWordArr.append(word1[i])
            if(i<len(word2)):
                mergedWordArr.append(word2[i])
        return "".join(mergedWordArr)
