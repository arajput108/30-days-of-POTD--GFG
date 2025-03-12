// 230.) Given an array of integers cost[] where cost[i] is the cost of the ith step on a staircase. 
//       Once the cost is paid, you can either climb one or two steps. Return the minimum cost to reach 
//       the top of the floor.
// Assume 0-based Indexing. You can either start from the step with index 0, or the step with index 1.

// Examples:

// Input: cost[] = [10, 15, 20]
// Output: 15
// Explanation: Cheapest option is to start at cost[1], pay that cost, and go to the top.



// Input: cost[] = [1, 100, 1, 1, 1, 100, 1, 1, 100, 1]
// Output: 6
// Explanation: Cheapest option is to start on cost[0], and only step on 1s, skipping cost[3].


// Constraints:
// 2 ≤ cost.size() ≤ 105
// 0 ≤ cost[i] ≤ 999
// <______________________________________________SOLUTION___________________________________________________>
//{ Driver Code Starts
import java.io.*;
import java.util.*;

class GFG {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        int t = Integer.parseInt(br.readLine().trim());
        while (t-- > 0) {
            String[] str = br.readLine().trim().split(" ");
            int n = str.length;
            int[] arr = new int[n];
            for (int i = 0; i < n; i++) {
                arr[i] = Integer.parseInt(str[i]);
            }
            Solution sln = new Solution();
            int res = sln.minCostClimbingStairs(arr);
            System.out.println(res);
            System.out.println("~");
        }
    }
}
// } Driver Code Ends


//Back-end complete function Template for Java


// <___________________________________________________MAIN-SOLUTION_____________________________________________________>

class Solution {
    static int minCostClimbingStairs(int[] cost) {
        // Write your code here
          int n = cost.length;
        int[] dp = new int[n+1];
      
        for(int i = n-1; i >= 0; i--) {
            int onestep = cost[i] + dp[i + 1];
            int twostep = Integer.MAX_VALUE;
            if(i + 2 <= n) twostep = cost[i] + dp[i +2];
            dp[i] = Math.min(onestep, twostep);
        }
        return Math.min(dp[0], dp[1]);
    }
};


// Compilation Completed
Input: 
cost [] =
10 15 20
Your Output:
15
Expected Output:
15