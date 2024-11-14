// 111.)Given an array arr[], where each element is at most k away from its target position, you need to sort the 
//      array optimally.
// Note: You need to change the given array arr[] in place.

// Examples:

// Input: arr[] = [6, 5, 3, 2, 8, 10, 9], k = 3
// Output: [2, 3, 5, 6, 8, 9, 10]
// Explanation: The sorted array will be 2 3 5 6 8 9 10
// Input: arr[]= [1, 4, 5, 2, 3, 6, 7, 8, 9, 10], k = 2
// Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// Explanation: The sorted array will be 1 2 3 4 5 6 7 8 9 10
// DO NOT use the direct library sort() function for this question.

// Constraints:
// 1 ≤ arr.size() ≤ 106
// 0 ≤ k < arr.size()
// 1 ≤ arri ≤ 106
// <______________________________________________SOLUTION___________________________________________________>
//{ Driver Code Starts
// Initial Template for Java

import java.io.*;
import java.lang.*;
import java.util.*;

// <___________________________________________MAIN-SOLUTION-STARTS________________________________________________>

// } Driver Code Ends
// User function Template for Java
class Solution {
    // Non-static method, so you need to call it on an instance of the class
    public void nearlySorted(int[] arr, int k) {
        // code
        Arrays.sort(arr);
    }
}
// <______________________________________________MAIN-SOLUTION-ENDS_______________________________________________>


//{ Driver Code Starts.
class GFG {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int t = Integer.parseInt(br.readLine());
        while (t-- > 0) {
            String line = br.readLine();
            String[] tokens = line.split(" ");

            // Create an ArrayList to store the integers
            ArrayList<Integer> array = new ArrayList<>();

            // Parse the tokens into integers and add to the array
            for (String token : tokens) {
                array.add(Integer.parseInt(token));
            }
            int k = Integer.parseInt(br.readLine());
            int[] arr = new int[array.size()];
            int idx = 0;
            for (int i : array) arr[idx++] = i;

            // Create an instance of the Solution class
            Solution obj = new Solution();
            // Call nearlySorted on the instance
            obj.nearlySorted(arr, k);

            // Print the sorted array
            for (int i : arr) {
                System.out.print(i + " ");
            }
            System.out.println();

            // System.out.println("~");
        }
    }
}

// } Driver Code Ends


// Compilation Completed
For Input: 
6 5 3 2 8 10 9
3
Your Output: 
2 3 5 6 8 9 10
Expected Output: 
2 3 5 6 8 9 10