// 293.) Given a binary tree and the task is to find the spiral order traversal of the tree and return the list 
//       containing the elements.
//       Spiral order Traversal mean: Starting from level 0 for root node, for all the even levels we print the 
//       node's value from right to left and for all the odd levels we print the node's value from left to right.
// For below tree, function should return [1, 2, 3, 4, 5, 6, 7]

 

// Examples:

// Input: root = [1, 3, 2]
 
// Output: [1, 3, 2]
// Explanation: Start with root (1), print level 0 (right to left), then level 1 (left to right).
// Input: root = [10, 20, 30, 40, 60]

// Output: [10, 20, 30, 60, 40]
// Explanation: Start with root (10), print level 0 (right to left), level 1 (left to right), and continue alternating.
// Input: root = [1, 2, N, 4]
  
// Output: [1, 2, 4]
// Explanation: Start with root (1), then level 1 (left to right), then level 2 (right to left).
// Constraints:
// 1 <= number of nodes <= 105
// 0 <= node->data <= 105
// <-------------------------------------------------SOLUTION-------------------------------------------------->
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

    void inOrder(Node node) {
        if (node == null) {
            return;
        }

        inOrder(node.left);
        System.out.print(node.data + " ");

        inOrder(node.right);
    }

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        int t = Integer.parseInt(br.readLine());

        while (t-- > 0) {
            String s = br.readLine();
            Node root = buildTree(s);
            Solution g = new Solution();
            ArrayList<Integer> result = g.findSpiral(root);
            for (int value : result) System.out.print(value + " ");
            System.out.println();

            System.out.println("~");
        }
    }
}

// } Driver Code Ends


/*
class Node
{
    int data;
    Node left, right;

    Node(int item)
    {
        data = item;
        left = right = null;
    }
}
*/
// <-------------------------------------------MAIN-SOLUTION-------------------------------------------------->

class Solution {
    public ArrayList<Integer> findSpiral(Node root) {
        // code here
        ArrayList<Integer> res = new ArrayList<>();
        if (root == null) return res;
        
        Queue<Node> q = new LinkedList<>();
        q.offer(root);
        boolean leftToRight = false; 
        
        while (!q.isEmpty()) {
            int size = q.size();
            ArrayList<Integer> levelList = new ArrayList<>();
            
            for (int i = 0; i < size; i++) {
                Node node = q.poll();
                levelList.add(node.data);
                
                if (node.left != null) q.offer(node.left);
                if (node.right != null) q.offer(node.right);
            }
            
            if (leftToRight) {
                res.addAll(levelList);
            } else {
                for (int i = levelList.size() - 1; i >= 0; i--) {
                    res.add(levelList.get(i));
                }
            }
            
            leftToRight = !leftToRight;
        }
        
        return res;
    }
}








// Compilation Completed
Input: 
root[] =
1 3 2
Your Output:
1 3 2
Expected Output:
1 3 2