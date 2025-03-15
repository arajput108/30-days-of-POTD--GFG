// 233.) You are given an array coins[], where each element represents a coin of a different denomination, 
//       and a target value sum. You have an unlimited supply of each coin type {coins1, coins2, ..., coinsm}.

// Your task is to determine the minimum number of coins needed to obtain the target sum. If it is not possible 
// to form the sum using the given coins, return -1.

// Examples:

// Input: coins[] = [25, 10, 5], sum = 30
// Output: 2
// Explanation: Minimum 2 coins needed, 25 and 5  
// Input: coins[] = [9, 6, 5, 1], sum = 19
// Output: 3
// Explanation: 19 = 9 + 9 + 1
// Input: coins[] = [5, 1], sum = 0
// Output: 0
// Explanation: For 0 sum, we do not need a coin
// Input: coins[] = [4, 6, 2], sum = 5
// Output: -1
// Explanation: Not possible to make the given sum.
 
// Constraints:
// 1 ≤ sum * coins.size() ≤ 106
// 0 <= sum <= 104
// 1 <= coins[i] <= 104
// 1 <= coins.size() <= 103
// <______________________________________________SOLUTION___________________________________________________>
//{ Driver Code Starts
// Initial Template for Java
import java.io.*;
import java.lang.*;
import java.util.*;


// } Driver Code Ends

class Solution {

    public int minCoins(int coins[], int sum) {
        // code here
         int[] dp = new int[sum+1];
        Arrays.fill(dp,Integer.MAX_VALUE);
        dp[0] = 0;
        for(int coin : coins)
        {
            for(int j=coin;j<=sum;j++)
            {
                if(dp[j-coin]!=Integer.MAX_VALUE)
                {
                    dp[j] = Math.min(dp[j],1+dp[j-coin]);
                }
            }
        }
        return dp[sum]==Integer.MAX_VALUE?-1:dp[sum];
    }
}


//{ Driver Code Starts.
// <___________________________________________________MAIN-SOLUTION_____________________________________________________>

class GFG {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int t = Integer.parseInt(br.readLine());
        while (t-- > 0) {
            int k = Integer.parseInt(br.readLine());
            String line = br.readLine();
            String[] tokens = line.split(" ");

            // Create an ArrayList to store the integers
            ArrayList<Integer> array = new ArrayList<>();

            // Parse the tokens into integers and add to the array
            for (String token : tokens) {
                array.add(Integer.parseInt(token));
            }

            int[] arr = new int[array.size()];
            int idx = 0;
            for (int i : array) arr[idx++] = i;
            Solution obj = new Solution();
            int res = obj.minCoins(arr, k);

            System.out.println(res);

            System.out.println("~");
        }
    }
}

// } Driver Code Ends




// Compilation Completed
Input: 
sum =
30
coins[] =
25 10 5
Your Output:
2
Expected Output:
2