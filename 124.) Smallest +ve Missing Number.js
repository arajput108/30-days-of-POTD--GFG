// 124.) You are given an integer array arr[]. Your task is to find the smallest positive number missing from the array.

// Note: Positive number starts from 1. The array can have negative integers too.

// Examples:

// Input: arr[] = [2, -3, 4, 1, 1, 7]
// Output: 3
// Explanation: Smallest positive missing number is 3.
// Input: arr[] = [5, 3, 2, 5, 1]
// Output: 4
// Explanation: Smallest positive missing number is 4.
// Input: arr[] = [-8, 0, -1, -4, -3]
// Output: 1
// Explanation: Smallest positive missing number is 1.
// Constraints:  
// 1 <= arr.size() <= 105
// -106 <= arr[i] <= 106
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

    while (t-- > 0) {
        // Read the array of integers
        let inputLine = readLine();
        let arr = inputLine.split(' ').map(x => parseInt(x));

        // Create an instance of the Solution class
        let obj = new Solution();

        // Call the missingNumber method and print the result
        console.log(obj.missingNumber(arr));

        // Print the "~" symbol to match the original output
        // console.log("~");
    }
}
// } Driver Code Ends


// User function Template for javascript

/**
 * @param {number[]} arr
 * @returns {number}
 */



// <___________________________________________________MAIN-SOLUTION_____________________________________________________>
class Solution {
    // Function to find the smallest positive number missing from the array.
    missingNumber(arr) {
        // your code here
                let n = arr.length;

        // Step 1: Place each positive integer `x` at index `x - 1` if possible.
        for (let i = 0; i < n; i++) {
            while (arr[i] > 0 && arr[i] <= n && arr[arr[i] - 1] !== arr[i]) {
                // Swap arr[i] with arr[arr[i] - 1]
                let temp = arr[arr[i] - 1];
                arr[arr[i] - 1] = arr[i];
                arr[i] = temp;
            }
        }

        // Step 2: Find the first index where the value is not `index + 1`.
        for (let i = 0; i < n; i++) {
            if (arr[i] !== i + 1) {
                return i + 1;
            }
        }

        // Step 3: If all values from 1 to n are present, return n + 1.
        return n + 1;
    }
}



// Compilation Completed
For Input:  1 2 3 4 5
Your Output:  6
Expected Output: 6