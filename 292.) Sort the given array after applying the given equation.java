// 292.) Given an integer array arr[] sorted in ascending order, along with three integers: A, B, and C. 
//       The task is to transform each element x in the array using the quadratic function A*(x2) + B*x + C. 
//       After applying this transformation to every element, return the modified array in sorted order.

// Examples:

// Input: arr[] = [-4, -2, 0, 2, 4], A = 1, B = 3, C = 5
// Output: [3, 5, 9, 15, 33]
// Explanation: After applying f(x) = 1*(x2)+ 3*x + 5 to each x, we get [9, 3, 5, 15, 33]. After sorting this array, 
//              the array becomes [3, 5, 9, 15, 33].
// Input: arr[] = [-3, -1, 2, 4], A = -1, B = 0, C = 0
// Output: [-16, -9, -4, -1]
// Explanation: After applying f(x) = -1*(x2) + 0*x + 0 to each x, we get [ -9, -1, -4, -16 ]. After sorting this 
//              array, the array becomes  [-16, -9, -4, -1].
// Constraints:
// 1 ≤ arr.size() ≤ 106
// -103 ≤ arr[i], A, B, C ≤ 103
// <-------------------------------------------------SOLUTION-------------------------------------------------->
//{ Driver Code Starts
import java.io.*;
import java.util.*;

public class GFG {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        // Read number of test cases
        int t = Integer.parseInt(br.readLine().trim());

        while (t-- > 0) {
            // Read the array line and convert to int[]
            String input = br.readLine().trim();
            String[] tokens = input.split("\\s+");
            int n = tokens.length;
            int[] arr = new int[n];
            for (int i = 0; i < n; i++) {
                arr[i] = Integer.parseInt(tokens[i]);
            }

            // Read a, b, c from separate lines
            int a = Integer.parseInt(br.readLine().trim());
            int b = Integer.parseInt(br.readLine().trim());
            int c = Integer.parseInt(br.readLine().trim());

            // Call the solution method
            Solution obj = new Solution();
            ArrayList<Integer> ans = obj.sortArray(arr, a, b, c);

            // Output the result
            for (int num : ans) {
                System.out.print(num + " ");
            }
            System.out.println();
            System.out.println("~");
        }
    }
}

// } Driver Code Ends

// <-------------------------------------------MAIN-SOLUTION-------------------------------------------------->

class Solution {
    public ArrayList<Integer> sortArray(int[] arr, int A, int B, int C) {
        // Code here
        ArrayList<Integer> al = new ArrayList<>();
        
        for(int i = 0; i < arr.length; i++)
        {
            int x = arr[i];
            int func = (A*(int) Math.pow(arr[i],2)) + (B*(arr[i])) + C;
            al.add(func);
        }
        
        Collections.sort(al);
        
        return al;
    }
}



// Compilation Completed
Input: 
arr[] =
-4 -2 0 2 4
A =
1
B =
3
C =
5
Your Output:
3 5 9 15 33
Expected Output:
3 5 9 15 33