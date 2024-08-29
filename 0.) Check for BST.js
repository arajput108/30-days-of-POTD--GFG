// 1.) Given the root of a binary tree. Check whether it is a BST or not.
//     Note: We are considering that BSTs can not contain duplicate Nodes.
//     A BST is defined as follows:

// The left subtree of a node contains only nodes with keys less than the node's key.
// The right subtree of a node contains only nodes with keys greater than the node's key.
// Both the left and right subtrees must also be binary search trees.
// Examples:


// Input:
//    2
//  /    \
// 1      3
//         \
//          5
// Output: true 
// Explanation: 
// The left subtree of every node contains smaller keys and right subtree of every node contains greater. Hence, the tree is a BST.
// Input:
//   2
//    \
//     7
//      \
//       6
//        \
//         9
// Output: false 
// Explanation: 
// Since the node with value 7 has right subtree nodes with keys less than 7, this is not a BST. 
// Input:
//    10
//  /    \
// 5      20
//       /   \
//      9     25
// Output: false
// Explanation: The node is present in the right subtree of 10, but it is smaller than 10.
// Expected Time Complexity: O(n) 
// Expected Auxiliary Space: O(Height of the tree)
// where n is the number of nodes in the given tree

// Constraints:
// 1 ≤ Number of nodes ≤ 105
// 1 ≤ Data of a node ≤ 105

// <_______________________________________________SOLUTION______________________________________________________________>

//{ Driver Code Starts
// Initial Template for javascript
'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => { inputString += inputStdin; });

process.stdin.on('end', _ => {
    inputString =
        inputString.trim().split('\n').map(string => { return string.trim(); });

    main();
});

function readLine() { return inputString[currentLine++]; }

class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

function newNode(root, data) {
    if (root === null)
        root = new Node(data);
    else if (data < root.data)
        root.left = newNode(root.left, data);
    else
        root.right = newNode(root.right, data);
    return root;
}

function buildTree(str) {
    // Corner Case
    if (str.length === 0 || str[0] === "N") return null;

    // Create the root of the tree
    let root = new Node(parseInt(str[0]));

    // Push the root to the queue
    let queue = [];
    let start = 0;
    queue.push(root);

    // Starting from the second element
    let i = 1;
    while (queue.length !== start && i < str.length) {

        // Get and remove the front of the queue
        let currNode = queue[start];
        start++;

        // Get the current node's value from the string
        let currVal = str[i];

        // If the left child is not null
        if (currVal !== "N") {

            // Create the left child for the current node
            currNode.left = new Node(parseInt(currVal));

            // Push it to the queue
            queue.push(currNode.left);
        }

        // For the right child
        i++;
        if (i >= str.length) break;
        currVal = str[i];

        // If the right child is not null
        if (currVal !== "N") {

            // Create the right child for the current node
            currNode.right = new Node(parseInt(currVal));

            // Push it to the queue
            queue.push(currNode.right);
        }
        i++;
    }

    return root;
}

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for (; i < t; i++) {
        let input_ar1 = readLine().split(' ');
        let root = buildTree(input_ar1);
        let obj = new Solution();
        if (obj.isBST(root)) {
            console.log("true");
        } else {
            console.log("false");
        }
    }
}
// } Driver Code Ends


// User function Template for javascript

/**
 * @param {Node} root
 * @returns {boolean}
 */


// <______________________________________________MAIN-SOLUTION__________________________________________________________>
class Solution {
    // Function to check whether a Binary Tree is BST or not.
    isBST(root) {
        // your code here
         function validate(node, min, max) {
            // An empty tree is a BST
            if (node === null) {
                return true;
            }
            
            // If this node violates the min/max constraint, it's not a BST
            if (node.data <= min || node.data >= max) {
                return false;
            }
            
            // Check the left subtree with updated max value
            // Check the right subtree with updated min value
            return validate(node.left, min, node.data) && validate(node.right, node.data, max);
        }
        
        // Start with the full range of values
        return validate(root, -Infinity, Infinity);
    }
    
}












