// 200.) Given a binary tree, the task is to find the maximum path sum. The path may start and end at any 
//       node in the tree.

// Examples:

// Input: root[] = [10, 2, 10, 20, 1, N, -25, N, N, N, N, 3, 4]
// Output: 42
// Explanation: 

// Max path sum is represented using green colour nodes in the above binary tree.
// Input: root[] = [-17, 11, 4, 20, -2, 10]
// Output: 31
// Explanation: 

// Max path sum is represented using green colour nodes in the above binary tree.
// Constraints:
// 1 ≤ number of nodes ≤ 103
// -104 ≤ node->data ≤ 104
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

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for (; i < t; i++) {
        let input_ar1 = readLine().split(' ');
        let root = buildTree(input_ar1);
        let obj = new Solution();
        console.log(obj.findMaxSum(root));

        console.log("~");
    }
}
// } Driver Code Ends


// User function Template for javascript

/**
 * @param {Node} root
 * @returns {number}
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


// <___________________________________________________MAIN-SOLUTION_____________________________________________________>

class Solution {
    // Function to return maximum path sum from any node in a tree.
    findMaxSum(root) {
        // your code here
         let maxSum = -999999999
        let recursion = (node) => {
            if(!node || node == null) return 0
            let left = Math.max(0, recursion(node.left))
            let right = Math.max(0, recursion(node.right))
            maxSum = Math.max(maxSum, left + right + node.data)
            return node.data + Math.max(left, right)
        }
        recursion(root)
        return maxSum
    }
}


// Compilation Completed
For Input: 
10 2 10 20 1 N -25 N N N N 3 4
Your Output: 
42
Expected Output: 
42