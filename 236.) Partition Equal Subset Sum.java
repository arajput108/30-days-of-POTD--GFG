// 236.) Given an array arr[], determine if it can be partitioned into two subsets such that the sum 
//       of elements in both parts is the same.

// Note: Each element must be in exactly one subset.

// Examples:

// Input: arr = [1, 5, 11, 5]
// Output: true
// Explanation: The two parts are [1, 5, 5] and [11].
// Input: arr = [1, 3, 5]
// Output: false
// Explanation: This array can never be partitioned into two such parts.
// Constraints:
// 1 ≤ arr.size ≤ 100
// 1 ≤ arr[i] ≤ 200
// <______________________________________________SOLUTION___________________________________________________>
//{ Driver Code Starts
// Initial Template for Java

import java.io.*;
import java.util.*;

class GFG {
    public static void main(String args[]) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int t = Integer.parseInt(br.readLine());
        while (t-- > 0) {
            String inputLine[] = br.readLine().trim().split(" ");
            int n = inputLine.length;
            int arr[] = new int[n];
            for (int i = 0; i < n; i++) {
                arr[i] = Integer.parseInt(inputLine[i]);
            }

            Solution ob = new Solution();

            if (ob.equalPartition(arr))
                System.out.println("true");
            else
                System.out.println("false");

            System.out.println("~");
        }
    }
}
// } Driver Code Ends


class Solution {
    static boolean equalPartition(int arr[]) {
        // code here
         int n=arr.length,arSum=0;
        for(int i:arr) arSum+=i;
        Boolean dp[][]=new Boolean[n][arSum+1];
        return rec(n-1,arr,arSum,0,dp);
    }
    private static boolean rec(int id,int arr[],int arSum,int sum,Boolean dp[][]){
        if(arSum==sum) return true;
        if(id<0 || sum>arSum) return false;
        if(dp[id][arSum]!=null) return dp[id][arSum];
        boolean p=rec(id-1,arr,arSum-arr[id],sum+arr[id],dp);
        boolean np=rec(id-1,arr,arSum,sum,dp);
        return dp[id][arSum]=p || np;
    }
}



// Compilation Completed
Input: 
arr[] =
1 5 11 5
Your Output:
true
Expected Output:
true
