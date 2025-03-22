// 240.) You are given an array arr[] which represents houses arranged in a circle, where each house 
//       has a certain value. A thief aims to maximize the total stolen value without robbing two adjacent houses.
// Determine the maximum amount the thief can steal.

// Note: Since the houses are in a circle, the first and last houses are also considered adjacent.

// Examples:

// Input: arr[] = [2, 3, 2]
// Output: 3
// Explanation: arr[0] and arr[2] can't be robbed because they are adjacent houses. Thus, 3 is the maximum value 
//             thief can rob.
// Input: arr[] = [1, 2, 3, 1]
// Output: 4
// Explanation: Maximum stolen value: arr[0] + arr[2] = 1 + 3 = 4
// Input: arr[] = [2, 2, 3, 1, 2]
// Output: 5
// Explanation: Maximum stolen value: arr[0] + arr[2] = 2 + 3 = 5 or arr[2] + arr[4] = 3 + 2 = 5
// Constraints:
// 2 ≤ arr.size() ≤ 105
// 0 ≤ arr[i] ≤ 104
// <______________________________________________SOLUTION___________________________________________________>
//{ Driver Code Starts
import java.io.*;
import java.util.*;

class IntArray {
    public static int[] input(BufferedReader br) throws IOException {
        String[] s = br.readLine().trim().split(" ");
        int n = s.length;
        int[] a = new int[n];
        for (int i = 0; i < n; i++) a[i] = Integer.parseInt(s[i]);

        return a;
    }

    public static void print(int[] a) {
        for (int e : a) System.out.print(e + " ");
        System.out.println();
    }

    public static void print(ArrayList<Integer> a) {
        for (int e : a) System.out.print(e + " ");
        System.out.println();
    }
}

class GFG {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int t;
        t = Integer.parseInt(br.readLine());
        while (t-- > 0) {

            int[] arr = IntArray.input(br);

            Solution obj = new Solution();
            int res = obj.maxValue(arr);

            System.out.println(res);
            System.out.println("~");
        }
    }
}

// } Driver Code Ends



// <___________________________________________________MAIN-SOLUTION_____________________________________________________>

class Solution {
    int maxValue(int[] arr) {
        // code here
          int n = arr.length;
        if (n == 1){ 
            return arr[0]; 
        }
        
        return Math.max(robLinear(arr, 0, n - 2), robLinear(arr, 1, n - 1));
    }

    private int robLinear(int[] arr, int start, int end) {
        int prev2 = 0, prev1 = 0;
        for (int i = start; i <= end; i++) {
            int curr = Math.max(prev1, prev2 + arr[i]);
            prev2 = prev1;
            prev1 = curr;
        }
        return prev1;
    }
}



// Compilation Completed
Input: 
arr[] =
2 3 2
Your Output:
3
Expected Output:
3