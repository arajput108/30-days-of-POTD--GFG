// 235.) Given an array of positive integers arr[] and a value sum, determine if there is a subset of arr[] 
//       with sum equal to given sum. 

// Examples:

// Input: arr[] = [3, 34, 4, 12, 5, 2], sum = 9
// Output: true 
// Explanation: Here there exists a subset with target sum = 9, 4+3+2 = 9.
// Input: arr[] = [3, 34, 4, 12, 5, 2], sum = 30
// Output: false
// Explanation: There is no subset with target sum 30.
// Input: arr[] = [1, 2, 3], sum = 6
// Output: true
// Explanation: The entire array can be taken as a subset, giving 1 + 2 + 3 = 6.
// Constraints:
// 1 <= arr.size() <= 200
// 1<= arr[i] <= 200
// 1<= sum <= 104
// <______________________________________________SOLUTION___________________________________________________>
//{ Driver Code Starts
import java.io.*;
import java.util.*;

class GFG {
    public static void main(String args[]) throws IOException {
        BufferedReader read = new BufferedReader(new InputStreamReader(System.in));
        int t = Integer.parseInt(read.readLine());
        while (t-- > 0) {

            String input_line[] = read.readLine().trim().split("\\s+");
            int N = input_line.length;
            int arr[] = new int[N];
            for (int i = 0; i < N; i++) arr[i] = Integer.parseInt(input_line[i]);
            int sum = Integer.parseInt(read.readLine());

            Solution ob = new Solution();
            if (ob.isSubsetSum(arr, sum))
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

    static Boolean isSubsetSum(int arr[], int sum) {
        // code here
         Boolean t[][] = new Boolean[arr.length + 1][sum + 1];
        return solver(arr, 0, sum, arr.length, t);
    }

    static Boolean solver(int arr[], int i, int sum, int n, Boolean t[][]) {
        if (sum == 0) return true;
        if (i == n || sum < 0) return false;
        if (t[i][sum] != null) return t[i][sum]; 

        t[i][sum] = solver(arr, i + 1, sum - arr[i], n, t) || solver(arr, i + 1, sum, n, t);
        return t[i][sum];
    }
}




// Compilation Completed
Input: 
arr[] =
3 34 4 12 5 2
target =
9
Your Output:
true
Expected Output:
true