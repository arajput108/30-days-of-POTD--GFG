// 159.) Given two arrays a[] and b[], the task is to find the number of elements in the union between 
//       these two arrays.

// The Union of the two arrays can be defined as the set containing distinct elements from both arrays. 
// If there are repetitions, then only one element occurrence should be there in the union.

// Note: Elements of a[] and b[] are not necessarily distinct.

// Examples

// Input: a[] = [1, 2, 3, 4, 5], b[] = [1, 2, 3]
// Output: 5
// Explanation: Union set of both the arrays will be 1, 2, 3, 4 and 5. So count is 5.
// Input: a[] = [85, 25, 1, 32, 54, 6], b[] = [85, 2] 
// Output: 7
// Explanation: Union set of both the arrays will be 85, 25, 1, 32, 54, 6, and 2. So count is 7.
// Input: a[] = [1, 2, 1, 1, 2], b[] = [2, 2, 1, 2, 1] 
// Output: 2
// Explanation: We need to consider only distinct. So count of elements in union set will be 2.
// Constraints:
// 1 ≤ a.size(), b.size() ≤ 106
// 0 ≤ a[i], b[i] ≤ 105
// <______________________________________________SOLUTION___________________________________________________>
//{ Driver Code Starts
// Initial Template for Java

import java.io.*;
import java.lang.*;
import java.util.*;

class Main {
    public static void main(String args[]) throws IOException {
        BufferedReader read = new BufferedReader(new InputStreamReader(System.in));
        int t = Integer.parseInt(read.readLine().trim());

        while (t-- > 0) {
            // Reading the first array
            String line1 = read.readLine().trim();
            String[] numsStr1 = line1.split(" ");
            int[] a = new int[numsStr1.length];
            for (int i = 0; i < numsStr1.length; i++) {
                a[i] = Integer.parseInt(numsStr1[i]);
            }

            // Reading the second array
            String line2 = read.readLine().trim();
            String[] numsStr2 = line2.split(" ");
            int[] b = new int[numsStr2.length];
            for (int i = 0; i < numsStr2.length; i++) {
                b[i] = Integer.parseInt(numsStr2[i]);
            }

            // Creating an instance of the Solution class
            Solution ob = new Solution();

            // Calling doUnion method and printing the result
            System.out.println(ob.findUnion(a, b));

            System.out.println("~");
        }
    }
}

// } Driver Code Ends


// User function Template for Java
// <___________________________________________________MAIN-SOLUTION_____________________________________________________>
class Solution {
    public static int findUnion(int a[], int b[]) {
        // code here
         Set<Integer> s = new HashSet<>();
        Arrays.stream(a).forEach(num -> s.add(num));
        Arrays.stream(b).forEach(num -> s.add(num));
        
        return s.size();
    }
}

C// ompilation Completed
For Input: 
1 2 3 4 5
1 2 3
Your Output: 
5
Expected Output: 
5