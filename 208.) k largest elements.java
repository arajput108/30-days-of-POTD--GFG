// 208.) Given an array arr[] of positive integers and an integer k, Your task is to return k largest elements 
//       in decreasing order. 

// Examples:

// Input: arr[] = [12, 5, 787, 1, 23], k = 2
// Output: [787, 23]
// Explanation: 1st largest element in the array is 787 and second largest is 23.
// Input: arr[] = [1, 23, 12, 9, 30, 2, 50], k = 3 
// Output: [50, 30, 23]
// Explanation: Three Largest elements in the array are 50, 30 and 23.
// Input: arr[] = [12, 23], k = 1
// Output: [23]
// Explanation: 1st Largest element in the array is 23.
// Constraints:
// 1 ≤ k ≤ arr.size() ≤ 106
// 1 ≤ arr[i] ≤ 106
 
// <______________________________________________SOLUTION___________________________________________________>
//{ Driver Code Starts
// Initial Template for Java
import java.io.*;
import java.util.*;
import java.util.HashMap;


// } Driver Code Ends
class Solution {
    public ArrayList<Integer> kLargest(int[] arr, int k) {
        // Your code here
          ArrayList<Integer> list = new ArrayList<Integer>();
        Arrays.sort(arr);
        for (int i = arr.length - 1; i >= arr.length - k; i--) {
            list.add(arr[i]); 
        }
    return list;
    }
}


// <___________________________________________________MAIN-SOLUTION_____________________________________________________>


//{ Driver Code Starts.
public class Main {

    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int t = Integer.parseInt(br.readLine());
        while (t-- > 0) {

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

            int k = Integer.parseInt(br.readLine());
            // Create Solution object and find closest sum
            Solution ob = new Solution();
            ArrayList<Integer> ans = ob.kLargest(arr, k);

            // Print the result as a space-separated string
            for (int num : ans) {
                System.out.print(num + " ");
            }
            System.out.println(); // New line after printing the results
            System.out.println("~");
        }
    }
}

// } Driver Code Ends


//Compilation Completed
For Input: 
12 5 787 1 23
2
Your Output: 
787 23
Expected Output: 
787 23