// 232.) Given an integer array coins[ ] representing different denominations of currency and an integer sum, 
//       find the number of ways you can make sum by using different combinations from coins[ ]. 
// Note: Assume that you have an infinite supply of each type of coin. Therefore, you can use any coin as many 
//       times as you want.
// Answers are guaranteed to fit into a 32-bit integer. 

// Examples:

// Input: coins[] = [1, 2, 3], sum = 4
// Output: 4
// Explanation: Four Possible ways are: [1, 1, 1, 1], [1, 1, 2], [2, 2], [1, 3].
// Input: coins[] = [2, 5, 3, 6], sum = 10
// Output: 5
// Explanation: Five Possible ways are: [2, 2, 2, 2, 2], [2, 2, 3, 3], [2, 2, 6], [2, 3, 5] and [5, 5].
// Input: coins[] = [5, 10], sum = 3
// Output: 0
// Explanation: Since all coin denominations are greater than sum, no combination can make the target sum.
// Constraints:
// 1 <= sum <= 103
// 1 <= coins[i] <= 104
// 1 <= coins.size() <= 103
// <______________________________________________SOLUTION___________________________________________________>
//{ Driver Code Starts
// Initial Template for Java

import java.io.*;
import java.util.*;

class GfG {
    public static void main(String args[]) throws IOException {
        BufferedReader read = new BufferedReader(new InputStreamReader(System.in));
        int t = Integer.parseInt(read.readLine());

        while (t-- > 0) {
            String inputLine[] = read.readLine().trim().split(" ");
            int n = inputLine.length;
            int arr[] = new int[n];

            for (int i = 0; i < n; i++) {
                arr[i] = Integer.parseInt(inputLine[i]);
            }
            int sum = Integer.parseInt(read.readLine());
            Solution ob = new Solution();
            System.out.println(ob.count(arr, sum));
            System.out.println("~");
        }
    }
}

// } Driver Code Ends



// <___________________________________________________MAIN-SOLUTION_____________________________________________________>

class Solution {
    public int count(int coins[], int sum) {
        // code here.
          int n = coins.length;
        Integer[][] memo = new Integer[n + 1][sum + 1];
        return countHelper(coins, 0, sum, memo);
    }
    
    private int countHelper(int[] coins, int index, int sum, Integer[][] memo) {
        if (index >= coins.length) {
            return 0;
        }
        
        if (sum == 0) {
            return 1;
        }
        
        if (memo[index][sum] != null) {
            return memo[index][sum];
        }
        
        int notTake = countHelper(coins, index + 1, sum, memo);
        
        int take = 0;
        if (sum - coins[index] >= 0) take = countHelper(coins, index, sum - coins[index], memo);
        
        return memo[index][sum] = take + notTake;
    }
}



// Compilation Completed
Input: 
coins [] =
1 2 3
sum =
4
Your Output:
4
Expected Output:
4