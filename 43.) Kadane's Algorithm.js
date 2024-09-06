// 43.) Given an integer array arr[]. Find the contiguous sub-array(containing at least one number) that has the 
//      maximum sum and return its sum.

// Examples:

// Input: arr[] = [1, 2, 3, -2, 5]
// Output: 9
// Explanation: Max subarray sum is 9 of elements (1, 2, 3, -2, 5) which is a contiguous subarray.
// Input: arr[] = [-1, -2, -3, -4]
// Output: -1
// Explanation: Max subarray sum is -1 of element (-1)
// Input: arr[] = [5, 4, 7]
// Output: 16
// Explanation: Max subarray sum is 16 of element (5, 4, 7)
// Expected Time Complexity: O(n)
// Expected Auxiliary Space: O(1)

// Constraints:
// 1 ≤ arr.size() ≤ 105
// -107 ≤ arr[i] ≤ 107

// <_______________________________________________SOLUTION___________________________________________________>
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
         // Initialize variables to track the max sum
        let max_so_far = arr[0];
        let max_ending_here = arr[0];
        
        // Iterate through the array starting from the second element
        for (let i = 1; i < arr.length; i++) {
            // Update max_ending_here
            max_ending_here = Math.max(arr[i], max_ending_here + arr[i]);
            
            // Update max_so_far if needed
            max_so_far = Math.max(max_so_far, max_ending_here);
        }
        
        return max_so_far;
    }
}

// Compilation Completed
For Input: 
1 2 3 -2 5
Your Output: 9
Expected Output: 9