// 76.) Given a Matrix mat of n*n size. Your task is constructing a 2D linked list representation of the 
//      given matrix.

// Input: mat = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
// Output: 

// Input: mat = [[23, 28], [23, 28]]
// Output:

// Expected Time Complexity: O(n2)
// Expected Space Complexity: O(n2)

// Constraints:
// 1 <= mat.size() <=15
// 1 <= mat[i][j] <=104
// <______________________________________________SOLUTION___________________________________________________>


//{ Driver Code Starts
'use strict';

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

class Node {
    constructor(x) {
        this.data = x;
        this.right = null;
        this.down = null;
    }
}

function display(head) {
    let dp = head;
    while (dp) {
        let rp = dp;
        while (rp) {
            process.stdout.write(`${rp.data} `); // Print current node data
            if (rp.right) {
                process.stdout.write(`${rp.right.data} `); // Print right node data
            } else {
                process.stdout.write('null '); // Print 'null' if no right node
            }
            if (rp.down) {
                process.stdout.write(`${rp.down.data} `); // Print down node data
            } else {
                process.stdout.write('null '); // Print 'null' if no down node
            }
            rp = rp.right; // Move to the right node
        }
        dp = dp.down; // Move down to the next row
    }
    console.log(); // New line after finishing one row
}

function main() {
    const testCases = parseInt(readLine());

    for (let _ = 0; _ < testCases; _++) {
        const a = readLine().split(' ').map(Number); // Read the first row
        const n = a.length;

        let mat = [ a ]; // Initialize matrix with the first row
        for (let i = 1; i < n; i++) {
            const row = readLine().split(' ').map(Number); // Read subsequent rows
            mat.push(row);
        }

        const obj = new Solution();
        const head = obj.constructLinkedMatrix(mat);
        if (!head) {
            console.log(-1); // If no head, print -1
            continue;
        }
        display(head); // Display the linked matrix
    }
}

// } Driver Code Ends


// User function Template for javascript

/*
class Node {
    constructor(x) {
        this.data = x;
        this.right = null;
        this.down = null;
    }
}
*/
/**
 * @param {number[][]} mat - The 2D input matrix.
 * @returns {Node|null} - The head node of the linked matrix, or null if the matrix is
 *     empty.
 */

// <___________________________________________MAIN-SOLUTION______________________________________________>   
class Solution {
    constructLinkedMatrix(mat) {
        // code here
        const n = mat.length;
        if (n === 0) return null;

        // Create a 2D array to store the created nodes
        let nodeMatrix = Array.from({ length: n }, () => Array(n).fill(null));

        // Create the linked list nodes
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                nodeMatrix[i][j] = new Node(mat[i][j]);
            }
        }

        // Link the nodes
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                if (j < n - 1) {
                    nodeMatrix[i][j].right = nodeMatrix[i][j + 1]; // Link to right neighbor
                }
                if (i < n - 1) {
                    nodeMatrix[i][j].down = nodeMatrix[i + 1][j]; // Link to down neighbor
                }
            }
        }

        // Return the head node (top-left corner)
        return nodeMatrix[0][0];
    }
}

//  Compilation Completed
For Input: 
1 2 3
4 5 6
7 8 9
Your Output: 
1 2 4 2 3 5 3 null 6 4 5 7 5 6 8 6 null 9 7 8 null 8 9 null 9 null null
Expected Output: 
1 2 4 2 3 5 3 null 6 4 5 7 5 6 8 6 null 9 7 8 null 8 9 null 9 null null