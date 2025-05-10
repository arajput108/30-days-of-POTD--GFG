// 288.) Given an array arr[] and an integer k, the task is to find the length of longest subarray in 
//       which the count of elements greater than k is more than the count of elements less than or equal to k.

// Examples:

// Input: arr[] = [1, 2, 3, 4, 1], k = 2
// Output: 3
// Explanation: The subarray [2, 3, 4] or [3, 4, 1] satisfy the given condition, and there is no subarray of 
//              length 4 or 5 which will hold the given condition, so the answer is 3.
// Input: arr[] = [6, 5, 3, 4], k = 2
// Output: 4
// Explanation: In the subarray [6, 5, 3, 4], there are 4 elements > 2 and 0 elements <= 2, so it is the longest 
//              subarray.
// Constraints:
// 1 <= arr.size() <= 106
// 1 <= arr[i] <= 106
// 0 <= k <= 106
// <-------------------------------------------------SOLUTION-------------------------------------------------->
//{ Driver Code Starts
// Initial Template for Java
import java.io.*;
import java.util.*;


// } Driver Code Ends

// User function Template for Java
class Solution {
    static int longestSubarray(int[] arr, int k) {
        // Code Here
         int n = arr.length;
        int prefixSum = 0;
        int maxLen = 0;
        
        Map<Integer , Integer> hm = new HashMap<>();
        hm.put(0 , -1);
        
        for (int i = 0 ; i < n ; i++) {
            prefixSum += (arr[i] > k)?1:-1;
            
            if (prefixSum > 0) maxLen = i + 1;    
            
            if (hm.containsKey(prefixSum - 1)){
                maxLen = Math.max(maxLen , i - hm.get(prefixSum - 1));
            }
            
            if (!hm.containsKey(prefixSum)) hm.put(prefixSum , i);
        }
        return maxLen;
    }
}


//{ Driver Code Starts.


// <-------------------------------------------MAIN-SOLUTION-------------------------------------------------->

class GFG {
    public static void main(String args[]) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        int t = Integer.parseInt(br.readLine().trim());
        while (t-- > 0) {
            String line = br.readLine();
            String[] tokens = line.split(" ");
            int n = tokens.length;
            int[] arr = new int[n];

            int i = 0;
            // Parse the tokens into integers and add to the array
            for (String token : tokens) {
                arr[i] = Integer.parseInt(token);
                i++;
            }

            int k = Integer.parseInt(br.readLine().trim());
            System.out.println(new Solution().longestSubarray(arr, k));
            System.out.println("~");
        }
    }
}

// } Driver Code Ends



// Compilation Completed
Input: 
arr[] =
1 2 3 4 1
k =
2
Your Output:
3
Expected Output:
3