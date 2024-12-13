141.) A sorted array of distinct elements arr[] is rotated at some unknown point, the task is to find 
      the minimum element in it. 

Examples:

Input: arr[] = [5, 6, 1, 2, 3, 4]
Output: 1
Explanation: 1 is the minimum element in the array.
Input: arr[] = [3, 1, 2]
Output: 1
Explanation: Here 1 is the minimum element.
Input: arr[] = [4, 2, 3]
Output: 2
Explanation: Here 2 is the minimum element.
Constraints:
1 ≤ arr.size() ≤ 106
1 ≤ arr[i] ≤ 109
// <______________________________________________SOLUTION___________________________________________________>
//{ Driver Code Starts
'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => { inputString += inputStdin; });

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => string.trim());
    main();
});

function readLine() { return inputString[currentLine++]; }

function main() {
    let t = parseInt(readLine());
    for (let i = 0; i < t; i++) {
        let arr = readLine().trim().split(" ").map(x => parseInt(x));
        let obj = new Solution();
        let res = obj.findMin(arr);
        console.log(res);
        console.log('~');
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
    // Function to find the minimum element in a sorted and rotated array.
    findMin(arr) {
        // your code here
         let left = 0;
        let right = arr.length - 1;

        // Handle the edge case where the array is not rotated (already sorted).
        if (arr[left] <= arr[right]) {
            return arr[left];
        }

        while (left <= right) {
            let mid = Math.floor((left + right) / 2);

            // Check if the mid element is the minimum
            if (mid > 0 && arr[mid] < arr[mid - 1]) {
                return arr[mid];
            }
            // Check if mid+1 is the minimum
            if (mid < arr.length - 1 && arr[mid] > arr[mid + 1]) {
                return arr[mid + 1];
            }

            // Decide which half to search
            if (arr[mid] >= arr[left]) {
                // Left part is sorted, so the minimum must be in the right part
                left = mid + 1;
            } else {
                // Right part is sorted, so the minimum must be in the left part
                right = mid - 1;
            }
        }
        return -1; // This should never be reached for a valid input
    }
}



// Compilation Completed
For Input: 
5 6 1 2 3 4
Your Output: 
1
Expected Output: 
1