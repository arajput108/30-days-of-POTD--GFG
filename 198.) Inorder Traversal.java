// 198.) Given a Binary Tree, your task is to return its In-Order Traversal.

// An inorder traversal first visits the left child (including its entire subtree), then visits the node, 
// and finally visits the right child (including its entire subtree).

// Examples:

// Input: root[] = [1, 2, 3, 4, 5] 
      
// Output: [4, 2, 5, 1, 3]
// Explanation: The in-order traversal of the given binary tree is [4, 2, 5, 1, 3].
// Input: root[] = [8, 1, 5, N, 7, 10, 6, N, 10, 6]
      
// Output: [1, 7, 10, 8, 6, 10, 5, 6]
// Explanation: The in-order traversal of the given binary tree is [1, 7, 10, 8, 6, 10, 5, 6].
// Constraints:
// 1 <= number of nodes <= 105
// 0 <= node->data <= 105
// <______________________________________________SOLUTION___________________________________________________>
//{ Driver Code Starts
// Initial Template for Java

import java.io.*;
import java.util.*;
import java.util.LinkedList;
import java.util.Queue;

class Node {
    int data;
    Node left;
    Node right;

    Node(int data) {
        this.data = data;
        left = null;
        right = null;
    }
}

class GfG {

    static Node buildTree(String str) {

        if (str.length() == 0 || str.charAt(0) == 'N') {
            return null;
        }

        String ip[] = str.split(" ");
        // Create the root of the tree
        Node root = new Node(Integer.parseInt(ip[0]));
        // Push the root to the queue

        Queue<Node> queue = new LinkedList<>();

        queue.add(root);
        // Starting from the second element

        int i = 1;
        while (queue.size() > 0 && i < ip.length) {

            // Get and remove the front of the queue
            Node currNode = queue.peek();
            queue.remove();

            // Get the current node's value from the string
            String currVal = ip[i];

            // If the left child is not null
            if (!currVal.equals("N")) {

                // Create the left child for the current node
                currNode.left = new Node(Integer.parseInt(currVal));
                // Push it to the queue
                queue.add(currNode.left);
            }

            // For the right child
            i++;
            if (i >= ip.length) break;

            currVal = ip[i];

            // If the right child is not null
            if (!currVal.equals("N")) {

                // Create the right child for the current node
                currNode.right = new Node(Integer.parseInt(currVal));

                // Push it to the queue
                queue.add(currNode.right);
            }
            i++;
        }

        return root;
    }

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        int t = Integer.parseInt(br.readLine());

        while (t > 0) {
            String s = br.readLine();
            Node root = buildTree(s);
            Solution g = new Solution();
            ArrayList<Integer> res = g.inOrder(root);
            for (int i = 0; i < res.size(); i++) System.out.print(res.get(i) + " ");
            System.out.print("\n");
            t--;

            System.out.println("~");
        }
    }
}

// } Driver Code Ends



/* A Binary Tree node

class Node {
    int data;
    Node left, right;
   Node(int item)    {
        data = item;
        left = right = null;
    }
}
*/

// <___________________________________________________MAIN-SOLUTION_____________________________________________________>
class Solution {
    // Function to return a list containing the inorder traversal of the tree.
    ArrayList<Integer> inOrder(Node root) {
        // Code
         ArrayList<Integer> arr=new ArrayList<>();
        helper(root,arr);
        return arr;
    }
    void helper(Node root, ArrayList<Integer> arr){
        if(root==null){
            return ;
        }
        helper(root.left, arr);
        arr.add(root.data);
        helper(root.right, arr);
    }
}


// Compilation Completed
For Input: 
1 2 3 4 5
Your Output: 
4 2 5 1 3
Expected Output: 
4 2 5 1 3

