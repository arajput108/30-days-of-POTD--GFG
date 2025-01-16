// 176.) Given an array arr of 0s and 1s. Find and return the length of the longest subarray 
//        with equal number of 0s and 1s.

// Examples:

// Input: arr[] = [1, 0, 1, 1, 1, 0, 0]
// Output: 6
// Explanation: arr[1...6] is the longest subarray with three 0s and three 1s.
// Input: arr[] = [0, 0, 1, 1, 0]
// Output: 4
// Explnation: arr[0...3] or arr[1...4] is the longest subarray with two 0s and two 1s.
// Input: arr[] = [0]
// Output: 0
// Explnation: There is no subarray with an equal number of 0s and 1s.
// Constraints:
// 1 <= arr.size() <= 105
// 0 <= arr[i] <= 1
// <___________________________________________________MAIN-SOLUTION_____________________________________________________>
//{ Driver Code Starts
import java.io.*;
import java.util.*;

public class Main {
    public static void main(String[] args) throws IOException {
        // Create BufferedReader for efficient input reading
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        // Read number of test cases
        int T = Integer.parseInt(br.readLine());

        // Process each test case
        while (T-- > 0) {
            // Read the entire line containing the array elements
            String line = br.readLine();

            // Split the line into an array of strings, then parse them as integers
            String[] tokens = line.split("\\s+");
            int[] a = new int[tokens.length];
            for (int i = 0; i < tokens.length; i++) {
                a[i] = Integer.parseInt(tokens[i]);
            }

            // Create the Solution object
            Solution obj = new Solution();

            // Call maxLen function and print the result
            System.out.println(obj.maxLen(a));
        }
    }
}
// } Driver Code Ends


// <___________________________________________________MAIN-SOLUTION_____________________________________________________>
class Solution {
    public int maxLen(int[] arr) {
        // Your code here
         int ans=0;
        Map<Integer, Integer> hm=new HashMap<>();
        hm.put(0, -1);
        int p0=0, p1=0;
        for(int i=0;i<arr.length;i++){
            if(arr[i]==0){
                p0++;
            }
            else p1++;
            if(hm.containsKey(p0-p1)){
                ans=Math.max(ans, i-hm.get(p0-p1));
            }
            else hm.put(p0-p1, i);
            
        }
        return ans;
    
    }
}



Compilation Completed
For Input: 
1 0 1 1 1 0 0
Your Output: 
6
Expected Output: 
6