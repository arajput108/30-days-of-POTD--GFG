// 140.) Given a sorted array, arr[] and a number target, you need to find the number of occurrences of 
//       target in arr[]. 

// Examples :

// Input: arr[] = [1, 1, 2, 2, 2, 2, 3], target = 2
// Output: 4
// Explanation: target = 2 occurs 4 times in the given array so the output is 4.
// Input: arr[] = [1, 1, 2, 2, 2, 2, 3], target = 4
// Output: 0
// Explanation: target = 4 is not present in the given array so the output is 0.
// Input: arr[] = [8, 9, 10, 12, 12, 12], target = 12
// Output: 3
// Explanation: target = 12 occurs 3 times in the given array so the output is 3.
// Constraints:
// 1 ≤ arr.size() ≤ 106
// 1 ≤ arr[i] ≤ 106
// 1 ≤ target ≤ 106
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

function printList(res, n) {
    let s = "";
    for (let i = 0; i < n; i++) {
        s += res[i];
        s += " ";
    }
    console.log(s);
}

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for (; i < t; i++) {
        let input_ar1 = readLine().split(' ').map(x => parseInt(x));
        let n = input_ar1.length;
        let arr = new Array(n);
        for (let i = 0; i < n; i++) {
            arr[i] = input_ar1[i];
        }
        let x = parseInt(readLine());
        let obj = new Solution();
        let res = obj.countFreq(arr, x);
        console.log(res);
        console.log("~");
    }
} // } Driver Code Ends

// } Driver Code Ends


// User function Template for javascript
/**
 * @param {number[]} arr
 * @param {number} target
 * @returns {number}
 */


// <___________________________________________________MAIN-SOLUTION_____________________________________________________>
class Solution {
    // Function to count the occurrences of x in the array.
    countFreq(arr, target) {
        // your code here
         const firstOccurrence = this.binarySearch(arr, target, true);
        if (firstOccurrence === -1) {
            // If the element is not found, return 0
            return 0;
        }
        const lastOccurrence = this.binarySearch(arr, target, false);
        return lastOccurrence - firstOccurrence + 1;
    }

    // Helper function for binary search
    binarySearch(arr, target, findFirst) {
        let low = 0, high = arr.length - 1, result = -1;

        while (low <= high) {
            const mid = Math.floor((low + high) / 2);

            if (arr[mid] === target) {
                result = mid;
                // If looking for the first occurrence, move left
                if (findFirst) {
                    high = mid - 1;
                } else {
                    // If looking for the last occurrence, move right
                    low = mid + 1;
                }
            } else if (arr[mid] < target) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }

        return result;
    }
}


// Compilation Completed
For Input: 
1 1 2 2 2 2 3
2
Your Output: 
4
Expected Output: 
4