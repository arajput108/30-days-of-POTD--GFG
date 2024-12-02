// 129.) Given two strings, one is a text string txt and the other is a pattern string pat. 
//       The task is to print the indexes of all the occurrences of the pattern string in the text string. 
//       Use 0-based indexing while returning the indices. 
// Note: Return an empty list in case of no occurrences of pattern.

// Examples :

// Input: txt = "abcab", pat = "ab"
// Output: [0, 3]
// Explanation: The string "ab" occurs twice in txt, one starts at index 0 and the other at index 3. 
// Input: txt = "abesdu", pat = "edu"
// Output: []
// Explanation: There's no substring "edu" present in txt.
// Input: txt = "aabaacaadaabaaba", pat = "aaba"
// Output: [0, 9, 12]
// Explanation:

// Constraints:
// 1 ≤ txt.size() ≤ 106
// 1 ≤ pat.size() < txt.size()
// Both the strings consist of lowercase English alphabets.

// <______________________________________________SOLUTION___________________________________________________>
//{ Driver Code Starts
// Initial Template for Java

import java.io.*;
import java.util.*;

class GFG {
    public static void main(String args[]) throws IOException {
        Scanner sc = new Scanner(System.in);
        int t = sc.nextInt();
        while (t-- > 0) {
            String s, patt;
            s = sc.next();
            patt = sc.next();

            Solution ob = new Solution();

            ArrayList<Integer> res = ob.search(patt, s);
            if (res.size() == 0)
                System.out.print("[]");
            else {
                for (int i = 0; i < res.size(); i++) System.out.print(res.get(i) + " ");
            }
            System.out.println();
        }
    }
}
// } Driver Code Ends


// User function Template for Java

class Solution {

    ArrayList<Integer> search(String pat, String txt) {
        // your code here
               ArrayList<Integer> res = new ArrayList<>();
        int m = pat.length();
        int n = txt.length();
        // Step 1: Compute the longest prefix-suffix (LPS) array for the pattern
        int[] lps = computeLPSArray(pat);
        // Step 2: Perform the KMP search
        int i = 0;  // Index for txt
        int j = 0;  // Index for pat
        while (i < n) {
            if (pat.charAt(j) == txt.charAt(i)) {
                i++;
                j++;
            }
            if (j == m) {
                // Pattern found, add the index (1-based indexing)
                res.add(i - j );
                j = lps[j - 1];  // Use the LPS array to avoid unnecessary comparisons
            } else if (i < n && pat.charAt(j) != txt.charAt(i)) {
                // Mismatch after j matches
                if (j != 0) {
                    j = lps[j - 1];  // Use the LPS array to skip characters
                } else {
                    i++;
                }
            }
        }
        return res;
    }
    // Compute the Longest Prefix Suffix (LPS) array for pattern
    private int[] computeLPSArray(String pat) {
        int m = pat.length();
        int[] lps = new int[m];
        int length = 0;  // Length of the previous longest prefix suffix
        int i = 1;
        
        // Build the LPS array
        while (i < m) {
            if (pat.charAt(i) == pat.charAt(length)) {
                length++;
                lps[i] = length;
                i++;
            } else {
                if (length != 0) {
                    length = lps[length - 1];  // Try the previous longest prefix suffix
                } else {
                    lps[i] = 0;
                    i++;
                }
            }
        }
        return lps;
    }
}
// Compilation Completed

For Input: 
geeksforgeeks
geek
Your Output: 
0 8
Expected Output: 
0 8