142.) Given a sorted and rotated array arr[] of distinct elements, the task is to find the index of a 
      target key. Return -1 if the key is not found.

Examples :

Input: arr[] = [5, 6, 7, 8, 9, 10, 1, 2, 3], key = 3
Output: 8
Explanation: 3 is found at index 8.
Input: arr[] = [3, 5, 1, 2], key = 6
Output: -1
Explanation: There is no element that has value 6.
Input: arr[] = [33, 42, 72, 99], key = 42
Output: 1
Explanation: 42 is found at index 1.
Constraints:
1 ≤ arr.size() ≤ 106
0 ≤ arr[i] ≤ 106
1 ≤ key ≤ 106
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
        // let n = parseInt(readLine());
        let A = readLine().trim().split(" ").map((x) => parseInt(x));
        let key = parseInt(readLine());
        let obj = new Solution();
        let res = obj.search(A, key);
        console.log(res);
        console.log("~");
    }
}

// } Driver Code Ends


// User function Template for javascript

/**

 * @param {number[]} arr
 * @param {number} key
 * @return {number}
 */

// <___________________________________________________MAIN-SOLUTION_____________________________________________________>
class Solution {
    search(arr, key) {
        // code here
        let left = 0, right = arr.length - 1;

        while (left <= right) {
            const mid = Math.floor((left + right) / 2);

            // Check if mid is the target
            if (arr[mid] === key) return mid;

            // Check if the left half is sorted
            if (arr[left] <= arr[mid]) {
                // Check if the key lies in the sorted left half
                if (key >= arr[left] && key < arr[mid]) {
                    right = mid - 1; // Focus on the left half
                } else {
                    left = mid + 1; // Focus on the right half
                }
            } 
            // Else the right half must be sorted
            else {
                // Check if the key lies in the sorted right half
                if (key > arr[mid] && key <= arr[right]) {
                    left = mid + 1; // Focus on the right half
                } else {
                    right = mid - 1; // Focus on the left half
                }
            }
        }

        // If we exit the loop, the key was not found
        return -1;
    }
}





// Compilation Completed
For Input: 
5 6 7 8 9 10 1 2 3
10
Your Output: 
5
Expected Output: 
5