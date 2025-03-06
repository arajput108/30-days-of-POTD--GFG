// 224.) Given two strings s1 and s2, return the length of their longest common subsequence (LCS). 
//       If there is no common subsequence, return 0.

// A subsequence is a sequence that can be derived from the given string by deleting some or no 
// elements without changing the order of the remaining elements. For example, "ABE" is a subsequence of "ABCDE".

// Examples:

// Input: s1 = "ABCDGH", s2 = "AEDFHR"
// Output: 3
// Explanation: The longest common subsequence of "ABCDGH" and "AEDFHR" is "ADH", which has a length of 3.
// Input: s1 = "ABC", s2 = "AC"
// Output: 2
// Explanation: The longest common subsequence of "ABC" and "AC" is "AC", which has a length of 2.
// Input: s1 = "XYZW", s2 = "XYWZ"
// Output: 3
// Explanation: The longest common subsequences of "XYZW" and "XYWZ" are "XYZ" and "XYW", both of length 3.
// Constraints:
// 1<= s1.size(), s2.size() <=103
// Both strings s1 and s2 contain only uppercase English letters.
// <______________________________________________SOLUTION___________________________________________________>
//{ Driver Code Starts
import java.io.*;
import java.lang.*;
import java.util.*;

class GFG {
    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);
        int test = sc.nextInt();
        while (test-- > 0) {
            String s1 = sc.next(); // Take both the strings as input
            String s2 = sc.next();

            Solution obj = new Solution();

            // Call the lcs function with the lengths of the strings as
            // parameters
            System.out.println(obj.lcs(s1, s2));
            System.out.println("~");
        }
        sc.close();
    }
}

// } Driver Code Ends

// <___________________________________________________MAIN-SOLUTION_____________________________________________________>

class Solution {
    static int lcs(String s1, String s2) {
        // code here
        int m = s1.length();
        int n = s2.length();
        int[][] dp = new int[m+1][n+1];
        
        for(int i=1; i<= m; i++){
            for(int j=1; j<=n; j++){
                if(s1.charAt(i-1) == s2.charAt(j-1)){
                    dp[i][j] = dp[i-1][j-1] + 1;
                }else{
                    dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1]);
                }
            }
        }
        return dp[m][n];
    }
}








// Compilation Completed
Input: 
s1 =
ABCDGH
s2 =
AEDFHR
Your Output:
3
Expected Output:
3