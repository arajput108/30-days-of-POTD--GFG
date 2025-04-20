// 263.) Given an array arr[] of size n, filled with numbers from 1 to n-1 in random order. The array 
//       has only one repetitive element. Your task is to find the repetitive element.

// Note: It is guaranteed that there is a repeating element present in the array.

// Examples:

// Input: arr[] = [1, 3, 2, 3, 4]
// Output: 3 
// Explanation: The number 3 is the only repeating element.
// Input: arr[] = [1, 5, 1, 2, 3, 4]
// Output: 1  
// Explanation: The number 1 is the only repeating element.
// Input: arr[] = [1, 1]  
// Output: 1
// Explanation: The array is of size 2 with both elements being 1, making 1 the repeating element.
// Constraints:
// 2 ≤ arr.size() ≤ 105
// 1 ≤ arr[i] ≤ n-1 
// <______________________________________________SOLUTION___________________________________________________>
//{ Driver Code Starts
// Initial Template for Java

import java.io.*;
import java.util.*;

class GFG {
    public static void main(String args[]) throws IOException {
        BufferedReader read = new BufferedReader(new InputStreamReader(System.in));
        int t = Integer.parseInt(read.readLine());
        while (t-- > 0) {
            // Read the array from input line
            String inputLine = read.readLine().trim();
            String[] inputArr = inputLine.split("\\s+");
            int n = inputArr.length;
            int arr[] = new int[n];
            for (int i = 0; i < n; i++) {
                arr[i] = Integer.parseInt(inputArr[i]);
            }

            Solution ob = new Solution();
            System.out.println(ob.findDuplicate(arr));
            System.out.println("~");
        }
    }
}

// } Driver Code Ends

// <___________________________________________________MAIN-SOLUTION_____________________________________________________>

// User function Template for Java
class Solution {
    public int findDuplicate(int[] arr) {
        // code here
          int n = arr.length;
        Arrays.sort(arr);
        int ans=0;
        for(int i=0;i<n-1;i++)
        {
           if(arr[i]==arr[i+1])
           ans = arr[i];
        }
        return ans;
    }
}


// Compilation Completed
Input: 
arr[] =
1 3 2 3 4
Your Output:
3
Expected Output:
3