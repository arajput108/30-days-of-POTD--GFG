// 237.) In the stock market, a person buys a stock and sells it on some future date. You are given an array 
//       prices[] representing stock prices on different days and a positive integer k, find out the maximum 
//       profit a person can make in at-most k transactions.

// A transaction consists of buying and subsequently selling a stock and new transaction can start only when 
// the previous transaction has been completed.

// Examples :

// Input: prices[] = [10, 22, 5, 80], k = 2
// Output: 87
// Explaination:
// 1st transaction: Buy at 10 and sell at 22. 
// 2nd transaction : Buy at 5 and sell at 80.
// Total Profit will be 12 + 75 = 87.
// Input: prices[] = [20, 580, 420, 900], k = 3
// Output: 1040
// Explaination: 
// 1st transaction: Buy at 20 and sell at 580. 
// 2nd transaction : Buy at 420 and sell at 900.
// Total Profit will be 560 + 480 = 1040.
// Input: prices[] = [100, 90, 80, 50, 25],  k = 1
// Output: 0
// Explaination: Selling price is decreasing continuously
// leading to loss. So seller cannot have any profit.
// Constraints:
// 1 ≤ prices.size() ≤ 103
// 1 ≤ k ≤ 200
// 1 ≤ prices[i] ≤ 103
// <______________________________________________SOLUTION___________________________________________________>
//{ Driver Code Starts
import java.io.*;
import java.util.*;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int tc = Integer.parseInt(br.readLine());

        for (int t = 0; t < tc; t++) {
            String[] input = br.readLine().split(" ");
            int arr[] = new int[input.length];

            for (int i = 0; i < arr.length; i++) arr[i] = Integer.parseInt(input[i]);

            // Read the integer k
            int k = Integer.parseInt(br.readLine());

            // Call the solution function
            Solution obj = new Solution();
            System.out.println(obj.maxProfit(arr, k));
            System.out.println("~");
        }
    }
}
// } Driver Code Ends


// <___________________________________________________MAIN-SOLUTION_____________________________________________________>

class Solution {
    static int maxProfit(int prices[], int k) {
        // code here
         if (prices == null || prices.length == 0 || k == 0) {
            return 0;
        }

        int n = prices.length;

        
        if (k >= n / 2) {
            int maxProfit = 0;
            for (int i = 1; i < n; i++) {
                if (prices[i] > prices[i - 1]) {
                    maxProfit += prices[i] - prices[i - 1];
                }
            }
            return maxProfit;
        }


        int[][] dp = new int[k + 1][n];

        for (int i = 1; i <= k; i++) {
            int maxDiff = -prices[0]; 
            for (int j = 1; j < n; j++) {
                dp[i][j] = Math.max(dp[i][j - 1], prices[j] + maxDiff);
                maxDiff = Math.max(maxDiff, dp[i - 1][j] - prices[j]);
            }
        }

        return dp[k][n - 1];
    }
}



// Compilation Completed
Input: 
prices[] =
10 22 5 80
k =
2
Your Output:
87
Expected Output:
87
