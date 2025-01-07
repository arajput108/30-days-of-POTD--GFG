// 167.) You are given an integer target and an array arr[]. You have to find number of pairs in arr[] which sums 
//       up to target. It is given that the elements of the arr[] are in sorted order.
// Note: pairs should have elements of distinct indexes. 

// Examples :

// Input: arr[] = [-1, 1, 5, 5, 7], target = 6
// Output: 3
// Explanation: There are 3 pairs which sum up to 6 : {1, 5}, {1, 5} and {-1, 7}.
// Input: arr[] = [1, 1, 1, 1], target = 2
// Output: 6
// Explanation: There are 6 pairs which sum up to 2 : {1, 1}, {1, 1}, {1, 1}, {1, 1}, {1, 1} and {1, 1}.
// Input: arr[] = [-1, 10, 10, 12, 15], target = 125
// Output: 0
// Explanation: There is no such pair which sums up to 4.
// Constraints:
// -105 <= target <=105
//  2 <= arr.size() <= 105
// -105 <= arr[i] <= 105
// <______________________________________________SOLUTION___________________________________________________>
//{ Driver Code Starts
// Initial Template for Java

import java.io.*;
import java.lang.*;
import java.util.*;


// } Driver Code Ends
// User function Template for Java

class Solution {

    int countPairs(int arr[], int target) {
        // Complete the function
         int ans=0;
        int left =0;
        int right= arr.length -1;
        
        while(left<right){
            if(arr[left]+arr[right]==target){
                ans++;
                int left1 = left+1;
                int right1 = right-1;
                
                while(left1<right){
                    
                    if(arr[left1]+arr[right]==target){
                        ans++;
                    }
                    left1++;
                }
                while(right1>left){
                    if(arr[right1]+arr[left]==target){
                        ans++;
                    }
                    
                    right1--;
                }
                
                right--;
                left++;
                
            }
            else if(arr[left]+arr[right]>target){
                right--;
            }else{
                left++;
            }
        }
        return ans;
    }
}


//{ Driver Code Starts.
// <___________________________________________________MAIN-SOLUTION_____________________________________________________>

class GFG {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int t = Integer.parseInt(br.readLine().trim()); // Inputting the testcases
        while (t-- > 0) {
            String[] inputLine = br.readLine().trim().split(" ");
            int[] arr = new int[inputLine.length];
            for (int i = 0; i < inputLine.length; i++) {
                arr[i] = Integer.parseInt(inputLine[i]);
            }
            inputLine = br.readLine().trim().split(" ");
            int target = Integer.parseInt(inputLine[0]);

            Solution obj = new Solution();
            int res = obj.countPairs(arr, target);
            System.out.println(res);
            System.out.println("~");
        }
    }
}
// } Driver Code Ends



Compilation Completed
For Input: 
-1 1 5 5 7
6
Your Output: 
3
Expected Output: 
3