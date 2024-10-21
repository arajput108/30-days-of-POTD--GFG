// 88.) Given an array arr[] of integers, the task is to count the number of ways to split given array elements 
//      into two non-empty subsets such that the XOR of elements of each group is equal. Each element should belong 
//      to exactly one subset.
// Note:

// The answer could be very large so print it by doing modulo with 109 + 7. 
// Subsets with the same elements but derived from different indices are different.
// Examples:

// Input : arr[] = [1, 2, 3]
// Output : 3
// Explanation: {(1),(2, 3)}, {(2),(1, 3)}, {(3),(1, 2)} are three ways with equal XOR value of two groups.
// Input : arr[] = [5, 2, 3, 2]
// Output : 0
// Explanation: No way to split into  two groups whose XOR is equal.
// Input : arr[] = [2, 2, 2, 2]
// Output : 7
// Explanation: There are 7 ways to split the array into two groups with equal XOR, such that there are multiple combinations of {(2), (2,2,2)},{(2,2),(2,2)}.
// Constraints:
// 1<=arr.size()<=106
// 1<=arr[i]<=106

// <______________________________________________SOLUTION___________________________________________________>
//{ Driver Code Starts
// Initial Template for Java
import java.io.*;
import java.lang.*;
import java.util.*;


// } Driver Code Ends
// User function Template for Java

// <_______________________________________________MAIN-SOLUTION-STARTS_______________________________________________>

class Solution {

    public static int countgroup(int arr[]) {
        // Complete the function
         int xor=0;
        for(int i:arr){
            xor^=i;
        }
        if(xor!=0){
            return 0;
        }else{
            return (int) (((Math.pow(2,(arr.length-1)))-1) % 1000000007);
        }
    }
}

// <______________________________________________MAIN-SOLUTION-END_________________________________________________>

//{ Driver Code Starts.

class GFG {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int t = Integer.parseInt(br.readLine());
        while (t-- > 0) {
            // int k = Integer.parseInt(br.readLine());
            String line = br.readLine();
            String[] tokens = line.split(" ");

            // Create an ArrayList to store the integers
            ArrayList<Integer> array = new ArrayList<>();

            // Parse the tokens into integers and add to the array
            for (String token : tokens) {
                array.add(Integer.parseInt(token));
            }

            int[] arr = new int[array.size()];
            int idx = 0;
            for (int i : array) arr[idx++] = i;
            Solution obj = new Solution();
            int ans = obj.countgroup(arr);
            System.out.println(ans);
        }
    }
}

// } Driver Code Ends
// Compilation Completed
For Input: 
1 2 3
Your Output: 
3
Expected Output: 
3