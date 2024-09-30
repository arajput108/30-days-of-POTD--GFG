// 67.) Given two BSTs, return elements of merged BSTs in sorted form.

// Examples :

// Input:
// BST1:
//        5
//      /   \
//     3     6
//    / \
//   2   4  
// BST2:
//         2
//       /   \
//      1     3
//             \
//              7
//             /
//            6
// Output: 1 2 2 3 3 4 5 6 6 7
// Explanation: After merging and sorting the two BST we get 1 2 2 3 3 4 5 6 6 7.
// Input:
// BST1:
//        12
//      /   
//     9
//    / \    
//   6   11
// BST2:
//       8
//     /  \
//    5    10
//   /
//  2
// Output: 2 5 6 8 9 10 11 12
// Explanation: After merging and sorting the two BST we get 2 5 6 8 9 10 11 12.
// Expected Time Complexity: O((m+n)*log(m+n))
// Expected Auxiliary Space: O(Height of BST1 + Height of BST2 + m + n)

// Constraints:
// 1 ≤ Number of Nodes, value of nodes ≤ 105

// <___________________________________________________SOLUTION__________________________________________________________>
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

            // Get the curr node's value from the string
            String currVal = s[i];

            // If the left child is not null
            if (!currVal.equals("N")) {

                // Create the left child for the curr node
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

                // Create the right child for the curr node
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
            Node root1 = buildTree(s);

            s = br.readLine();
            Node root2 = buildTree(s);

            Solution T = new Solution();
            List<Integer> ans = T.merge(root1, root2);
            for (int i = 0; i < ans.size(); i++) System.out.print(ans.get(i) + " ");
            System.out.println();

            t--;
        }
    }
}

// } Driver Code Ends


// User function Template for Java

/*
class Node
{
    int data;
    Node left, right;

    public Node(int d)
    {
        data = d;
        left = right = null;
    }
}

*/
class Solution {
    // Function to return a list of integers denoting the node
    // values of both the BST in a sorted order.
    public List<Integer> merge(Node root1, Node root2) {
        // Write your code here
         // List to store in-order traversal of first BST
        List<Integer> list1 = new ArrayList<>();
        inOrderTraversal(root1, list1);
        
        // List to store in-order traversal of second BST
        List<Integer> list2 = new ArrayList<>();
        inOrderTraversal(root2, list2);
        
        // Merge the two sorted lists
        return mergeSortedLists(list1, list2);
    }
    
    // Helper function to perform in-order traversal of a BST
    private void inOrderTraversal(Node root, List<Integer> list) {
        if(root == null)
            return;
        inOrderTraversal(root.left, list);
        list.add(root.data);
        inOrderTraversal(root.right, list);
    }
    
    // Helper function to merge two sorted lists
    private List<Integer> mergeSortedLists(List<Integer> list1, List<Integer> list2) {
        List<Integer> merged = new ArrayList<>();
        int i = 0, j = 0;
        int size1 = list1.size();
        int size2 = list2.size();
        
        // Merge the two lists
        while(i < size1 && j < size2){
            if(list1.get(i) < list2.get(j)){
                merged.add(list1.get(i));
                i++;
            }
            else{
                merged.add(list2.get(j));
                j++;
            }
        }
        
        // Add remaining elements from list1, if any
        while(i < size1){
            merged.add(list1.get(i));
            i++;
        }
        
        // Add remaining elements from list2, if any
        while(j < size2){
            merged.add(list2.get(j));
            j++;
        }
        
        return merged;
    }
}



// Compilation Completed
For Input: 
5 3 6 2 4
2 1 3 N N N 7 6 N
Your Output: 
1 2 2 3 3 4 5 6 6 7
Expected Output: 
1 2 2 3 3 4 5 6 6 7
