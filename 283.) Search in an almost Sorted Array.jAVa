// 283.) Given a sorted integer array arr[] consisting of distinct elements, where some elements of the 
//       array are moved to either of the adjacent positions, i.e. arr[i] may be present at arr[i-1] or arr[i+1].
//       Given an integer target.  You have to return the index ( 0-based ) of the target in the array. If target 
//       is not present return -1.

// Examples:

// Input: arr[] = [10, 3, 40, 20, 50, 80, 70], target = 40
// Output: 2
// Explanation: Index of 40 in the given array is 2.
// Input: arr[] = [10, 3, 40, 20, 50, 80, 70], target = 90
// Output: -1
// Explanation: 90 is not present in the array.
// Input: arr[] = [-20], target = -20
// Output: 0
// Explanation: -20 is the only element present in the array.
// Constraints:
// 1 <= arr.size() <= 105
// -109 <= arr[i] <= 109
// <-------------------------------------------------SOLUTION-------------------------------------------------->
//{ Driver Code Starts
// Initial Template for Java
import java.util.*;


// } Driver Code Ends

// User function Template for Java

// <-------------------------------------------MAIN-SOLUTION-------------------------------------------------->

class Solution {
    public int findTarget(int arr[], int target) {
        // code here
        for(int i=0;i<arr.length;i++){
            if(arr[i]==target){
                return i;
            }
        }
        return -1;
    }
}
// <----------------------------------------MAIN-SOLUTION-ENDS-------------------------------------------------->


//{ Driver Code Starts.

public class GFG {
    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);
        int t = sc.nextInt();
        sc.nextLine();
        while (t-- > 0) {
            String temp[] = sc.nextLine().trim().split(" ");
            int n = temp.length;
            int arr[] = new int[n];
            int target = sc.nextInt();
            if (sc.hasNextLine()) sc.nextLine();
            for (int i = 0; i < n; i++) arr[i] = Integer.parseInt(temp[i]);
            Solution sln = new Solution();
            int ans = sln.findTarget(arr, target);
            System.out.println(ans);
            System.out.println("~");
        }
    }
}
// } Driver Code Ends



// Compilation Completed
Input: 
arr[] =
10 3 40 20 50 80 70
target =
40
Your Output:
2
Expected Output:
2