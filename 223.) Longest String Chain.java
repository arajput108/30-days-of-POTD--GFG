// 223.) You are given an array of words where each word consists of lowercase English letters.
//       wordA is a predecessor of wordB if and only if we can insert exactly one letter anywhere 
//       in wordA without changing the order of the other characters to make it equal to wordB. 
//       For example, "abc" is a predecessor of "abac", while "cba" is not a predecessor of "bcad".

// A word chain is a sequence of words [word1, word2, ..., wordk] with k >= 1, where word1 is a predecessor 
// of word2, word2 is a predecessor of word3, and so on. A single word is trivially a word chain with k = 1.

// Return the length of the longest possible word chain with words chosen from the given list of words in any order.

// Examples:

// Input: words[] = ["ba", "b", "a", "bca", "bda", "bdca"]
// Output: 4
// Explanation: One of the longest word chains is ["a", "ba", "bda", "bdca"].
// Input: words[] = ["abc", "a", "ab"]
// Output: 3
// Explanation: The longest chain is {"a", "ab" "abc"}
// Input: words[] = ["abcd", "dbqca"]
// Output: 1
// Explanation: The trivial word chain ["abcd"] is one of the longest word chains.
// Constraint:
// 1 <= words.length <= 104
// 1 <= words[i].length <= 10
//  words[i] only consists of lowercase English letters.
// <______________________________________________SOLUTION___________________________________________________>
//{ Driver Code Starts
// Initial Template for Java

import java.io.*;
import java.lang.*;
import java.util.*;

class GFG {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int t = Integer.parseInt(sc.nextLine());
        while (t-- > 0) {
            String[] words = sc.nextLine().trim().split(" ");
            Solution obj = new Solution();
            int res = obj.longestStringChain(words);
            System.out.println(res);
            System.out.println("~");
        }
    }
}
// } Driver Code Ends



// <___________________________________________________MAIN-SOLUTION_____________________________________________________>
class Solution {
    public int longestStringChain(String words[]) {
        // code here
         Arrays.sort(words, (a, b) -> a.length() - b.length()); // Sort words by length
        
        Map<String, Integer> dp = new HashMap<>(); // Stores the longest chain ending at each word
        int maxLength = 1;
        
        for (String word : words) {
            int best = 1;
            for (int i = 0; i < word.length(); i++) {
                String predecessor = word.substring(0, i) + word.substring(i + 1); // Remove one character
                best = Math.max(best, dp.getOrDefault(predecessor, 0) + 1);
            }
            dp.put(word, best);
            maxLength = Math.max(maxLength, best);
        }
        
        return maxLength;
    }
}


// Compilation Completed
Input: 
words[] =
ba b a bca bda bdca
Your Output:
4
Expected Output:
4