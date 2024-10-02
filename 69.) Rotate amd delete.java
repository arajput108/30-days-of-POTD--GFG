// 69.) Given an array arr integers. Do the following operation until a single element left. 
//      For every kth operation:

// Right, rotate the vector clockwise by 1.
// Delete the kth element from the last.
// Now, find the element which is left at last.

// Example:

// Input: arr = [1, 2, 3, 4, 5, 6]
// Output: 3
// Explanation: Rotate the vector clockwise i.e. after rotation the vector arr = [6, 1, 2, 3, 4, 5] and 
// delete the last element that is 5 that will be arr = [6, 1, 2, 3, 4]. Similarly, the output will be 3.
// Input: arr = [1, 2, 3, 4]
// Output: 2
// Explanation: Rotate the vector clockwise i.e. after rotation the vector arr = [4, 1, 2, 3] and 
// delete the last element that is 3 that will be arr = [4, 1, 2]. Similarly, the output will be 2.
// Expected Time Complexity: O(n)
// Expected Auxiliary Space: O(1)

// Constraints:
// 1 <= arr.size() <= 105
// 1 <= arr[i] <= 106
// <_______________________________________________SOLUTION__________________________________________________>   

//{ Driver Code Starts
// Initial Template for Java
import java.io.*;
import java.lang.*;
import java.util.*;


// } Driver Code Ends
// <_____________________________________________MAIN-SOLUTION______________________________________________>   

class Solution {
    public static int rotateDelete(ArrayList<Integer> arr) {
        // code here
         int k = 1;  
       while(arr.size() > 1){
           clockwise(arr);
           
           int n = arr.size();
           int deleteIndex = n-k;
           
           if(deleteIndex >= 0 ){
               arr.remove(deleteIndex);
           }else{
               arr.remove(0);
           }
           k++;
       }
        return arr.get(0);
    }

    
    public static void clockwise(ArrayList<Integer> arr) {
        
            int lastElement = arr.remove(arr.size() - 1);  
            arr.add(0, lastElement);  

    }
}


//{ Driver Code Starts.

// class GFG {
//     public static void main(String[] args) throws IOException {
//         BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
//         int t = Integer.parseInt(br.readLine());
//         while (t-- > 0) {
//             String line = br.readLine();
//             String[] tokens = line.split(" ");

//             // Create an ArrayList to store the integers
//             ArrayList<Integer> arr = new ArrayList<>();

//             // Parse the tokens into integers and add to the array
//             for (String token : tokens) {
//                 arr.add(Integer.parseInt(token));
//             }

//             Solution obj = new Solution();
//             int res = obj.rotateDelete(arr);

//             System.out.println(res);
//         }
//     }
// }

// // } Driver Code Ends