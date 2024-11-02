98.) Given an array arr[ ] of positive elements. Consider the array as a circular array, meaning the element after the last element 
     is the first element of the array. The task is to find the maximum sum of the absolute differences between consecutive elements 
     with shuffling of array elements allowed i.e. shuffle the array elements and make [a1..an] such order that  
     |a1 – a2| + |a2 – a3| + …… + |an-1 – an| + |an – a1| is maximized.

Examples:

Input: arr[] = [4, 2, 1, 8]
Output: 18
Explanation: After Shuffling, we get [1, 8, 2, 4]. Sum of absolute difference between consecutive elements after rearrangement = |1 - 8| + |8 - 2| + |2 - 4| + |4 - 1| = 7 + 6 + 2 + 3 = 18.
Input: arr[] = [10, 12]
Output: 4
Explanation: No need of rearrangement. Sum of absolute difference between consecutive elements = |10 - 12| + |12 - 10| = 2 + 2 = 4.
Constraints:
2 ≤ arr.size()≤ 105
1 <= arr[i] <= 105
// <------------------------------------------------------SOLUTION--------------------------------------------------------------->
//{ Driver Code Starts
// Initial Template for javascript
// Position this line where user code will be pasted.
// Initial Template for javascript
// Position this line where user code will be pasted.
//  Initial Template for javascript

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

function printList(res) {
    let s = res.join(" ");
    console.log(s);
}

function main() {
    let t = parseInt(readLine());
    for (let i = 0; i < t; i++) {
        let arr = readLine().split(' ').map(x => parseInt(x));
        let obj = new Solution();
        let ans = obj.maxSum(arr);
        console.log(ans);
        console.log("~");
    }
}

// } Driver Code Ends


// User function Template for javascript
/**
 * @param {number[]} arr
 * @param {number} n
 * @returns {void}
 */

// <-------------------------------------------------------MAIN-SOLUTION--------------------------------------------------------------->
class Solution {
    maxSum(arr) {
        // code here
        // Step 1: Sort the array
        arr.sort((a, b) => a - b);
        
        const n = arr.length;
        const rearranged = new Array(n);
        
        // Step 2: Fill the new array in a zigzag manner
        let left = 0; // Start of the sorted array
        let right = n - 1; // End of the sorted array
        
        for (let i = 0; i < n; i++) {
            if (i % 2 === 0) {
                rearranged[i] = arr[right--]; // Pick from the end
            } else {
                rearranged[i] = arr[left++]; // Pick from the start
            }
        }
        
        // Step 3: Calculate the sum of absolute differences
        let maxSum = 0;
        for (let i = 0; i < n; i++) {
            maxSum += Math.abs(rearranged[i] - rearranged[(i + 1) % n]);
        }
        
        return maxSum;
    }
}




// Compilation Completed

For Input:  4 2 1 8
Your Output:  18
Expected Output: 18