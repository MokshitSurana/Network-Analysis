from typing import List
from functools import lru_cache


class Solution:
    def minCapability(self, nums: List[int], k: int) -> int:
        n = len(nums)

        @lru_cache()
        def helper(i, k, cur):
            if k == 0 or i >= n - 2:
                return cur

            res = float("inf")
            for j in range(i + 2, n):
                x = max(cur, nums[j])
                res = min(res, helper(j, k - 1, x))
            return res

        ans = float("inf")
        for i in range(n):
            ans = min(ans, helper(i, k - 1, nums[i]))

        return ans


p = Solution()
print(p.minCapability([4, 22, 11, 14, 25], 3))
