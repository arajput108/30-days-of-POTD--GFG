// 160.) Given an array arr[] of non-negative integers. Find the length of the longest sub-sequence such 
//       that elements in the subsequence are consecutive integers, the consecutive numbers can be in any order.

// Examples:

// Input: arr[] = [2, 6, 1, 9, 4, 5, 3]
// Output: 6
// Explanation: The consecutive numbers here are 1, 2, 3, 4, 5, 6. These 6 numbers form the longest 
//              consecutive subsquence.
// Input: arr[] = [1, 9, 3, 10, 4, 20, 2]
// Output: 4
// Explanation: 1, 2, 3, 4 is the longest consecutive subsequence.
// Input: arr[] = [15, 13, 12, 14, 11, 10, 9]
// Output: 7
// Explanation: The longest consecutive subsequence is 9, 10, 11, 12, 13, 14, 15, which has a length of 7.
// Constraints:
// 1 <= arr.size() <= 105
// 0 <= arr[i] <= 105
// <______________________________________________SOLUTION___________________________________________________>
//{ Driver Code Starts
import java.io.*;
import java.util.*;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int t = Integer.parseInt(br.readLine());

        while (t-- > 0) {
            // Read first array
            String input = br.readLine();
            String[] inputArray = input.split(" ");
            int[] arr = Arrays.stream(inputArray).mapToInt(Integer::parseInt).toArray();

            Solution ob = new Solution();
            int res = ob.longestConsecutive(arr);

            System.out.println(res);
            System.out.println("~");
        }
    }
}

// } Driver Code Ends

// <___________________________________________________MAIN-SOLUTION_____________________________________________________>

class Solution {

    // Function to return length of longest subsequence of consecutive integers.
    public int longestConsecutive(int[] arr) {
        // code here
            if (arr == null || arr.length == 0) return 0;

    Arrays.sort(arr);
    int longest = 1; // To track the longest subsequence
    int currentStreak = 1; // To track the current streak

    for (int i = 1; i < arr.length; i++) {
        if (arr[i] != arr[i - 1]) { // Ignore duplicates
            if (arr[i] == arr[i - 1] + 1) { // Consecutive
                currentStreak++;
            } else { // Not consecutive
                longest = Math.max(longest, currentStreak);
                currentStreak = 1; // Reset the streak
            }
        }
    }

    return Math.max(longest, currentStreak); // Handle the case where the longest streak ends at the last element
    }
}

// Compilation Completed
For Input: 
2 6 1 9 4 5 3
Your Output: 
6
Expected Output: 
6