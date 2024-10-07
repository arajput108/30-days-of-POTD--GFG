// 74.) An ordinary Doubly Linked List requires space for two address fields to store the addresses of previous 
//      and next nodes. A memory-efficient version of the Doubly Linked List can be created using only one space 
//      for the address field with every node. This memory-efficient Doubly Linked List is called XOR Linked List 
//      or Memory Efficient as the list uses bit-wise XOR operation to save space for one address.

// Given a stream of data of size N for the linked list, your task is to complete the function insert() and 
// getList(). The insert() function pushes (or inserts at the beginning) the given data in the linked list and 
// the getList()  function returns the linked list as a list.

// Note:

// A utility function XOR() takes two Node pointers to get the bit-wise XOR of the two Node pointers. 
// Use this function to get the XOR of the two pointers.
// The driver code prints the returned list twice, once forward and once backwards.
// Examples:

// Input:
// LinkedList: 9<->5<->4<->7<->3<->10

// Output:
// 10 3 7 4 5 9
// 9 5 4 7 3 10
// Input:
// LinkedList: 58<->96<->31

// Output:
// 31 96 58
// 58 96 31
// Expected Time Complexity: O(n)
// Expected Auxiliary Space: O(1)

// Constraints:
// 1 <= number of nodes, data of nodes <= 105

// <_______________________________________________SOLUTION___________________________________________________>
//{ Driver Code Starts
import java.io.*;
import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int t = scanner.nextInt();
        scanner.nextLine();
        Solution soln = new Solution();
        while (t-- > 0) {
            Node head = null;
            String input = scanner.nextLine();
            Scanner ss = new Scanner(input);
            List<Integer> arr = new ArrayList<>();
            while (ss.hasNextInt()) {
                arr.add(ss.nextInt());
            }
            int n = arr.size();
            for (int i = 0; i < n; i++) {
                int tmp = arr.get(i);
                head = soln.insert(head, tmp);
            }

            ArrayList<Integer> list = soln.getList(head);
            for (int x : list) System.out.print(x + " ");
            System.out.println();

            for (int i = list.size() - 1; i >= 0; i--) {
                System.out.print(list.get(i) + " ");
            }
            System.out.println();
        }
    }
}

class Node {
    int data;
    Node npx;

    Node(int x) {
        data = x;
        npx = null;
    }
}

// } Driver Code Ends


// class Node {
//     int data;
//     Node npx;

//     Node(int x) {
//         data = x;
//         npx = null;
//     }
// }
// <___________________________________________MAIN-SOLUTION______________________________________________>   
class Solution {
    // function should insert the data to the front of the list
    static Node insert(Node head, int data) {
        // Code Here.
        Node t1=new Node(data);
        t1.npx=head;
        return t1;
    }

    // function to print the linked list
    static ArrayList<Integer> getList(Node head) {
        // Code Here.
        ArrayList<Integer> arr=new ArrayList<>();
        while(head!=null){
            arr.add(head.data);
            head=head.npx;
        }
        return arr;
    }
}


// Compilation Completed
For Input: 
6
9 5 4 7 3 10
Your Output: 
6
6
Expected Output: 
6
6