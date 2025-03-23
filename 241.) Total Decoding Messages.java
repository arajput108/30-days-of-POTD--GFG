// 241.) A message containing letters A-Z is being encoded to numbers using the following mapping:

// 'A' -> 1
// 'B' -> 2
// ...
// 'Z' -> 26

// You are given a string digits. You have to determine the total number of ways that message can be decoded.

// Examples:

// Input: digits = "123"
// Output: 3
// Explanation: "123" can be decoded as "ABC"(1, 2, 3), "LC"(12, 3) and "AW"(1, 23).
// Input: digits = "90"
// Output: 0
// Explanation: "90" cannot be decoded, as it's an invalid string and we cannot decode '0'.
// Input: digits = "05"
// Output: 0
// Explanation: "05" cannot be mapped to "E" because of the leading zero ("5" is different from "05"), the 
//              string is not a valid encoding message.
// Constraints:
// 1 ≤ digits.size() ≤ 103

// <______________________________________________SOLUTION___________________________________________________>
//{ Driver Code Starts
// Initial Template for Java
import java.io.*;
import java.lang.*;
import java.util.*;

class GFG {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        PrintWriter out = new PrintWriter(System.out);
        int T = Integer.parseInt(br.readLine().trim());
        while (T-- > 0) {
            String digits = br.readLine().trim();
            Solution ob = new Solution();
            int ans = ob.countWays(digits);
            out.println(ans);

            out.println("~");
        }
        out.close();
    }
}

// } Driver Code Ends


// User function Template for Java



// <___________________________________________________MAIN-SOLUTION_____________________________________________________>

class Solution {
    public int countWays(String digits) {
        // code here
         int[] dp = new int[digits.length()];
        Arrays.fill(dp, -1);
        return solve(digits, dp, 0);
    }
    
    private int solve(String digits, int[] dp, int ind) {
        if (ind == digits.length()) return 1;
        if (digits.charAt(ind) == '0') return 0;
        if (dp[ind] != -1) return dp[ind];
        
        int res = solve(digits, dp, ind + 1);
        
        if (ind + 1 < digits.length()) {
            int num = (digits.charAt(ind) - '0') * 10 + (digits.charAt(ind + 1) - '0');
            if (num <= 26) {
                res += solve(digits, dp, ind + 2);
            }
        }
        
        return dp[ind] = res;
    }
}



// Compilation Completed
Input: 
digits =
123
Your Output:
3
Expected Output:
3