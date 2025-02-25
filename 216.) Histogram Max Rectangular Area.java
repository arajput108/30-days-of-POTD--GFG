// 216.) You are given a histogram represented by an array arr, where each element of the array denotes the 
//       height of the bars in the histogram. All bars have the same width of 1 unit.

//       Your task is to find the largest rectangular area possible in the given histogram, where the rectangle 
//       can be formed using a number of contiguous bars.

// Examples:

// Input: arr[] = [60, 20, 50, 40, 10, 50, 60]
//  Largest-Rectangular-Area-in-a-Histogram
// Output: 100
// Explanation: We get the maximum by picking bars highlighted above in green (50, and 60). The area is computed 
//              (smallest height) * (no. of the picked bars) = 50 * 2 = 100.
// Input: arr[] = [3, 5, 1, 7, 5, 9]
// Output: 15
// Explanation:  We get the maximum by picking bars 7, 5 and 9. The area is computed (smallest height) * (no. of 
//               the picked bars) = 5 * 3 = 15.
// Input: arr[] = [3]
// Output: 3
// Explanation: In this example the largest area would be 3 of height 3 and width 1.
// Constraints:
// 1 ≤ arr.size() ≤ 105
// 0 ≤ arr[i] ≤ 104
// <______________________________________________SOLUTION___________________________________________________>
//{ Driver Code Starts
// Initial Template for Java
import java.io.*;
import java.lang.*;
import java.util.*;


// } Driver Code Ends

class Solution {
    public static int getMaxArea(int arr[]) {
        // your code here
          int n=arr.length;
        Stack<Integer> s=new Stack<>();
        int area=0;
        for(int i=0;i<=n;i++)
        {
            int height=(i==n)?0:arr[i];
            while(!s.isEmpty()&&height<arr[s.peek()])
            {
                int h=arr[s.pop()];
                int w=s.isEmpty()?i:i-s.peek()-1;
                area=Math.max(area,h*w);
            }
            s.push(i);
        }
        return area;
    }
}


// <___________________________________________________MAIN-SOLUTION_____________________________________________________>

//{ Driver Code Starts.

class GFG {
    public static void main(String[] args) throws IOException {
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
            Solution obj = new Solution();
            int res = obj.getMaxArea(arr);

            System.out.println(res);

            System.out.println("~");
        }
    }
}

// } Driver Code Ends




// Compilation Completed
For Input: 
60 20 50 40 10 50 60
Your Output: 
100
Expected Output: 
100