// 51.) Given an unsorted array arr containing both positive and negative numbers. Your task is to create an 
//      array of alternate positive and negative numbers without changing the relative order of positive and 
//      negative numbers.
// Note: Array should start with a positive number and 0 (zero) should be considered a positive element.

// Examples:

// Input: arr[] = [9, 4, -2, -1, 5, 0, -5, -3, 2]
// Output: 9 -2 4 -1 5 -5 0 -3 2
// Explanation: Positive elements : [9,4,5,0,2]
// Negative elements : [-2,-1,-5,-3]
// As we need to maintain the relative order of postive elements and negative elements we will pick each element from the positive and negative and will store them. If any of the positive and negative numbersare completed. we will continue with the remaining signed elements.
// The output is 9,-2,4,-1,5,-5,0,-3,2.
// Input: arr[] = [-5, -2, 5, 2, 4, 7, 1, 8, 0, -8]
// Output: 5 -5 2 -2 4 -8 7 1 8 0
// Explanation : Positive elements : [5,2,4,7,1,8,0]
// Negative elements : [-5,-2,-8]
// The output is 5, -5, 2, -2, 4, -8, 7, 1, 8, 0.
// Expected Time Complexity: O(n)
// Expected Auxiliary Space: O(n)

// Constraints:
// 1 ≤ arr.size() ≤ 107
// -106 ≤ arr[i] ≤ 107
// <_______________________________________________SOLUTION___________________________________________________>

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
        let arr = readLine().trim().split(" ").map((x) => parseInt(x));
        let obj = new Solution();
        obj.rearrange(arr);
        printArray(arr, arr.length);
    }
}
// } Driver Code Ends


// User function Template for javascript

/**
 * @param {Number[]} arr
 * @returns {Number[]}
 */

// <_____________________________________________MAIN-SOLUTION______________________________________________>

class Solution {
    rearrange(arr) {
        // code here
        let positives = [];
        let negatives = [];

        // Separate positives (including 0) and negatives
        for (let num of arr) {
            if (num >= 0) {
                positives.push(num);
            } else {
                negatives.push(num);
            }
        }

        // Create a result array to store the rearranged elements
        let result = [];
        let i = 0, j = 0;

        // Alternate between positive and negative elements
        while (i < positives.length && j < negatives.length) {
            result.push(positives[i++]); // Add from positives
            result.push(negatives[j++]); // Add from negatives
        }

        // If any elements are left in positives, append them
        while (i < positives.length) {
            result.push(positives[i++]);
        }

        // If any elements are left in negatives, append them
        while (j < negatives.length) {
            result.push(negatives[j++]);
        }

        // Copy the result back into the original array
        for (let k = 0; k < arr.length; k++) {
            arr[k] = result[k];
        }
    }
}









// Compilation Completed
For Input:    9 4 -2 -1 5 0 -5 -3 2
Your Output:  9 -2 4 -1 5 -5 0 -3 2
Expected Output:  9 -2 4 -1 5 -5 0 -3 2