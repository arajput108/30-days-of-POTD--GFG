// 215.) The stock span problem is a financial problem where we have a series of daily price quotes for 
//       a stock and we need to calculate the span of stock price for all days. The span arr[i] of the 
//       stocks price on a given day i is defined as the maximum number of consecutive days just before 
//       the given day, for which the price of the stock on the given day is less than or equal to its 
//       price on the current day.

// Examples:

// Input: arr[] = [100, 80, 60, 70, 60, 75, 85]
// Output: [1, 1, 1, 2, 1, 4, 6]
// Explanation: Traversing the given input span 100 is greater than equal to 100 and there are no more 
// elements behind it so the span is 1, 80 is greater than equal to 80 and smaller than 100 so the span is 1, 
// 60 is greater than equal to 60 and smaller than 80 so the span is 1, 70 is greater than equal to 60,70 and 
// smaller than 80 so the span is 2 and so on.  Hence the output will be 1 1 1 2 1 4 6.
// Input: arr[] = [10, 4, 5, 90, 120, 80]
// Output: [1, 1, 2, 4, 5, 1]
// Explanation: Traversing the given input span 10 is greater than equal to 10 and there are no more elements 
// behind it so the span is 1, 4 is greater than equal to 4 and smaller than 10 so the span is 1, 5 is greater 
// than equal to 4,5 and smaller than 10 so the span is 2,  and so on. Hence the output will be 1 1 2 4 5 1.
// Constraints:
// 1 ≤ arr.size()≤ 105
// 1 ≤ arr[i] ≤ 105
// <______________________________________________SOLUTION___________________________________________________>
//{ Driver Code Starts
// Initial Template for Java

import java.io.*;
import java.lang.*;
import java.util.*;

class Main {
    public static void main(String args[]) throws IOException {
        BufferedReader read = new BufferedReader(new InputStreamReader(System.in));
        int t = Integer.parseInt(read.readLine());

        while (t-- > 0) {

            ArrayList<Integer> array1 = new ArrayList<Integer>();
            String line = read.readLine();
            String[] tokens = line.split(" ");
            for (String token : tokens) {
                array1.add(Integer.parseInt(token));
            }
            ArrayList<Integer> v = new ArrayList<Integer>();
            int[] arr = new int[array1.size()];
            int idx = 0;
            for (int i : array1) arr[idx++] = i;

            v = new Solution().calculateSpan(arr);

            for (int i = 0; i < v.size(); i++) System.out.print(v.get(i) + " ");

            System.out.println();

            System.out.println("~");
        }
    }
}
// } Driver Code Ends

// <___________________________________________________MAIN-SOLUTION_____________________________________________________>

class Solution {
    public ArrayList<Integer> calculateSpan(int[] arr) {
        // write code here
          ArrayList<Integer> list = new  ArrayList<>();
        Stack<Integer> st = new Stack<>();
        int l=arr.length;
        for(int i=0;i<l;i++){
            while(!st.isEmpty() && arr[st.peek()]<=arr[i])st.pop();
           
            if(!st.isEmpty())list.add(i-st.peek());
            else list.add(i+1);
            
            st.push(i);        
        }
        return list;
    }
}


// Compilation Completed
For Input: 
100 80 60 70 60 75 85
Your Output: 
1 1 1 2 1 4 6
Expected Output: 
1 1 1 2 1 4 6

