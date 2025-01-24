// 184.) You are given the head of a singly linked list. Your task is to determine if the linked list 
//       contains a loop. A loop exists in a linked list if the next pointer of the last node points to 
//       any other node in the list (including itself), rather than being null.

// Custom Input format:
// A head of a singly linked list and a pos (1-based index) which denotes the position of the node to which 
// the last node points to. If pos = 0, it means the last node points to null, indicating there is no loop.

// Examples:

// Input: head: 1 -> 3 -> 4, pos = 2
// Output: true
// Explanation: There exists a loop as last node is connected back to the second node.

// Input: head: 1 -> 8 -> 3 -> 4, pos = 0
// Output: false
// Explanation: There exists no loop in given linked list.

// Input: head: 1 -> 2 -> 3 -> 4, pos = 1
// Output: true
// Explanation: There exists a loop as last node is connected back to the first node.


// Constraints:
// 1 ≤ number of nodes ≤ 104
// 1 ≤ node->data ≤ 103       
// 0 ≤ pos ≤ Number of nodes in Linked List
// <______________________________________________SOLUTION___________________________________________________>
//{ Driver Code Starts
// Initial template code for JAVA

import java.io.*;
import java.lang.*;
import java.util.*;

class Node {
    int data;
    Node next;

    Node(int x) {
        data = x;
        next = null;
    }
}

class GFG {
    public static void makeLoop(Node head, Node tail, int x) {
        if (x == 0) return;

        Node curr = head;
        for (int i = 1; i < x; i++) curr = curr.next;

        tail.next = curr;
    }

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int t = Integer.parseInt(br.readLine().trim());

        while (t-- > 0) {
            List<Integer> arr = new ArrayList<>();
            String input = br.readLine().trim();
            if (!input.isEmpty()) {
                String[] numbers = input.split("\\s+");
                for (String num : numbers) {
                    if (!num.isEmpty()) {
                        arr.add(Integer.parseInt(num));
                    }
                }
            }

            int pos = Integer.parseInt(br.readLine().trim());

            Node head = null;
            if (!arr.isEmpty()) {
                head = new Node(arr.get(0));
                Node tail = head;
                for (int i = 1; i < arr.size(); ++i) {
                    tail.next = new Node(arr.get(i));
                    tail = tail.next;
                }
                makeLoop(head, tail, pos);
            }

            Solution x = new Solution();
            if (x.detectLoop(head))
                System.out.println("true");
            else
                System.out.println("false");
        
System.out.println("~");
}
    }
}

// } Driver Code Ends


// User function template for JAVA

/* Node is defined as

class Node
{
    int data;
    Node next;
    Node(int d) {data = d; next = null; }
}

*/

class Solution {
    // Function to check if the linked list has a loop.
    public static boolean detectLoop(Node head) {
        // Add code here
        Node slow=head;
        Node fast=head;
        while(fast!=null&&fast.next!=null){
            slow=slow.next;
            fast=fast.next.next;
            if(slow==fast){
                return true;
            }
        }
        return false;
    }
}   

// Compilation Completed
For Input: 
1 3 4
2
Your Output: 
true
Expected Output: 
true