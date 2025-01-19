// 179.) Given the head of a singly linked list, your task is to left rotate the linked list k times.

// Examples:

// Input: head = 10 -> 20 -> 30 -> 40 -> 50, k = 4
// Output: 50 -> 10 -> 20 -> 30 -> 40
// Explanation:
// Rotate 1: 20 -> 30 -> 40 -> 50 -> 10
// Rotate 2: 30 -> 40 -> 50 -> 10 -> 20
// Rotate 3: 40 -> 50 -> 10 -> 20 -> 30
// Rotate 4: 50 -> 10 -> 20 -> 30 -> 40

// Input: head = 10 -> 20 -> 30 -> 40 , k = 6
// Output: 30 -> 40 -> 10 -> 20 
 
// Constraints:

// 1 <= number of nodes <= 105
// 0 <= k <= 109
// 0 <= data of node <= 109
// <______________________________________________SOLUTION___________________________________________________>
//{ Driver Code Starts
// Initial Template for Java

import java.io.*;
import java.util.*;

class Node {
    int data;
    Node next;

    Node(int x) {
        data = x;
        next = null;
    }
}


// } Driver Code Ends
/* node of linked list:

class Node{
    int data;
    Node next;
    Node(int d){
        data=d;
        next=null;
    }
}

*/
// <___________________________________________________MAIN-SOLUTION_____________________________________________________>

class Solution {
    public Node rotate(Node head, int k) {
        // add code here
        Node temp=head;
        int n=1;
        while(temp.next != null)
        {  
            n++;
            temp=temp.next;
        }
   
        k=k%n;
        if(k==0) return head;
        temp.next=head;
        //temp=head;
        int steps=k;
        
        while(steps-- > 0)
            temp=temp.next;
            
        head=temp.next;
        temp.next=null;
        return head;
        
    }
}


//{ Driver Code Starts.

public class GFG {
    static void printList(Node node) {
        while (node != null) {
            System.out.print(node.data + " ");
            node = node.next;
        }
        System.out.println();
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

            Node head = null;
            if (!arr.isEmpty()) {
                head = new Node(arr.get(0));
                Node tail = head;
                for (int i = 1; i < arr.size(); ++i) {
                    tail.next = new Node(arr.get(i));
                    tail = tail.next;
                }
            }
            int k = Integer.parseInt(br.readLine().trim());
            Solution ob = new Solution();
            head = ob.rotate(head, k);
            printList(head);

            System.out.println("~");
        }
    }
}

// } Driver Code Ends


// Compilation Completed
For Input: 
10 20 30 40
6
Your Output: 
30 40 10 20
Expected Output: 
30 40 10 20