// 157.) Given an array arr[], find all possible triplets i, j, k in the arr[] whose sum of elements is equals 
//       to zero. 
// Returned triplet should also be internally sorted i.e. i<j<k.

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
class Solution {
    public List<List<Integer>> findTriplets(int[] arr) {
        // Your code here
         HashMap<Integer,ArrayList<Integer>> map=new HashMap<>();
         List<List<Integer>> ans=new LinkedList<>();
         for(int i=0;i<arr.length;i++){
             for(int j=i+1;j<arr.length;j++){
                 if(map.get(0-(arr[i]+arr[j]))!=null){
                     for(int k:map.get(0-(arr[i]+arr[j]))){
                     List<Integer> temp=new LinkedList<>();
                     temp.add(i);
                     temp.add(k);
                     temp.add(j);
                     ans.add(temp);
                     }
                 }
                if(map.get(arr[j])!=null) map.get(arr[j]).add(j);
                else {map.put(arr[j],new ArrayList<>());
                    map.get(arr[j]).add(j);
                }
                
             }
             map=new HashMap<>();
         }
         return ans;
    }
}

//{ Driver Code Starts.



// <___________________________________________________MAIN-SOLUTION_____________________________________________________>

class Main {
    public static void main(String args[]) throws IOException {
        BufferedReader read = new BufferedReader(new InputStreamReader(System.in));
        int t = Integer.parseInt(read.readLine());

        while (t-- > 0) {
            String line = read.readLine().trim();
            String[] numsStr = line.split(" ");
            int[] nums = new int[numsStr.length];
            for (int i = 0; i < numsStr.length; i++) {
                nums[i] = Integer.parseInt(numsStr[i]);
            }

            Solution obj = new Solution();
            List<List<Integer>> res = obj.findTriplets(nums);
            Collections.sort(res, (a, b) -> {
                for (int i = 0; i < a.size(); i++) {
                    if (!a.get(i).equals(b.get(i))) {
                        return a.get(i) - b.get(i);
                    }
                }
                return 0;
            });
            if (res.size() == 0) {
                System.out.println("[]");
            }
            for (int i = 0; i < res.size(); i++) {
                for (int j = 0; j < res.get(i).size(); j++) {
                    System.out.print(res.get(i).get(j) + " ");
                }
                System.out.println();
            }
            System.out.println("~");
        }
    }
}
// } Driver Code Ends




// Compilation Completed
For Input: 
0 -1 2 -3 1
Your Output: 
0 1 4
2 3 4
Expected Output: 
0 1 4
2 3 4