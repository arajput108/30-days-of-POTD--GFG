// 30.)  Given a Binary Tree, return Left view of it. Left view of a Binary Tree is set of nodes visible when tree is 
//       visited from Left side. The task is to complete the function leftView(), which accepts root of the tree as 
//       argument. If no left view is possible, return an empty tree.

// Left view of following tree is 1 2 4 8.

//           1
//        /     \
//      2        3
//    /     \    /    \
//   4     5   6    7
//    \
//      8   

// Examples :

// Input:
//    1
//  /  \
// 3    2
// Output: 1 3

// Input:

// Output: 10 20 40
// Expected Time Complexity: O(N).
// Expected Auxiliary Space: O(N).

// Constraints:
// 0 <= Number of nodes <= 105
// 0 <= Data of a node <= 105




// <______________________________________________SOLUTION__________________________________________________________>
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

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for(;i<t;i++)
    {
        let input_ar1 = readLine().split(' ');
        let root = buildTree(input_ar1);
        let obj = new Solution();
        let res = obj.leftView(root);
        let s = '';
        for(let i=0; i<res.length; i++){
            if(!isNaN(res[i]))
                s += res[i] +" ";
        }
        console.log(s);
        
    }
}
// } Driver Code Ends


//User function Template for javascript

/**
 * @param {Node} root
 * @returns {number[]}
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
// <___________________________________________MAIN-SOLUTION__________________________________________________________>

class Solution {
    leftView(root)
    {
        if (!root) return [];

        let result = [];
        let queue = [root];
        let levelStart = 0;

        while (levelStart < queue.length) {
            let levelSize = queue.length - levelStart;

            // First node at this level
            result.push(queue[levelStart].data);

            for (let i = 0; i < levelSize; i++) {
                let currentNode = queue[levelStart++];
                
                if (currentNode.left) {
                    queue.push(currentNode.left);
                }
                if (currentNode.right) {
                    queue.push(currentNode.right);
                }
            }
        }

        return result;
    }
}


//Compilation Completed
For Input: 1 3 2
Your Output: 1 3
Expected Output: 1 3