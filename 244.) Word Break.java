// 244.) You are given a string s and a list dictionary[] of words. Your task is to determine whether the 
//       string s can be formed by concatenating one or more words from the dictionary[].

// Note: From dictionary[], any word can be taken any number of times and in any order.

// Examples :

// Input: s = "ilike", dictionary[] = ["i", "like", "gfg"]
// Output: true
// Explanation: s can be breakdown as "i like".
// Input: s = "ilikegfg", dictionary[] = ["i", "like", "man", "india", "gfg"]
// Output: true
// Explanation: s can be breakdown as "i like gfg".
// Input: s = "ilikemangoes", dictionary[] = ["i", "like", "man", "india", "gfg"]
// Output: false
// Explanation: s cannot be formed using dictionary[] words.
// Constraints:
// 1 ≤ s.size() ≤ 3000
// 1 ≤ dictionary.size() ≤ 1000
// 1 ≤ dictionary[i].size() ≤ 100
// <______________________________________________SOLUTION___________________________________________________>
//{ Driver Code Starts
import java.io.*;
import java.util.*;

public class GfG {
    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);
        int t = sc.nextInt();
        sc.nextLine();
        while (t-- > 0) {
            String s = sc.nextLine();
            String line = sc.nextLine();
            String[] dictionary = line.split(" ");

            Solution obj = new Solution();
            if (obj.wordBreak(s, dictionary)) {
                System.out.println("true");
            } else {
                System.out.println("false");
            }
            System.out.println("~");
        }
    }
}
// } Driver Code Ends

// <___________________________________________________MAIN-SOLUTION_____________________________________________________>

class Solution {
    public boolean wordBreak(String s, String[] dictionary) {
        // code here
           int n=s.length();
        HashSet<String> set = new HashSet<>(Arrays.asList(dictionary));
        boolean[] dp=new boolean[n+1];
        dp[0]=true;
        int maxWordLength = 0;
        for (String word : dictionary) {
            maxWordLength = Math.max(maxWordLength, word.length());
        }
        for(int i=1;i<=n;i++){
            for(int j=Math.max(i-maxWordLength,0);j<i;j++){
                if(dp[j]&& set.contains(s.substring(j,i))){
                    dp[i]=true;
                    break;
                }
            }
        }
        return dp[n];
    }
}


// Compilation Completed
Input: 
s =
ilike
dictionary[]
i like gfg
Your Output:
true
Expected Output:
true