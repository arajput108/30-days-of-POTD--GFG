// 220.) Given an array arr[] of integers and an integer k, your task is to find the maximum value for each 
//       contiguous subarray of size k. The output should be an array of maximum values corresponding to each 
//       contiguous subarray.

// Examples:

// Input: arr[] = [1, 2, 3, 1, 4, 5, 2, 3, 6], k = 3
// Output: [3, 3, 4, 5, 5, 5, 6] 
// Explanation: 
// 1st contiguous subarray = [1 2 3] max = 3
// 2nd contiguous subarray = [2 3 1] max = 3
// 3rd contiguous subarray = [3 1 4] max = 4
// 4th contiguous subarray = [1 4 5] max = 5
// 5th contiguous subarray = [4 5 2] max = 5
// 6th contiguous subarray = [5 2 3] max = 5
// 7th contiguous subarray = [2 3 6] max = 6
// Input: arr[] = [8, 5, 10, 7, 9, 4, 15, 12, 90, 13], k = 4
// Output: [10, 10, 10, 15, 15, 90, 90]
// Explanation: 
// 1st contiguous subarray = [8 5 10 7], max = 10
// 2nd contiguous subarray = [5 10 7 9], max = 10
// 3rd contiguous subarray = [10 7 9 4], max = 10
// 4th contiguous subarray = [7 9 4 15], max = 15
// 5th contiguous subarray = [9 4 15 12], max = 15
// 6th contiguous subarray = [4 15 12 90], max = 90
// 7th contiguous subarray = [15 12 90 13], max = 90
// Input: arr[] = [5, 1, 3, 4, 2, 6], k = 1
// Output: [5, 1, 3, 4, 2, 6]
// Explanation: 
// When k = 1, each element in the array is its own subarray, so the output is simply the same array
// Constraints:
// 1 ≤ arr.size() ≤ 106
// 1 ≤ k ≤ arr.size()
// 0 ≤ arr[i] ≤ 109
// <_______________________________________________SOLUTION___________________________________________________>
//{ Driver Code Starts
// Initial template for JAVA

import java.io.*;
import java.lang.*;
import java.util.*;

public class Main {
    public static void main(String args[]) throws IOException {
        // taking input using class Scanner
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int t = Integer.parseInt(br.readLine());

        while (t-- > 0) {
            // taking total number of elements
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
            int k = Integer.parseInt(br.readLine());
            ArrayList<Integer> res = new Solution().maxOfSubarrays(arr, k);

            // printing the elements of the ArrayList
            for (int i = 0; i < res.size(); i++) System.out.print(res.get(i) + " ");
            System.out.println();
            System.out.println("~");
        }
    }
}
// } Driver Code Ends

// <___________________________________________________MAIN-SOLUTION_____________________________________________________>

class Solution {
    public ArrayList<Integer> maxOfSubarrays(int arr[], int k) {
        // code here
           Deque<Integer> dq = new ArrayDeque<>();
        int n = arr.length;
        ArrayList<Integer> ans = new ArrayList<>();
        for(int i =0; i < n; i++) {
            while(dq.size() != 0 && arr[dq.getLast()] < arr[i]) {
                dq.removeLast();
            }
            dq.addLast(i);
            if(i - dq.getFirst() == k) dq.removeFirst();
            if(i >= k -1) {
                ans.add(arr[dq.getFirst()]);
            }
        }
        return ans;
    }
}


// Compilation Completed
Input: 
arr =
1 2 3 1 4 5 2 3 6
key =
3
Your Output:
3 3 4 5 5 5 6
Expected Output:
3 3 4 5 5 5 6