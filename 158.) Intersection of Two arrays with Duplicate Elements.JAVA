// 158.) Given two integer arrays a[] and b[], you have to find the intersection of the two arrays. 
//       Intersection of two arrays is said to be elements that are common in both arrays. 
//       The intersection should not have duplicate elements and the result should contain items in any order.

// Note: The driver code will sort the resulting array in increasing order before printing.

// Examples:

// Input: a[] = [1, 2, 1, 3, 1], b[] = [3, 1, 3, 4, 1]
// Output: [1, 3]
// Explanation: 1 and 3 are the only common elements and we need to print only one occurrence of common elements.
// Input: a[] = [1, 1, 1], b[] = [1, 1, 1, 1, 1]
// Output: [1]
// Explanation: 1 is the only common element present in both the arrays.
// Input: a[] = [1, 2, 3], b[] = [4, 5, 6]
// Output: []
// Explanation: No common element in both the arrays.
// Constraints:
// 1 ≤ a.size(), b.size() ≤ 105
// 1 ≤ a[i], b[i] ≤ 105
// <______________________________________________SOLUTION___________________________________________________>
//{ Driver Code Starts
import java.io.*;
import java.util.*;

class GFG {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        int t = Integer.parseInt(br.readLine().trim());
        while (t-- > 0) {
            // First array input
            String[] str1 = br.readLine().trim().split(
                " "); // Read the first line and split by spaces
            int n = str1.length;
            int[] a = new int[n];
            for (int i = 0; i < n; i++) {
                a[i] = Integer.parseInt(str1[i]); // Convert each element to an integer
            }

            // Second array input
            String[] str2 = br.readLine().trim().split(
                " "); // Read the second line and split by spaces
            int m = str2.length;
            int[] b = new int[m];
            for (int i = 0; i < m; i++) {
                b[i] = Integer.parseInt(str2[i]); // Convert each element to an integer
            }

            Solution sol = new Solution();
            ArrayList<Integer> res = sol.intersectionWithDuplicates(a, b);

            // Sort the result
            Collections.sort(res);

            // Print the result
            if (res.isEmpty()) {
                System.out.println("[]");
            } else {
                for (int num : res) {
                    System.out.print(num + " ");
                }
                System.out.println();
            }

            System.out.println("~");
        }
    }
}

// } Driver Code Ends

// <___________________________________________________MAIN-SOLUTION_____________________________________________________>

class Solution {
    public ArrayList<Integer> intersectionWithDuplicates(int[] a, int[] b) {
        // code here
        HashSet<Integer> ans = new HashSet<>();
        HashSet<Integer> set = new HashSet<>();
        for(int num : a ){
            set.add(num);
        }
        for(int num : b){
            if(set.contains(num)){
                ans.add(num);
            }
        }
        return new ArrayList<>(ans);
    }
}


// Compilation Completed
For Input: 
1 2 1 3 1
3 1 3 4 1
Your Output: 
1 3
Expected Output: 
1 3