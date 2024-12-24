// 150.) Given a 2D integer matrix mat[][] of size n x m, where every row and column is sorted in increasing 
//       order and a number x, the task is to find whether element x is present in the matrix.

// Examples:

// Input: mat[][] = [[3, 30, 38],[20, 52, 54],[35, 60, 69]], x = 62
// Output: false
// Explanation: 62 is not present in the matrix, so output is false.
// Input: mat[][] = [[18, 21, 27],[38, 55, 67]], x = 55
// Output: true
// Explanation: 55 is present in the matrix.
// Input: mat[][] = [[1, 2, 3],[4, 5, 6],[7, 8, 9]], x = 3
// Output: true
// Explanation: 3 is present in the matrix.
// Constraints:
// 1 <= n, m <=1000
// 1 <= mat[i][j] <= 109
// 1<= x <= 109
// <______________________________________________SOLUTION___________________________________________________>
//{ Driver Code Starts
import java.io.*;
import java.lang.*;
import java.util.*;

class gfg {
    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);
        int t = sc.nextInt();

        while (t-- > 0) {
            int n = sc.nextInt();
            int m = sc.nextInt();

            int mat[][] = new int[n][m];
            for (int i = 0; i < n; i++) {
                for (int j = 0; j < m; j++) mat[i][j] = sc.nextInt();
            }

            int x = sc.nextInt();

            if (new Solution().matSearch(mat, x))
                System.out.println("true");
            else
                System.out.println("false");

            System.out.println("~");
        }
    }
}
// } Driver Code Ends

// <___________________________________________________MAIN-SOLUTION_____________________________________________________>

class Solution {
    public static boolean matSearch(int mat[][], int x) {
        // your code here
          for(int i = 0 ; i<mat.length; i++){
            for(int j = 0; j<mat[i].length; j++){
                if(mat[i][j]==x){
                    return true;
                }
            }
        }
        return false;
    }
}


// Compilation Completed
For Input: 
3
3
3 30 38 
20 52 54 
35 60 69
62
Your Output: 
false
Expected Output: 
false