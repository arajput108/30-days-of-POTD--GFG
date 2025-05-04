// 282.) Given a string str, your task is to find the length of the smallest window that contains all the 
//       characters of the given string at least once.

// Example:

// Input: str = "aabcbcdbca"
// Output: 4
// Explanation: Sub-String "dbca" has the smallest length that contains all the characters of str.
// Input: str = "aaab"
// Output: 2
// Explanation: Sub-String "ab" has the smallest length that contains all the characters of str.
// Input: str = "geeksforgeeks"
// Output: 8
// Explanation: There are multiple substring with smallest length that contains all characters of str, 
//              "geeksfor" and "forgeeks". 
// Constraints:
// 1 ≤ str.size() ≤ 105
// str contains only lower-case english alphabets.
// <-------------------------------------------------SOLUTION-------------------------------------------------->
//{ Driver Code Starts
// Initial Template for Java

import java.io.*;
import java.lang.*;
import java.util.*;

class GFG {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int t = Integer.parseInt(br.readLine().trim());
        while (t-- > 0) {
            String str = br.readLine();

            Solution obj = new Solution();
            System.out.println(obj.findSubString(str));

            System.out.println("~");
        }
    }
}

// } Driver Code Ends


// User function Template for Java

// <-------------------------------------------MAIN-SOLUTION-------------------------------------------------->

class Solution {
    public int findSubString(String str) {
        // code here
         Set<Character> hs=new HashSet<>();
        for(char ch:str.toCharArray()){
            hs.add(ch);
        }
         int ans = Integer.MAX_VALUE;
        int totalUniqueCharacters=hs.size();
        Map<Character,Integer> hm=new HashMap<>();
        int j=0;
        for(int i=0;i<str.length();i++){
            hm.put(str.charAt(i),hm.getOrDefault(str.charAt(i),0)+1);
            
            if(hm.size()==totalUniqueCharacters){
                while(hm.get(str.charAt(j))>1){
                    int freq=hm.get(str.charAt(j));
                    hm.put(str.charAt(j),freq-1);
                    j++;
                }
                ans=Math.min(ans,i-j+1);
            }
            
        }
        return ans;
    }
}




// Compilation Completed
Input: 
str =
aabcbcdbca
Your Output:
4
Expected Output:
4