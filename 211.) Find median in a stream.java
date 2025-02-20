// 211.) Given a data stream arr[] where integers are read sequentially, the task is to determine the median 
//       of the elements encountered so far after each new integer is read.

// There are two cases for median on the basis of data set size.

// 1. If the data set has an odd number then the middle one will be consider as median.
// 2. If the data set has an even number then there is no distinct middle value and the 
// median will be the arithmetic mean of the two middle values.

// Examples:

// Input:  arr[] = [5, 15, 1, 3, 2, 8]
// Output: [5.0, 10.0, 5.0, 4.0, 3.0, 4.0] 
// Explanation: 
// After reading 1st element of stream – 5 -> median = 5.0
// After reading 2nd element of stream – 5, 15 -> median = (5+15)/2 = 10.0 
// After reading 3rd element of stream – 5, 15, 1 -> median = 5.0
// After reading 4th element of stream – 5, 15, 1, 3 ->  median = (3+5)/2 = 4.0
// After reading 5th element of stream – 5, 15, 1, 3, 2 -> median = 3.0
// After reading 6th element of stream – 5, 15, 1, 3, 2, 8 ->  median = (3+5)/2 = 4.0
// Input: arr[] = [2, 2, 2, 2]
// Output: [2.0, 2.0, 2.0, 2.0]
// Explanation: 
// After reading 1st element of stream – 2 -> median = 2.0
// After reading 2nd element of stream – 2, 2 -> median = (2+2)/2 = 2.0
// After reading 3rd element of stream – 2, 2, 2 -> median = 2.0
// After reading 4th element of stream – 2, 2, 2, 2 ->  median = (2+2)/2 = 2.0
// Constraints:
// 1 <= arr.size() <= 105
// 1 <= x <= 106

// <______________________________________________SOLUTION___________________________________________________>
//{ Driver Code Starts
import java.io.*;
import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int t = sc.nextInt();
        sc.nextLine(); // Consume the newline character

        while (t-- > 0) {
            String s = sc.nextLine();
            String[] parts = s.split(" ");
            int[] nums = new int[parts.length];
            for (int i = 0; i < parts.length; i++) {
                nums[i] = Integer.parseInt(parts[i]);
            }
            Solution ob = new Solution();
            ArrayList<Double> ans = ob.getMedian(nums);
            for (double i : ans) {
                System.out.printf("%.1f ", i);
            }
            System.out.println();
            System.out.println("~");
        }
        sc.close();
    }
}

// } Driver Code Ends

// <___________________________________________________MAIN-SOLUTION_____________________________________________________>

class Solution {
    public ArrayList<Double> getMedian(int[] arr) {
        // code here
         int n = arr.length;
        ArrayList<Double> res = new ArrayList<>();
        
        PriorityQueue<Integer> maxHeap = new PriorityQueue<>
        (Collections.reverseOrder());
        PriorityQueue<Integer> minHeap = new PriorityQueue<>();
        
        for (int num : arr) {
            maxHeap.add(num);
            
            if (!maxHeap.isEmpty() && !minHeap.isEmpty() 
            && maxHeap.peek() > minHeap.peek()) {
                minHeap.add(maxHeap.poll());
            }
            
            if (maxHeap.size() > minHeap.size() + 1) {
                minHeap.add(maxHeap.poll());
            } else if (minHeap.size() > maxHeap.size()) {
                maxHeap.add(minHeap.poll());
            }
            
            if (maxHeap.size() > minHeap.size()) {
                res.add((double) maxHeap.peek());
            } else {
                res.add((maxHeap.peek() + 
                minHeap.peek()) / 2.0);
            }
        }
        
        return res;

    }
}




// 
Compilation Completed
For Input: 
5 15 1 3 2 8
Your Output: 
5.0 10.0 5.0 4.0 3.0 4.0
Expected Output: 
5.0 10.0 5.0 4.0 3.0 4.0