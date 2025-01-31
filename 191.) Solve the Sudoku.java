// 191.) Given an incomplete Sudoku configuration in terms of a 9x9  2-D interger square matrix, mat[][], 
//       the task is to solve the Sudoku. It is guaranteed that the input Sudoku will have exactly one solution.

// A sudoku solution must satisfy all of the following rules:

// Each of the digits 1-9 must occur exactly once in each row.
// Each of the digits 1-9 must occur exactly once in each column.
// Each of the digits 1-9 must occur exactly once in each of the 9 3x3 sub-boxes of the grid.
// Note: Zeros represent blanks to be filled with numbers 1-9, while non-zero cells are fixed and cannot be changed.

// Examples:

// Input: mat[][] = 

// Output:

// Explanation: Each row, column and 3 x 3 box of the output matrix contains unique numbers.
// Input: mat[][] = 

// Output:

// Explanation: Each row, column and 3 x 3 box of the output matrix contains unique numbers.
// Constraints:
// mat.size() = 9
// mat[i].size() = 9
// 0 ≤ mat[i][j] ≤ 9
// <______________________________________________SOLUTION___________________________________________________>
//{ Driver Code Starts
// Initial Template for Java

import java.io.*;
import java.util.*;

class GFG {
    public static void main(String args[]) throws IOException {
        Scanner sc = new Scanner(System.in);
        int t = sc.nextInt();

        while (t-- > 0) {
            int n = 9;
            int matrix[][] = new int[n][n];
            // String st[] = read.readLine().trim().split("\\s+");
            int k = 0;
            for (int i = 0; i < n; i++) {
                for (int j = 0; j < n; j++) matrix[i][j] = sc.nextInt();
            }
            Solution ob = new Solution();
            ob.solveSudoku(matrix);
            for (int i = 0; i < n; i++) {
                for (int j = 0; j < n; j++) System.out.print(matrix[i][j] + " ");
                System.out.println();
            }
            System.out.println("~");
        }
    }
}

// } Driver Code Ends


// User function Template for Java



// <___________________________________________________MAIN-SOLUTION_____________________________________________________>
class Solution {
    // Function to find a solved Sudoku.
    static void solveSudoku(int[][] mat) {
        // code here
        solve(mat, 0, 0);
    }

    static boolean solve(int[][] mat, int i, int j) {
        // If we reach the end of the board, the puzzle is solved
        if (i == 9) {
            return true;
        }

        int nextI = (j == 8) ? i + 1 : i;
        int nextJ = (j == 8) ? 0 : j + 1;

        // If the cell is already filled, move to the next cell
        if (mat[i][j] != 0) {
            return solve(mat, nextI, nextJ);
        }

        // Try placing numbers from 1 to 9
        for (int val = 1; val <= 9; val++) {
            if (isValid(mat, i, j, val)) {
                mat[i][j] = val;
                if (solve(mat, nextI, nextJ)) {
                    return true;
                }
                // Backtrack if placing 'val' doesn't lead to a solution
                mat[i][j] = 0;
            }
        }
        return false; // If no value fits, backtrack
    }

    // Function to check if placing 'val' at (r, c) is valid
    static boolean isValid(int[][] mat, int r, int c, int val) {
        for (int i = 0; i < 9; i++) {
            // Check row, column, and subgrid
            if (mat[i][c] == val || mat[r][i] == val || 
                mat[(r / 3) * 3 + i / 3][(c / 3) * 3 + i % 3] == val) {
                return false;
            }
        }
        return true;
    }
}


// Compilation Completed
For Input: 
3 0 6 5 0 8 4 0 0 
5 2 0 0 0 0 0 0 0 
0 8 7 0 0 0 0 3 1 
0 0 3 0 1 0 0 8 0 
9 0 0 8 6 3 0 0 5 
0 5 0 0 9 0 6 0 0 
1 3 0 0 0 0 2 5 0 
0 0 0 0 0 0 0 7 4 
0 0 5 2 0 6 3 0 0
Your Output: 
3 1 6 5 7 8 4 9 2
5 2 9 1 3 4 7 6 8
4 8 7 6 2 9 5 3 1
2 6 3 4 1 5 9 8 7
9 7 4 8 6 3 1 2 5
8 5 1 7 9 2 6 4 3
1 3 8 9 4 7 2 5 6
6 9 2 3 5 1 8 7 4
7 4 5 2 8 6 3 1 9
Expected Output: 
3 1 6 5 7 8 4 9 2
5 2 9 1 3 4 7 6 8
4 8 7 6 2 9 5 3 1
2 6 3 4 1 5 9 8 7
9 7 4 8 6 3 1 2 5
8 5 1 7 9 2 6 4 3
1 3 8 9 4 7 2 5 6
6 9 2 3 5 1 8 7 4
7 4 5 2 8 6 3 1 9