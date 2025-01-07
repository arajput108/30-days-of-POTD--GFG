// 166) Given an array arr[] and a number target, find a pair of elements (a, b) in arr[], where a<=b whose 
//      sum is closest to target.
// Note: Return the pair in sorted order and if there are multiple such pairs return the pair with maximum 
//       absolute difference. If no such pair exists return an empty array.

// Examples:

// Input: arr[] = [10, 30, 20, 5], target = 25
// Output: [5, 20]
// Explanation: As 5 + 20 = 25 is closest to 25.
// Input: arr[] = [5, 2, 7, 1, 4], target = 10
// Output: [2, 7]
// Explanation: As (4, 7) and (2, 7) both are closest to 10, but absolute difference of (2, 7) is 5 
//              and (4, 7) is 3. Hence, [2, 7] has maximum absolute difference and closest to target. 
// Input: arr[] = [10], target = 10
// Output: []
// Explanation: As the input array has only 1 element, return an empty array.
// Constraints:
// 1 <= arr.size() <= 2*105
// 0 <= target<= 2*105
// 0 <= arr[i] <= 105
// <______________________________________________SOLUTION___________________________________________________>
//{ Driver Code Starts
// Initial Template for Java

import java.io.*;
import java.util.*;

public class GFG {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int t = Integer.parseInt(br.readLine());
        while (t-- > 0) {

            String line = br.readLine();
            String[] tokens = line.split(" ");

            ArrayList<Integer> array = new ArrayList<>();

            for (String token : tokens) {
                array.add(Integer.parseInt(token));
            }

            int[] arr = new int[array.size()];
            int idx = 0;
            for (int i : array) arr[idx++] = i;

            int target = Integer.parseInt(br.readLine());

            Solution ob = new Solution();
            List<Integer> res = ob.sumClosest(arr, target);
            if (res.isEmpty()) {
                System.out.print("[]");
            } else {
                for (Integer num : res) {
                    System.out.print(num + " ");
                }
            }
            System.out.println();
            System.out.println("~");
        }
    }
}
// } Driver Code Ends


// User function Template for Java

// <___________________________________________________MAIN-SOLUTION_____________________________________________________>
class Solution {
    public List<Integer> sumClosest(int[] arr, int target) {
        // code here
         if(arr.length < 2) return new ArrayList<>();   
       
       Arrays.sort(arr);
       
       List<Integer> list = new ArrayList<>();
       
       int max = Integer.MAX_VALUE, i = 0, j = arr.length - 1;
       
       while(i < j){
           
           int add = arr[i] + arr[j];
           int sum = Math.abs(target - add);
           
           if(sum < max){
               max = sum;
               list = List.of(arr[i], arr[j]);
           }
           else if(sum == max && Math.abs(arr[j] - arr[i]) > (list.get(1) - list.get(0))){
               list = List.of(arr[i], arr[j]);
           }
           
           if(add > target){
               j--;
           }else if(add < target){
               i++;
           }else{
               break;
           }
       }
       
       return list;
    }
}


// Compilation Completed
For Input: 
10 30 20 5
25
Your Output: 
5 20
Expected Output: 
5 20