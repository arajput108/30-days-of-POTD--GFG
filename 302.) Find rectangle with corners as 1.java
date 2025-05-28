// 302.) Given an n x m binary matrix mat[][] containing only 0s and 1s, determine if there exists a 
//       rectangle within the matrix such that all four corners of the rectangle are 1. If such a rectangle 
//       exists, return true; otherwise, return false.

// Example:

// Input: mat[][] =
// [[1, 0, 0, 1, 0],
// [0, 0, 1, 0, 1],
// [0, 0, 0, 1, 0], 
// [1, 0, 1, 0, 1]] 
// Output: true
// Explanation: Valid corners are at index (1,2), (1,4), (3,2), (3,4) 
// Input: mat[][] =
// [[0, 0, 0],
// [0, 0, 0],
// [0, 0, 0]]
// Output: false
// Explanation: There are no valid corners.
// Constraints:
// 1 <= n, m <= 200
// 0 <= mat[i] <= 1
// <-------------------------------------------------SOLUTION-------------------------------------------------->
class Solution {
    public boolean ValidCorner(int mat[][]) {
        // Code here
        for (int i = 0; i < mat.length; i++) {
            List<Integer> rowOnes = new ArrayList<>();
            for (int j = 0; j < mat[0].length; j++) {
                
                if (mat[i][j] == 1) {
                    boolean onesFound = false;
                    
                    for (int k = i + 1; k < mat.length; k++) {
                        if (mat[k][j] == 1) {
                            onesFound = true;
                            for (int col: rowOnes) {
                                if (mat[k][col] == 1) return true;
                            }
                        }
                    }
                    
                    if (onesFound) rowOnes.add(j);
                }
            }
        }
        
        return false;
    }
}


// Compilation Completed
Input: 
n =
4
m =
5
mat[][]
1 0 0 1 0
0 0 1 0 1
0 0 0 1 0 
1 0 1 0 1
Your Output:
true
Expected Output:
true