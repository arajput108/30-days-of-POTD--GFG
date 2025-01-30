// 190.) The n-queens puzzle is the problem of placing n queens on a (n × n) chessboard such that no two queens 
//       can attack each other. Note that two queens attack each other if they are placed on the same row, the 
//       same column, or the same diagonal.

// Given an integer n, find all distinct solutions to the n-queens puzzle.
// You can return your answer in any order but each solution should represent a distinct board configuration of 
// the queen placements, where the solutions are represented as permutations of [1, 2, 3, ..., n]. In this 
// representation, the number in the ith position denotes the row in which the queen is placed in the ith column.
// For eg. below figure represents a chessboard [3 1 4 2].



// Examples:

// Input: n = 1
// Output: [1]
// Explaination: Only one queen can be placed in the single cell available.
// Input: n = 4
// Output: [[2 4 1 3 ] [3 1 4 2 ]]
// Explaination: There are 2 possible solutions for n = 4.
// Input: n = 2
// Output: []
// Explaination: There are no possible solutions for n = 2.
// Constraints:
// 1 ≤ n ≤ 10
// <______________________________________________SOLUTION___________________________________________________>
//{ Driver Code Starts
// Initial Template for Java

import java.io.*;
import java.lang.*;
import java.util.*;

class GFG {
    public static void main(String args[]) throws IOException {
        BufferedReader in = new BufferedReader(new InputStreamReader(System.in));
        int t = Integer.parseInt(in.readLine());
        while (t-- > 0) {
            int n = Integer.parseInt(in.readLine());

            Solution ob = new Solution();
            ArrayList<ArrayList<Integer>> ans = ob.nQueen(n);
            if (ans.size() == 0)
                System.out.println("-1");
            else {
                ans.sort((list1, list2) -> {
                    int size = Math.min(list1.size(), list2.size());
                    for (int i = 0; i < size; i++) {
                        if (!list1.get(i).equals(list2.get(i))) {
                            return list1.get(i) - list2.get(i);
                        }
                    }
                    return list1.size() - list2.size();
                });

                for (int i = 0; i < ans.size(); i++) {
                    System.out.print("[");
                    for (int j = 0; j < ans.get(i).size(); j++)
                        System.out.print(ans.get(i).get(j) + " ");
                    System.out.print("] ");
                }
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
    public ArrayList<ArrayList<Integer>> nQueen(int n) {
        // code here
        ArrayList<ArrayList<Integer>> solutions = new ArrayList<>();
        backtrack(n, 0, new ArrayList<>(), solutions);
        return solutions;
    }

    private void backtrack(int n, int col, ArrayList<Integer> queenPositions, ArrayList<ArrayList<Integer>> solutions) {
        if (col == n) {
            solutions.add(new ArrayList<>(queenPositions));
            return;
        }

        for (int row = 1; row <= n; row++) {
            if (isSafe(queenPositions, row, col)) {
                queenPositions.add(row);
                backtrack(n, col + 1, queenPositions, solutions);
                queenPositions.remove(queenPositions.size() - 1);
            }
        }
    }

    private boolean isSafe(ArrayList<Integer> queenPositions, int newRow, int newCol) {
        for (int col = 0; col < queenPositions.size(); col++) {
            int row = queenPositions.get(col);
            if (row == newRow || Math.abs(row - newRow) == Math.abs(col - newCol)) {
                return false;
            }
        }
        return true;
    }
}




// Compilation Completed
For Input: 
4
Your Output: 
[2 4 1 3 ] [3 1 4 2 ]
Expected Output: 
[2 4 1 3 ] [3 1 4 2 ]