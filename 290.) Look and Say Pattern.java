// 290.) Given an integer n. Return the nth row of the following look-and-say pattern.
// 1
// 11
// 21
// 1211
// 111221
// Look-and-Say Pattern:

// To generate a member of the sequence from the previous member, read off the digits of the previous member, 
// counting the number of digits in groups of the same digit. For example:

// 1 is read off as "one 1" or 11.
// 11 is read off as "two 1s" or 21.
// 21 is read off as "one 2, then one 1" or 1211.
// 1211 is read off as "one 1, one 2, then two 1s" or 111221.
// 111221 is read off as "three 1s, two 2s, then one 1" or 312211.
// Examples:

// Input: n = 5
// Output: 111221
// Explanation: The 5th row of the given pattern will be 111221.
// Input: n = 3
// Output: 21
// Explanation: The 3rd row of the given pattern will be 21.

// Constraints:
// 1 ≤ n ≤ 30
// <-------------------------------------------------SOLUTION-------------------------------------------------->
//{ Driver Code Starts
// Initial Template for Java
import java.io.*;
import java.util.*;

class GFG {
    public static void main(String args[]) throws IOException {
        BufferedReader read = new BufferedReader(new InputStreamReader(System.in));
        int t = Integer.parseInt(read.readLine());

        while (t-- > 0) {
            int n = Integer.parseInt(read.readLine());

            Solution ob = new Solution();

            System.out.println(ob.countAndSay(n));

            System.out.println("~");
        }
    }
}
// } Driver Code Ends

// <-------------------------------------------MAIN-SOLUTION-------------------------------------------------->

class Solution {
    public String countAndSay(int n) {
        // code here
         if(n<=1) return "1";
        String str=countAndSay(n-1);
        StringBuilder sb=new StringBuilder();
        int cnt=0;
        char ch=str.charAt(0);
        for(int i=0;i<str.length();i++)
        {
            if(str.charAt(i)!=ch)
            {
                sb.append(String.valueOf(cnt));
                sb.append(ch);
                ch=str.charAt(i);
                cnt=0;
            }
            cnt++;
        }
        sb.append(String.valueOf(cnt));
        sb.append(ch);
        return sb.toString();
    }
}




// Compilation Completed
Input: 
n =
5
Your Output:
111221
Expected Output:
111221