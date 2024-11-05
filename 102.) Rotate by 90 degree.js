102.) Given a square matrix[][]. The task is to rotate it by 90 degrees in clockwise direction without using any 
      extra space.

Examples:

Input: mat[][] = [[1 2 3], [4 5 6], [7 8 9]]
Output:
7 4 1 
8 5 2
9 6 3
Input: mat[][] = [1 2], [3 4]
Output:
3 1 
4 2
Input: mat[][] = [[1]]
Output:
1
Constraints:
1 ≤ mat.size() ≤ 1000
1 <= mat[][] <= 100
// <______________________________________________SOLUTION___________________________________________________>
//{ Driver Code Starts
// Initial Template for javascript

"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => { inputString += inputStdin; });

process.stdin.on("end", (_) => {
    inputString =
        inputString.trim().split("\n").map((string) => { return string.trim(); });

    main();
});

function readLine() { return inputString[currentLine++]; }

/* Function to print an array */
function printArray(arr, size) {
    let i;
    let s = "";
    for (i = 0; i < size; i++) {
        s += arr[i] + " ";
    }
    console.log(s);
}

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for (; i < t; i++) {

        let n = parseInt(readLine());
        let mat = [];
        for (let i = 0; i < n; i++) {
            let row = readLine().split(" ").map((x) => parseInt(x));
            mat.push(row);
        }

        let obj = new Solution();
        obj.rotate(mat);

        for (let i = 0; i < n; i++) {
            let s = "";
            for (let j = 0; j < n; j++) {
                s = s + mat[i][j] + " ";
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
    rotate(mat) {
        // code here
        let n = mat.length;

        // Step 1: Transpose the matrix
        for (let i = 0; i < n; i++) {
            for (let j = i + 1; j < n; j++) {
                [mat[i][j], mat[j][i]] = [mat[j][i], mat[i][j]]; // Swap elements
            }
        }

        // Step 2: Reverse each row
        for (let i = 0; i < n; i++) {
            mat[i].reverse();
        }

        return mat;
    }
}




// Compilation Completed
For Input: 
3
1 2 3
4 5 6
7 8 9
Your Output: 
7 4 1
8 5 2
9 6 3
Expected Output: 
7 4 1
8 5 2
9 6 3


