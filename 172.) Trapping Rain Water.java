// 172.) Given an array arr[] with non-negative integers representing the height of blocks. 
//       If the width of each block is 1, compute how much water can be trapped between the blocks 
//       during the rainy season. 

// Examples:

// Input: arr[] = [3, 0, 1, 0, 4, 0 2]
// Output: 10
// Explanation: Total water trapped = 0 + 3 + 2 + 3 + 0 + 2 + 0 = 10 units.

// Input: arr[] = [3, 0, 2, 0, 4]
// Output: 7
// Explanation: Total water trapped = 0 + 3 + 1 + 3 + 0 = 7 units.
// Input: arr[] = [1, 2, 3, 4]
// Output: 0
// Explanation: We cannot trap water as there is no height bound on both sides.
// Input: arr[] = [2, 1, 5, 3, 1, 0, 4]
// Output: 9
// Explanation: Total water trapped = 0 + 1 + 0 + 1 + 3 + 4 + 0 = 9 units.
// Constraints:
// 1 < arr.size() < 105
// 0 < arr[i] < 103
// <______________________________________________SOLUTION___________________________________________________>





// //{ Driver Code Starts
import java.io.*;
import java.util.*;

class Sorting {
    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int t = Integer.parseInt(br.readLine());
        for (int g = 0; g < t; g++) {
            String[] str = (br.readLine()).trim().split(" ");
            int arr[] = new int[str.length];
            for (int i = 0; i < str.length; i++) arr[i] = Integer.parseInt(str[i]);
            System.out.println(new Solution().maxWater(arr));
            System.out.println("~");
        }
    }
}
// } Driver Code Ends

// <___________________________________________________MAIN-SOLUTION_____________________________________________________>
class Solution {
    public int maxWater(int arr[]) {
        // code here
         int n = arr.length;
        if (n < 3) return 0; // Less than 3 blocks cannot trap water

        int left = 0, right = n - 1; // Two pointers
        int leftMax = 0, rightMax = 0; // Maximum height on the left and right
        int waterTrapped = 0;

        while (left < right) {
            if (arr[left] < arr[right]) {
                if (arr[left] >= leftMax) {
                    leftMax = arr[left]; // Update left max
                } else {
                    waterTrapped += leftMax - arr[left]; // Add trapped water
                }
                left++; // Move left pointer
            } else {
                if (arr[right] >= rightMax) {
                    rightMax = arr[right]; // Update right max
                } else {
                    waterTrapped += rightMax - arr[right]; // Add trapped water
                }
                right--; // Move right pointer
            }
        }
        return waterTrapped;
    }
}
Compilation Completed
For Input: 
3 0 1 0 4 0 2
Your Output: 
10
Expected Output: 
10