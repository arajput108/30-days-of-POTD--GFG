109.) Given an array arr[][] such that arr[i][0] is the starting time of ith meeting and arr[i][1] is the ending 
      time of ith meeting, the task is to check if it is possible for a person to attend all the meetings such 
      that he can attend only one meeting at a particular time.

Note: A person can attend a meeting if its starting time is greater than or equal to the previous meeting's 
ending time time.

Examples:

Input: arr[][] = [[1, 4], [10, 15], [7, 10]]
Output: true
Explanation: Since all the meetings are held at different times, it is possible to attend all the meetings.
Input: arr[][] = [[2, 4], [9, 12], [6, 10]]
Output: false
Explanation: It is not possible to attend the second and third meetings simultaneously.
Constraints:
1 ≤ start.size() ≤ 105
0 ≤ start[i] < end[i] ≤ 2*106
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
        let n = parseInt(readLine().trim());
        let arr = new Array(n);

        for (let i = 0; i < n; i++) {
            let temp = readLine().split(' ').map(x => parseInt(x));
            arr[i] = [ temp[0], temp[1] ];
        }
        let obj = new Solution();
        let ans = obj.canAttend(arr);
        if (ans)
            console.log("true");
        else
            console.log("false");
    }
}
// } Driver Code Ends

// <___________________________________________________MAIN-SOLUTION_____________________________________________________>
class Solution {
    canAttend(arr) {
        // Your Code Here
        // Sort meetings by start time
        arr.sort((a, b) => a[0] - b[0]);

        // Check for any overlapping meetings
        for (let i = 1; i < arr.length; i++) {
            if (arr[i][0] < arr[i - 1][1]) {
                return false; // Overlap found
            }
        }
        
        return true; // No overlaps found
    }
}


// Compilation Completed
For Input: 
3
1 4
10 15
7 10
Your Output: 
true
Expected Output: 
true
