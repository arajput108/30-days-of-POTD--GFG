// 10.) A celebrity is a person who is known to all but does not know anyone at a party. A party is being organized by some people.  A square matrix mat is used to represent people at the party such that if an element of row i and column j is set to 1 it means ith person knows jth person. You need to return the index of the celebrity in the party, if the celebrity does not exist, return -1.

// Note: Follow 0-based indexing.

// Examples:

// Input: mat[][] = [[0 1 0],
//                 [0 0 0], 
//                 [0 1 0]]
// Output: 1
// Explanation: 0th and 2nd person both know 1. Therefore, 1 is the celebrity. 
// Input: mat[][] = [[0 1],
//                 [1 0]]
// Output: -1
// Explanation: The two people at the party both know each other. None of them is a celebrity.
// Expected Time Complexity: O(n2)
// Expected Auxiliary Space: O(1)

// Constraints:
// 1 <= mat.size()<= 3000
// 0 <= mat[i][j]<= 1

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

function main() {
    let t = parseInt(readLine());
    for (let i = 0; i < t; i++) {
        let input_line = readLine().split(' ');
        let n = parseInt(input_line[0]);

        let grid = [];

        for (let i = 0; i < n; i++) {
            input_line = readLine().split(' ');
            let a = input_line.map((x) => parseInt(x));
            grid.push(a);
        }

        let obj = new Solution();
        let ans = obj.celebrity(grid);
        if (typeof ans === "undefined") ans = "None";
        console.log(ans);
    }
}

// } Driver Code Ends


// User function Template for javascript
/**
 * @param {number[][]} mat
 * @returns {number}
 */

// <______________________________________________MAIN-SOLUTION__________________________________________________________>
class Solution {
    // Function to find the celebrity.
    celebrity(mat) {
        // your code here
        const n = mat.length;
        
        // Step 1: Find the candidate
        let candidate = 0;
        for (let i = 1; i < n; i++) {
            if (mat[candidate][i] === 1) {
                candidate = i;
            }
        }
        
        // Step 2: Verify the candidate
        for (let i = 0; i < n; i++) {
            if (i !== candidate && (mat[candidate][i] === 1 || mat[i][candidate] === 0)) {
                return -1;
            }
        }
        
        return candidate;
    }
}


//Compilation Completed
For Input: 
3
0 1 0
0 0 0 
0 1 0
Your Output: 1
Expected Output: 1

