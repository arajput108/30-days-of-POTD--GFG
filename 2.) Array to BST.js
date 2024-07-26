// 2.) Given a sorted array. Convert it into a Height Balanced Binary Search Tree (BST). Return the root of the BST.
//     Height-balanced BST means a binary tree in which the depth of the left subtree and the right subtree of every node never differ by more than 1.
//     Note: The driver code will check the BST, if it is a Height-balanced BST, the output will be true otherwise the output will be false.

// Examples :

// Input: nums = [1, 2, 3, 4]
// Output: true
// Explanation: The preorder traversal of the following BST formed is [2, 1, 3, 4]:
//            2
//          /   \
//         1     3
//                \
//                 4
// Input: nums = [1, 2, 3, 4, 5, 6, 7]
// Ouput: true
// Explanation: The preorder traversal of the following BST formed is [4, 2, 1, 3, 6, 5, 7]:
//         4
//        / \
//       2   6
//      / \   / \
//     1 3  5 7
// Expected Time Complexity: O(n)
// Expected Auxillary Space: O(n)

// Constraints:
// 1 ≤ nums.size() ≤ 105
// 1 ≤ nums[i] ≤ 105

// <_______________________________________________SOLUTION______________________________________________________________>
//{ Driver Code Starts
'use strict';

// Node class to represent a tree node
class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

function isValidBSTUtil(root, lower, upper) {
    if (!root) return true;
    if (root.data <= lower || root.data >= upper) return false;
    return isValidBSTUtil(root.left, lower, root.data) &&
           isValidBSTUtil(root.right, root.data, upper);
}

function isValidBST(root) {
    return isValidBSTUtil(root, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);
}

function height(root) {
    if (!root) return 0;

    let leftHeight = height(root.left);
    let rightHeight = height(root.right);

    if (leftHeight === -1 || rightHeight === -1 ||
        Math.abs(leftHeight - rightHeight) > 1) {
        return -1;
    }

    return Math.max(leftHeight, rightHeight) + 1;
}

function isBalanced(root) { return height(root) !== -1; }

function inorder(root, v) {
    if (!root) return;
    inorder(root.left, v);
    v.push(root.data);
    inorder(root.right, v);
}

// Initial Template for JavaScript
process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => { inputString += inputStdin; });

process.stdin.on('end', () => {
    inputString = inputString.trim().split('\n').map(string => string.trim());
    main();
});

function readLine() { return inputString[currentLine++]; }

function main() {
    let t = parseInt(readLine());
    for (let i = 0; i < t; i++) {
        let nums = readLine().split(" ").map(Number);

        let solution = new Solution();
        let root = solution.sortedArrayToBST(nums);

        let v = [];
        inorder(root, v);

        if (!isValidBST(root) || JSON.stringify(v) !== JSON.stringify(nums)) {
            console.log("false");
            continue;
        }

        if (isBalanced(root)) {
            console.log("true");
        } else {
            console.log("false");
        }
    }
}

// } Driver Code Ends


// User function Template for javascript

/**
 * @param {number[]} nums
 * @return {number[]}
 */

// <______________________________________________MAIN-SOLUTION__________________________________________________________>
class TreeNode {
    constructor(data, left = null, right = null) {
        this.data = data;
        this.left = left;
        this.right = right;
    }
}
class Solution {
    sortedArrayToBST(nums) {
        // code here
         function buildBST(left, right) {
            // Base case: If left index exceeds right, return null
            if (left > right) {
                return null;
            }

            // Middle element to maintain balance
            const mid = Math.floor((left + right) / 2);
            const node = new TreeNode(nums[mid]);

            // Recursively build the left and right subtrees
            node.left = buildBST(left, mid - 1);
            node.right = buildBST(mid + 1, right);

            return node;
        }

        // Initiate the recursive building process
        return buildBST(0, nums.length - 1);

    }
}