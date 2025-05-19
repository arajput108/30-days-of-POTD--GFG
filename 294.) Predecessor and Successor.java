// 294.) You are given root node of the BST and an integer key. You need to find the in-order successor 
//       and predecessor of the given key. If either predecessor or successor is not found, then set it to NULL.

// Note:- In an inorder traversal the number just smaller than the target is the predecessor and the number 
//        just greater than the target is the successor. 

// Examples :

// Input: root[] = [8, 1, 9, N, 4, N, 10, 3, N, N, N], key = 8

// Output: 4 9
// Explanation: In the given BST the inorder predecessor of 8 is 4 and inorder successor of 8 is 9.
// Input: root[] = [10, 2, 11, 1, 5, N, N, N, N, 3, 6, N, 4, N, N], key = 11

// Output: 10 -1
// Explanation: In given BST, the inorder predecessor of 11 is 10 whereas it does not have any inorder successor.
// Input: root[] = [2, 1, 3], key = 3

// Output: 2 -1
// Explanation: In given BST, the inorder predecessor of 3 is 2 whereas it does not have any inorder successor.
// Constraints: 
// 1 <= no. of nodes <= 105
// 1 <= node->data <= 106
// 1 <= key <= 106
// <-------------------------------------------------SOLUTION-------------------------------------------------->
//{ Driver Code Starts
// Initial Template for Java
import java.io.*;
import java.util.*;

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

class Gfg {

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

        while (t-- > 0) {
            String s = br.readLine();
            Node root = buildTree(s);
            int key = Integer.parseInt(br.readLine());

            Solution sol = new Solution();
            ArrayList<Node> result = sol.findPreSuc(root, key);
            Node pre = result.get(0);
            Node suc = result.get(1);

            if (pre != null)
                System.out.print(pre.data + " ");
            else
                System.out.print("-1 ");

            if (suc != null)
                System.out.println(suc.data);
            else
                System.out.println("-1");
            System.out.println("~");
        }
    }
}
// } Driver Code Ends


/* BST Node
class Node {
    int data;
    Node left, right;
    Node(int x) {
        data = x;
        left = right = null;
    }
} */
// <-------------------------------------------MAIN-SOLUTION-------------------------------------------------->


class Solution {
    Node pre = null, suc = null;

    public ArrayList<Node> findPreSuc(Node root, int key) {
        pre = null;
        suc = null;

        findPreSucUtil(root, key);

        ArrayList<Node> result = new ArrayList<>();
        result.add(pre != null ? pre : null);
        result.add(suc != null ? suc : null);
        return result;
    }

    private void findPreSucUtil(Node root, int key) {
        if (root == null) return;

        if (root.data == key) {
            if (root.left != null) {
                Node temp = root.left;
                while (temp.right != null) temp = temp.right;
                pre = temp;
            }

            if (root.right != null) {
                Node temp = root.right;
                while (temp.left != null) temp = temp.left;
                suc = temp;
            }
        } else if (key < root.data) {
            suc = root;
            findPreSucUtil(root.left, key);
        } else {
            pre = root;
            findPreSucUtil(root.right, key);
        }
    }
}






// Compilation Completed
Input: 
root[] =
8 1 9 N 4 N 10 3 N N N
key =
8
Your Output:
4 9
Expected Output:
4 9