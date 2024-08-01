// 8.) You are given a rectangular matrix, and your task is to return an array while traversing the matrix in spiral form.

// Examples:

// Input: matrix[][] = [[1, 2, 3, 4],
//                   [5, 6, 7, 8],
//                   [9, 10, 11, 12],
//                   [13, 14, 15,16]]
// Output: [1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10]
// Explanation:

// Input: matrix[][] = [[1, 2, 3, 4],
//                   [5, 6, 7, 8],
//                   [9, 10, 11, 12]]
// Output: [1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7]
// Explanation: Applying same technique as shown above, output for the 2nd testcase will be 1 2 3 4 8 12 11 10 9 5 6 7.
// Expected Time Complexity: O(n2)
// Expected Auxiliary Space: O(n2)

// Constraints:
// 1 <= matrix.size(), matrix[0].size() <= 100
// 0 <= matrix[i][j]<= 100

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
        let input_ar0 = readLine().split(' ').map(x => parseInt(x));
        let n = input_ar0[0];
        let m = input_ar0[1];
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
    }
}
// } Driver Code Ends


// User function Template for javascript
/**
 * @param {number[][]} matrix
 * @returns {number[]}
 */

// <______________________________________________MAIN-SOLUTION__________________________________________________________>
class Solution {
    // Function to return a list of integers denoting spiral traversal of matrix.
    spirallyTraverse(matrix) {
        // code here
        let result = [];
        if (matrix.length === 0) return result;

        let top = 0;
        let bottom = matrix.length - 1;
        let left = 0;
        let right = matrix[0].length - 1;

        while (top <= bottom && left <= right) {
            // Traverse from left to right along the top row
            for (let i = left; i <= right; i++) {
                result.push(matrix[top][i]);
            }
            top++;

            // Traverse from top to bottom along the right column
            for (let i = top; i <= bottom; i++) {
                result.push(matrix[i][right]);
            }
            right--;

            // Traverse from right to left along the bottom row
            if (top <= bottom) {
                for (let i = right; i >= left; i--) {
                    result.push(matrix[bottom][i]);
                }
                bottom--;
            }

            // Traverse from bottom to top along the left column
            if (left <= right) {
                for (let i = bottom; i >= top; i--) {
                    result.push(matrix[i][left]);
                }
                left++;
            }
        }

        return result;
    }
}

//Compilation Completed
For Input: 
4 4
1 2 3 4
5 6 7 8
9 10 11 12 
13 14 15 16

Your Output: 
1 2 3 4 8 12 16 15 14 13 9 5 6 7 11 10
Expected Output: 
1 2 3 4 8 12 16 15 14 13 9 5 6 7 11 10