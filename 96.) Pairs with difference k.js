// 96.) Given an array arr[] of positive integers. Find the number of pairs of integers whose difference equals 
//      a given number k.
//      Note: (a, b) and (b, a) are considered the same. Also, the same numbers at different indices are considered different.

// Examples:

// Input: arr[] = [1, 5, 3, 4, 2], k = 3
// Output: 2
// Explanation: There are 2 pairs with difference 3,the pairs are {1, 4} and {5, 2} 
// Input: arr[] = [8, 12, 16, 4, 0, 20], k = 4
// Output: 5
// Explanation: There are 5 pairs with difference 4, the pairs are {0, 4}, {4, 8}, {8, 12}, {12, 16} and {16, 20}.
// Constraints:
// 1 <= arr.size() <= 106
// 1 <= k <= 106
// 1 <= arri <= 106
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
    let tc = parseInt(readLine());
    while (tc > 0) {
        let arr = readLine().split(' ').map(Number);
        let k = parseInt(readLine());

        let obj = new Solution();
        let res = obj.countPairsWithDiffK(arr, k);
        if (res === -0) {
            res = 0;
        }
        console.log(res.toString());
        console.log("~");
        tc--;
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
    countPairsWithDiffK(arr, k) {
        // code here
                const frequency = new Map();
        let count = 0;

        // Populate the frequency map
        for (let num of arr) {
            frequency.set(num, (frequency.get(num) || 0) + 1);
        }

        for (let num of frequency.keys()) {
            // Check if there exists a pair with the difference `k`
            if (k > 0 && frequency.has(num + k)) {
                count += frequency.get(num) * frequency.get(num + k);
            } else if (k === 0 && frequency.get(num) > 1) {
                // Special case for k = 0, count pairs of identical elements
                count += (frequency.get(num) * (frequency.get(num) - 1)) / 2;
            }
        }

        return count;
    }
}




// Compilation Completed
For Input: 
1 5 3 4 2
3
Your Output: 2
Expected Output:  2