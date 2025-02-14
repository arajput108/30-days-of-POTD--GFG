// 205.) Given the root of a Binary search tree(BST), where exactly two nodes were swapped by mistake. 
//       Your task is to fix (or correct) the BST by swapping them back. Do not change the structure 
//       of the tree.
// Note: It is guaranteed that the given input will form BST, except for 2 nodes that will be wrong. 
//       All changes must be reflected in the original Binary search tree(BST).
 
// Examples :
// Input: root = [10, 5, 8, 2, 20]
     
// Output: 1
       

// Explanation: The nodes 20 and 8 were swapped. 
// Input: root = [5, 10, 20, 2, 8]
     
// Output: 1 
     
// Explanation: The nodes 10 and 5 were swapped.
// Constraints:
// 1 ≤ Number of nodes ≤ 103

// <______________________________________________SOLUTION___________________________________________________>
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

function isBST(n, lower, upper) {
    if (!n) return true;
    if (n.data <= lower || n.data >= upper) return false;
    return (isBST(n.left, lower, n.data) && isBST(n.right, n.data, upper));
}

function compare(a, b, mismatch) {
    if (!a && !b) return true;
    if (!a || !b) return false;

    if (a.data != b.data) mismatch.push([ a.data, b.data ]);

    return (compare(a.left, b.left, mismatch) && compare(a.right, b.right, mismatch));
}

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for (; i < t; i++) {
        let input_ar1 = readLine().split(' ');
        let root = buildTree(input_ar1);
        let duplicate = buildTree(input_ar1);
        let obj = new Solution();
        obj.correctBST(root);
        if (!isBST(root, -999999999, 999999999)) {
            console.log("0");
        } else {
            let mismatch = [];
            if (!compare(root, duplicate, mismatch)) {
                console.log("0");
            } else {
                if (mismatch.length != 2 || mismatch[0][0] != mismatch[1][1] ||
                    mismatch[0][1] != mismatch[1][0])
                    console.log("0");
                else
                    console.log("1");
            }
        }

        console.log("~");
    }
}
// } Driver Code Ends


/*
class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
*/

/**
 * @param {Node} root
 * @returns {void}
 */


// <___________________________________________________MAIN-SOLUTION_____________________________________________________>

class Solution {
    correctBST(root) {
        // your code here
         let first = null, second = null, prev = null;

        // In-order traversal to detect swapped nodes
        function inorder(node) {
            if (!node) return;
            
            inorder(node.left);
            
            if (prev && node.data < prev.data) {
                if (!first) {
                    first = prev;
                }
                second = node;
            }
            
            prev = node;
            
            inorder(node.right);
        }

        // Call in-order traversal
        inorder(root);

        // Swap the values of the two incorrect nodes
        if (first && second) {
            [first.data, second.data] = [second.data, first.data];
        }

        return 1; // Indicates successful correction
    }
}



// Compilation Completed
For Input: 
10 5 8 2 20
Your Output: 
1
Expected Output: 
1