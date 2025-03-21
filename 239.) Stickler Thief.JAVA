// 239.) Stickler the thief wants to loot money from the houses arranged in a line. He cannot loot two 
//       consecutive houses and aims to maximize his total loot.
// Given an array, arr[] where arr[i] represents the amount of money in the i-th house.
// Determine the maximum amount he can loot.

// Examples:

// Input: arr[] = [6, 5, 5, 7, 4]
// Output: 15
// Explanation: Maximum amount he can get by looting 1st, 3rd and 5th house. Which is 6 + 5 + 4 = 15.
// Input: arr[] = [1, 5, 3]
// Output: 5
// Explanation: Loot only 2nd house and get maximum amount of 5.
// Input: arr[] = [4, 4, 4, 4]
// Output: 8
// Explanation: The optimal choice is to loot every alternate house. Looting the 1st and 3rd houses, or 
//               the 2nd and 4th, both give a maximum total of 4 + 4 = 8.
// Constraints:
// 1 ≤ arr.size() ≤ 105
// 1 ≤ arr[i] ≤ 104

// <______________________________________________SOLUTION___________________________________________________>
//{ Driver Code Starts
import java.io.*;
import java.util.*;

class GFG {
    public static void main(String args[]) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int t = Integer.parseInt(br.readLine());
        while (t-- > 0) {

            String inputLine[] = br.readLine().trim().split(" ");
            int n = inputLine.length;
            int arr[] = new int[n];
            for (int i = 0; i < n; i++) {
                arr[i] = Integer.parseInt(inputLine[i]);
            }

            // calling method findMaxSum() of class solve
            System.out.println(new Solution().findMaxSum(arr));
            System.out.println("~");
        }
    }
}
// } Driver Code Ends



// <___________________________________________________MAIN-SOLUTION_____________________________________________________>

class Solution {
    public int findMaxSum(int arr[]) {
        // code here
          if (arr.length == 0) return 0;  
        if (arr.length == 1) return arr[0];  

        int prev2 = 0;
        int prev = arr[0];

        for (int i = 1; i < arr.length; i++) {
            int take = arr[i];
            if (i > 1) take += prev2;
            int notTake = prev;

            int curr = Math.max(take, notTake);
            prev2 = prev;
            prev = curr;
        }
        return prev;
    }
}


//Compilation Completed
Input: 
arr[] =
6 5 5 7 4
Your Output:
15
Expected Output:
15