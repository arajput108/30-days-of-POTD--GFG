// 173.) Given an array arr[] of non-negative integers, where each element arr[i] represents the 
//       height of the vertical lines, find the maximum amount of water that can be contained between 
//       any two lines, together with the x-axis.

// Note: In the case of a single vertical line it will not be able to hold water.

// Examples:

// Input: arr[] = [1, 5, 4, 3]
// Output: 6
// Explanation: 5 and 3 are 2 distance apart. So the size of the base is 2. Height of container = min(5, 3) = 3. 
//              So, total area to hold water = 3 * 2 = 6.
// Input: arr[] = [3, 1, 2, 4, 5]
// Output: 12
// Explanation: 5 and 3 are 4 distance apart. So the size of the base is 4. Height of container = min(5, 3) = 3. 
//              So, total area to hold water = 4 * 3 = 12.
// Input: arr[] = [2, 1, 8, 6, 4, 6, 5, 5]
// Output: 25 
// Explanation: 8 and 5 are 5 distance apart. So the size of the base is 5. Height of container = min(8, 5) = 5. 
//              So, the total area to hold water = 5 * 5 = 25.
// Constraints:
// 1<= arr.size() <=105
// 1<= arr[i] <=104
// <______________________________________________SOLUTION___________________________________________________>
//{ Driver Code Starts
import java.io.*;
import java.util.*;

class Sorting {
    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int t = Integer.parseInt(br.readLine());
        for (int g = 0; g < t; g++) {
            String[] str = (br.readLine()).trim().split(" ");
            int arr[] = new int[str.length];
            for (int i = 0; i < str.length; i++) arr[i] = Integer.parseInt(str[i]);
            System.out.println(new Solution().maxWater(arr));
            System.out.println("~");
        }
    }
}
// } Driver Code Ends


// User function Template for Java

// <___________________________________________________MAIN-SOLUTION_____________________________________________________>
class Solution {

    public int maxWater(int arr[]) {
        // Code Here
             int i=0;
        int j=arr.length-1;
        int ans=0;
        while(i<j)
        {
            ans=Math.max(ans,Math.min(arr[i],arr[j])*(j-i));
            if(arr[i]<arr[j])
            {
                i++;
            }else{
                j--;
            }
        }
        return(ans);
    }
}




// Compilation Completed
For Input: 
1 5 4 3
Your Output: 
6
Expected Output: 
6