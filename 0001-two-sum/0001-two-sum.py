class Solution(object):
    def twoSum(self, nums, target):
        dic = {}
        for i, num in enumerate(nums):
            remainder = target - num
            if remainder in dic:
                return [dic[remainder], i]
            dic[num] = i

        
            
        """
        :type nums: List[int]
        :type target: int
        :rtype: List[int]
        """
        