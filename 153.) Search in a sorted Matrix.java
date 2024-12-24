// 153.) Given a strictly sorted 2D matrix mat[][] of size n x m and a number x. Find whether the number x is 
//       present in the matrix or not.
// Note: In a strictly sorted matrix, each row is sorted in strictly increasing order, and the first element 
//       of the ith row (i!=0) is greater than the last element of the (i-1)th row.

// Examples:

// Input: mat[][] = [[1, 5, 9], [14, 20, 21], [30, 34, 43]], x = 14
// Output: true
// Explanation: 14 is present in the matrix, so output is true.
// Input: mat[][] = [[1, 5, 9, 11], [14, 20, 21, 26], [30, 34, 43, 50]], x = 42
// Output: false
// Explanation: 42 is not present in the matrix.
// Input: mat[][] = [[87, 96, 99], [101, 103, 111]], x = 101
// Output: true
// Explanation: 101 is present in the matrix.
// Constraints:
// 1 <= n, m <= 1000
// 1 <= mat[i][j] <= 109
// 1 <= x <= 109
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

            if (x.searchMatrix(matrix, target))
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
    public boolean searchMatrix(int[][] mat, int x) {
        // code here
           int startrow=0;
        int endrow=mat.length-1;
        
        
        while(startrow<=endrow)
        {
            int startcol=0;
            int endcol=mat[0].length-1;
            if(mat[startrow][startcol]<=x  && mat[startrow][endcol]>=x)
            {
               while(startcol<=endcol)
               {
                   int mid=(startcol+endcol)/2;
                   
                   if(mat[startrow][mid]==x)
                   {
                       return true;
                   }
                   else if(mat[startrow][mid]<x)
                   {
                       startcol=mid+1;
                   }
                   else
                   {
                       endcol=mid-1;
                   }
               }
               
            }
            startrow++;
        }
        return false;
    }
}







// Compilation Completed
For Input: 
3
3
1 5 9
14 20 21
30 34 43
14
Your Output: 
true
Expected Output: 
true