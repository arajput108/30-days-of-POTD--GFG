// 104.) Given an array, arr[], determine if arr can be split into three consecutive parts such that the sum of each part is equal. If possible, return any index pair(i, j) in an array such that sum(arr[0..i]) = sum(arr[i+1..j]) = sum(arr[j+1..n-1]), otherwise return an array {-1,-1}.

// Note: Driver code will print true if arr can be split into three equal sum subarrays, otherwise, it is false.

// Examples :

// Input:  arr[] = [1, 3, 4, 0, 4]
// Output: true
// Explanation: [1, 2] is valid pair as sum of subarray arr[0..1] is equal to sum of subarray arr[2..3] and also to sum of subarray arr[4..4]. The sum is 4. 
// Input: arr[] = [2, 3, 4]
// Output: false
// Explanation: No three subarrays exist which have equal sum.
// Input: arr[] = [0, 1, 1]
// Output: false
// Constraints:
// 3 ≤ arr.size() ≤ 106
// 0 ≤ arr[i] ≤ 106
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

/* Function to print an array */
function printArray(arr, size) {
    let i;
    let s = '';
    for (i = 0; i < size; i++) {
        s += arr[i] + " ";
    }
    console.log(s);
}

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for (; i < t; i++) {
        let input1 = readLine().split(' ').map(x => parseInt(x));
        let n = input1.length;
        let arr = new Array(n);
        for (let i = 0; i < n; i++) {
            arr[i] = input1[i];
        }
        let obj = new Solution();
        let res = obj.findSplit(arr);
        if (res[0] === -1 && res[1] === -1)
            console.log("false");
        else
            console.log("true");
        console.log("~");
    }
}
// } Driver Code Ends


// User function Template for Javascript
/**
 * @param {number[]} arr
 * @returns {boolean}
 */


// <___________________________________________________MAIN-SOLUTION_____________________________________________________>
class Solution {
    // Function to determine if array arr can be split into three equal sum sets.
    findSplit(arr) {
        // code here
         const totalSum = arr.reduce((acc, num) => acc + num, 0);
        
        // If the total sum is not divisible by 3, return [-1, -1]
        if (totalSum % 3 !== 0) return [-1, -1];
        
        const targetSum = totalSum / 3;
        let currentSum = 0;
        let foundFirst = false;
        let i = -1, j = -1;

        // Find the first part
        for (let k = 0; k < arr.length; k++) {
            currentSum += arr[k];
            if (currentSum === targetSum) {
                i = k;
                foundFirst = true;
                break;
            }
        }

        // Reset current sum and find the second part after `i`
        if (foundFirst) {
            currentSum = 0;
            for (let k = i + 1; k < arr.length; k++) {
                currentSum += arr[k];
                if (currentSum === targetSum) {
                    j = k;
                    break;
                }
            }
        }

        // If both `i` and `j` found, check the sum of the third part
        if (i !== -1 && j !== -1 && j < arr.length - 1) {
            const thirdPartSum = arr.slice(j + 1).reduce((acc, num) => acc + num, 0);
            if (thirdPartSum === targetSum) {
                return [i, j];
            }
        }

        return [-1, -1];
    }
}



// Compilation Completed
For Input:  1 3 4 0 4
Your Output:  true
Expected Output: true