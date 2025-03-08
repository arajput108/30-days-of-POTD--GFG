// 226.) Given a string s, your task is to find the longest palindromic substring within s.

// A substring is a contiguous sequence of characters within a string, defined as s[i...j] 
// where 0 ≤ i ≤ j < len(s).

// A palindrome is a string that reads the same forward and backward. More formally, s is a 
// palindrome if reverse(s) == s.

// Note: If there are multiple palindromic substrings with the same length, return the first 
// occurrence of the longest palindromic substring from left to right.

// Examples :

// Input: s = “forgeeksskeegfor” 
// Output: “geeksskeeg”
// Explanation: There are several possible palindromic substrings like “kssk”, “ss”, “eeksskee” etc. 
// But the substring “geeksskeeg” is the longest among all.
// Input: s = “Geeks” 
// Output: “ee”
// Explanation: "ee" is the longest palindromic substring of "Geeks". 
// Input: s = “abc” 
// Output: “a”
// Explanation: "a", "b" and "c" are longest palindromic substrings of same length. So, the first 
// occurrence is returned.
// Constraints:
// 1 ≤ s.size() ≤ 103
// s consist of only lowercase English letters.

// <______________________________________________SOLUTION___________________________________________________>
//{ Driver Code Starts
// Initial Template for Java

import java.io.*;
import java.util.*;

class GFG {
    public static void main(String args[]) throws IOException {
        BufferedReader read = new BufferedReader(new InputStreamReader(System.in));
        int t = Integer.parseInt(read.readLine());
        while (t-- > 0) {
            String S = read.readLine();

            Solution ob = new Solution();
            System.out.println(ob.longestPalindrome(S));
            System.out.println("~");
        }
    }
}

// } Driver Code Ends


// <___________________________________________________MAIN-SOLUTION_____________________________________________________>

class Solution {
    static String longestPalindrome(String s) {
        // code here
         if (s == null || s.length() == 0) {
            return "";
        }

        int start = 0, maxLength = 0;

        for (int i = 0; i < s.length(); i++) {
            int len1 = expandFromCenter(s, i, i);     // Odd-length palindrome
            int len2 = expandFromCenter(s, i, i + 1); // Even-length palindrome
            int len = Math.max(len1, len2);

            if (len > maxLength) {
                maxLength = len;
                start = i - (len - 1) / 2;
            }
        }
        return s.substring(start, start + maxLength);
    }

    static int expandFromCenter(String s, int left, int right) {
        while (left >= 0 && right < s.length() && s.charAt(left) == s.charAt(right)) {
            left--;
            right++;
        }
        return right - left - 1; // Length of palindrome
    }
}







// Compilation Completed
Input: 
s =
forgeeksskeegfor
Your Output:
geeksskeeg
Expected Output:
geeksskeeg