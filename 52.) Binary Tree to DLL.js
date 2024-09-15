// 52.) Given a Binary Tree (BT), convert it to a Doubly Linked List (DLL) in place. The left and right 
//      pointers in nodes will be used as previous and next pointers respectively in converted DLL. 
//      The order of nodes in DLL must be the same as the order of the given Binary Tree. 
//      The first node of Inorder traversal (leftmost node in BT) must be the head node of the DLL.

// Note: h is the tree's height, and this space is used implicitly for the recursion stack.

// TreeToList

// Examples:

// Input:
//       1
//     /  \
//    3    2
// Output:
// 3 1 2 
// 2 1 3

// Explanation: DLL would be 3<=>1<=>2
// Input:
//        10
//       /   \
//      20   30
//    /   \
//   40   60
// Output:
// 40 20 60 10 30 
// 30 10 60 20 40

// Explanation:  DLL would be 40<=>20<=>60<=>10<=>30.
// Expected Time Complexity: O(no. of nodes)
// Expected Space Complexity: O(height of the tree)

// Constraints:
// 1 ≤ Number of nodes ≤ 105
// 0 ≤ Data of a node ≤ 105

// <___________________________________________________SOLUTION__________________________________________________>
//{ Driver Code Starts
//Initial Template for javascript
'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

function buildTree(str){
   // Corner Case
   if(str.length === 0 || str[0] === "N")
       return null;

   // Create the root of the tree
   let root = new Node(parseInt(str[0]));

   // Push the root to the queue
   let queue = [];
   let start = 0;
   queue.push(root);

   // Starting from the second element
   let i = 1;
   while(queue.length !== start && i < str.length) {

       // Get and remove the front of the queue
       let currNode = queue[start];
       start++;

       // Get the current node's value from the string
       let currVal = str[i];

       // If the left child is not null
       if(currVal !== "N") {

           // Create the left child for the current node
           currNode.left = new Node(parseInt(currVal));

           // Push it to the queue
           queue.push(currNode.left);
       }

       // For the right child
       i++;
       if(i >= str.length)
           break;
       currVal = str[i];

       // If the right child is not null
       if(currVal !== "N") {

           // Create the right child for the current node
           currNode.right = new Node(parseInt(currVal));

           // Push it to the queue
           queue.push(currNode.right);
       }
       i++;
   }

   return root;
}

function printList(node)
{
    let prev = null;
    let s = '';
    while (node !== null)
    {
        s += node.data + " ";
        prev = node;
        node = node.right;
    }
    console.log(s);
    s = '';
    while (prev !== null)
    {
        s += prev.data + " ";
        prev = prev.left;
    }
    console.log(s);
}


function main() {
    let t = parseInt(readLine());
    let i = 0;
    for(;i<t;i++)
    {
        let input_ar1 = readLine().split(' ');
        let root = buildTree(input_ar1);
        let obj = new Solution();
        let head = obj.bToDLL(root); 
        printList(head);
        
    }
}
// } Driver Code Ends


//User function Template for javascript

/**
 * @param {Node} root
 * @returns {Node}
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

// <________________________________________________MAIN-SOLUTION________________________________________________>

class Solution {
    //Function to convert a binary tree to doubly linked list and return it.
    bToDLL(root)
    {
        //your code here
        // Initialize previous node as null
        let prev = null;
        // To store the head of the DLL
        let head = null;

        // Helper function to perform inorder traversal and convert BT to DLL
        const inorder = (node) => {
            if (node === null) {
                return;
            }

            // Recursively convert the left subtree
            inorder(node.left);

            // If prev is null, it means we are at the leftmost node
            // i.e., the first node in inorder traversal, so set head
            if (prev === null) {
                head = node;
            } else {
                // Link the previous node with the current node
                node.left = prev;
                prev.right = node;
            }

            // Move the prev pointer to the current node
            prev = node;

            // Recursively convert the right subtree
            inorder(node.right);
        };

        // Start the inorder traversal from the root
        inorder(root);

        // Return the head of the DLL
        return head;
    }
}



// Compilation Completed
For Input: 
1 3 2
Your Output: 
3 1 2
2 1 3
Expected Output: 
3 1 2
2 1 3