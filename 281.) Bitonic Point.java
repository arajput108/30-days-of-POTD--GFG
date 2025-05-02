// 281.) Given an array of integers arr[] that is first strictly increasing and then maybe strictly decreasing, 
//       find the bitonic point, that is the maximum element in the array.
//       Bitonic Point is a point before which elements are strictly increasing and after which elements are   
//       strictly decreasing.

// Note: It is guaranteed that the array contains exactly one bitonic point.

// Examples:

// Input: arr[] = [1, 2, 4, 5, 7, 8, 3]
// Output: 8
// Explanation: Elements before 8 are strictly increasing [1, 2, 4, 5, 7] and elements after 8 are strictly decreasing [3].
// Input: arr[] = [10, 20, 30, 40, 50]
// Output: 50
// Explanation: Elements before 50 are strictly increasing [10, 20, 30 40] and there are no elements after 50.
// Input: arr[] = [120, 100, 80, 20, 0]
// Output: 120
// Explanation: There are no elements before 120 and elements after 120 are strictly decreasing [100, 80, 20, 0].
// Constraints:
// 3 ≤ arr.size() ≤ 105
// 1 ≤ arr[i] ≤ 106
// <-------------------------------------------------SOLUTION-------------------------------------------------->
//{ Driver Code Starts
// Initial Template for Java

import java.io.*;
import java.util.*;

public class Main {

    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int tc = Integer.parseInt(br.readLine().trim());
        while (tc-- > 0) {
            String[] str = br.readLine().trim().split(" ");
            int[] arr = new int[str.length];
            for (int i = 0; i < str.length; i++) {
                arr[i] = Integer.parseInt(str[i]);
            }

            int ans = new Solution().findMaximum(arr);
            System.out.println(ans);
            System.out.println("~");
        }
    }
}

// } Driver Code Ends


// User function Template for Java


// <-------------------------------------------MAIN-SOLUTION-------------------------------------------------->
class Solution {
    public int findMaximum(int[] arr) {
        // code here
          for(int i=0;i<arr.length;i++){
            if(arr[i]>arr[i+1])
                return arr[i];
            
        }
        return arr[arr.length-1];

    }
}


//Compilation Completed
Input: 
arr[] =
1 2 4 5 7 8 3
Your Output:
8
Expected Output:
8   