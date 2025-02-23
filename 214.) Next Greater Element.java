// 214.) Given an array arr[ ] of integers, the task is to find the next greater element for each element 
//       of the array in order of their appearance in the array. Next greater element of an element in the 
//       array is the nearest element on the right which is greater than the current element.
//       If there does not exist next greater of current element, then next greater element for current 
//       element is -1. For example, next greater of the last element is always -1.

// Examples

// Input: arr[] = [1, 3, 2, 4]
// Output: [3, 4, 4, -1]
// Explanation: The next larger element to 1 is 3, 3 is 4, 2 is 4 and for 4, since it doesn't exist, it is -1.
// Input: arr[] = [6, 8, 0, 1, 3]
// Output: [8, -1, 1, 3, -1]
// Explanation: The next larger element to 6 is 8, for 8 there is no larger elements hence it is -1, for 0 it is 1 , 
// for 1 it is 3 and then for 3 there is no larger element on right and hence -1.
// Input: arr[] = [10, 20, 30, 50]
// Output: [20, 30, 50, -1]
// Explanation: For a sorted array, the next element is next greater element also exxept for the last element.
// Input: arr[] = [50, 40, 30, 10]
// Output: [-1, -1, -1, -1]
// Explanation: There is no greater element for any of the elements in the array, so all are -1.
// Constraints:
// 1 ≤ arr.size() ≤ 106
// 0 ≤ arr[i] ≤ 109
// <______________________________________________SOLUTION___________________________________________________>
//{ Driver Code Starts
import java.io.*;
import java.util.*;

class Geeks {
    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int t = Integer.parseInt(br.readLine()); // Number of test cases
        for (int g = 0; g < t; g++) {
            String[] str =
                (br.readLine()).trim().split(" "); // Reading input as a string array
            int arr[] = new int[str.length]; // Creating integer array from the input
            for (int i = 0; i < str.length; i++) {
                arr[i] = Integer.parseInt(str[i]);
            }

            // Getting the result from the Solution class
            ArrayList<Integer> result = new Solution().nextLargerElement(arr);

            // Printing the result in the required format
            if (result.isEmpty()) {
                System.out.println("[]");
            } else {
                for (int i = 0; i < result.size(); i++) {
                    if (i != 0) System.out.print(" ");
                    System.out.print(result.get(i));
                }
                System.out.println();
                System.out.println("~");
            }
        }
    }
}

// } Driver Code Ends



// <___________________________________________________MAIN-SOLUTION_____________________________________________________>

class Solution {
    // Function to find the next greater element for each element of the array.
    public ArrayList<Integer> nextLargerElement(int[] arr) {
        // code here
         ArrayList<Integer> list = new ArrayList<>() ; 
        for(int i = 0; i<arr.length-1 ; i++){
            int size = list.size() ; 
            for(int j = i ; j<arr.length  ; j++){
                if(arr[i] < arr[j]){
                    list.add(arr[j]) ; 
                    break  ; 
                }
            }
            if(size == list.size()){
                list.add(-1) ; 
            }
        }
        list.add(-1) ; 
        return list ; 
    }
}


// Compilation Completed
For Input: 
6 8 0 1 3
Your Output: 
8 -1 1 3 -1
Expected Output: 
8 -1 1 3 -1