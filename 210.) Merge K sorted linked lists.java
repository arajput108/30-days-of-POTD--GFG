// 210.) Given an array arr[] of n sorted linked lists of different sizes. The task is to merge them 
//       in such a way that after merging they will be a single sorted linked list, then return the 
//       head of the merged linked list.

// Examples:

// Input: arr[] = [1 -> 2 -> 3, 4 -> 5, 5 -> 6, 7 -> 8]
// Output: 1 -> 2 -> 3 -> 4 -> 5 -> 5 -> 6 -> 7 -> 8
// Explanation:
// The arr[] has 4 sorted linked list of size 3, 2, 2, 2.
// 1st list: 1 -> 2-> 3
// 2nd list: 4 -> 5
// 3rd list: 5 -> 6
// 4th list: 7 -> 8
// The merged list will be:
 
// Input: arr[] = [1 -> 3, 8, 4 -> 5 -> 6]
// Output: 1 -> 3 -> 4 -> 5 -> 6 -> 8
// Explanation:
// The arr[] has 3 sorted linked list of size 2, 3, 1.
// 1st list: 1 -> 3
// 2nd list: 8
// 3rd list: 4 -> 5 -> 6
// The merged list will be:

// Constraints
// 1 <= total no. of nodes <= 105
// 1 <= node->data <= 103

// <______________________________________________SOLUTION___________________________________________________>
//{ Driver Code Starts
import java.util.*;

class Node {
    int data;
    Node next;

    Node(int x) {
        data = x;
        next = null;
    }
}

public class Main {
    /* Function to print nodes in a given linked list */
    static void printList(Node node) {
        while (node != null) {
            System.out.print(node.data + " ");
            node = node.next;
        }
        System.out.println();
    }

    // Driver program to test the above functions
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int t = Integer.parseInt(scanner.nextLine());

        while (t-- > 0) {
            int n = Integer.parseInt(scanner.nextLine());
            List<Node> lists = new ArrayList<>();
            for (int i = 0; i < n; i++) {
                String line = scanner.nextLine();
                String[] values = line.split(" ");
                Node head = null, temp = null;

                for (String value : values) {
                    Node newNode = new Node(Integer.parseInt(value));
                    if (head == null) {
                        head = newNode;
                        temp = head;
                    } else {
                        temp.next = newNode;
                        temp = temp.next;
                    }
                }

                lists.add(head);
            }

            Solution sol = new Solution();
            Node head = sol.mergeKLists(lists);

            printList(head);
            System.out.println("~");
        }
        scanner.close();
    }
}

// } Driver Code Ends


// User function Template for Java
/*class Node
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

// arr is an array of Nodes of the heads of linked lists


// <___________________________________________________MAIN-SOLUTION_____________________________________________________>

class Solution {
    // Function to merge K sorted linked list.
    Node mergeKLists(List<Node> arr) {
        // Add your code here.
          List<Integer> list = new ArrayList<>() ; 
        for(int i = 0 ; i<arr.size() ; i++){
           Node temp = arr.get(i);
           while(temp!= null){
               list.add(temp.data);
               temp = temp.next ; 
           }
        }
        Collections.sort(list) ; 
        Node head = new Node(0) ; 
        Node temp = head ; 
        int i = 0 ; 
        while(i<list.size()){
            temp.next = new Node(list.get(i));
             temp = temp.next ; 
             i++ ; 
        }
        return head.next ; 
    }
}

// Compilation Completed
For Input: 
4
1 2 3
4 5
5 6
7 8
Your Output: 
1 2 3 4 5 5 6 7 8
Expected Output: 
1 2 3 4 5 5 6 7 8