// 121.) Given an integer array arr[]. You need to find the maximum sum of a subarray.

// Examples:

// Input: arr[] = [2, 3, -8, 7, -1, 2, 3]
// Output: 11
// Explanation: The subarray {7, -1, 2, 3} has the largest sum 11.
// Input: arr[] = [-2, -4]
// Output: -2
// Explanation: The subarray {-2} has the largest sum -2.
// Input: arr[] = [5, 4, 1, 7, 8]
// Output: 25
// Explanation: The subarray {5, 4, 1, 7, 8} has the largest sum 25.
// Constraints:
// 1 ≤ arr.size() ≤ 105
// -109 ≤ arr[i] ≤ 104 
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
    for (let i = 0; i < t; i++) {
        const arr = readLine().split(' ').map(x => parseInt(x));
        let obj = new Solution();
        let ans = obj.maxSubarraySum(arr);
        if (ans == -0) ans = 0;
        console.log(ans);
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
    // Function to find the sum of contiguous subarray with maximum sum.
    maxSubarraySum(arr) {
        // code here
         let maxSum = arr[0]; // Initialize the max sum with the first element.
        let currentSum = arr[0]; // Initialize the current sum with the first element.

        // Traverse the array starting from the second element.
        for (let i = 1; i < arr.length; i++) {
            // Update the current sum by either adding the current element 
            // or starting a new subarray from the current element.
            currentSum = Math.max(arr[i], currentSum + arr[i]);

            // Update the max sum if the current sum is greater.
            maxSum = Math.max(maxSum, currentSum);
        }

        return maxSum; // Return the maximum sum of the subarray.
    }
}

//Compilation Completed
For Input:        1 2 3 -2 5
Your Output:      9
Expected Output:  9