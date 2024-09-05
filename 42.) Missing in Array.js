// 42.) Given an array arr of size n−1 that contains distinct integers in the range of 1 to n (inclusive), find the 
//      missing element. The array is a permutation of size n with one element missing. Return the missing element.

// Examples:

// Input: n = 5, arr[] = [1,2,3,5]
// Output: 4
// Explanation : All the numbers from 1 to 5 are present except 4.
// Input: n = 2, arr[] = [1]
// Output: 2
// Explanation : All the numbers from 1 to 2 are present except 2.
// Expected Time Complexity: O(n)
// Expected Auxiliary Space: O(1)

// Constraints:
// 1 ≤ n ≤ 105
// 1 ≤ arr[i] ≤ n

// <___________________________________________________SOLUTION_____________________________________________________>

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
        let arr = new Array(n - 1);
        let input_ar1 = readLine().split(' ').map(x => parseInt(x));
        for (let i = 0; i < n - 1; i++) arr[i] = input_ar1[i];
        let obj = new Solution();
        console.log(obj.missingNumber(n, arr));
    }
} // } Driver Code Ends
// } Driver Code Ends


// User function Template for javascript
/**
 * @param {number[]} array
 * @param {number} n
 * @returns {number}
 */


// <___________________________________________________MAIN-SOLUTION_____________________________________________________>
class Solution {

    // Note that the size of the array is n-1
    missingNumber(n, arr) {

        // code here
        // Calculate the sum of first n natural numbers
        const totalSum = (n * (n + 1)) / 2;

        // Calculate the sum of elements in the array
        const arrSum = arr.reduce((acc, num) => acc + num, 0);

        // The missing number is the difference between the two sums
        return totalSum - arrSum;
    }
}



//Compilation Completed
For Input: 
5
1 2 3 5
Your Output: 4
Expected Output: 4