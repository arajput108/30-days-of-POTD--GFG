// 152.) Given a row-wise sorted 2D matrix mat[][] of size n x m and an integer x, find whether element x is 
//       present in the matrix.
// Note: In a row-wise sorted matrix, each row is sorted in itself, i.e. for any i, j within bounds, 
//       mat[i][j] <= mat[i][j+1].

// Examples :

// Input: mat[][] = [[3, 4, 9],[2, 5, 6],[9, 25, 27]], x = 9
// Output: true
// Explanation: 9 is present in the matrix, so the output is true.
// Input: mat[][] = [[19, 22, 27, 38, 55, 67]], x = 56
// Output: false
// Explanation: 56 is not present in the matrix, so the output is false.
// Input: mat[][] = [[1, 2, 9],[65, 69, 75]], x = 91
// Output: false
// Explanation: 91 is not present in the matrix.
// Constraints:
// 1 <= n, m <= 1000
// 1 <= mat[i][j] <= 105
// 1 <= x <= 105
// <______________________________________________SOLUTION___________________________________________________>
//{ Driver Code Starts
import java.io.*;
import java.util.*;

class GFG {
    public static void main(String args[]) throws IOException {
        Scanner sc = new Scanner(System.in);
        int t = sc.nextInt();

        while (t > 0) {
            int rows = sc.nextInt();
            int columns = sc.nextInt();

            int matrix[][] = new int[rows][columns];

            for (int i = 0; i < rows; i++) {
                for (int j = 0; j < columns; j++) {
                    matrix[i][j] = sc.nextInt();
                }
            }
            int target = sc.nextInt();

            Solution x = new Solution();

            if (x.searchRowMatrix(matrix, target))
                System.out.println("true");
            else
                System.out.println("false");
            t--;

            System.out.println("~");
        }
    }
}
// } Driver Code Ends



// <___________________________________________________MAIN-SOLUTION_____________________________________________________>
class Solution {
    // Function to search a given number in row-column sorted matrix.
    public boolean searchRowMatrix(int[][] mat, int x) {
        // code here
         int n = mat.length;
        int m = mat[0].length;
        for(int i=0;i<n;i++){
            int low = 0,high = m-1;
            
            while(low<=high){
                int mid = (low+high)/2;
                if(mat[i][mid]==x)
                    return true;
                else if(mat[i][mid]<x)
                    low = mid+1;
                else
                    high = mid-1;
            }
        }
           
        return false;
    }
}





// Compilation Completed
For Input: 
3
3
3 4 9 
2 5 6 
9 25 27
9
Your Output: 
true
Expected Output: 
true