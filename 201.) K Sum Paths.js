// 201.) Given a binary tree and an integer k, determine the number of downward-only paths where the sum of 
//       the node values in the path equals k. A path can start and end at any node within the tree but must 
//       always move downward (from parent to child).

// Examples:

// Input: k = 7   

// Output: 3
// Explanation: The following paths sum to k 
 
// Input: k = 3

// Output: 2
// Explanation:
// Path 1 : 1 -> 2 (Sum = 3)
// Path 2 : 3 (Sum = 3)


// Constraints:

// 1 ≤ number of nodes ≤ 104
// -100 ≤ node value ≤ 100
// -109 ≤ k ≤ 109

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

        let s_tree = readLine().trim().split(" ");
        let K = parseInt(readLine());
        let root = buildTree(s_tree);
        let obj = new Solution();
        let res = obj.sumK(root, K);
        console.log(res);
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
 * @param {number} K
 * @return {number}
 */


// <___________________________________________________MAIN-SOLUTION_____________________________________________________>

class Solution {

    sumK(root, K) {
        // code here
         const prefixSum = new Map();
        prefixSum.set(0, 1); // Base case to handle exact sum match
        return this.dfs(root, 0, K, prefixSum);
    }

    dfs(node, currentSum, K, prefixSum) {
        if (!node) return 0;

        currentSum += node.data;
        let count = prefixSum.get(currentSum - K) || 0;

        prefixSum.set(currentSum, (prefixSum.get(currentSum) || 0) + 1);

        count += this.dfs(node.left, currentSum, K, prefixSum);
        count += this.dfs(node.right, currentSum, K, prefixSum);

        prefixSum.set(currentSum, prefixSum.get(currentSum) - 1); // Backtrack

        return count;
    }
}












// Compilation Completed
For Input: 
8 4 5 3 2 N 2 3 -2 N 1
7
Your Output: 
3
Expected Output: 
3