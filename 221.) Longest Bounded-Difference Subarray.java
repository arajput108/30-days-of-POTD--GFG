// 221.) Given an array of positive integers arr[] and a non-negative integer x, the task is to find the 
//       longest sub-array where the absolute difference between any two elements is not greater than x.
//       If multiple such subarrays exist, return the one that starts at the smallest index.

// Examples: 

// Input: arr[] = [8, 4, 2, 6, 7], x = 4 
// Output: [4, 2, 6] 
// Explanation: The sub-array described by index [1..3], i.e. [4, 2, 6] contains no such difference of two 
//              elements which is greater than 4.
// Input: arr[] = [15, 10, 1, 2, 4, 7, 2], x = 5 
// Output: [2, 4, 7, 2] 
// Explanation: The sub-array described by indexes [3..6], i.e. [2, 4, 7, 2] contains no such difference of 
//              two elements which is greater than 5. 
// Constraints:
// 1 <= arr.size() <= 105
// 1 <= arr[i] <= 109
// 0 <= x<= 109
// <______________________________________________SOLUTION___________________________________________________>
//{ Driver Code Starts
// Initial Template for Java
import java.io.*;
import java.util.*;
import java.util.HashMap;


// } Driver Code Ends


class Solution {

    public ArrayList<Integer> longestSubarray(int[] arr, int x) {
        // code here
         Deque<Integer> maxi = new LinkedList<>();
        Deque<Integer> mini = new LinkedList<>();
        int ans = 0, i = 0, j = 0, ii = 0, jj = 0;
        
        while (j < arr.length) {
            while (!mini.isEmpty() && arr[mini.peekLast()] > arr[j]) mini.pollLast();
            while (!maxi.isEmpty() && arr[maxi.peekLast()] < arr[j]) maxi.pollLast();
            
            mini.addLast(j);
            maxi.addLast(j);
            
            while (arr[maxi.peekFirst()] - arr[mini.peekFirst()] > x && i < j) {
                if (i == mini.peekFirst()) mini.pollFirst();
                if (i == maxi.peekFirst()) maxi.pollFirst();
                i++;
            }
            
            if (j - i + 1 > ans) {
                ans = j - i + 1;
                ii = i;
                jj = j;
            }
            j++;
        }
        
        ArrayList<Integer> ans1 = new ArrayList<>();
        for (int k = ii; k <= jj; k++) {
            ans1.add(arr[k]);
        }
        
        return ans1;
    }
}


//{ Driver Code Starts.

// <___________________________________________________MAIN-SOLUTION_____________________________________________________>

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
            ArrayList<Integer> ans = ob.longestSubarray(arr, k);

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



// Compilation Completed
Input: 
arr[] =
8 4 2 6 7 
x =
4
Your Output:
4 2 6
Expected Output:
4 2 6