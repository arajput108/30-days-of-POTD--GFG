// 79.) Given an array of integers arr, the task is to find and return the maximum sum of the smallest and second 
//      smallest element among all possible subarrays of size greater than one. If it is not possible, then return -1.

// Examples:

// Input: arr = [4, 3, 1, 5, 6]
// Output: 11
// Explanation: Subarrays with smallest and second smallest are,
// Subarray: [4, 3], smallest = 3, second smallest = 4, sum = 7
// Subarray: [4, 3, 1], smallest = 1, second smallest = 3, sum = 4
// Subarray: [4, 3, 1, 5], smallest = 1, second smallest = 3, sum = 4
// Subarray: [4, 3, 1, 5, 6], smallest = 1, second smallest = 3, sum = 4
// Subarray: [3, 1], smallest = 1, second smallest = 3, sum = 4
// Subarray: [3, 1, 5], smallest = 1, second smallest = 3, sum = 4
// Subarray: [3, 1, 5, 6], smallest = 1, second smallest = 3, sum = 4
// Subarray: [1, 5], smallest = 1, second smallest = 5, sum = 6
// Subarray: [1, 5, 6] ,smallest = 1, second smallest = 5, sum = 6
// Subarray: [5, 6], smallest = 5, second smallest = 6, sum = 11
// Maximum sum among all above choices is, 5 + 6 = 11, hence the answer is 11.
// Input: arr = [1]
// Output: -1
// Explanation: Here the size of array is 1, but we need minimum 2 elements. Hence, the answer is -1.
// Expected Time Complexity: O(n)
// Expected Space Complexity: O(1)

// Constraints:
// 1<=arr.size()<=105 
// 1<=arr[i]<=105

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
        let input_line = readLine().split(' ');
        let n = input_line.length;
        let arr = [];
        for (let i = 0; i < n; i++) {
            arr.push(parseInt(input_line[i]));
        }
        let obj = new Solution();
        let res = obj.pairWithMaxSum(arr);
        console.log(res);
    }
}

// } Driver Code Ends


// User function Template for javascript
/**
 * @param {number[]} arr
 * @returns {number[]}
 */


// <___________________________________________MAIN-SOLUTION______________________________________________>   
class Solution {
    // Function to pair with max sum in the array.
    pairWithMaxSum(arr) {
        // your code here
         let n = arr.length;

        // If there are fewer than 2 elements, return -1.
        if (n < 2) return -1;

        let maxSum = -1; // Initialize max sum to -1

        // Traverse the array and check adjacent pairs
        for (let i = 0; i < n - 1; i++) {
            // Get the smaller and larger values in the adjacent pair
            let first = Math.min(arr[i], arr[i+1]);
            let second = Math.max(arr[i], arr[i+1]);

            // Calculate their sum
            let currentSum = first + second;

            // Update maxSum if current sum is greater
            if (currentSum > maxSum) {
                maxSum = currentSum;
            }
        }

        return maxSum;
    }
}

// Compilation Completed

For Input:  4 3 1 5 6
Your Output:  11
Expected Output: 11