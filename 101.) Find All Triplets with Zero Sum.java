// 101.) Given an array arr[], find all possible indices [i, j, k] of triplets [arr[i], arr[j], arr[k]] in the 
//       array whose sum is equal to zero. Return indices of triplets in any order and all the returned triplets 
//       indices should also be internally sorted, i.e., for any triplet indices [i, j, k], the condition i < j < k 
//       should hold.

// Examples:

// Input: arr[] = [0, -1, 2, -3, 1]
// Output: [[0, 1, 4], [2, 3, 4]]
// Explanation: Triplets with sum 0 are:
// arr[0] + arr[1] + arr[4] = 0 + (-1) + 1 = 0
// arr[2] + arr[3] + arr[4] = 2 + (-3) + 1 = 0

// Input: arr[] = [1, -2, 1, 0, 5]
// Output: [[0, 1, 2]]
// Explanation: Only triplet which satisfies the condition is arr[0] + arr[1] + arr[2] = 1 + (-2) + 1 = 0

// Input: arr[] = [2, 3, 1, 0, 5]
// Output: [[]]
// Explanation: There is no triplet with sum 0.
// Constraints:
// 3 <= arr.size() <= 103
// -104 <= arr[i] <= 104

// <______________________________________________SOLUTION___________________________________________________>
//{ Driver Code Starts
import java.io.*;
import java.lang.*;
import java.util.*;

// } Driver Code Ends
// User function Template for Java

// <___________________________________________________MAIN-SOLUTION_____________________________________________________>
class Solution {
    public List<List<Integer>> findTriplets(int[] arr) {
        // Your code here
          List<List<Integer>> result = new ArrayList<>();
        
        int len = arr.length;
        
        Map<Integer , ArrayList<Integer>> map = new HashMap<>();
        
        for(int i=0; i<len; i++)
        {
            int val = arr[i];
            if(!map.containsKey(val))
            {
                map.put(val , new ArrayList<>());
            }
            map.get(val).add(i);
        }   
        
        for(int i=0; i<len-2; i++)
        {
            for(int j=i+1; j<len-1; j++)
            {
                int target = -(arr[i] + arr[j]);
                if(map.containsKey(target))
                {
                    for(int idx : map.get(target))
                    {
                        if(idx > j)
                        {
                            List<Integer> al = new ArrayList<>(Arrays.asList(i , j , idx));
                           // Collections.sort(al);
                            result.add(al);
                        }
                    }
                }
            }
        }
        return result;
    }
}


// Compilation Completed
For Input: 
0 -1 2 -3 1
Your Output: 
0 1 4
2 3 4
Expected Output: 
0 1 4
2 3 4