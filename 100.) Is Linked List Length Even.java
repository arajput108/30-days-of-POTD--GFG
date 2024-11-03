// 100.) Given a linked list, your task is to complete the function isLengthEven() which contains the head of the linked list, and check whether the length of the linked list is even or not. Return true if it is even, otherwise false.

// Examples:

// Input: Linked list: 12->52->10->47->95->0

// Output: true
// Explanation: The length of the linked list is 6 which is even, hence returned true.
// Input: Linked list: 9->4->3

// Output: false
// Explanation: The length of the linked list is 3 which is odd, hence returned false.
// Expected Time Complexity: O(n)
// Expected Auxillary Space: O(1)

// Constraints:
// 1 <= number of nodes <= 105
// 1 <= elements of the linked list <= 105
// <______________________________________________SOLUTION___________________________________________________>
//{ Driver Code Starts
// Initial Template for Java

import java.io.*;
import java.lang.*;
import java.util.*;

class Node {
    int data;
    Node next;

    Node(int data) {
        this.data = data;
        this.next = null;
    }
}

class Driver_code {
    static Node insert(Node head, int data) {
        Node temp = new Node(data);
        if (head == null) {
            head = temp;
            return head;
        } else {
            Node t = head;
            while (t.next != null) {
                t = t.next;
            }
            t.next = temp;
        }
        return head;
    }

    static void printList(Node head) {
        Node temp = head;
        while (temp != null) {
            System.out.print(temp.data + " ");
            temp = temp.next;
        }
    }

    public static void main(String[] args) throws IOException {
        BufferedReader read = new BufferedReader(new InputStreamReader(System.in));
        int t = Integer.parseInt(read.readLine());

        while (t-- > 0) {

            Node head = null;

            String str[] = read.readLine().trim().split(" ");
            int listSize = str.length;
            for (int i = 0; i < listSize; i++) {
                head = insert(head, Integer.parseInt(str[i]));
            }
            boolean f = new Solution().isLengthEven(head);

            System.out.println(f ? "true" : "false");
        
System.out.println("~");
}
    }
}

// } Driver Code Ends

// <___________________________________________________MAIN-SOLUTION_____________________________________________________>
// User function Template for Java
class Solution {
    public boolean isLengthEven(Node head) {
        // code here
        //MZH
        int count=0;
        while(head!=null)
        {
            head=head.next;
            count++;
            
        }
        return count%2==1?false:true;
    }
}
    
// Compilation Completed

For Input:  12 52 10 47 95 0
Your Output:  true
Expected Output:  true