// 154.) You are given a 2D matrix mat[][] of size n×m. The task is to modify the matrix such that if 
//       mat[i][j] is 0, all the elements in the i-th row and j-th column are set to 0 and do it in 
//       constant space complexity.

// Examples:

// Input: mat[][] = [[1, -1, 1],
//                 [-1, 0, 1],
//                 [1, -1, 1]]
// Output: [[1, 0, 1],
//         [0, 0, 0],
//         [1, 0, 1]]
// Explanation: mat[1][1] = 0, so all elements in row 1 and column 1 are updated to zeroes.
// Input: mat[][] = [[0, 1, 2, 0],
//                 [3, 4, 5, 2],
//                 [1, 3, 1, 5]]
// Output: [[0, 0, 0, 0],
//         [0, 4, 5, 0],
//         [0, 3, 1, 0]]
// Explanation: mat[0][0] and mat[0][3] are 0s, so all elements in row 0, column 0 and column 3 are updated 
//              to zeroes.
// Constraints:
// 1 ≤ n, m ≤ 500
// - 231 ≤ mat[i][j] ≤ 231 - 1
// <______________________________________________SOLUTION___________________________________________________>
//{ Driver Code Starts
// Initial Template for Java

import java.io.*;
import java.util.*;

public class Main {

    public static void main(String[] args) throws Exception {
        Scanner sc = new Scanner(System.in);
        int tc = sc.nextInt();
        while (tc-- > 0) {
            int n = sc.nextInt();
            int m = sc.nextInt();
            int arr[][] = new int[n][m];

            for (int i = 0; i < n; i++) {
                for (int j = 0; j < m; j++) {
                    arr[i][j] = sc.nextInt();
                }
            }
            new Solution().setMatrixZeroes(arr);
            for (int[] row : arr) {
                for (int val : row) {
                    System.out.print(val + " ");
                }
                System.out.println();
            }

            System.out.println("~");
        }
    }
}

// } Driver Code Ends


//Back-end complete function Template for Java

// <___________________________________________________MAIN-SOLUTION_____________________________________________________>
class Solution {
    public void setMatrixZeroes(int[][] mat) {
            ArrayList<Integer> rows=new ArrayList<>();
        ArrayList<Integer> cols=new ArrayList<>();
        
        int r=mat.length;
        int c=mat[0].length;
        
        for(int i=0;i<r;i++)
        {
            for(int j=0;j<c;j++)
            {
                if(mat[i][j]==0)
                {
                    rows.add(i);
                    cols.add(j);
                }
            }
        }
        
        //MAKING ALL ELEMENTS OF ROWS = 0 
        //Traversing through columns to make row = 0
        for(int row:rows)
        {
            for(int j=0;j<c;j++)
            {
                mat[row][j]=0;
            }
        }
        
        //MAKING ALL ELEMENTS OF COLUMNS = 0
        //Traversing through rows to make columns = 0
        for(int col: cols)
        {
            for(int i=0;i<r;i++)
            {
                mat[i][col]=0;
            }
        }

    }
}



// Compilation Completed
For Input: 
3
3
1 -1 1
-1 0 1
1 -1 1
Your Output: 
1 0 1
0 0 0
1 0 1
Expected Output: 
1 0 1
0 0 0
1 0 1