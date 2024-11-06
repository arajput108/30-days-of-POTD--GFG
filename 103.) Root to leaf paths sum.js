// 103.) Given a binary tree, where every node value is a number. Find the sum of all the numbers that are 
//       formed from root to leaf paths. The formation of the numbers would be like 10*parent + current 
//       (see the examples for more clarification).

// Examples:

// Input :      

// Output: 13997
// Explanation : There are 4 leaves, resulting in leaf path of 632, 6357, 6354, 654 sums to 13997.
// Input :    

// Output : 2630
// Explanation: There are 3 leaves, resulting in leaf path of 1240, 1260, 130 sums to 2630.
// Input :    
//            1
//           /
//          2                    
// Output : 12
// Explanation: There is 1 leaf, resulting in leaf path of 12.
// Constraints:
// 1 ≤ number of nodes ≤ 31
// 1 ≤ node->data ≤ 100

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
    constructor(x) {
        this.key = x;
        this.left = null;
        this.right = null;
    }
}

function buildTree(str) {
    // Corner Case
    if (str.length === 0 || str[0] == 'N') return null;

    // Creating vector of strings from input
    // string after spliting by space
    let ip = new Array();

    let ip_str = str.split(" ");

    for (let i = 0; i < ip_str.length; i++) ip.push(ip_str[i]);

    // Create the root of the tree
    let root = new Node(parseInt(ip[0]));

    // Push the root to the queue
    let queue = new Array();
    queue.push(root);

    // Starting from the second element
    let i = 1;
    while (queue.length !== 0 && i < ip.length) {

        // Get and remove the front of the queue
        let currNode = queue[0];
        queue.shift();

        // Get the current node's value from the string
        let currVal = ip[i];

        // If the left child is not null
        if (currVal != "N") {

            // Create the left child for the current node
            currNode.left = new Node(parseInt(currVal));

            // Push it to the queue
            queue.push(currNode.left);
        }

        // For the right child
        i++;
        if (i >= ip.length) break;
        currVal = ip[i];

        // If the right child is not null
        if (currVal != "N") {

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
    for (let i = 0; i < t; i++) {
        let s_tree = readLine().trim();

        let root = buildTree(s_tree);

        let obj = new Solution();
        let res = obj.treePathsSum(root);
        console.log(res.toString());

        console.log("~");
    }
}
// } Driver Code Ends


// User function Template for javascript

/*
class Node
{
    constructor(x){
        this.key=x;
        this.left=null;
        this.right=null;
    }
}
*/

/**
 * @param {Node} node
 * @return {number}
 */
// <___________________________________________________MAIN-SOLUTION_____________________________________________________>
class Solution {
    treePathsSum(node) {
        // code here
           let sum =0
        const dfs = (root, count) => {
            //console.log('insode::', count, root?.key)
            if (!root) {
                return 
            }
            count+=root.key;
            if (!root.left && !root.right) {
               sum+=count
            }
            dfs(root.left, count*10)
            dfs(root.right, count*10) 
        }
        dfs(node, 0)
        return sum
    }
}


// Compilation Completed
For Input:  6 3 5 2 5 N 4 N N 7 4 N N N N N N
Your Output:  13997
Expected Output:  13997