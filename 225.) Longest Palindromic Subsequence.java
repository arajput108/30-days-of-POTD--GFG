// 225.) Given a string s, return the length of the longest palindromic subsequence.

// A subsequence is a sequence that can be derived from the given sequence by deleting some or no 
// elements without changing the order of the remaining elements.

// A palindromic sequence is a sequence that reads the same forward and backward.

// Examples:

// Input: s = "bbabcbcab"
// Output: 7
// Explanation: Subsequence "babcbab" is the longest subsequence which is also a palindrome.
// Input: s = "abcd"
// Output: 1
// Explanation: "a", "b", "c" and "d" are palindromic and all have a length 1.
// Input: s = "agbdba"
// Output: 5
// Explanation: The longest palindromic subsequence is "abdba", which has a length of 5. The characters 
// in this subsequence are taken from the original string "agbdba", and they maintain the order of the 
// string while forming a palindrome.
// Constraints:
// 1 ≤ s.size() ≤ 1000
// The string contains only lowercase letters.
// <______________________________________________SOLUTION___________________________________________________>
//{ Driver Code Starts
// Initial Template for Java

import java.io.*;
import java.util.*;

class GfG {
    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);
        int t = sc.nextInt();
        while (t-- > 0) {
            String s = sc.next();
            Solution obj = new Solution();
            System.out.println(obj.longestPalinSubseq(s));

            System.out.println("~");
        }
    }
}
// } Driver Code Ends


// User function Template for Java



// <___________________________________________________MAIN-SOLUTION_____________________________________________________>

class Solution {
    public int longestPalinSubseq(String s) {
        // code here
         String rev = new StringBuilder(s).reverse().toString();
        int n = s.length();
        int[][] dp = new int[n+1][n+1];
        for(int i =1;i<=n;i++){
            for(int j =1;j<=n;j++){
                if(s.charAt(i-1) == rev.charAt(j-1)){
                    dp[i][j] = dp[i-1][j-1]+1;
                }else{
                    dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1]);
                }
            }
        }
        return dp[n][n];
    }
}

// Compilation Completed
Input: 
s =
bbabcbcab
Your Output:
7
Expected Output:
7