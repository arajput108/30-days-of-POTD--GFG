// 147.) Given a sorted array of distinct positive integers arr[], we need to find the kth positive number that 
//       is missing from arr[].  

// Examples :

// Input: arr[] = [2, 3, 4, 7, 11], k = 5
// Output: 9
// Explanation: Missing are 1, 5, 6, 8, 9, 10… and 5th missing number is 9.
// Input: arr[] = [1, 2, 3], k = 2
// Output: 5
// Explanation: Missing are 4, 5, 6… and 2nd missing number is 5.
// Input: arr[] = [3, 5, 9, 10, 11, 12], k = 2
// Output: 2
// Explanation: Missing are 1, 2, 4, 6… and 2nd missing number is 2.
// Constraints:
// 1 <= arr.size() <= 105
// 1 <= k <= 105
// 1 <= arr[i]<= 106
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

function printArray(res, n) {

    for (let i = 0; i < n; i++) {
        let s = "";
        for (let j = 0; j < res[i].length; j++) {
            s += res[i][j];
            s += " ";
        }
        console.log(s);
    }
}

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for (; i < t; i++) {
        let arr = readLine().split(' ').map(x => parseInt(x));

        let input_ar1 = readLine().split(' ').map(x => parseInt(x));
        let k = input_ar1[0];
        let obj = new Solution();
        let res = obj.kthMissing(arr, k);
        console.log(res);
        console.log("~");
    }
}
// } Driver Code Ends


// User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number} k
 * @returns {number}
 */


// <___________________________________________________MAIN-SOLUTION_____________________________________________________>
class Solution {
    kthMissing(arr, k) {
        // code here
         let left = 0, right = arr.length - 1;

        // Binary search for the position where the missing count >= k
        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            const missingCount = arr[mid] - (mid + 1);

            if (missingCount < k) {
                left = mid + 1; // Move to the right part
            } else {
                right = mid - 1; // Move to the left part
            }
        }

        // After binary search, `left` is the position where k falls
        // Calculate the missing number at this point
        return k + left;
    }
}


// Compilation Completed
For Input: 
2 3 5 6
2
Your Output: 
4
Expected Output: 
4