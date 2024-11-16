// 113.) Given an array arr[]. Push all the zeros of the given array to the right end of the array while 
//       maintaining the order of non-zero elements. Do the mentioned change in the array in place.

// Examples:

// Input: arr[] = [1, 2, 0, 4, 3, 0, 5, 0]
// Output: [1, 2, 4, 3, 5, 0, 0, 0]
// Explanation: There are three 0s that are moved to the end.
// Input: arr[] = [10, 20, 30]
// Output: [10, 20, 30]
// Explanation: No change in array as there are no 0s.
// Input: arr[] = [0, 0]
// Output: [0, 0]
// Explanation: No change in array as there are all 0s.
// Constraints:
// 1 ≤ arr.size() ≤ 105
// 0 ≤ arr[i] ≤ 105
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
        let arr = readLine().split(" ").map((x) => parseInt(x));
        let obj = new Solution();
        obj.pushZerosToEnd(arr);
        let n = arr.length;
        printArray(arr, n);
    }
}
// } Driver Code Ends


// User function Template for javascript

/**
 * @param {Number[]} arr
 */
// <___________________________________________________MAIN-SOLUTION_____________________________________________________>
class Solution {
    pushZerosToEnd(arr) {
        // code here
        let nonZeroIndex = 0; // Pointer for placing non-zero elements

        // Traverse the array
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] !== 0) {
                // Swap non-zero element to the position of nonZeroIndex
                [arr[nonZeroIndex], arr[i]] = [arr[i], arr[nonZeroIndex]];
                nonZeroIndex++;
            }
        }
    }
}

// Compilation Completed
For Input: 
3 5 0 0 4
Your Output: 
3 5 4 0 0
Expected Output: 
3 5 4 0 0
