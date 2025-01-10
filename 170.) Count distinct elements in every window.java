// 170.) Given an integer array arr[] and a number k. Find the count of distinct elements in every window of 
//       size k in the array.

// Examples:

// Input: arr[] = [1, 2, 1, 3, 4, 2, 3], k = 4
// Output:  [3, 4, 4, 3]
// Explanation: Window 1 of size k = 4 is 1 2 1 3. Number of distinct elements in this window are 3. 
// Window 2 of size k = 4 is 2 1 3 4. Number of distinct elements in this window are 4.
// Window 3 of size k = 4 is 1 3 4 2. Number of distinct elements in this window are 4.
// Window 4 of size k = 4 is 3 4 2 3. Number of distinct elements in this window are 3.
// Input: arr[] = [4, 1, 1], k = 2
// Output: [2, 1]
// Explanation: Window 1 of size k = 2 is 4 1. Number of distinct elements in this window are 2. 
// Window 2 of size k = 2 is 1 1. Number of distinct elements in this window is 1. 
// Input: arr[] = [1, 1, 1, 1, 1], k = 3
// Output: [1, 1, 1]
// Constraints:
// 1 <= k <= arr.size() <= 105
// 1 <= arr[i] <= 105
// <______________________________________________SOLUTION___________________________________________________>
//{ Driver Code Starts
import java.io.*;
import java.util.*;
import java.util.HashMap;

class GFG {
    public static void main(String args[]) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int t = Integer.parseInt(br.readLine());
        while (t > 0) {
            String line = br.readLine();
            String[] tokens = line.split(" ");

            ArrayList<Integer> array = new ArrayList<>();

            for (String token : tokens) {
                array.add(Integer.parseInt(token));
            }

            int[] arr = new int[array.size()];
            int idx = 0;
            for (int i : array) arr[idx++] = i;

            int k = Integer.parseInt(br.readLine());

            ArrayList<Integer> ans = new Solution().countDistinct(arr, k);

            for (Integer val : ans) System.out.print(val + " ");
            System.out.println();

            t--;
            System.out.println("~");
        }
    }
}
// } Driver Code Ends

// <___________________________________________________MAIN-SOLUTION_____________________________________________________>
class Solution {
    ArrayList<Integer> countDistinct(int arr[], int k) {
        // code here
         ArrayList<Integer> ans=new ArrayList<>();
        for(int i=0;i<=arr.length-k;i++){
           
            HashSet <Integer> hs = new HashSet<>();
           for(int j=i;j<k+i;j++){
               hs.add(arr[j]);
             }
            ans.add(hs.size());
            
        }
        
        return ans;
    }
}



// Compilation Completed
For Input: 
1 2 1 3 4 2 3
4
Your Output: 
3 4 4 3
Expected Output: 
3 4 4 3