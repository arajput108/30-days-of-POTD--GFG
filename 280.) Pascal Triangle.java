// 280.) Given a positive integer n, return the nth row of pascal's triangle.
// Pascal's triangle is a triangular array of the binomial coefficients formed by summing up the 
// elements of previous row.

// File:PascalTriangleAnimated2.gif

// Examples:

// Input: n = 4
// Output: [1, 3, 3, 1]
// Explanation: 4th row of pascal's triangle is [1, 3, 3, 1].
// Input: n = 5
// Output: [1, 4, 6, 4, 1]
// Explanation: 5th row of pascal's triangle is [1, 4, 6, 4, 1].
// Input: n = 1
// Output: [1]
// Explanation: 1st row of pascal's triangle is [1].
// Constraints:
// 1 ≤ n ≤ 20
// <-------------------------------------------------SOLUTION-------------------------------------------------->
//{ Driver Code Starts
// Initial Template for Java

import java.io.*;
import java.util.*;

class GFG {
    // Driver code
    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int t = Integer.parseInt(br.readLine().trim());
        while (t-- > 0) {
            int n = Integer.parseInt(br.readLine().trim());

            ArrayList<Integer> ans = new Solution().nthRowOfPascalTriangle(n);
            printAns(ans);

            System.out.println("~");
        }
    }

    public static void printAns(ArrayList<Integer> ans) {
        for (Integer x : ans) {
            System.out.print(x + " ");
        }
        System.out.println();
    }
}

// } Driver Code Ends


// User function Template for Java


// <-------------------------------------------MAIN-SOLUTION-------------------------------------------------->

class Solution {

    ArrayList<Integer> nthRowOfPascalTriangle(int n) {
        // code here
        ArrayList<Integer> row = new ArrayList<>();
        int value = 1; // The first element is always 1
        row.add(value);

        for (int i = 1; i < n; i++) {
            // Calculate the next element using the formula
            value = (value * (n - i)) / i;
            row.add(value);
        }

        return row;
    }
}


// Compilation Completed
Input: 
n =
4
Your Output:
1 3 3 1
Expected Output:
1 3 3 1