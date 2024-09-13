// 50.) Given a Binary Tree, convert it into its mirror.
// MirrorTree1            
//    1                      1
//    / \                    / \
//    3  2                   2  3
//       / \                / \
//       5  4               4  5
// Examples:

// Input:
//       1
//     /  \
//    2    3
// Output: 3 1 2
// Explanation: The tree is
//   1    (mirror)     1
//  /  \    =>        /  \
// 2    3           3   2
// The inorder of mirror is 3 1 2
// Input:
//       10
//      /  \
//     20   30
//    /  \
//   40  60
// Output: 30 10 60 20 40
// Explanation: The tree is
//       10               10
//     /    \  (mirror)    /    \
//    20    30    =>   30    20
//   /  \                     /   \
//  40  60                 60   40
// The inroder traversal of mirror is: 30 10 60 20 40.
// Expected Time Complexity: O(n)
// Expected Auxiliary Space: O(height of the tree)

// Constraints:
// 1 ≤ Number of nodes ≤ 105
// 1 ≤ Data of a node ≤ 105

// <_______________________________________________SOLUTION___________________________________________________>

//{ Driver Code Starts
// Initial Template for javascript
'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => { inputString += inputStdin; });

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(
        string => { return string.trim(); });

    main();
});

function readLine() {
    return inputString[currentLine++];
}

class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
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

function inorderUtil(root, res) {
    if (root === null) return;
    inorderUtil(root.left, res);
    res.push(root.data);
    inorderUtil(root.right, res);
}

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for (; i < t; i++) {
        let input_ar1 = readLine().split(' ');
        let root = buildTree(input_ar1);
        let obj = new Solution();
        obj.mirror(root);
        let res = [];
        inorderUtil(root, res);
        let s = '';
        for (let i = 0; i < res.length; i++) {
            s += res[i] + " ";
        }
        console.log(s);
    }
}
// } Driver Code Ends


// User function Template for javascript

/**
 * @param {Node} node
*/

/*
class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
*/

// <_____________________________________________MAIN-SOLUTION______________________________________________>
class Solution {
    // Function to convert a binary tree into its mirror tree.
    mirror(node) {
        // your code here
        if (node === null) {
            return null;
        }

        // Swap the left and right children
        [node.left, node.right] = [node.right, node.left];

        // Recursively call mirror on the left and right children
        this.mirror(node.left);
        this.mirror(node.right);
    }

    // Function for inorder traversal of the binary tree
    inorderTraversal(node) {
        if (node === null) {
            return;
        }

        this.inorderTraversal(node.left); // Visit left subtree
        process.stdout.write(node.data + " "); // Print root node's data
        this.inorderTraversal(node.right); // Visit right subtree
    }
}


//Compilation Completed

For Input: 1 3 2
Your Output: 2 1 3
Expected Output: 2 1 3