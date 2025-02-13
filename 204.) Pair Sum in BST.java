// 204.) Given a Binary Search Tree(BST) and a target. Check whether there's a pair of Nodes in 
//       the BST with value summing up to the target. 

// Examples:

// Input: root = [7, 3, 8, 2, 4, N, 9], target = 12
//        bst
// Output: True
// Explanation: In the binary tree above, there are two nodes (8 and 4) that add up to 12.
// Input: root = [9, 5, 10, 2, 6, N, 12], target = 23
//           bst-3
// Output: False
// Explanation: In the binary tree above, there are no such two nodes exists that add up to 23.
// Constraints:

// 1 ≤ Number of Nodes ≤ 105
// 1 ≤ target ≤ 106

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
            Node currNode = q.remove();

            // Get the current node's value from the string
            String currVal = s[i];

            // If the left child is not null
            if (!currVal.equals("N")) {

                // Create the left child for the current node
                currNode.left = new Node(Integer.parseInt(currVal));

                // Push it to the queue
                q.add(currNode.left);
            }

            // For the right child
            i++;
            if (i >= s.length) break;
            currVal = s[i];

            // If the right child is not null
            if (!currVal.equals("N")) {

                // Create the right child for the current node
                currNode.right = new Node(Integer.parseInt(currVal));

                // Push it to the queue
                q.add(currNode.right);
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

            int target = Integer.parseInt(br.readLine().trim());

            Solution T = new Solution();
            boolean ans = T.findTarget(root, target);
            if (ans)
                System.out.println(1);
            else
                System.out.println(0);
            t--;

            System.out.println("~");
        }
    }
}

// } Driver Code Ends


/*
class Node {
    int data;
    Node left, right;

    public Node(int d) {
        data = d;
        left = right = null;
    }
}
*/

// <___________________________________________________MAIN-SOLUTION_____________________________________________________>

class Solution {
    boolean findTarget(Node root, int target) {
        // Write your code here
         Map<Integer, Integer> store = new HashMap<>();
        return traversal(root, target, store);
    }
    static boolean traversal(Node node, int target, Map<Integer, Integer> map) {
        if(node == null) {
            return false;
        }
        
        if(map.get(target - node.data) != null) {
            return true;
        } else {
            map.put(node.data, 1);
        }
        if(traversal(node.left, target, map)) {
            return true;
        }
        return traversal(node.right, target, map);
    }
}


// Compilation Completed
For Input: 
7 3 8 2 4 N 9
12
Your Output: 
1
Expected Output: 
1