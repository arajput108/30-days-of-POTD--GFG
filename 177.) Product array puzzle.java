// 177.) Given an array, arr[] construct a product array, res[] where each element in res[i] is the 
//       product of all elements in arr[] except arr[i]. Return this resultant array, res[].
// Note: Each element is res[] lies inside the 32-bit integer range.

// Examples:

// Input: arr[] = [10, 3, 5, 6, 2]
// Output: [180, 600, 360, 300, 900]
// Explanation: For i=0, res[i] = 3 * 5 * 6 * 2 is 180.
// For i = 1, res[i] = 10 * 5 * 6 * 2 is 600.
// For i = 2, res[i] = 10 * 3 * 6 * 2 is 360.
// For i = 3, res[i] = 10 * 3 * 5 * 2 is 300.
// For i = 4, res[i] = 10 * 3 * 5 * 6 is 900.
// Input: arr[] = [12, 0]
// Output: [0, 12]
// Explanation: For i = 0, res[i] is 0.
// For i = 1, res[i] is 12.
// Constraints:
// 2 <= arr.size() <= 105
// -100 <= arr[i] <= 100
// <___________________________________________________MAIN-SOLUTION_____________________________________________________>
//{ Driver Code Starts
// Initial Template for Java

import java.io.*;
import java.util.*;

class GFG {
    public static void main(String args[]) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int t = Integer.parseInt(br.readLine());
        while (t > 0) {
            String inputLine[] = br.readLine().trim().split(" ");
            int n = inputLine.length;
            int arr[] = new int[n];
            for (int i = 0; i < n; i++) {
                arr[i] = Integer.parseInt(inputLine[i]);
            }
            Solution ob = new Solution();
            int[] ans = new int[n];
            ans = ob.productExceptSelf(arr);

            for (int i = 0; i < n; i++) {
                System.out.print(ans[i] + " ");
            }
            System.out.println();
            System.out.println("~");
            t--;
        }
    }
}

// } Driver Code Ends


// User function Template for Java

// <___________________________________________________MAIN-SOLUTION_____________________________________________________>
class Solution {
    public static int[] productExceptSelf(int arr[]) {
        // code here
        int n = arr.length;
        int res[] = new int[n];
        int total = 1;
        int zeroCount = 0;

        
        for (int i = 0; i < n; i++) {
            if (arr[i] == 0) {
                zeroCount++;
            } else {
                total = total * arr[i];
            }
        }

        
        for (int i = 0; i < n; i++) {
            if (zeroCount > 1) {
                
                res[i] = 0;
            } else if (zeroCount == 1) {
                
                res[i] = (arr[i] == 0) ? total : 0;
            } else {
                
                res[i] = total / arr[i];
            }
        }

        return res;
    }
}



// Compilation Completed
For Input: 
10 3 5 6 2
Your Output: 
180 600 360 300 900
Expected Output: 
180 600 360 300 900