// 149.) Given a square matrix mat[][] of size n x n. The task is to rotate it by 90 degrees in an 
//       anti-clockwise direction without using any extra space. 

// Examples:

// Input: mat[][] = [[1, 2, 3],
//                 [4, 5, 6]
//                 [7, 8, 9]]
// Output: Rotated Matrix:
// [3, 6, 9]
// [2, 5, 8]
// [1, 4, 7]
// Input: mat[][] = [[1, 2],
//                 [3, 4]]
// Output: Rotated Matrix:
// [2, 4]
// [1, 3]
// Constraints:
// 1 ≤ n ≤ 102
// 0 <= mat[i][j] <= 103
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

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for (; i < t; i++) {
        let n = parseInt(readLine());
        let matrix = new Array(n);
        for (let i = 0; i < n; i++) {
            let a = new Array(n);
            let input_ar1 = readLine().split(' ').map(x => parseInt(x));
            for (let j = 0; j < n; j++) a[j] = input_ar1[j];
            matrix[i] = a;
        }

        let obj = new Solution();
        obj.rotateby90(matrix);

        for (let i = 0; i < n; i++) {
            let s = "";
            for (let j = 0; j < n; j++) {
                s += matrix[i][j];
                s += " ";
            }
            console.log(s);
        }
        console.log("~");
    }
}

// } Driver Code Ends


// User function Template for javascript

/**
 * @param {number[][]} matrix
 */

// <___________________________________________________MAIN-SOLUTION_____________________________________________________>
class Solution {
    // Function to rotate matrix anticlockwise by 90 degrees.
    rotateby90(mat) {
        // code here
          let n = mat.length;

        // Step 1: Transpose the matrix
        for (let i = 0; i < n; i++) {
            for (let j = i + 1; j < n; j++) {
                // Swap mat[i][j] with mat[j][i]
                [mat[i][j], mat[j][i]] = [mat[j][i], mat[i][j]];
            }
        }

        // Step 2: Reverse each column
        for (let j = 0; j < n; j++) {
            let start = 0, end = n - 1;
            while (start < end) {
                // Swap mat[start][j] with mat[end][j]
                [mat[start][j], mat[end][j]] = [mat[end][j], mat[start][j]];
                start++;
                end--;
            }
        }
    }
}


// Compilation Completed
For Input: 
3
1 2 3 
4 5 6 
7 8 9
Your Output: 
3 6 9
2 5 8
1 4 7
Expected Output: 
3 6 9
2 5 8
1 4 7