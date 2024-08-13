// 20.) Given an integer n, find the square root of n. If n is not a perfect square, then return the floor value.

// Floor value of any number is the greatest Integer which is less than or equal to that number

// Examples:

// Input: n = 5
// Output: 2
// Explanation: Since, 5 is not a perfect square, floor of square_root of 5 is 2.
// Input: n = 4
// Output: 2
// Explanation: Since, 4 is a perfect square, so its square root is 2.
// Expected Time Complexity: O(logn)
// Expected Auxiliary Space: O(1)

// Constraints:
// 1 ≤ n ≤ 107


// <___________________________________________________SOLUTION__________________________________________________________>
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
        let n = parseInt(readLine());
        let obj = new Solution();
        console.log(obj.floorSqrt(n));
    }
}
// } Driver Code Ends


// User function Template for javascript

/**
 * @param {number} N
 * @returns {number}
 */

// <______________________________________________MAIN-SOLUTION__________________________________________________________>

class Solution {

    floorSqrt(n) {
        // your code here
        if (n === 0 || n === 1) return n; // Base cases

        let start = 1, end = n, ans;

        while (start <= end) {
            let mid = Math.floor((start + end) / 2);

            // If n is a perfect square
            if (mid * mid === n) return mid;

            // If mid*mid is less than n
            if (mid * mid < n) {
                start = mid + 1;
                ans = mid;
            } else {
                // If mid*mid is more than n
                end = mid - 1;
            }
        }

        return ans;
    }
}



//Compilation Completed
//For Input: 5
// Your Output: 2
// Expected Output: 2