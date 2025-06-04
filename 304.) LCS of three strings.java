// 304.) Given three strings s1, s2, and s3 containing uppercase letters, lowercase letters, and digits, 
//       find the length of longest common sub-sequence in all three given strings.

// Examples:

// Input: s1 = "geeks", s2 = "geeksfor", s3 = "geeksforgeeks"
// Output: 5
// Explanation: "geeks"is the longest common subsequence with length 5.
// Input: s1 = "abcd1e2", s2 = "bc12ea", s3 = "bd1ea"
// Output: 3
// Explanation:  Longest common subsequence is "b1e" i.e. length = 3.
// Constraints:
// 1  ≤  s1.size(), s2.size(), s3.size()  ≤  100
// <-------------------------------------------------SOLUTION-------------------------------------------------->
class Solution {
    int lcsOf3(String s1, String s2, String s3) {
        // code here
        int n1 = s1.length(), n2 = s2.length(), n3 = s3.length();
        // Initialize DP array with -1 for memoization
        int[][][] dp = new int[n1][n2][n3];
        for (int i = 0; i < n1; i++) {
            for (int j = 0; j < n2; j++) {
                for (int k = 0; k < n3; k++) {
                    dp[i][j][k] = -1;
                }
            }
        }
        
        return solve(0, 0, 0, s1, s2, s3, n1, n2, n3, dp);
    }
    
    private int solve(int i, int j, int k, String s1, String s2, String s3, int n1, int n2, int n3, int[][][] dp) {
        // Base case: if any index goes out of bounds, return 0
        if (i >= n1 || j >= n2 || k >= n3) {
            return 0;
        }
        
        // If already computed, return the memoized result
        if (dp[i][j][k] != -1) {
            return dp[i][j][k];
        }
        
        // If characters match, include the character and move to next positions
        if (s1.charAt(i) == s2.charAt(j) && s2.charAt(j) == s3.charAt(k)) {
            dp[i][j][k] = 1 + solve(i + 1, j + 1, k + 1, s1, s2, s3, n1, n2, n3, dp);
        } else {
            // Otherwise, try excluding a character from each string and take the maximum
            dp[i][j][k] = Math.max(
                Math.max(
                    solve(i + 1, j, k, s1, s2, s3, n1, n2, n3, dp),
                    solve(i, j + 1, k, s1, s2, s3, n1, n2, n3, dp)
                ),
                solve(i, j, k + 1, s1, s2, s3, n1, n2, n3, dp)
            );
        }
        
        return dp[i][j][k];
    }
}



// Compilation Completed
Input: 
s1 =
geeks
s2 =
geeksfor
s3 =
geeksforgeeks
Your Output:
5
Expected Output:
5