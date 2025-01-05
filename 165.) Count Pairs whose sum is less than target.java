// 165.) Given an array arr[] and an integer target. You have to find the number of pairs in the array 
//       whose sum is strictly less than the target.

// Examples:

// Input: arr[] = [7, 2, 5, 3], target = 8
// Output: 2
// Explanation: There are 2 pairs with sum less than 8: (2, 5) and (2, 3). 
// Input: arr[] = [5, 2, 3, 2, 4, 1], target = 5
// Output: 4
// Explanation: There are 4 pairs whose sum is less than 5: (2, 2), (2, 1), (3, 1) and (2, 1).
// Input: arr[] = [2, 1, 8, 3, 4, 7, 6, 5], target = 7//{ Driver Code Starts
import java.io.*;
import java.lang.*;
import java.util.*;


// } Driver Code Ends
// User function Template for Java
class Solution {
    int countPairs(int arr[], int target) {
        // Your code here
         Arrays.sort(arr);
        
        int left = 0, right = arr.length - 1;
        int count = 0;
        
        // Two-pointer approach
        while (left < right) {
            if (arr[left] + arr[right] < target) {
                // All pairs from left to right are valid
                count += (right - left);
                left++; // Move the left pointer
            } else {
                right--; // Move the right pointer
            }
        }
        
        return count;
    }
}

//{ Driver Code Starts.

// <___________________________________________________MAIN-SOLUTION_____________________________________________________>
class Main {
    public static void main(String args[]) throws IOException {
        BufferedReader read = new BufferedReader(new InputStreamReader(System.in));
        int t = Integer.parseInt(read.readLine());

        while (t-- > 0) {
            String line = read.readLine().trim();
            String[] numsStr = line.split(" ");
            int[] nums = new int[numsStr.length];
            for (int i = 0; i < numsStr.length; i++) {
                nums[i] = Integer.parseInt(numsStr[i]);
            }

            int target = Integer.parseInt(read.readLine());

            Solution obj = new Solution();

            System.out.println(obj.countPairs(nums, target));

            System.out.println("~");
        }
    }
}
// } Driver Code Ends
// Output: 6
// Explanation: There are 6 pairs whose sum is less than 7: (2, 1), (2, 3), (2, 4), (1, 3), (1, 4) and (1, 5).
// Constraints:
// 1 <= arr.size() <= 105
// 0 <= arr[i] <= 104
// 1 <= target <= 104
// <___________________________________________________MAIN-SOLUTION_____________________________________________________>




Compilation Completed
For Input: 
7 2 5 3
8
Your Output: 
2
Expected Output: 
2