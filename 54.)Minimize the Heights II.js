// 54.) Given an array arr[] denoting heights of N towers and a positive integer K.

// For each tower, you must perform exactly one of the following operations exactly once.

// Increase the height of the tower by K
// Decrease the height of the tower by K
// Find out the minimum possible difference between the height of the shortest and tallest towers after you have modified each tower.

// You can find a slight modification of the problem here.
// Note: It is compulsory to increase or decrease the height by K for each tower. After the operation, the resultant array should not contain any negative integers.

// Examples :

// Input: k = 2, arr[] = {1, 5, 8, 10}
// Output: 5
// Explanation: The array can be modified as {1+k, 5-k, 8-k, 10-k} = {3, 3, 6, 8}.The difference between the largest and the smallest is 8-3 = 5.
// Input: k = 3, arr[] = {3, 9, 12, 16, 20}
// Output: 11
// Explanation: The array can be modified as {3+k, 9+k, 12-k, 16-k, 20-k} -> {6, 12, 9, 13, 17}.The difference between the largest and the smallest is 17-6 = 11. 
// Expected Time Complexity: O(n*logn)
// Expected Auxiliary Space: O(n)

// Constraints
// 1 ≤ k ≤ 107
// 1 ≤ n ≤ 105
// 1 ≤ arr[i] ≤ 107

// <___________________________________________________SOLUTION__________________________________________________>

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
        let k = parseInt(readLine());
        let arr = readLine().split(' ').map(x => parseInt(x));
        let obj = new Solution();
        console.log(obj.getMinDiff(arr, k));
    }
}
// } Driver Code Ends


// User function Template for javascript
/**
 * @param {number[]} arr
 * @param {number} k
 * @returns {number}
 */


// <________________________________________________MAIN-SOLUTION________________________________________________>
class Solution {
    // Function to get the minimum difference between the heights.
    getMinDiff(arr, k) {
        // your code here
        let n = arr.length;
        if (n === 1) return 0;  // If there's only one tower, no difference to minimize.

        // Step 1: Sort the array
        arr.sort((a, b) => a - b);

        // Step 2: Calculate the initial difference between max and min heights
        let ans = arr[n - 1] - arr[0];  // Initial max difference

        // Step 3: Calculate new heights by increasing the smallest and decreasing the largest
        let smallest = arr[0] + k;
        let largest = arr[n - 1] - k;

        // Step 4: Traverse through the array and calculate the possible minimum difference
        for (let i = 0; i < n - 1; i++) {
            let minHeight = Math.min(smallest, arr[i + 1] - k); // Minimum of modified and next tower decreased
            let maxHeight = Math.max(largest, arr[i] + k);      // Maximum of modified and current tower increased
            
            if (minHeight < 0) continue;  // Skip if any height becomes negative

            ans = Math.min(ans, maxHeight - minHeight);  // Update the minimum difference
        }

        return ans;

    }
}



// Compilation Completed
For Input: 
2
1 5 8 10
Your Output: 5
Expected Output: 5