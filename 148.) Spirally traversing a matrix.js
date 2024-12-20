// 148.) You are given a rectangular matrix mat[][] of size n x m, and your task is to return an array 
//       while traversing the matrix in spiral form.

// Examples:

// Input: mat[][] = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]]
// Output: [1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10]
// Explanation: 

// Input: mat[][] = [[1, 2, 3, 4, 5, 6], [7, 8, 9, 10, 11, 12], [13, 14, 15, 16, 17, 18]]
// Output: [1, 2, 3, 4, 5, 6, 12, 18, 17, 16, 15, 14, 13, 7, 8, 9, 10, 11]
// Explanation: Applying same technique as shown above.
// Input: mat[][] = [[32, 44, 27, 23], [54, 28, 50, 62]]
// Output: [32, 44, 27, 23, 62, 50, 28, 54]
// Explanation: Applying same technique as shown above, output will be [32, 44, 27, 23, 62, 50, 28, 54].
// Constraints:
// 1 <= n, m <= 1000
// 0 <= mat[i][j]<= 100
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

/* Function to print an array */
function printArray(arr, size) {
    let i;
    let s = '';
    for (i = 0; i < size; i++) {
        if (arr[i] == -0) arr[i] = 0;
        s += arr[i];
        s += " ";
    }
    console.log(s);
}

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for (; i < t; i++) {
        let n = parseInt(readLine());
        let m = parseInt(readLine());
        let matrix = new Array(n);
        for (let i = 0; i < n; i++) {
            let a = new Array(m);
            let input_ar1 = readLine().split(' ').map(x => parseInt(x));
            for (let j = 0; j < m; j++) a[j] = input_ar1[j];
            matrix[i] = a;
        }
        let obj = new Solution();
        let ans = obj.spirallyTraverse(matrix);
        printArray(ans, ans.length);
        console.log("~");
    }
}
// } Driver Code Ends


// User function Template for javascript
/**
 * @param {number[][]} mat
 * @returns {number[]}
 */

// <___________________________________________________MAIN-SOLUTION_____________________________________________________>
class Solution {
    // Function to return a list of integers denoting spiral traversal of matrix.
    spirallyTraverse(mat) {
        // code here
         const result = [];
        const rows = mat.length;
        const cols = mat[0].length;

        // Initialize boundaries
        let top = 0, bottom = rows - 1, left = 0, right = cols - 1;

        while (top <= bottom && left <= right) {
            // Traverse from left to right along the top boundary
            for (let i = left; i <= right; i++) {
                result.push(mat[top][i]);
            }
            top++;

            // Traverse from top to bottom along the right boundary
            for (let i = top; i <= bottom; i++) {
                result.push(mat[i][right]);
            }
            right--;

            // Traverse from right to left along the bottom boundary (if still within bounds)
            if (top <= bottom) {
                for (let i = right; i >= left; i--) {
                    result.push(mat[bottom][i]);
                }
                bottom--;
            }

            // Traverse from bottom to top along the left boundary (if still within bounds)
            if (left <= right) {
                for (let i = bottom; i >= top; i--) {
                    result.push(mat[i][left]);
                }
                left++;
            }
        }

        return result;
    }
}



// Compilation Completed
For Input: 
4
4
1 2 3 4
5 6 7 8 
9 10 11 12 
13 14 15 16
Your Output: 
1 2 3 4 8 12 16 15 14 13 9 5 6 7 11 10
Expected Output: 
1 2 3 4 8 12 16 15 14 13 9 5 6 7 11 10
