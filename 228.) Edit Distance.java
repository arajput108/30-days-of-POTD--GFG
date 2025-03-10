// 228.) Given two strings s1 and s2. Return the minimum number of operations required to convert s1 to s2.
// The possible operations are permitted:

// Insert a character at any position of the string.
// Remove any character from the string.
// Replace any character from the string with any other character.
// Examples:

// Input: s1 = "geek", s2 = "gesek"
// Output: 1
// Explanation: One operation is required, inserting 's' between two 'e' in s1.
// Input: s1 = "gfg", s2 = "gfg"
// Output: 0
// Explanation: Both strings are same.
// Input: s1 = "abcd", s2 = "bcfe"
// Output: 3
// Explanation: We can convert s1 into s2 by removing ‘a’, replacing ‘d’ with ‘f’ and inserting ‘e’ at the end. 
// Constraints:
// 1 ≤ s1.length(), s2.length() ≤ 103
// Both the strings are in lowercase.

// <______________________________________________SOLUTION___________________________________________________>

//{ Driver Code Starts
import java.io.*;
import java.lang.*;
import java.util.*;

class GFG {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int T = Integer.parseInt(br.readLine().trim());
        while (T-- > 0) {
            String s1 = br.readLine();
            String s2 = br.readLine();

            Solution ob = new Solution();
            int ans = ob.editDistance(s1, s2);
            System.out.println(ans);

            System.out.println("~");
        }
    }
}

// } Driver Code Ends


class Solution {
    int[][] dp;

    int solve(String s1, String s2, int i, int j) {
        if (i == s1.length()) return s2.length() - j;  // Insert remaining characters
        if (j == s2.length()) return s1.length() - i;  // Delete remaining characters

        if (dp[i][j] != -1) return dp[i][j];  // DP memoization check

        if (s1.charAt(i) == s2.charAt(j)) {
            return dp[i][j] = solve(s1, s2, i + 1, j + 1);  // No change needed
        } else {
            int insert = 1 + solve(s1, s2, i, j + 1);      // Insert
            int delete = 1 + solve(s1, s2, i + 1, j);      // Delete
            int replace = 1 + solve(s1, s2, i + 1, j + 1); // Correct Replace logic
            return dp[i][j] = Math.min(insert, Math.min(delete, replace));
        }
    }

    public int editDistance(String s1, String s2) {
        dp = new int[s1.length() + 1][s2.length() + 1];
        for (int[] row : dp) {
            Arrays.fill(row, -1); 
        }
        return solve(s1, s2, 0, 0);
    }
}


// Compilation Completed
Input: 
s1 =
geek
s2 =
gesek
Your Output:
1
Expected Output:
1