// 163.) Given an array of integers arr[] and a number k, count the number of subarrays having XOR of their 
//       elements as k.

// Examples: 

// Input: arr[] = [4, 2, 2, 6, 4], k = 6
// Output: 4
// Explanation: The subarrays having XOR of their elements as 6 are [4, 2], [4, 2, 2, 6, 4], [2, 2, 6], and [6]. 
//              Hence, the answer is 4.
// Input: arr[] = [5, 6, 7, 8, 9], k = 5
// Output: 2
// Explanation: The subarrays having XOR of their elements as 5 are [5] and [5, 6, 7, 8, 9]. Hence, the answer is 2.
// Input: arr[] = [1, 1, 1, 1], k = 0
// Output: 4
// Explanation: The subarrays are [1, 1], [1, 1], [1, 1] and [1, 1, 1, 1].
// Constraints:

// 1 ≤ arr.size() ≤ 105
// 0 ≤ arr[i] ≤105
// 0 ≤ k ≤ 105
// <______________________________________________SOLUTION___________________________________________________>
//{ Driver Code Starts
import java.io.*;
import java.util.*;

public class Main {
    public static void main(String args[]) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int tc = Integer.parseInt(br.readLine());

        while (tc-- > 0) {
            String s[] = br.readLine().split(" ");
            int arr[] = new int[s.length];

            for (int i = 0; i < arr.length; i++) {
                arr[i] = Integer.parseInt(s[i]);
            }
            int k = Integer.parseInt(br.readLine());

            Solution obj = new Solution();
            System.out.println(obj.subarrayXor(arr, k));
            System.out.println("~");
        }
    }
}
// } Driver Code Ends

// <___________________________________________________MAIN-SOLUTION_____________________________________________________>
class Solution {
    public long subarrayXor(int arr[], int k) {
        // code here
           HashMap<Integer,Integer> map = new HashMap<>();
        int ans = 0;
        
        int presum = 0;
        for(int i = 0 ; i < arr.length ; i++){
            presum ^= arr[i];
            if(map.containsKey(presum^k)){
                ans += map.get(presum^k);
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



C// ompilation Completed
For Input: 
4 2 2 6 4
6
Your Output: 
4
Expected Output: 
4