// 120.) Given a positive integer k and an array arr[] denoting heights of towers, you have to modify the height of 
//       each tower either by increasing or decreasing them by k only once. Find out what could be the possible 
//       minimum difference of the height of shortest and longest towers after you have modified each tower.

// Note: A slight modification of the problem can be found here. 

// Examples:

// Input: k = 2, arr[] = [1, 5, 8, 10]
// Output: 5
// Explanation: The array can be modified as [3, 3, 6, 8]. The difference between the largest and the smallest 
//              is 8 - 3 = 5.
// Input: k = 3, arr[] = [3, 9, 12, 16, 20]
// Output: 11
// Explanation: The array can be modified as [6, 12, 9, 13, 17]. The difference between the largest and the 
//              smallest is 17 - 6 = 11. 
// Constraints
// 1 ≤ k ≤ 104
// 1 ≤ number of towers ≤ 105
// 0 ≤ arr[i] ≤ 105
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
        let k = parseInt(readLine());
        let arr = readLine().trim().split(" ").map((x) => parseInt(x));
        let n = arr.length;
        let obj = new Solution();
        let res = obj.getMinDiff(k, arr);
        console.log(res);
        console.log("~");
    }
}
// } Driver Code Ends


// User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */


// <___________________________________________________MAIN-SOLUTION_____________________________________________________>
class Solution {
    getMinDiff(k, arr) {
        // code here
         let n = arr.length;

        if (n === 1) return 0; // Only one tower, no difference

        // Sort the array to facilitate comparison
        arr.sort((a, b) => a - b);

        // Initial difference between the highest and lowest tower without modification
        let minDiff = arr[n - 1] - arr[0];

        // Iterate to calculate minDiff considering each tower as a potential split point
        for (let i = 1; i < n; i++) {
            // Current minimum and maximum heights after modifying towers
            let minHeight = Math.min(arr[0] + k, arr[i] - k);
            let maxHeight = Math.max(arr[n - 1] - k, arr[i - 1] + k);

            // Update the minimum difference
            minDiff = Math.min(minDiff, maxHeight - minHeight);
        }

        return minDiff;
    }
}


// Compilation Completed
For Input: 
2
1 5 8 10
Your Output: 
5
Expected Output: 
5