// 248.) Given a string s of lowercase English alphabets, your task is to return the maximum number 
//       of substrings formed, after possible partitions (probably zero) of s such that no two 
//       substrings have a common character.

// Examples:

// Input: s = "acbbcc"
// Output: 2
// Explanation: "a" and "cbbcc" are two substrings that do not share any characters between them.
// Input: s = "ababcbacadefegdehijhklij"
// Output: 3
// Explanation: Partitioning at the index 8 and at 15 produces three substrings: “ababcbaca”, “defegde”, 
//              and “hijhklij” such that none of them have a common character. So, the maximum number of 
//              substrings formed is 3.
// Input: s = "aaa"
// Output: 1
// Explanation: Since the string consists of same characters, no further partition can be performed. Hence, 
//              the number of substring (here the whole string is considered as the substring) is 1.
// Constraints:
// 1 ≤ s.size() ≤ 105
// 'a' ≤ s[i] ≤ 'z' 

// <______________________________________________SOLUTION___________________________________________________>
//{ Driver Code Starts
import java.util.*;

public class Main {
    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);
        int tc = sc.nextInt();

        while (tc-- > 0) {
            String s = sc.next();
            Solution obj = new Solution();
            int ans = obj.maxPartitions(s);
            System.out.println(ans);
            System.out.println("~");
        }
    }
}
// } Driver Code Ends


// <___________________________________________________MAIN-SOLUTION_____________________________________________________>


class Solution {
    public int maxPartitions(String s) {
        // code here
         Set<Character> set=new HashSet<>();
        int n=s.length();
        int[] arr=new int[n];
        int curr_min=0;
        for(int i=0;i<n;i++){
            char curr=s.charAt(i);
            if(!set.contains(curr)){
                set.add(curr);
                curr_min++;
                arr[i]=curr_min;
            } else {
                int prev_idx=i-1;
                int min_value=arr[prev_idx];
                while(prev_idx>=0){
                    if(s.charAt(prev_idx)==curr){
                        min_value=Math.min(min_value,arr[prev_idx]);
                        break;
                    }
                    min_value=Math.min(min_value,arr[prev_idx]);
                    prev_idx--;
                }
                arr[i]=min_value;
                curr_min=arr[i];
            }
        }
        return arr[n-1];
    }
}

// Compilation Completed
Input: 
s =
acbbcc
Your Output:
2
Expected Output:
2