// 262.) Given an array arr[] of non-negative integers of size n. Find the maximum possible XOR between 
//       two numbers present in the array.

// Examples:

// Input: arr[] = [25, 10, 2, 8, 5, 3]
// Output: 28
// Explanation: The maximum possible XOR is 5 ^ 25 = 28.
// Input: arr[] = [1, 2, 3, 4, 5, 6, 7]
// Output: 7
// Explanation : The maximum possible XOR is 1 ^ 6 = 7.
// Constraints:
// 2 ≤ arr.size() ≤ 5*104
// 1 ≤ arr[i] ≤ 106

// <______________________________________________SOLUTION___________________________________________________>
//{ Driver Code Starts
// Initial Template for Java

import java.io.*;
import java.lang.*;
import java.util.*;

class GFG {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int T = Integer.parseInt(br.readLine().trim());
        while (T-- > 0) {
            int n = Integer.parseInt(br.readLine().trim());
            String s = br.readLine();
            String[] S = s.split(" ");
            int[] arr = new int[n];
            for (int i = 0; i < n; i++) {
                arr[i] = Integer.parseInt(S[i]);
            }
            Solution ob = new Solution();
            System.out.println(ob.maxXor(arr));

            System.out.println("~");
        }
    }
}

// } Driver Code Ends


// User function Template for Java



// <___________________________________________________MAIN-SOLUTION_____________________________________________________>

class Solution {
    public int maxXor(int[] arr) {
        // code here
           int mask=0, max=0;
        for(int i=31;i>=0;i--){
            mask=mask | (1<<i);
            Set<Integer> set= new HashSet<>();
            for(int n:arr)
                set.add(mask & n);
               
            int tmp = max | (1<< i);
            for(int prefix : set){
                if(set.contains(tmp ^ prefix)){
                    max = tmp;
                    break ;
                }
            }
        }
        return max;
    }
}


// Compilation Completed
Input: 
n =
6
arr[] =
25 10 2 8 5 3
Your Output:
28
Expected Output:
28