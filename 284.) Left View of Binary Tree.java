// 284.)You are given the root of a binary tree. Your task is to return the left view of the binary tree. 
//      The left view of a binary tree is the set of nodes visible when the tree is viewed from the left side.
//      If the tree is empty, return an empty list.

// Examples :

// Input: root[] = [1, 2, 3, 4, 5, N, N]

// Output: [1, 2, 4]
// Explanation: From the left side of the tree, only the nodes 1, 2, and 4 are visible.

// Input: root[] = [1, 2, 3, N, N, 4, N, N, 5, N, N]

// Output: [1, 2, 4, 5]
// Explanation: From the left side of the tree, the nodes 1, 2, 4, and 5 are visible.

// Input: root[] = [N]
// Output: []
// Constraints:
// 0 <= number of nodes <= 106
// 0 <= node -> data <= 105
// <-------------------------------------------------SOLUTION-------------------------------------------------->
//{ Driver Code Starts
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

    static void printInorder(Node root) {
        if (root == null) return;

        printInorder(root.left);
        System.out.print(root.data + " ");

        printInorder(root.right);
    }

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        int t = Integer.parseInt(br.readLine());

        while (t > 0) {
            String s = br.readLine();
            Node root = buildTree(s);
            Solution g = new Solution();
            ArrayList<Integer> result = g.leftView(root);
            if (result.size() == 0) {
                System.out.print("[]");
            }
            for (int value : result) {
                System.out.print(value + " ");
            }
            System.out.println();
            t--;

            System.out.println("~");
        }
    }
}

// } Driver Code Ends


// User function Template for Java

/* A Binary Tree node
class Node
{
    int data;
    Node left, right;

    Node(int item)
    {
        data = item;
        left = right = null;
    }
}*/

// <-------------------------------------------MAIN-SOLUTION-------------------------------------------------->
class Solution {
    // Function to return list containing elements of left view of binary tree.
    ArrayList<Integer> leftView(Node root) {
        // code here
         ArrayList<Integer> al=new ArrayList<>();

        if(root==null) return al;

        Queue<Node> q=new LinkedList<>();

        q.add(root);

        while(!q.isEmpty()){

            int n=q.size();

            for(int i=0;i<n;i++){

                Node curr=q.poll();

                if(i==0) al.add(curr.data);

                if(curr.left!=null) q.add(curr.left);

                if(curr.right!=null) q.add(curr.right);

            }

        }

        return al;
    }
}



// Compilation Completed
Input: 
root[] =
1 2 3 4 5 N N N N
Your Output:
1 2 4
Expected Output:
1 2 4