// 265.) Given a unsorted array arr[] of positive integers having all the numbers occurring exactly twice, 
//       except for one number which will occur only once. Find the number occurring only once.

// Examples :

// Input: arr[] = [1, 2, 1, 5, 5]
// Output: 2
// Explanation: Since 2 occurs once, while other numbers occur twice, 2 is the answer.
// Input: arr[] = [2, 30, 2, 15, 20, 30, 15]
// Output: 20
// Explanation: Since 20 occurs once, while other numbers occur twice, 20 is the answer.
// Constraints
// 1 ≤  arr.size()  ≤ 106
// 0 ≤ arr[i] ≤ 109
// <______________________________________________SOLUTION___________________________________________________>
//{ Driver Code Starts
// Initial Template for Java
import java.io.*;
import java.util.*;
import java.util.stream.Collectors;

public class Main {

    public static void main(String[] args) throws Exception {
        Scanner sc = new Scanner(System.in);
        int t = Integer.parseInt(sc.nextLine());
        while (t-- > 0) {
            String[] arr1Str = sc.nextLine().split(" ");
            int[] arr = Arrays.stream(arr1Str).mapToInt(Integer::parseInt).toArray();
            Solution ob = new Solution();
            int ans = ob.findUnique(arr);
            System.out.println(ans);

            System.out.println("~");
        }
    }
}

// } Driver Code Ends

// <___________________________________________________MAIN-SOLUTION_____________________________________________________>

class Solution {
    public int findUnique(int[] arr) {
        // code here
        int ans=0;
        for(int i:arr)
        {
            ans^=i;
        }
        return ans;
    }
}


// Compilation Completed
Input: 
arr[] =
1 2 1 5 5
Your Output:
2
Expected Output:
2