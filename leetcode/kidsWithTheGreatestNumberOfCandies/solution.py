class Solution(object):
    def kidsWithCandies(self, candies, extraCandies):
        """
        :type candies: List[int]
        :type extraCandies: int
        :rtype: List[bool]
        """

        # rList=[]
        # tmp=0
        # currentGreatest=float('-inf')
        # for i in candies:
        #     tmp = i-extraCandies
        #     if tmp >= currentGreatest:
        #         rList.append(True)
        #     else:
        #         rList.append(False)
        #     currentGreatest = tmp
        # return rList


        """
        Iterate through the candies list and check if each child can have the greatest number of candies
        after receiving the extraCandies.
        With 2 loops
        """
        maxCandies = max(candies)
        result = []
        for i in range(len(candies)):
            result.append(candies[i] + extraCandies >= maxCandies)
        return result



