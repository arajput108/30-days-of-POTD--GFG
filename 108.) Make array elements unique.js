108.) Given an array arr[ ], your task is to find the minimum number of increment operations required to make 
      all the elements of the array unique. i.e.- no value in the array should occur more than once. In one 
      operation, a value can be incremented by 1 only.

Examples :

Input: arr[] = [1, 2, 2]
Output: 1
Explanation: If we increase arr[2] by 1 then the resulting array becomes {1, 2, 3} and has all unique values.Hence, 
the answer is 1 in this case.
Input: arr[] = [1, 1, 2, 3]
Output: 3
Explanation: If we increase arr[0] by 3, then all array elements will be unique. Hence, the answer is 3 in this case.
Input: arr[] = [5, 4, 3, 2, 1]
Output: 0
Explanation: All elements are unique.
Constraints:
1 ≤ arr.size() ≤ 106
0 ≤ arr[i] ≤ 106
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
        let arr = readLine().split(' ').map(x => parseInt(x));
        let obj = new Solution();
        let res = obj.minIncrements(arr);
        console.log(res);
    }
} // } Driver Code Ends

// } Driver Code Ends


// User function Template for javascript
/**
 * @param {number[]} arr
 * @returns {number}
 */
// <___________________________________________________MAIN-SOLUTION_____________________________________________________>
class Solution {
    // Function to find minimum number of increments/decrements required.
    minIncrements(arr) {
        // your code here
         arr.sort((a, b) => a - b);  // Sort the array in ascending order
        let increments = 0;

        for (let i = 1; i < arr.length; i++) {
            if (arr[i] <= arr[i - 1]) {  // Check if the current element is not unique
                increments += (arr[i - 1] + 1 - arr[i]);  // Calculate increments needed
                arr[i] = arr[i - 1] + 1;  // Make the current element unique
            }
        }
        
        return increments;
    }
}


// Compilation Completed
For Input: 
1 2 2
Your Output: 
1
Expected Output: 
1