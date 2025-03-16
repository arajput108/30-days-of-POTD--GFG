// 234.) You are given an array arr[] of non-negative numbers. Each number tells you the maximum number of steps you can jump forward from that position.

// For example:

// If arr[i] = 3, you can jump to index i + 1, i + 2, or i + 3 from position i.
// If arr[i] = 0, you cannot jump forward from that position.
// Your task is to find the minimum number of jumps needed to move from the first position in the array 
// to the last position.

// Note:  Return -1 if you can't reach the end of the array.

// Examples : 

// Input: arr[] = [1, 3, 5, 8, 9, 2, 6, 7, 6, 8, 9]
// Output: 3 
// Explanation: First jump from 1st element to 2nd element with value 3. From here we jump to 5th element 
// with value 9, and from here we will jump to the last. 
// Input: arr = [1, 4, 3, 2, 6, 7]
// Output: 2 
// Explanation: First we jump from the 1st to 2nd element and then jump to the last element.
// Input: arr = [0, 10, 20]
// Output: -1
// Explanation: We cannot go anywhere from the 1st element.
// Constraints:
// 2 ≤ arr.size() ≤ 104
// 0 ≤ arr[i] ≤ 104
// <______________________________________________SOLUTION___________________________________________________>
//{ Driver Code Starts
// Initial Template for Java

import java.io.*;
import java.util.*;

public class Main {

    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int t;
        t = Integer.parseInt(br.readLine());
        while (t-- > 0) {
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

            System.out.println(new Solution().minJumps(arr));
            System.out.println("~");
        }
    }
}

// } Driver Code Ends



// <___________________________________________________MAIN-SOLUTION_____________________________________________________>

class Solution {
    static int minJumps(int[] arr) {
        // code here
         int n = arr.length;

        // If the array has only one element, no jump is needed
        if (n <= 1) return 0;

        // If the first element is 0, we can't move anywhere
        if (arr[0] == 0) return -1;

        // Initialize variables
        int jumps = 1; // At least one jump is needed initially
        int farthest = arr[0]; // Farthest we can reach
        int currEnd = arr[0];  // Current jump's range

        for (int i = 1; i < n; i++) {
            // If we've reached the last index, return jumps
            if (i == n - 1) return jumps;

            // Update the farthest we can reach
            farthest = Math.max(farthest, i + arr[i]);

            // If we reach the end of the current jump range
            if (i == currEnd) {
                jumps++;
                currEnd = farthest;

                // If the current range doesn't extend further, we can't proceed
                if (currEnd <= i) return -1;
            }
        }

        return -1;
    }
}




// Compilation Completed
Input: 
arr[] =
1 3 5 8 9 2 6 7 6 8 9
Your Output:
3
Expected Output:
3