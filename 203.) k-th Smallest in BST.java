// 203.) Given a BST and an integer k, the task is to find the kth smallest element in the BST. 
//       If there is no kth smallest element present then return -1.

// Examples:

// Input: root = [2, 1, 3], k = 2
    
// Output: 2
// Explanation: 2 is the 2nd smallest element in the BST.
// Input: root = [2, 1, 3], k = 5
    
// Output: -1
// Explanation: There is no 5th smallest element in the BST as the size of BST is 3.
// Input: root = [20, 8, 22, 4, 12, N, N, N, N, 10, 14], k = 3
     
// Output: 10
// Explanation: 10 is the 3rd smallest element in the BST.
// Constraints:

// 1 <= number of nodes, k <= 105
// 1 <= node->data <= 105

// <______________________________________________SOLUTION___________________________________________________>
//{ Driver Code Starts
// Initial Template for Java

/*package whatever //do not write package name here */

import java.io.*;
import java.math.*;
import java.util.*;

class Node {
    int data;
    Node left, right;

    public Node(int d) {
        data = d;
        left = right = null;
    }
}

class GFG {
    static Node buildTree(String str) {
        // Corner Case
        if (str.length() == 0 || str.equals('N')) return null;
        String[] s = str.split(" ");

        Node root = new Node(Integer.parseInt(s[0]));
        Queue<Node> q = new LinkedList<Node>();
        q.add(root);

        // Starting from the second element
        int i = 1;
        while (!q.isEmpty() && i < s.length) {
            // Get and remove the front of the queue
            Node currrNode = q.remove();

            // Get the currrent node's value from the string
            String currrVal = s[i];

            // If the left child is not null
            if (!currrVal.equals("N")) {

                // Create the left child for the currrent node
                currrNode.left = new Node(Integer.parseInt(currrVal));

                // Push it to the queue
                q.add(currrNode.left);
            }

            // For the right child
            i++;
            if (i >= s.length) break;
            currrVal = s[i];

            // If the right child is not null
            if (!currrVal.equals("N")) {

                // Create the right child for the currrent node
                currrNode.right = new Node(Integer.parseInt(currrVal));

                // Push it to the queue
                q.add(currrNode.right);
            }

            i++;
        }

        return root;
    }

    public static void main(String args[]) throws IOException {

        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int t = Integer.parseInt(br.readLine().trim());
        while (t > 0) {
            String s = br.readLine();
            Node root = buildTree(s);

            int k = Integer.parseInt(br.readLine().trim());

            Solution T = new Solution();
            System.out.println(T.kthSmallest(root, k));
            t--;

            System.out.println("~");
        }
    }
}

// } Driver Code Ends


// User function Template for Java

// class Node
// {
//     int data;
//     Node left, right;

//     public Node(int d)
//     {
//         data = d;
//         left = right = null;
//     }
// }


// <___________________________________________________MAIN-SOLUTION_____________________________________________________>

class Solution {
    // Return the Kth smallest element in the given BST
    public int kthSmallest(Node root, int k) {
        // Write your code here
          List<Integer> list = new ArrayList<>();
        Paths(root, list); 
        Collections.sort(list);
        for (int i = 0; i < list.size(); i++) {
            if (list.get(i) == k) {
                return (i+1); 
            }
        }
        return -1; 
    }

    private void Paths(Node node, List<Integer> path) {
        if (node == null) return;  
        path.add(node.data); 
        Paths(node.left, path);  
        Paths(node.right, path); 
    }
}





// Compilation Completed
For Input: 
2 1 3
2
Your Output: 
2
Expected Output: 
2