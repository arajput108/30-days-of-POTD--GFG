// 222.) Given an array arr[] of non-negative integers, the task is to find the length of the Longest Strictly 
//       Increasing Subsequence (LIS).

//       A subsequence is strictly increasing if each element in the subsequence is strictly less than the next 
//       element.

// Examples:

// Input: arr[] = [5, 8, 3, 7, 9, 1]
// Output: 3
// Explanation: The longest strictly increasing subsequence could be [5, 7, 9], which has a length of 3.
// Input: arr[] = [0, 8, 4, 12, 2, 10, 6, 14, 1, 9, 5, 13, 3, 11, 7, 15]
// Output: 6
// Explanation: One of the possible longest strictly increasing subsequences is [0, 2, 6, 9, 13, 15], which has a 
//              length of 6.
// Input: arr[] = [3, 10, 2, 1, 20]
// Output: 3
// Explanation: The longest strictly increasing subsequence could be [3, 10, 20], which has a length of 3.
// Constraints:
// 1 ≤ arr.size() ≤ 103
// 0 ≤ arr[i] ≤ 106
// <______________________________________________SOLUTION___________________________________________________>
//{ Driver Code Starts
import java.io.*;
import java.util.*;

class Geeks {
    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int t = Integer.parseInt(br.readLine()); // Number of test cases
        for (int g = 0; g < t; g++) {
            String[] str = (br.readLine())
                               .trim()
                               .split(" "); // Read the input for the current test case
            int arr[] = new int[str.length];
            // Convert input string into an integer array
            for (int i = 0; i < str.length; i++) {
                arr[i] = Integer.parseInt(str[i]);
            }
            // Call the solution method and print the result
            System.out.println(new Solution().lis(arr));
            System.out.println("~");
        }
    }
}
// } Driver Code Ends


// <___________________________________________________MAIN-SOLUTION_____________________________________________________>

class Solution {
    static int lis(int arr[]) {
        // code here
          int n = arr.length;
        int[] dp = new int[n];
        if(n==0)
        {
            return 0;
        }
       for(int i=0;i<n;i++)
        {
            dp[i] = 1;
        }
        for(int i=1;i<n;i++)
        {
            for(int j=0;j<i;j++)
            {
                if(arr[j]<arr[i])
            {
            dp[i] = Math.max(dp[i],dp[j]+1);
            }
            }
        }
       int maxlin = 0;
       for(int i=0;i<n;i++)
       {
           maxlin = Math.max(maxlin,dp[i]);
       }
       return maxlin;
    }
}



// Compilation Completed
Input: 
arr[] =
5 8 3 7 9 1
Your Output:
3
Expected Output:
3