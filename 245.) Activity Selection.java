// 245.) You are given a set of activities, each with a start time and a finish time, represented by the arrays 
//       start[] and finish[], respectively. A single person can perform only one activity at a time, meaning no 
//       two activities can overlap. Your task is to determine the maximum number of activities that a person can 
//       complete in a day.

// Examples:

// Input: start[] = [1, 3, 0, 5, 8, 5], finish[] = [2, 4, 6, 7, 9, 9]
// Output: 4
// Explanation: A person can perform at most four activities. The maximum set of activities that can be executed 
//              is {0, 1, 3, 4}
// Input: start[] = [10, 12, 20], finish[] = [20, 25, 30]
// Output: 1
// Explanation: A person can perform at most one activity.
// Input: start[] = [1, 3, 2, 5], finish[] = [2, 4, 3, 6]
// Output: 3
// Explanation: A person can perform activities 0, 1 and 3.
// Constraints:
// 1 ≤ start.size() = finish.size() ≤ 2*105
// 1 ≤ start[i] ≤ finish[i] ≤ 109
// <______________________________________________SOLUTION___________________________________________________>

//{ Driver Code Starts
import java.io.*;
import java.util.*;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader reader = new BufferedReader(new InputStreamReader(System.in));
        int t = Integer.parseInt(reader.readLine().trim());

        while (t-- > 0) {
            // Read the start times
            String[] startInput = reader.readLine().trim().split("\\s+");
            int[] start = new int[startInput.length];
            for (int i = 0; i < startInput.length; i++) {
                start[i] = Integer.parseInt(startInput[i]);
            }

            // Read the end times
            String[] endInput = reader.readLine().trim().split("\\s+");
            int[] finish = new int[endInput.length];
            for (int i = 0; i < endInput.length; i++) {
                finish[i] = Integer.parseInt(endInput[i]);
            }

            // Create solution object and call activitySelection
            Solution obj = new Solution();
            System.out.println(obj.activitySelection(start, finish));
            System.out.println("~");
        }
    }
}

// } Driver Code Ends



class Solution {
    public int activitySelection(int[] start, int[] finish) {
        // code here.
          int n = start.length;
        int arr[][] = new int[n][2];
        for(int i = 0;i<n;i++)
        {
            arr[i][0] = start[i];
            arr[i][1] = finish[i];
        }
        Arrays.sort(arr,(a,b)->Integer.compare(a[1],b[1]));
        int cnt = 1;
        int end = arr[0][1];
        for(int i = 1;i<n;i++)
        {
            if(arr[i][0]>end)
            {
                cnt++;
                end = arr[i][1];
            }
        }
        return cnt;
    }
}



// Compilation Completed
Input: 
start[] =
1 3 0 5 8 5
finish[] =
2 4 6 7 9 9
Your Output:
4
Expected Output:
4