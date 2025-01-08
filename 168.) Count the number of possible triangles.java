// 168.) Given an integer array arr[]. Find the number of triangles that can be formed with three different 
//       array elements as lengths of three sides of the triangle. 

// A triangle with three given sides is only possible if sum of any two sides is always greater than the third side.

// Examples:

// Input: arr[] = [4, 6, 3, 7]
// Output: 3
// Explanation: There are three triangles possible [3, 4, 6], [4, 6, 7] and [3, 6, 7]. Note that [3, 4, 7] is not 
//              a possible triangle.  
// Input: arr[] = [10, 21, 22, 100, 101, 200, 300]
// Output: 6
// Explanation: There can be 6 possible triangles: [10, 21, 22], [21, 100, 101], [22, 100, 101], [10, 100, 101], 
//              [100, 101, 200] and [101, 200, 300]
// Input: arr[] = [1, 2, 3]
// Output: 0
// Explanation: No triangles are possible.
// Constraints:
// 3 <= arr.size() <= 103
// 1 <= arr[i] <= 105
// <______________________________________________SOLUTION___________________________________________________>
//{ Driver Code Starts
import java.io.*;
import java.util.*;

class Geeks {
    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int t = Integer.parseInt(br.readLine());
        for (int g = 0; g < t; g++) {
            String[] str = (br.readLine()).trim().split(" ");
            int arr[] = new int[str.length];
            for (int i = 0; i < str.length; i++) {
                arr[i] = Integer.parseInt(str[i]);
            }
            System.out.println(new Solution().countTriangles(arr));
            System.out.println("~");
        }
    }
}

// } Driver Code Ends


// User function Template for Java
// <___________________________________________________MAIN-SOLUTION_____________________________________________________>

class Solution {
    // Function to count the number of possible triangles.
    static int countTriangles(int arr[]) {
        // code here
        Arrays.sort(arr);
        int n=arr.length;
        int cnt=0;
        for(int i=2;i<n;i++){
             int j=0;
             int k=i-1;
             while(j < k){
                   int sum=arr[j]+arr[k];
                   if(sum > arr[i]){
                       cnt+=k-j;
                       k--;
                   }
                   else{
                       j++;
                   }
             }
        }
        
        return cnt;
    }
}



// Compilation Completed
For Input: 
4 6 3 7
Your Output: 
3
Expected Output: 
3
