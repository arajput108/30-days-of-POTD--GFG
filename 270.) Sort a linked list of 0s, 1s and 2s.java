// 270.) Given the head of a linked list where nodes can contain values 0s, 1s, and 2s only. 
//       Your task is to rearrange the list so that all 0s appear at the beginning, followed by all 1s, 
//       and all 2s are placed at the end.

// Examples:

// Input: head = 1 → 2 → 2 → 1 → 2 → 0 → 2 → 2

// Output: 0 → 1 → 1 → 2 → 2 → 2 → 2 → 2

// Explanation: All the 0s are segregated to the left end of the linked list, 2s to the right end of the list, 
//              and 1s in between.
// Input: head = 2 → 2 → 0 → 1

// Output: 0 → 1 → 2 → 2

// Explanation: After arranging all the 0s, 1s and 2s in the given format, the output will be 0 → 1 → 2 → 2.
// Constraints:
// 1 ≤ no. of nodes ≤ 106
// 0 ≤ node->data ≤ 2
// <-------------------------------------------------SOLUTION-------------------------------------------------->
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


// } Driver Code Ends

/* class Node
{
    int data;
    Node next;
    Node(int data)
    {
        this.data = data;
        next = null;
    }
}*/
class Solution {
    static Node segregate(Node head) {
        // code here
         Node start = head;
        Node ptr = head;
        
        int onesCount = 0;
        
        while (ptr != null) {
            if (ptr.data == 1) {
                onesCount++;
            } else if (ptr.data == 0) {
                start.data = 0;
                start = start.next;
            }
            ptr = ptr.next;
        }
        
        ptr = start;
        while (ptr != null) {
            if (onesCount == 0) {
                ptr.data = 2;
            } else {
                ptr.data = 1;
                onesCount--;
            }
            ptr = ptr.next;
        }
        
        return head;
    }
}



//{ Driver Code Starts.



// <-------------------------------------------MAIN-SOLUTION-------------------------------------------------->
class GFG {
    public static void printList(Node node) {
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
            StringTokenizer st = new StringTokenizer(input);
            while (st.hasMoreTokens()) {
                arr.add(Integer.parseInt(st.nextToken()));
            }

            Node head = null;
            if (!arr.isEmpty()) {
                head = new Node(arr.get(0));
                Node tail = head;
                for (int i = 1; i < arr.size(); i++) {
                    tail.next = new Node(arr.get(i));
                    tail = tail.next;
                }
            }
            head = new Solution().segregate(head);
            printList(head);
            System.out.println("~");
        }
    }
}
// } Driver Code Ends



// Compilation Completed
Input: 
head =
1 2 2 1 2 0 2 2
Your Output:
0 1 1 2 2 2 2 2
Expected Output:
0 1 1 2 2 2 2 2