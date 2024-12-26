// 155.) Given an array arr[] of positive integers and another integer target. Determine if there exists 
//       two distinct indices such that the sum of there elements is equals to target.

// Examples:

// Input: arr[] = [1, 4, 45, 6, 10, 8], target = 16
// Output: true
// Explanation: arr[3] + arr[4] = 6 + 10 = 16.
// Input: arr[] = [1, 2, 4, 3, 6], target = 11
// Output: false
// Explanation: None of the pair makes a sum of 11.
// Constraints:
// 1 ≤ arr.size ≤ 105
// 1 ≤ arr[i] ≤ 105
// 1 ≤ target ≤ 2*105
// <______________________________________________SOLUTION___________________________________________________>
//{ Driver Code Starts
// Initial Template for Java

import java.io.*;
import java.util.*;

public class Main {

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int tc = Integer.parseInt(br.readLine().trim());
        while (tc-- > 0) {
            String[] inputLine;
            inputLine = br.readLine().trim().split(" ");
            // int n = Integer.parseInt(inputLine[0]);
            int x = Integer.parseInt(inputLine[0]);

            String line = br.readLine();
            String[] tokens = line.split(" ");
            int[] arr = new int[tokens.length];
            for (int i = 0; i < tokens.length; i++) {
                arr[i] = Integer.parseInt(tokens[i]);
            }

            boolean ans = new Solution().twoSum(arr, x);
            System.out.println(ans ? "true" : "false");
            // System.out.println("~");

            System.out.println("~");
        }
    }
}
// } Driver Code Ends


// User function Template for Java
// <___________________________________________________MAIN-SOLUTION_____________________________________________________>
class Solution {
    boolean twoSum(int arr[], int target) {
        // code here
          HashMap<Integer,Integer>hp = new HashMap<>();
       for(int i=0;i<arr.length;i++)
       {
           int b = target-arr[i];
           if(hp.containsKey(b))
           {
               return true;
           }
           hp.put(arr[i],i);
       }
       return false;
    }
}


// Compilation Completed
For Input: 
16
1 4 45 6 10 8
Your Output: 
true
Expected Output: 
true