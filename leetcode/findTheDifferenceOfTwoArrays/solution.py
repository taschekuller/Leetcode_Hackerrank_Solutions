# naive solution iff valid arrays have equal length
class Solution:
    def findDifference(self, nums1: List[int], nums2: List[int]) -> List[List[int]]:
        occurancesDict = {}
        onlyNums1=[]
        onlyNums2=[]
        for i in range(len(nums1)):
            occurancesDict[nums1[i]]=1

        for i in range(len(nums1)):
            if(nums2[i] not in occurancesDict):
                onlyNums2.append(nums2[i])
            else:
                occurancesDict[nums2[i]]+=1

        for i in occurancesDict:
            if(occurancesDict[i]==1):
                onlyNums1.append(i)

        return([onlyNums1,onlyNums2])

### Better approach with using set and difference of list
# class Solution:
#     def findDifference(self, nums1: List[int], nums2: List[int]) -> List[List[int]]:
#         set1 = set(nums1)
#         set2 = set(nums2)
#         return(list(set1-set2), list(set2-set1))