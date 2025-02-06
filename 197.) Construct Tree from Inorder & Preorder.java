// 197.) Given two arrays representing the inorder and preorder traversals of a binary tree, construct the 
//       tree and return the root node of the constructed tree.

// Note: The output is written in postorder traversal.

// Examples:

// Input: inorder[] = [1, 6, 8, 7], preorder[] = [1, 6, 7, 8]
// Output: [8, 7, 6, 1]
// Explanation: The tree will look like

// Input: inorder[] = [3, 1, 4, 0, 2, 5], preorder[] = [0, 1, 3, 4, 2, 5]
// Output: [3, 4, 1, 5, 2, 0]
// Explanation: The tree will look like

// Input: inorder[] = [2, 5, 4, 1, 3], preorder[] = [1, 4, 5, 2, 3]
// Output: [2, 5, 4, 3, 1]
// Explanation: The tree will look like

// Constraints:
// 1 ≤ number of nodes ≤ 103
// 0 ≤ nodes -> data ≤ 103
// Both the inorder and preorder arrays contain unique values.

// <______________________________________________SOLUTION___________________________________________________>
//{ Driver Code Starts
import java.io.*;
import java.util.*;

class Node {
    int data;
    Node left, right;

    Node(int key) {
        data = key;
        left = right = null;
    }
}

class GFG {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int t = Integer.parseInt(br.readLine());

        while (t-- > 0) {
            Node root = null;

            // Read inorder array
            String[] inorderStr = (br.readLine()).trim().split(" ");
            int inorder[] = new int[inorderStr.length];
            for (int i = 0; i < inorderStr.length; i++) {
                inorder[i] = Integer.parseInt(inorderStr[i]);
            }

            // Read preorder array
            String[] preorderStr = (br.readLine()).trim().split(" ");
            int preorder[] = new int[preorderStr.length];
            for (int i = 0; i < preorderStr.length; i++) {
                preorder[i] = Integer.parseInt(preorderStr[i]);
            }

            Solution ob = new Solution();
            root = ob.buildTree(inorder, preorder);
            postOrder(root);
            System.out.println();
        }
    }

    // Function to print postorder traversal of the tree
    public static void postOrder(Node root) {
        if (root == null) return;

        postOrder(root.left);
        postOrder(root.right);
        System.out.print(root.data + " ");
    }
}

// } Driver Code Ends


/*
class Node {
    int data;
    Node left, right;

    Node(int key) {
        data = key;
        left = right = null;
    }
}
*/

// <___________________________________________________MAIN-SOLUTION_____________________________________________________>
class Solution {
    public static Node buildTree(int inorder[], int preorder[]) {
        // code here
          HashMap < Integer , Integer > map = new HashMap<>();
        
        for(int i = 0;i<inorder.length;i++){
            map.put (inorder[i] , i );
        }
        return split( inorder , 0,inorder.length-1 ,preorder , 0, map);
    }
    
    public static Node split( int []inorder , int instart, int inend , int[] preorder, int index ,HashMap<Integer , Integer> map ){
        Node root = new Node (preorder[index]);
        
        int mid = map.get (root.data);
          if(mid>instart){
        root.left = split(inorder, instart , mid-1,preorder, index+1,map );
          }
          if(mid<inend){
                 root.right = split(inorder , mid+1, inend ,preorder ,index + mid - instart +1,map);
          }
      
    return root;
    }
}




// Compilation Completed
For Input: 
1 6 8 7
1 6 7 8
Your Output: 
8 7 6 1
Expected Output: 
8 7 6 1

