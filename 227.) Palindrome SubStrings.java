// 227.) Given a string s, count all palindromic sub-strings present in the string. The length of the 
//       palindromic sub-string must be greater than or equal to 2. 

// Examples

// Input: s = "abaab"
// Output: 3
// Explanation: All palindromic substrings are : "aba" , "aa" , "baab".
// Input: s = "aaa"
// Output: 3
// Explanation: All palindromic substrings are : "aa", "aa", "aaa".
// Input: s = "abbaeae"
// Output: 4
// Explanation: All palindromic substrings are : "bb" , "abba" , "aea", "eae".
// Constraints:
// 2 ≤ s.size() ≤ 103
// string contains only lowercase english characters

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

            System.out.println(obj.countPS(s));

            System.out.println("~");
        }
    }
}
// } Driver Code Ends


// <___________________________________________________MAIN-SOLUTION_____________________________________________________>

class Solution {
    public int countPS(String s) {
        // code here
            int count = 0;
        for (int i = 0; i < s.length(); i++) {
            count += expandAroundCenter(s, i, i);
            count += expandAroundCenter(s, i, i + 1);
        }
        return count;
    }
    public int expandAroundCenter(String s, int left, int right) {
        int count = 0;
        while (left >= 0 && right < s.length() && s.charAt(left) == s.charAt(right)) {
            if (right - left + 1 >= 2) {
                count++;
            }
            left--;
            right++;
        }
        return count;
    }
}


// Compilation Completed
Input: 
s =
abaab
Your Output:
3
Expected Output:
3