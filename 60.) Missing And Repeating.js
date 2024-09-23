// 60.) Given an unsorted array arr of of positive integers. One number 'A' from set {1, 2,....,n} is 
//      missing and one number 'B' occurs twice in array. Find numbers A and B.

// Examples

// Input: arr[] = [2, 2]
// Output: 2 1
// Explanation: Repeating number is 2 and smallest positive missing number is 1.
// Input: arr[] = [1, 3, 3] 
// Output: 3 2
// Explanation: Repeating number is 3 and smallest positive missing number is 2.
// Expected Time Complexity: O(n)
// Expected Auxiliary Space: O(1)

// Constraints:
// 2 ≤ n ≤ 105
// 1 ≤ arr[i] ≤ n

// <_______________________________________________SOLUTION___________________________________________________>

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
        let n = parseInt(readLine());
        let arr = new Array(n);
        let input_ar1 = readLine().split(' ').map(x => parseInt(x));
        for (let i = 0; i < n; i++) {
            arr[i] = input_ar1[i];
        }
        let obj = new Solution();
        let res = obj.findTwoElement(arr);
        printList(res, res.length);
    }
} // } Driver Code Ends

// } Driver Code Ends


// User function Template for javascript
/**
 * @param {number[]} arr
 * @returns {number[]}
 */


// <_____________________________________________MAIN-SOLUTION______________________________________________>   
class Solution {
    // Function to find two repeating elements in an array of size n.
    findTwoElement(arr) {
        // your code here
         let n = arr.length;
        let repeating = -1, missing = -1;

        // Step 1: Mark the repeating element
        for (let i = 0; i < n; i++) {
            let absValue = Math.abs(arr[i]);
            
            // If the value at index absValue-1 is already negative, it's repeating
            if (arr[absValue - 1] < 0) {
                repeating = absValue;
            } else {
                // Mark the value as visited by making it negative
                arr[absValue - 1] = -arr[absValue - 1];
            }
        }

        // Step 2: Find the missing element
        for (let i = 0; i < n; i++) {
            // The index with a positive value means i+1 is missing
            if (arr[i] > 0) {
                missing = i + 1;
            }
        }

        return [repeating, missing];
    }
}




// Compilation Completed
For Input: 
2
2 2
Your Output: 2 1
Expected Output: 2 1