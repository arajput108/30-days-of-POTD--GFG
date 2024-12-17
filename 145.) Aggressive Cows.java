// 145.) You are given an array with unique elements of stalls[], which denote the position of a stall. 
//       You are also given an integer k which denotes the number of aggressive cows. Your task is to 
//       assign stalls to k cows such that the minimum distance between any two of them is the maximum possible.

// Examples :

// Input: stalls[] = [1, 2, 4, 8, 9], k = 3
// Output: 3
// Explanation: The first cow can be placed at stalls[0], 
// the second cow can be placed at stalls[2] and 
// the third cow can be placed at stalls[3]. 
// The minimum distance between cows, in this case, is 3, which also is the largest among all possible ways.
// Input: stalls[] = [10, 1, 2, 7, 5], k = 3
// Output: 4
// Explanation: The first cow can be placed at stalls[0],
// the second cow can be placed at stalls[1] and
// the third cow can be placed at stalls[4].
// The minimum distance between cows, in this case, is 4, which also is the largest among all possible ways.
// Input: stalls[] = [2, 12, 11, 3, 26, 7], k = 5
// Output: 1
// Explanation: Each cow can be placed in any of the stalls, as the no. of stalls are exactly equal to the 
//              number of cows.
// The minimum distance between cows, in this case, is 1, which also is the largest among all possible ways.
// Constraints:
// 2 <= stalls.size() <= 106
// 0 <= stalls[i] <= 108
// 1 <= k <= stalls.size()
// <______________________________________________SOLUTION___________________________________________________>
//{ Driver Code Starts
// Initial Template for Java

import java.io.*;
import java.util.*;

class GFG {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int tc = Integer.parseInt(br.readLine().trim());

        while (tc-- > 0) {

            String[] str = br.readLine().trim().split(" ");
            int[] a = new int[str.length];
            for (int i = 0; i < str.length; i++) {
                a[i] = Integer.parseInt(str[i]);
            }
            String[] nk = br.readLine().trim().split(" ");
            int k = Integer.parseInt(nk[0]);
            Solution sln = new Solution();
            int ans = sln.aggressiveCows(a, k);

            System.out.println(ans);
            System.out.println("~");
        }
    }
}
// } Driver Code Ends

// <___________________________________________________MAIN-SOLUTION_____________________________________________________>
// User function Template for Java
class Solution {
    public static int aggressiveCows(int[] stalls, int k) {
        // code here
                int n = stalls.length; //size of array
        
        Arrays.sort(stalls);

        int low = 1, high = stalls[n - 1] - stalls[0];
        
        while (low <= high) {
            int mid = (low + high) / 2;
            if (placeCow(stalls, mid, k) == true) {
                low = mid + 1;
            } else high = mid - 1;
        }
        return high;
    }
    private static boolean placeCow(int[] stalls, int dist, int cows) {
        int n = stalls.length; 
        int cntCows = 1; 
        int last = stalls[0];
        for (int i = 1; i < n; i++) {
            if (stalls[i] - last >= dist) {
                cntCows++; 
                last = stalls[i]; 
            }
            if (cntCows >= cows) return true;
        }
        return false;
    }
}


// Compilation Completed
For Input: 
6 7 9 11 13 15
4
Your Output: 
2
Expected Output: 
2