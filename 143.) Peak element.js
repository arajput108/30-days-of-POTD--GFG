// 143.) Given an array arr[] where no two adjacent elements are same, find the index of a peak element. An element is considered to be a peak if it is greater than its adjacent elements (if they exist). If there are multiple peak elements, return index of any one of them. The output will be "true" if the index returned by your function is correct; otherwise, it will be "false".

// Note: Consider the element before the first element and the element after the last element to be negative infinity.

// Examples :

// Input: arr = [1, 2, 4, 5, 7, 8, 3]
// Output: true
// Explanation: arr[5] = 8 is a peak element because arr[4] < arr[5] > arr[6].
// Input: arr = [10, 20, 15, 2, 23, 90, 80]
// Output: true
// Explanation: arr[1] = 20 and arr[5] = 90 are peak elements because arr[0] < arr[1] > arr[2] and arr[4] < arr[5] > arr[6]. 
// Input: arr = [1, 2, 3]
// Output: true
// Explanation: arr[2] is a peak element because arr[1] < arr[2] and arr[2] is the last element, so it has negative infinity to its right.
// Constraints:
// 1 ≤ arr.size() ≤ 106
// -231 ≤ arr[i] ≤ 231 - 1
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
        let a = new Array();
        let input_ar1 = readLine().split(' ').map(x => parseInt(x));
        for (let i = 0; i < input_ar1.length; i++) a.push(input_ar1[i]);
        let obj = new Solution();
        let idx = obj.peakElement(a);
        let n = a.length;
        let f = 0;
        if (n == 1)
            f = 1;
        else if (idx == 0 && a[0] >= a[1])
            f = 1;
        else if (idx == n - 1 && a[n - 1] > a[n - 2])
            f = 1;
        else if (idx > 0 && idx < n - 1 && a[idx] > a[idx + 1] && a[idx] > a[idx - 1])
            f = 1;
        else
            f = 0;
        if (f)
            console.log("true");
        else
            console.log("false");
        console.log("~");
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
    peakElement(arr) {
        // Code here
                const n = arr.length;

        for (let i = 0; i < n; i++) {
            // Check if the current element is a peak
            if ((i === 0 || arr[i] > arr[i - 1]) && (i === n - 1 || arr[i] > arr[i + 1])) {
                return i;
            }
        }

        // Return -1 in case no peak is found (shouldn't happen as per problem constraints)
        return -1;
    }
}



// Compilation Completed
For Input: 
1 2 4 5 7 8 3
Your Output: 
true
Expected Output: 
true