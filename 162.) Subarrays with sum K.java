// 162.) Given an unsorted array of integers, find the number of continuous subarrays having sum exactly 
//       equal to a given number k.

// Examples:

// Input: arr = [10, 2, -2, -20, 10], k = -10
// Output: 3
// Explaination: Subarrays: arr[0...3], arr[1...4], arr[3...4] have sum exactly equal to -10.
// Input: arr = [9, 4, 20, 3, 10, 5], k = 33
// Output: 2
// Explaination: Subarrays: arr[0...2], arr[2...4] have sum exactly equal to 33.
// Input: arr = [1, 3, 5], k = 0
// Output: 0
// Explaination: No subarray with 0 sum.
// Constraints:

// 1 ≤ arr.size() ≤ 105
// -103 ≤ arr[i] ≤ 103
// -107 ≤ k ≤ 107

//{ Driver Code Starts
// Initial Template for Java
// <______________________________________________SOLUTION___________________________________________________>
import java.io.*;
import java.lang.*;
import java.util.*;

public class Main {
    public static void main(String args[]) throws IOException {
        // taking input using class Scanner
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int t = Integer.parseInt(br.readLine());

        while (t-- > 0) {
            // taking total number of elements
            int k = Integer.parseInt(br.readLine());
            String line = br.readLine();
            String[] tokens = line.split(" ");

            // Create an ArrayList to store the integers
            ArrayList<Integer> array = new ArrayList<>();

            // Parse the tokens into integers and add to the array
            for (String token : tokens) {
                array.add(Integer.parseInt(token));
            }

            int[] arr = new int[array.size()];
            int idx = 0;
            for (int i : array) arr[idx++] = i;
            int res = new Solution().countSubarrays(arr, k);

            System.out.print(res);
            System.out.println();
            System.out.println("~");
        }
    }
}
// } Driver Code Ends

// <___________________________________________________MAIN-SOLUTION_____________________________________________________>
// User function Template for Java
class Solution {
    public int countSubarrays(int arr[], int k) {
        // code here
          HashMap<Integer,Integer> map = new HashMap<>();
        int ans = 0;
        
        int presum = 0;
        for(int i = 0 ; i < arr.length ; i++){
            presum += arr[i];
            if(map.containsKey(presum-k)){
                ans += map.get(presum-k);
            }
            if(presum == k){
                ans += 1;
            }
            if(map.containsKey(presum)){
                map.put(presum, map.get(presum)+1);
            }
            else{
                map.put(presum,1);
            }
        }
        return ans;
    }
}

// Compilation Completed
For Input: 
-10
10 2 -2 -20 10
Your Output: 
3
Expected Output: 
3