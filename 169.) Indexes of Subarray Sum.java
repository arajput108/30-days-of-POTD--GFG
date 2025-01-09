// 169.) Given an array arr[] containing only non-negative integers, your task is to find a continuous 
//       subarray (a contiguous sequence of elements) whose sum equals a specified value target. You 
//       need to return the 1-based indices of the leftmost and rightmost elements of this subarray. 
//       You need to find the first subarray whose sum is equal to the target.

// Note: If no such array is possible then, return [-1].

// Examples:

// Input: arr[] = [1, 2, 3, 7, 5], target = 12
// Output: [2, 4]
// Explanation: The sum of elements from 2nd to 4th position is 12.
// Input: arr[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], target = 15
// Output: [1, 5]
// Explanation: The sum of elements from 1st to 5th position is 15.
// Input: arr[] = [5, 3, 4], target = 2
// Output: [-1]
// Explanation: There is no subarray with sum 2.
// Constraints:
// 1 <= arr.size()<= 106
// 0 <= arr[i] <= 103
// 0 <= target <= 109
// <______________________________________________SOLUTION___________________________________________________>
//{ Driver Code Starts
import java.io.*;
import java.util.*;

class Main {
    public static void main(String args[]) throws IOException {
        BufferedReader read = new BufferedReader(new InputStreamReader(System.in));
        int t = Integer.parseInt(read.readLine().trim());

        while (t-- > 0) {
            String line = read.readLine().trim();
            String[] numsStr = line.split(" ");
            int[] nums = new int[numsStr.length];
            for (int i = 0; i < numsStr.length; i++) {
                nums[i] = Integer.parseInt(numsStr[i]);
            }

            int d = Integer.parseInt(read.readLine().trim());

            Solution ob = new Solution();
            ArrayList<Integer> result = ob.subarraySum(nums, d);
            // Print all elements in the result list
            for (int i : result) {
                System.out.print(i + " ");
            }
            System.out.println(); // Print a new line after the result
            System.out.println("~");
        }
    }
}

// } Driver Code Ends


// <___________________________________________________MAIN-SOLUTION_____________________________________________________>
class Solution {
    static ArrayList<Integer> subarraySum(int[] arr, int target) {
        // code here
         int length = arr.length;
        if (length == 0 || arr == null) {
            return new ArrayList<>();
        }
        ArrayList<Integer> result = new ArrayList<>();
        int left = 0;
        int right = 0;
        int currentSum = 0;
        while (right < length) {
            currentSum += arr[right];
            while (left < length && currentSum > target) {
                currentSum -= arr[left];
                left++;
            }
            if (currentSum == target) {
                result.add(left + 1);
                result.add(right + 1);
                return result;
            }
            right++;
        }
        result.add(-1);
        return result;
    }
}





Compilation Completed
For Input: 
1 2 3 7 5
12
Your Output: 
2 4
Expected Output: 
2 4