// 181.) Given the head a linked list, the task is to reverse every k node in the linked list. 
//       If the number of nodes is not a multiple of k then the left-out nodes in the end, should 
//       be considered as a group and must be reversed.

// Examples:

// Input: head = 1 -> 2 -> 2 -> 4 -> 5 -> 6 -> 7 -> 8, k = 4
// Output: 4 -> 2 -> 2 -> 1 -> 8 -> 7 -> 6 -> 5

// Explanation: The first 4 elements 1, 2, 2, 4 are reversed first and then the next 4 elements 5, 6, 7, 8. 
//               Hence, the resultant linked list is 4 -> 2 -> 2 -> 1 -> 8 -> 7 -> 6 -> 5.
// Input: head = 1 -> 2 -> 3 -> 4 -> 5, k = 3
// Output: 3 -> 2 -> 1 -> 5 -> 4

// Explanation: The first 3 elements 1, 2, 3 are reversed first and then left out elements 4, 5 are reversed. 
//              Hence, the resultant linked list is 3 -> 2 -> 1 -> 5 -> 4.
// Constraints:
// 1 <= size of linked list <= 105
// 1 <= data of nodes <= 106
// 1 <= k <= size of linked list 
// <______________________________________________SOLUTION___________________________________________________>
//{ Driver Code Starts
import java.io.*;
import java.lang.*;
import java.util.*;

class Node {
    int data;
    Node next;

    Node(int key) {
        data = key;
        next = null;
    }
}

class ReverseInSize {
    static Node head;

    public static void main(String[] args) throws IOException {
        BufferedReader in = new BufferedReader(new InputStreamReader(System.in));
        PrintWriter out = new PrintWriter(System.out);

        int t = Integer.parseInt(in.readLine().trim());

        while (t-- > 0) {

            String s[] = in.readLine().trim().split(" ");
            int a1 = Integer.parseInt(s[0]);
            Node head = new Node(a1);
            Node tail = head;
            for (int i = 1; i < s.length; i++) {
                int a = Integer.parseInt(s[i]);
                // addToTheLast(new Node(a));
                tail.next = new Node(a);
                tail = tail.next;
            }

            int k = Integer.parseInt(in.readLine().trim());
            Solution ob = new Solution();
            Node res = ob.reverseKGroup(head, k);
            printList(res, out);
            out.println();

            out.println("~");
        }
        out.close();
    }

    public static void printList(Node node, PrintWriter out) {
        while (node != null) {
            out.print(node.data + " ");
            node = node.next;
        }
    }
}

// } Driver Code Ends


/*node class of the linked list
class Node
{
    int data;
    Node next;
    Node(int key)
    {
        data = key;
        next = null;
    }
}

*/

class Solution {
    public static Node reverseKGroup(Node head, int k) {
        // code here
           ArrayList<Integer> arr = new ArrayList<>();
        
        while(head != null){
            arr.add(head.data);
            head = head.next;
        }
        
        if(k > arr.size()){
            Collections.reverse(arr);
        }
        Collections.reverse(arr.subList(0, k));
        int i = k;
        while(i < arr.size()){
            if(arr.size() - i < k){
                Collections.reverse(arr.subList(i, arr.size()));
                break;
            }
            Collections.reverse(arr.subList(i, i + k));
            i += k;
        }
        Node nhead = new Node(arr.get(0));
        Node temp = nhead;
        for(int j = 1; j < arr.size(); j++){
           temp.next = new Node(arr.get(j));
           temp = temp.next;
        }
        return nhead;
    }
}


// Compilation Completed
For Input: 
1 2 3 4 5 6 7 8
4
Your Output: 
4 3 2 1 8 7 6 5
Expected Output: 
4 3 2 1 8 7 6 5