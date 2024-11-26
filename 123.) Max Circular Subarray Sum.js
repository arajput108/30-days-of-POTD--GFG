// 123.) Given an array of integers arr[] in a circular fashion. Find the maximum subarray sum that we can 
//       get if we assume the array to be circular.

// Examples:

// Input: arr[] = [8, -8, 9, -9, 10, -11, 12]
// Output: 22
// Explanation: Starting from the last element of the array, i.e, 12, and moving in a circular fashion, 
//              we have max subarray as 12, 8, -8, 9, -9, 10, which gives maximum sum as 22.
// Input: arr[] = [10, -3, -4, 7, 6, 5, -4, -1]
// Output: 23
// Explanation: Maximum sum of the circular subarray is 23. The subarray is [7, 6, 5, -4, -1, 10].
// Input: arr[] = [-1, 40, -14, 7, 6, 5, -4, -1] 
// Output: 52
// Explanation: Circular Subarray [7, 6, 5, -4, -1, -1, 40] has the maximum sum, which is 52.
// Constraints:
// 1 <= arr.size() <= 105
// -104 <= arr[i] <= 104
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
        let arr = readLine().split(' ').map(
            x => parseInt(x)); // Read and split input into an array
        let obj = new Solution();
        let ans = obj.circularSubarraySum(arr);
        if (ans == -0) ans = 0;
        console.log(ans);
    }
}

// } Driver Code Ends


// User function Template for javascript

/**
 * @param {[number[]} arr
 * @returns {number}
 */

// <___________________________________________________MAIN-SOLUTION_____________________________________________________>
class Solution {
    // Function to find maximum circular subarray sum.
    circularSubarraySum(arr) {
        // code here
        const n= arr.length;
        // Step 1: Helper function to find maximum subarray sum using Kadane's Algorithm
        const kadane = (nums) => {
            let maxEndingHere = nums[0];
            let maxSoFar = nums[0];
            for (let i = 1; i < nums.length; i++) {
                maxEndingHere = Math.max(nums[i], maxEndingHere + nums[i]);
                maxSoFar = Math.max(maxSoFar, maxEndingHere);
            }
            return maxSoFar;
        };

        // Step 2: Calculate the maximum subarray sum without wrapping
        const maxKadane = kadane(arr);

        // Step 3: Calculate the total sum of the array
        const totalSum = arr.reduce((sum, num) => sum + num, 0);

        // Step 4: Calculate the minimum subarray sum
        const invertedArr = arr.map(num => -num); // Invert the array
        const minKadane = kadane(invertedArr); // Minimum subarray sum = -Kadane of inverted array
        const maxWrap = totalSum + minKadane; // Maximum sum with wrapping

        // Step 5: Handle edge case where all numbers are negative
        if (maxWrap === 0) {
            return maxKadane;
        }

        // Step 6: Return the maximum of the two cases
        return Math.max(maxKadane, maxWrap);
    }
}









// Compilation Completed
For Input: 
8 -8 9 -9 10 -11 12
Your Output: 
22
Expected Output: 
22