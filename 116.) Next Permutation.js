// 116.) Given an array of integers arr[] representing a permutation, implement the next permutation that rearranges 
//       the numbers into the lexicographically next greater permutation. If no such permutation exists, rearrange 
//       the numbers into the lowest possible order (i.e., sorted in ascending order). 

// Note - A permutation of an array of integers refers to a specific arrangement of its elements in a sequence or 
//       linear order.

// Examples:

// Input: arr = [2, 4, 1, 7, 5, 0]
// Output: [2, 4, 5, 0, 1, 7]
// Explanation: The next permutation of the given array is {2, 4, 5, 0, 1, 7}.
// Input: arr = [3, 2, 1]
// Output: [1, 2, 3]
// Explanation: As arr[] is the last permutation, the next permutation is the lowest one.
// Input: arr = [3, 4, 2, 5, 1]
// Output: [3, 4, 5, 1, 2]
// Explanation: The next permutation of the given array is {3, 4, 5, 1, 2}.
// Constraints:
// 1 ≤ arr.size() ≤ 105
// 1 ≤ arr[i] ≤ 105
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
        obj.nextPermutation(arr);
        printArray(arr, arr.length);
    }
}
// } Driver Code Ends


// User function Template for javascript

/**
 * @param {Number[]} arr
 */


// <___________________________________________________MAIN-SOLUTION_____________________________________________________>
class Solution {
    nextPermutation(arr) {
        // code here
             let n = arr.length;
        let i = n - 2;

        // Step 1: Find the first decreasing element
        while (i >= 0 && arr[i] >= arr[i + 1]) {
            i--;
        }

        if (i >= 0) {
            // Step 2: Find the smallest element greater than arr[i]
            let j = n - 1;
            while (arr[j] <= arr[i]) {
                j--;
            }
            // Step 3: Swap arr[i] and arr[j]
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }

        // Step 4: Reverse the subarray from i+1 to end
        let start = i + 1;
        let end = n - 1;
        while (start < end) {
            [arr[start], arr[end]] = [arr[end], arr[start]];
            start++;
            end--;
        }

        return arr;
    }
}


// Compilation Completed
For Input: 
1 2 3 6 5 4
Your Output: 
1 2 4 3 5 6
Expected Output: 
1 2 4 3 5 6