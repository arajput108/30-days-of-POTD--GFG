// 285.) Given a Binary Tree, you need to find all the possible paths from the root node to all the leaf nodes 
//       of the binary tree.

// Note: The paths should be returned such that paths from the left subtree of any node are listed first, 
// followed by paths from the right subtree.

// Examples:

// Input: root[] = [1, 2, 3, 4, 5, N, N]
// ex-3
// Output: [[1, 2, 4], [1, 2, 5], [1, 3]]
// Explanation: All the possible paths from root node to leaf nodes are: 1 -> 2 -> 4, 1 -> 2 -> 5 and 1 -> 3
// Input: root[] = [1, 2, 3]

// Output: [[1, 2], [1, 3]] 
// Explanation: All the possible paths from root node to leaf nodes are: 1 -> 2 and 1 -> 3
// Input: root[] = [10, 20, 30, 40, 60, N, N]

// Output: [[10, 20, 40], [10, 20, 60], [10, 30]]
// Explanation: All the possible paths from root node to leaf nodes are: 10 -> 20 -> 40, 10 -> 20 -> 60 and 10 -> 30
// Constraints:
// 1 <= number of nodes <= 104
// 1 <= node->data <= 104
// <-------------------------------------------------SOLUTION-------------------------------------------------->
//{ Driver Code Starts
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

    public static Node buildTree(String str) {
        // Corner Case
        if (str.length() == 0 || str.charAt(0) == 'N') return null;

        // Creating array of Strings from input
        // String after spliting by space
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

    public static Node inputTree(BufferedReader br) throws IOException {
        return buildTree(br.readLine().trim());
    }

    public static void inorder(Node root) {
        if (root == null) return;
        inorder(root.left);
        System.out.print(root.data + " ");
        inorder(root.right);
    }
}

class IntMatrix {
    public static int[][] input(BufferedReader br, int n, int m) throws IOException {
        int[][] mat = new int[n][];

        for (int i = 0; i < n; i++) {
            String[] s = br.readLine().trim().split(" ");
            mat[i] = new int[s.length];
            for (int j = 0; j < s.length; j++) mat[i][j] = Integer.parseInt(s[j]);
        }

        return mat;
    }

    public static void print(int[][] m) {
        for (var a : m) {
            for (int e : a) System.out.print(e + " ");
            System.out.println();
        }
    }

    public static void print(ArrayList<ArrayList<Integer>> m) {
        for (var a : m) {
            for (int e : a) System.out.print(e + " ");
            System.out.println();
        }
    }
}

class GFG {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int t;
        t = Integer.parseInt(br.readLine());
        while (t-- > 0) {

            Node root = Node.inputTree(br);

            Solution obj = new Solution();
            ArrayList<ArrayList<Integer>> res = obj.Paths(root);

            IntMatrix.print(res);

            System.out.println("~");
        }
    }
}

// } Driver Code Ends


/*

Definition for Binary Tree Node
class Node
{
    int data;
    Node left;
    Node right;

    Node(int data)
    {
        this.data = data;
        left = null;
        right = null;
    }
}
*/


// <-------------------------------------------MAIN-SOLUTION-------------------------------------------------->

class Solution {
    public static ArrayList<ArrayList<Integer>> Paths(Node root) {
        // code here
        ArrayList<ArrayList<Integer>> ans = new ArrayList<>();
        ArrayList<Integer> path = new ArrayList<>();
        solve(root, ans, path );
        return ans; 
    }
    public static void solve(Node root , ArrayList<ArrayList<Integer>> ans,
    ArrayList<Integer> path){
        if(root == null)
            return ;
        
        path.add(root.data);
        
        if(root.left == null && root.right == null){
            ans.add(new ArrayList<>(path));
        }
        
         solve(root.left , ans, path);
         solve(root.right , ans , path);
         
         //Backtrack
         path.remove(path.size() - 1);
    }
}


// Compilation Completed
Input: 
root[] =
1 2 3 4 5
Your Output:
1 2 4
1 2 5
1 3
Expected Output:
1 2 4
1 2 5
1 3