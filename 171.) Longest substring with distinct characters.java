// 171.) Given a string s, find the length of the longest substring with all distinct characters. 

// Examples:

// Input: s = "geeksforgeeks"
// Output: 7
// Explanation: "eksforg" is the longest substring with all distinct characters.
// Input: s = "aaa"
// Output: 1
// Explanation: "a" is the longest substring with all distinct characters.
// Input: s = "abcdefabcbb"
// Output: 6
// Explanation: The longest substring with all distinct characters is "abcdef", which has a length of 6.
// Constraints:
// 1<= s.size()<=3*104
// <______________________________________________SOLUTION___________________________________________________>
//{ Driver Code Starts
// Initial Template for Java

import java.io.*;
import java.util.HashMap;

class GFG {
    public static void main(String args[]) throws IOException {
        BufferedReader read = new BufferedReader(new InputStreamReader(System.in));
        int t = Integer.parseInt(read.readLine());
        while (t-- > 0) {
            String s = read.readLine();
            Solution ob = new Solution();
            System.out.println(ob.longestUniqueSubstr(s));
            System.out.println("~");
        }
    }
}

// } Driver Code Ends


// User function Template for Java

// <___________________________________________________MAIN-SOLUTION_____________________________________________________>
class Solution {
    public int longestUniqueSubstr(String s) {
        // code here
         HashMap<Character,Integer> mp=new HashMap<>();
        int l=0,r=0,maxi=0;
        while(r<s.length()){
            char c=s.charAt(r);
            if(mp.get(c)!=null){
                l=Math.max(mp.get(c)+1,l);
            }
           // System.out.println(r+" "+c+" --"+mp.get(c)+"->"+l);
            mp.put(s.charAt(r),r);
            maxi=Math.max(r-l+1,maxi);
            r++;
        }
        return maxi;
    }
}





Compilation Completed
For Input: 
geeksforgeeks
Your Output: 
7
Expected Output: 
7