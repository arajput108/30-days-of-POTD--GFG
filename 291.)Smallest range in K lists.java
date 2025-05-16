// 291.)Given a 2d integer array arr[][] of size k*n, where each row is sorted in ascending order. 
//      Your task is to find the smallest range [l, r] that includes at least one element from each 
//      of the k lists. If more than one such ranges are found, return the first one.

// Examples:

// Input: n = 5, k = 3, arr[][] = [[4, 7, 9, 12, 15], [0, 8, 10, 14, 20], [6, 12, 16, 30, 50]]
// Output: [6, 8]
// Explanation: Smallest range is formed by  number 7 from the first list, 8 from second list and 6 from 
//              the third list.
// Input: n = 5, k = 3, arr[][] = [[1, 3, 5, 7, 9], [0, 2, 4, 6, 8], [2, 3, 5, 7, 11]]
// Output: [1, 2]
// Explanation: Smallest range is formed by number 1 present in first list and 2 is present in both 2nd 
//              and 3rd list.
// Input: n = 2, k = 3, arr[][] = [[2, 4], [1, 7], [20, 40]]
// Output: [4, 20]
// Explanation: Smallest range is formed by number 4 from the first list, 7 from second list and 20 from 
//              the third list.
// Constraints:
// 1 <= k, n <= 500
// 0 <= arr[ i ] <= 105
// <-------------------------------------------------SOLUTION-------------------------------------------------->
//{ Driver Code Starts
import java.io.*;
import java.lang.*;
import java.util.*;

public class DriverClass {
    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);
        int t = sc.nextInt();

        while (t-- > 0) {
            int n = sc.nextInt();
            int k = sc.nextInt();
            int arr[][] = new int[k][n];
            for (int i = 0; i < k; i++) {
                for (int j = 0; j < n; j++) arr[i][j] = sc.nextInt();
            }
            ArrayList<Integer> range = new Solution().findSmallestRange(arr);
            System.out.println(range.get(0) + " " + range.get(1));
            System.out.println("~");
        }
    }
}

// } Driver Code Ends

// <-------------------------------------------MAIN-SOLUTION-------------------------------------------------->

class Solution {
    public ArrayList<Integer> findSmallestRange(int[][] arr) {
        // code here
         int A[][]=new int[arr.length*arr[0].length][];
        int k=0;
        for(int i=0;i<arr.length;i++){
            for(var a: arr[i]){
                A[k++]= new int[]{i,a};
            }
        }
        
        Arrays.sort(A,(o1,o2)->Integer.compare(o1[1],o2[1]));
        
        int i=0;
        int len=arr.length;
        HashMap<Integer,Integer>map=new HashMap<>();
        int ans[]= new int[]{A[0][1],A[k-1][1]};
        for(int j=0;j<A.length;j++){
            map.put(A[j][0],map.getOrDefault(A[j][0],0)+1);
            
            while(map.size()==len){
                 if(ans[1]-ans[0] > A[j][1]-A[i][1]){
                    ans[0]=A[i][1];
                    ans[1]=A[j][1];
                }
                
                if(map.get(A[i][0])==1){
                    map.remove(A[i][0]);
                }
                else{
                    map.put(A[i][0],map.get(A[i][0])-1);
                }
                i++;
            }
        }
        
        ArrayList<Integer> t=new ArrayList<>();
        t.add(ans[0]);t.add(ans[1]);
        return t;
    }
}




// Compilation Completed
Input: 
n =
5
k =
3
arr[][] =
4 7 9 12 15
0 8 10 14 20
6 12 16 30 50
Your Output:
6 8
Expected Output:
6 8