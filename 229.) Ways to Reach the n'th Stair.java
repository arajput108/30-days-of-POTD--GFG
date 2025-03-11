// 229.) There are n stairs, a person standing at the bottom wants to reach the top. The person can climb 
//       either 1 stair or 2 stairs at a time. Your task is to count the number of ways, the person can 
//       reach the top (order does matter).

// Examples:

// Input: n = 1
// Output: 1
// Explanation: There is only one way to climb 1 stair. 
// Input: n = 2
// Output: 2
// Explanation: There are 2 ways to reach 2th stair: {1, 1} and {2}.  
// Input: n = 4
// Output: 5
// Explanation: There are five ways to reach 4th stair: {1, 1, 1, 1}, {1, 1, 2}, {2, 1, 1}, {1, 2, 1} and {2, 2}.
// Constraints:
// 1 ≤ n ≤ 44
// <______________________________________________SOLUTION___________________________________________________>
//{ Driver Code Starts
import java.io.*;
import java.util.*;

class GFG {
    public static void main(String[] args) {

        // taking input using Scanner class
        Scanner sc = new Scanner(System.in);

        // taking total testcases
        int t = sc.nextInt();

        while (t-- > 0) {

            // taking count of stairs
            int m = sc.nextInt();

            // creating an object of class DynamicProgramming
            Solution obj = new Solution();

            // calling method countWays() of class
            // DynamicProgramming
            System.out.println(obj.countWays(m));

            System.out.println("~");
        }
    }
}
// } Driver Code Ends

// <___________________________________________________MAIN-SOLUTION_____________________________________________________>

class Solution {
    int countWays(int n) {
        // your code here
        int a=3, b=2;
        if(n <= 3) return n;
        for(int i=0;i<n-3;i++){
            a = a + b;
            b = a - b;
        }
        return a;
    }
}


// Compilation Completed
Input: 
n =
1
Your Output:
1
Expected Output:
1