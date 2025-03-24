// 242.) Given an array arr[] which represents the dimensions of a sequence of matrices where the ith 
//       matrix has the dimensions (arr[i-1] x arr[i]) for i>=1, find the most efficient way to multiply 
//       these matrices together. The efficient way is the one that involves the least number of multiplications.

// Examples:

// Input: arr[] = [2, 1, 3, 4]
// Output: 20
// Explanation: There are 3 matrices of dimensions 2 × 1, 1 × 3, and 3 × 4, Let this 3 input matrices be M1, 
//              M2, and M3. There are two ways to multiply: ((M1 x M2) x M3) and (M1 x (M2 x M3)), note that 
//              the result of (M1 x M2) is a 2 x 3 matrix and result of (M2 x M3) is a 1 x 4 matrix. 
// ((M1 x M2) x M3)  requires (2 x 1 x 3) + (2 x 3 x 4) = 30 
// (M1 x (M2 x M3))  requires (1 x 3 x 4) + (2 x 1 x 4) = 20. 
// The minimum of these two is 20.
// Input: arr[] = [1, 2, 3, 4, 3]
// Output: 30
// Explanation: There are 4 matrices of dimensions 1 × 2, 2 × 3, 3 × 4, 4 × 3. Let this 4 input matrices be M1, 
//              M2, M3 and M4. The minimum number of multiplications are obtained by ((M1 x M2) x M3) x M4). 
//              The minimum number is (1 x 2 x 3) + (1 x 3 x 4) + (1 x 4 x 3) = 30.
// Input: arr[] = [3, 4]
// Output: 0
// Explanation: As there is only one matrix so, there is no cost of multiplication.
// Constraints: 
// 2 ≤ arr.size() ≤ 100
// 1 ≤ arr[i] ≤ 200
// <______________________________________________SOLUTION___________________________________________________>

//{ Driver Code Starts
import java.io.*;
import java.util.*;

class Geeks {
    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int t = Integer.parseInt(br.readLine());
        for (int g = 0; g < t; g++) {
            String[] str = (br.readLine()).trim().split(" ");
            int arr[] = new int[str.length];
            for (int i = 0; i < str.length; i++) {
                arr[i] = Integer.parseInt(str[i]);
            }
            System.out.println(new Solution().matrixMultiplication(arr));
            System.out.println("~");
        }
    }
}
// } Driver Code Ends

// <___________________________________________________MAIN-SOLUTION_____________________________________________________>

class Solution {
    static int matrixMultiplication(int arr[]) {
        // code here
         int n=arr.length;
        int dp[][]=new int[n][n];
        for(int i=0;i<n;i++)dp[i][i]=0;
        for(int len=2;len<n;len++){
            for(int i=1;i<n-len+1;i++){
                int j=i+len-1;
                dp[i][j]=Integer.MAX_VALUE;
                for(int k=i;k<j;k++){
                    int cost=dp[i][k]+dp[k+1][j]+arr[i-1]*arr[j]*arr[k];
                    dp[i][j]=Math.min(dp[i][j],cost);
                }
            }
        }
        return dp[1][n-1];

    }
}


// Compilation Completed
Input: 
arr[] =
10 30 5 60
Your Output:
4500
Expected Output:
4500