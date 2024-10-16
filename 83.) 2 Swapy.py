# 83.) Given a permutation of some of the first natural numbers in an array arr[], determine if the 
#      array can be sorted in exactly two swaps. A swap can involve the same pair of indices twice.

# Return true if it is possible to sort the array with exactly two swaps, otherwise return false.

# Examples:

# Input: arr = [4, 3, 2, 1]
# Output: true
# Explanation: First, swap arr[0] and arr[3]. The array becomes [1, 3, 2, 4]. Then, swap arr[1] and arr[2]. 
#              The array becomes [1, 2, 3, 4], which is sorted.
# Input: arr = [4, 3, 1, 2]
# Output: false
# Explanation: It is not possible to sort the array with exactly two swaps.
# Constraints:
# 1 ≤ arr.size() ≤ 106
# 1 ≤ arr[i] ≤ arr.size()
# <______________________________________________SOLUTION___________________________________________________>



# <___________________________________________________MAIN-SOLUTION_____________________________________________________>

class Solution:
    def checkSorted(self, arr):
        #code here
        dist = {}
        for i in range(len(arr)):
            distance = arr[i] - (i + 1)
            if distance != 0:
                dist[i] = dist.get(i, 0) + distance
        pos = 0
        neg = 0
        for k, v in dist.items():
            if v > 0:
                pos +=1
            if v < 0:
                neg += 1
            if pos > 2 or neg > 2:
                return False
            if v*(-1) not in dist.values():
                return False
        return True

# <___________________________________________________MAIN-SOLUTION_____________________________________________________>
#{ 
 # Driver Code Starts
if __name__ == "__main__":
    t = int(input().strip())

    for _ in range(t):
        arr = list(map(int, input().split()))

        sol = Solution()
        result = sol.checkSorted(arr)
        if result:
            print("true")
        else:
            print("false")

# } Driver Code Ends




# Compilation Completed
For Input: 
4 3 2 1
Your Output: 
true
Expected Output: 
true