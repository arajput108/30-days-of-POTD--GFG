// 266.) Given an array arr[] containing 2*n + 2 positive numbers, out of which 2*n numbers exist in pairs 
//       whereas only two number occur exactly once and are distinct. Find the other two numbers. Return 
//       the answer in increasing order.

// Examples:

// Input: arr[] = [1, 2, 3, 2, 1, 4]
// Output: [3, 4] 
// Explanation: 3 and 4 occur exactly once.
// Input: arr[] = [2, 1, 3, 2]
// Output: [1, 3]
// Explanation: 1 and 3 occur exactly once.
// Input: arr[] = [2, 1, 3, 3]
// Output: [1, 2]
// Explanation: 1 and 2 occur exactly once.
// Constraints:
// 2 ≤ arr.size() ≤ 106 
// 1 ≤ arr[i] ≤ 5 * 106
// arr.size() is even
// <______________________________________________SOLUTION___________________________________________________>
//{ Driver Code Starts
// Initial Template for Java
import java.io.*;
import java.util.*;
import java.util.HashMap;


// } Driver Code Ends
// <____________________________________________MAIN-SOLUTION-STARTS__________________________________________________>

class Solution {
    public int[] singleNum(int[] arr) {
        // Code here
          int xor=0;
        for(int i:arr) xor^=i;
        int bitMask= xor & -xor;
        int x=0,y=0;
        for(int i:arr){
            if((i&bitMask)==0) x^=i;
            else y^=i;
        }
        
        return new int[]{Math.min(x,y),Math.max(x,y)};
    }
}

// <____________________________________________MAIN-SOLUTION-END__________________________________________________>

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

            // int k = Integer.parseInt(br.readLine());
            // Create Solution object and find closest sum
            Solution ob = new Solution();
            int[] ans = ob.singleNum(arr);

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
1 2 3 2 1 4
Your Output:
3 4
Expected Output:
3 4