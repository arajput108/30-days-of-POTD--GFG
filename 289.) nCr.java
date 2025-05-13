// 289.) Given two integer values n and r, the task is to find the value of Binomial Coefficient nCr

// A binomial coefficient nCr can be defined as the coefficient of xr in the expansion of (1 + x)n that gives 
// the number of ways to choose r objects from a set of n objects without considering the order.
// The binomial coefficient nCr is calculated as : C(n,r) = n! / r! * (n-r) !
// Note: If r is greater than n, return 0.
// It is guaranteed that the value of nCr will fit within a 32-bit integer.

// Examples:

// Input: n = 5, r = 2
// Output: 10
// Explaination: The value of 5C2 is calculated as 5!/(5−2)!*2! = 5!/3!*2! = 10.
// Input: n = 2, r = 4
// Output: 0
// Explaination: Since r is greater than n, thus 2C4 = 0
// Input: n = 5, r = 0
// Output: 1
// Explaination: The value of 5C0 is calculated as 5!/(5−0)!*0! = 5!/5!*0! = 1.
// Constraints:
// 1 ≤ n ≤ 100
// 0 ≤ r ≤ 100

// <-------------------------------------------------SOLUTION-------------------------------------------------->
//{ Driver Code Starts
import java.io.*;
import java.lang.*;
import java.util.*;

class GFG {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int t = sc.nextInt();

        while (t-- > 0) {
            int n = sc.nextInt();
            int r = sc.nextInt();
            Solution ob = new Solution();
            System.out.println(ob.nCr(n, r));
            System.out.println("~");
        }

        sc.close();
    }
}
// } Driver Code Ends

// <-------------------------------------------MAIN-SOLUTION-------------------------------------------------->

class Solution {
    public int nCr(int n, int r) {
        // code here
         if(r > n || r < 0){
            return 0;
        }
        
        if(r > n-r){
            r = n-r;
        }
        
        long bio_coff = 1;
        for(int i=1; i<=r; i++){
            bio_coff *= (n-i+1);
            bio_coff /=i;
        }
        return (int) bio_coff;
    }
}



// Compilation Completed
Input: 
n =
3
r =
2
Your Output:
3
Expected Output:
3