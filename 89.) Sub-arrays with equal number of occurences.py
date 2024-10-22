# 89.) Given an array arr[] and two integers say, x and y, find the number of sub-arrays in which the number of 
#      occurrences of x is equal to the number of occurrences of y.

# Examples:

# Input: arr[] = [1, 2, 1] , x= 1 , y = 2
# Output: 2
# Explanation: The possible sub-arrays have same equal number of occurrences of x and y are:
# 1) [1, 2], x and y have same occurrence(1).
# 2) [2, 1], x and y have same occurrence(1).
# Input: arr[] = [1, 2, 1] , x = 4 , y = 6
# Output: 6
# Explanation: The possible sub-arrays have same equal number of occurrences of x and y are:
# 1) [1], x and y have same occurrence(0).
# 2) [2], x and y have same occurrence(0).
# 3) [1], x and y have same occurrence(0).
# 4) [1, 2], x and y have same occurrence(0).
# 5) [2, 1], x and y have same occurrence(0).
# 6) [1, 2, 1], x and y have same occurrence(0).
# Input: arr[] = [1, 2, 1] , x= 1 , y = 4
# Output: 1
# Explanation: The possible sub-array have same equal number of occurrences of x and y is: [2], x and y have same occurrence(0)
# Constraints: 
# 1 <= arr.size() <= 10^6
# 1 <= arr[i], x, y<=10^6
# <______________________________________________SOLUTION___________________________________________________>
#User function Template for python3
#<____________________________________MAIN-SOLUTION-START____________________________________________________>
class Solution:
    def sameOccurrence(self, arr, x, y):
        # code here
        count_map = {}
        count_map[0] = 1  
        count_x = 0
        count_y = 0  
        result = 0    
        for num in arr:
            if num == x:
                count_x += 1
            elif num == y:
                count_y += 1
            difference = count_x - count_y
            if difference in count_map:
                result += count_map[difference]
            if difference in count_map:
                count_map[difference] += 1
            else:
                count_map[difference] = 1
        return result

#<_______________________________________________MAIN-SOLUTION-END_____________________________________________________>

#{ 
 # Driver Code Starts
#Initial Template for Python 3

if __name__ == '__main__':
    tc = int(input())
    while tc > 0:
        arr = list(map(int, input().strip().split()))
        x = int(input().strip())
        y = int(input().strip())
        ob = Solution()
        ans = ob.sameOccurrence(arr, x, y)
        print(ans)
        tc -= 1

# } Driver Code Ends

# Compilation Completed
For Input: 
1 2 1
1
2
Your Output: 
2
Expected Output: 
2