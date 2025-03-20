// 238.) In daily share trading, a trader buys shares and sells them on the same day. If the trader is 
//       allowed to make at most 2 transactions in a day, find out the maximum profit that a share trader 
//       could have made.

// You are given an array prices[] representing stock prices throughout the day. Note that the second 
// transaction can only start after the first one is complete (buy->sell->buy->sell).

// Examples:

// Input: prices[] = [10, 22, 5, 75, 65, 80]
// Output: 87
// Explanation: 
// Trader will buy at 10 and sells at 22. 
// Profit earned in 1st transaction = 22 - 10 = 12. 
// Then he buys at 5 and sell at 80. 
// Profit earned in 2nd transaction = 80 - 5 = 75. 
// Total profit earned = 12 + 75 = 87. 
// Input: prices[] = [2, 30, 15, 10, 8, 25, 80]
// Output: 100
// Explanation: 
// Trader will buy at 2 and sells at 30. 
// Profit earned in 1st transaction = 30 - 2 = 28. 
// Then he buys at 8 and sell at 80. 
// Profit earned in 2nd transaction = 80 - 8 = 72. 
// Total profit earned = 28 + 72 = 100.
// Constraints:
// 1 <= prices.size() <= 105
// 1 <= prices[i] <= 105
// <______________________________________________SOLUTION___________________________________________________>
//{ Driver Code Starts
import java.io.*;
import java.util.*;

class Sorting {
    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int t = Integer.parseInt(br.readLine());
        for (int g = 0; g < t; g++) {
            String[] str = (br.readLine()).trim().split(" ");
            int arr[] = new int[str.length];
            for (int i = 0; i < str.length; i++) arr[i] = Integer.parseInt(str[i]);
            System.out.println(new Solution().maxProfit(arr));
            System.out.println("~");
        }
    }
}
// } Driver Code Ends


// <___________________________________________________MAIN-SOLUTION_____________________________________________________>

class Solution {
    public static int maxProfit(int[] prices) {
        // code here
         int buy1 = Integer.MIN_VALUE, buy2 = Integer.MIN_VALUE;
        int sell1 = 0, sell2 = 0;
       
        for (int price : prices) {
            buy1 = Math.max(buy1, -price);
            sell1 = Math.max(sell1, buy1 + price);
            buy2 = Math.max(buy2, sell1 - price);
            sell2 = Math.max(sell2, buy2 + price);
        }
       
        return sell2;
    }
}

// Compilation Completed
Input: 
prices[] =
10 22 5 75 65 80
Your Output:
87
Expected Output:
87
