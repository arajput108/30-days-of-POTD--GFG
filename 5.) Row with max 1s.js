// 5.) Given a boolean 2D array, consisting of only 1's and 0's, where each row is sorted. Return the 0-based index of the first row that has the most number of 1s. If no such row exists, return -1.

// Examples:

// Input: arr[][] = [[0, 1, 1, 1],
//                [0, 0, 1, 1],
//                [1, 1, 1, 1],
//                [0, 0, 0, 0]]
// Output: 2
// Explanation: Row 2 contains 4 1's (0-based indexing).
// Input: arr[][] = [[0, 0], 
//                [1, 1]]
// Output: 1
// Explanation: Row 1 contains 2 1's (0-based indexing).
// Expected Time Complexity: O(n+m)
// Expected Auxiliary Space: O(1)

// Constraints:
// 1 ≤ number of rows, number of columns ≤ 103
// 0 ≤ arr[i][j] ≤ 1 


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
        let m = parseInt(input_line[1]);
        input_line = readLine().split(' ');
        let matrix = new Array(n);
        for (let i = 0; i < n; i++) {
            let a = new Array(m);
            for (let j = 0; j < m; j++) {
                a[j] = parseInt(input_line[i * m + j]);
            }
            matrix[i] = a;
        }

        let obj = new Solution();
        let res = obj.rowWithMax1s(matrix);
        console.log(res);
    }
}
// } Driver Code Ends


// User function Template for javascript

/**
 * @param {number[][]} arr
 * @param {number} n
 * @param {number} m
 * @returns {number}
 */

// <______________________________________________MAIN-SOLUTION__________________________________________________________>
class Solution {

    rowWithMax1s(arr) {
        // code here
        let rows = arr.length;
        let cols = arr[0].length;

        let maxRowIndex = -1;
        let maxCount = 0;
        let col = cols - 1; // Start from the top-right corner

        for (let row = 0; row < rows; row++) {
            while (col >= 0 && arr[row][col] === 1) {
                col--; // Move left if we encounter a 1
                maxRowIndex = row; // Update the row index with max 1s
            }
        }

        return maxRowIndex;
    }



//Compilation Completed
For Input: 
4 4
0 1 1 1 0 0 1 1 1 1 1 1 0 0 0 0
Your Output: 2
Expected Output: 2
