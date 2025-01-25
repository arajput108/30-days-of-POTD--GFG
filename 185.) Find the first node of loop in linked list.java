// 185.) Given a head of the singly linked list. If a loop is present in the list then return the first node 
//       of the loop else return NULL.

// Custom Input format:
// A head of a singly linked list and a pos (1-based index) which denotes the position of the node to which 
// the last node points to. If pos = 0, it means the last node points to null, indicating there is no loop.

// Examples:

// Input:
 
// Output: 3
// Explanation: We can see that there exists a loop in the given linked list and the first node of the loop is 3.
// Input:
 
// Output: -1
// Explanation: No loop exists in the above linked list.So the output is -1.
// Constraints:
// 1 <= no. of nodes <= 106
// 1 <= node->data <= 106 
// <______________________________________________SOLUTION___________________________________________________>
//{ Driver Code Starts
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

public class LinkedList {
    public static void printList(Node node) {
        while (node != null) {
            System.out.print(node.data + " ");
            node = node.next;
        }
        System.out.println();
    }

    public static void makeLoop(Node head, Node tail, int x) {
        if (x == 0) return;

        Node curr = head;
        for (int i = 1; i < x; i++) curr = curr.next;

        tail.next = curr;
    }

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int t = Integer.parseInt(br.readLine());
        while (t-- > 0) {
            ArrayList<Integer> arr = new ArrayList<>();
            String input = br.readLine();
            StringTokenizer st = new StringTokenizer(input);
            while (st.hasMoreTokens()) {
                arr.add(Integer.parseInt(st.nextToken()));
            }
            int k = Integer.parseInt(br.readLine());
            Node head = new Node(arr.get(0));
            Node tail = head;
            for (int i = 1; i < arr.size(); ++i) {
                tail.next = new Node(arr.get(i));
                tail = tail.next;
            }
            makeLoop(head, tail, k);
            Solution ob = new Solution();
            Node ans = ob.findFirstNode(head);
            System.out.println(ans == null ? -1 : ans.data);
            System.out.println("~");
        }
    }
}
// } Driver Code Ends


// User function Template for Java

/* class Node
{
    int data;
    Node next;

    Node(int x)
    {
        data = x;
        next = null;
    }
}*/


// <___________________________________________________MAIN-SOLUTION_____________________________________________________>

class Solution {
    public static Node findFirstNode(Node head) {
        // code here
         if(head==null || head.next==head) return head;
        Node s =head,f=head;
        
        while(f!=null && f.next!=null){
            f=f.next.next;
            s=s.next;
            if(s==f){
                f=head;
                while(s!=f){
                    s=s.next;
                    f=f.next;
                }
                return f;
            }
        }
        return null;
    }
}


// Compilation Completed
For Input: 
1 3 2 4 5
2
Your Output: 
3
Expected Output: 
3