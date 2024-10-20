// 86.) Given a doubly linked list, each node is at most k-indices away from its target position. 
//      The problem is to sort the given doubly linked list. The distance can be assumed in either 
//      of the directions (left and right).

// Examples :

// Input: Doubly Linked List : 3 <-> 2 <-> 1 <-> 5 <-> 6 <-> 4 , k = 2
// Output: 1 <-> 2 <-> 3 <-> 4 <-> 5 <-> 6

// Explanation: After sorting the given 2-sorted list is 1 <-> 2 <-> 3 <-> 4 <-> 5 <-> 6.
// Input: Doubly Linked List : 5 <-> 6 <-> 7 <-> 3 <-> 4 <-> 4 , k = 3
// Output: 3 <-> 4 <-> 4 <-> 5 <-> 6 <-> 7

// Explanation: After sorting the given 3-sorted list is 3 <-> 4 <-> 4 <-> 5 <-> 6 <-> 7.
// Expected Time Complexity: O(n*logk)
// Expected Auxiliary Space: O(k)
// Constraints:
// 1 <= number of nodes <= 105
// 1 <= k < number of nodes
// 1 <= node->data <= 109

//  <______________________________________________SOLUTION___________________________________________________>
//{ Driver Code Starts
// Initial Template for Java

import java.io.*;
import java.util.*;

class DLLNode {
    int data;
    DLLNode next;
    DLLNode prev;

    DLLNode(int val) {
        data = val;
        next = null;
        prev = null;
    }
}

public class Main {
    public static void push(DLLNode tail, int new_data) {
        DLLNode newNode = new DLLNode(new_data);
        newNode.next = null;
        newNode.prev = tail;

        if (tail != null) {
            tail.next = newNode;
        }
    }

    public static void printList(DLLNode head) {
        if (head == null) {
            return;
        }

        while (head != null) {
            System.out.print(head.data + " ");
            head = head.next;
        }
        System.out.println();
    }

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int t = Integer.parseInt(br.readLine().trim());

        while (t-- > 0) {
            String[] arr = br.readLine().trim().split(" ");
            int k = Integer.parseInt(br.readLine().trim());

            DLLNode head = new DLLNode(Integer.parseInt(arr[0]));
            DLLNode tail = head;

            for (int i = 1; i < arr.length; i++) {
                push(tail, Integer.parseInt(arr[i]));
                tail = tail.next;
            }

            Solution obj = new Solution();
            DLLNode sorted_head = obj.sortAKSortedDLL(head, k);
            printList(sorted_head);
        }
    }
}

// } Driver Code Ends

// <___________________________________________________MAIN-SOLUTION_____________________________________________________>
// User function Template for Java
class Solution {
    public DLLNode sortAKSortedDLL(DLLNode head, int k) {
        // Code here
         if (head == null) return head;
        
        PriorityQueue<DLLNode> minHeap = new PriorityQueue<>((a, b) -> a.data - b.data);
        DLLNode newHead = null, last = null;

        DLLNode current = head;
        for (int i = 0; i <= k && current != null; i++) {
            minHeap.add(current);
            current = current.next;
        }

        while (!minHeap.isEmpty()) {
            DLLNode minNode = minHeap.poll();
            
            if (newHead == null) {
                newHead = minNode;
                newHead.prev = null;
                last = newHead;
            } else {

                last.next = minNode;
                minNode.prev = last;
                last = minNode;
            }

            if (current != null) {
                minHeap.add(current);
                current = current.next;
            }
        }
        last.next = null;
        return newHead;
    }
}

// Compilation Completed
For Input: 
3 2 1 5 6 4
2
Your Output:  1 2 3 4 5 6
Expected Output:  1 2 3 4 5 6
