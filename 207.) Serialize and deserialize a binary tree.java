// 208.) Serialization is to store a tree in an array so that it can be later restored and deserialization 
//       is reading tree back from the array. Complete the functions

// serialize() : stores the tree into an array a and returns the array.
// deSerialize() : deserializes the array to the tree and returns the root of the tree.
// Note: Multiple nodes can have the same data and the node values are always positive integers. Your code 
// will be correct if the tree returned by deSerialize(serialize(input_tree)) is same as the input tree. 
// Driver code will print the in-order traversal of the tree returned by deSerialize(serialize(input_tree)).

// Examples :

// Input: root = [1, 2, 3]
      
// Output: [2, 1, 3]
// Input: root = [10, 20, 30, 40, 60, N, N]
      
// Output: [40, 20, 60, 10, 30]
// Constraints:
// 1 <= Number of nodes <= 104
// 1 <= Data of a node <= 109

// <______________________________________________SOLUTION___________________________________________________>
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

    static void deletetree(Node root) {
        if (root == null) return;
        deletetree(root.left);
        deletetree(root.right);
        root.left = null;
        root.right = null;
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

            Tree tr = new Tree();
            ArrayList<Integer> A = tr.serialize(root);
            deletetree(root);
            root = null;

            Node getRoot = tr.deSerialize(A);
            printInorder(getRoot);
            System.out.println();

            System.out.println("~");
        }
    }
}
// } Driver Code Ends


/*Complete the given function
Node is as follows:
class Tree{
    int data;
    Tree left,right;
    Tree(int d){
        data=d;
        left=right=null;
    }
}*/
// <___________________________________________________MAIN-SOLUTION_____________________________________________________>

class Tree {
    // Function to serialize a tree and return a list containing nodes of tree.
    public ArrayList<Integer> serialize(Node root) {
        // code here
        ArrayList<Integer> list = new ArrayList();
        Queue<Node> q = new LinkedList();
        q.offer(root);
        while(!q.isEmpty()) {
            Node node = q.poll();
            if(node!=null) {
                list.add(node.data);
                q.offer(node.left);
                q.offer(node.right);
            }
            else {
                list.add(-1);
            }   
        }
        return list;
    }

    // Function to deserialize a list and construct the tree.
    public Node deSerialize(ArrayList<Integer> arr) {
        // code here
          if(arr.size()==0 || arr.get(0)==-1) return null;
        Queue<Node> q = new LinkedList();
        Queue<Node> q2 = new LinkedList();
        int i = 0;
        Node root = new Node(arr.get(i++)); 
        q.offer(root);
        while( i<arr.size() )  {
            if(!q.isEmpty()) {
                while(!q.isEmpty()) {
                    Node curr = q.poll();
                    int le = arr.get(i++);
                    int ri = arr.get(i++);
                    if(le==-1) {
                        curr.left = null;
                    } else {
                        Node left = new Node(le);
                        curr.left = left;
                        q2.offer(left);
                    }
                    if(ri==-1) {
                        curr.right = null;
                    } else {
                        Node right = new Node(ri);
                        curr.right = right;
                        q2.offer(right);
                    }
                }
            } else {
                while(!q2.isEmpty()) {
                    Node curr = q2.poll();
                    int le = arr.get(i++);
                    int ri = arr.get(i++);
                    if(le==-1) {
                        curr.left = null;
                    } else {
                        Node left = new Node(le);
                        curr.left = left;
                        q.offer(left);
                    }
                    if(ri==-1) {
                        curr.right = null;
                    } else {
                        Node right = new Node(ri);
                        curr.right = right;
                        q.offer(right);
                    }
                }
            }
        }
        return root;
    }
};




// Compilation Completed
For Input: 
1 2 3
Your Output: 
2 1 3
Expected Output: 
2 1 3