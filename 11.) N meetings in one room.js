// 11.) You are given timings of n meetings in the form of (start[i], end[i]) where start[i] is the start time of meeting i and end[i] is the finish time of meeting i. Return the maximum number of meetings that can be accommodated in a single meeting room, when only one meeting can be held in the meeting room at a particular time. 

// Note: The start time of one chosen meeting can't be equal to the end time of the other chosen meeting.

// Examples :

// Input: n = 6, start[] = [1, 3, 0, 5, 8, 5], end[] =  [2, 4, 6, 7, 9, 9]
// Output: 4
// Explanation: Maximum four meetings can be held with given start and end timings. The meetings are - (1, 2), (3, 4), (5,7) and (8,9)
// Input: n = 3, start[] = [10, 12, 20], end[] = [20, 25, 30]
// Output: 1
// Explanation: Only one meetings can be held with given start and end timings.
// Expected Time Complexity: O(n*logn)
// Expected Auxilliary Space: O(n)

// Constraints:
// 1 ≤ n ≤ 105
// 0 ≤ start[i] < end[i] ≤ 106

// <_______________________________________________SOLUTION______________________________________________________________>
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
        let start = new Array(n);
        let end = new Array(n);
        let input_ar1 = readLine().split(' ').map(x => parseInt(x));
        for (let i = 0; i < n; i++) start[i] = input_ar1[i];
        let input_ar2 = readLine().split(' ').map(x => parseInt(x));
        for (let i = 0; i < n; i++) end[i] = input_ar2[i];
        let obj = new Solution();
        console.log(obj.maxMeetings(n, start, end));
    }
}
// } Driver Code Ends


// User function Template for javascript

/**
 * @param {number} n
 * @param {number[]} start
 * @param {number[]} end
 * @returns {number}
 */


// <______________________________________________MAIN-SOLUTION__________________________________________________________>
class Solution {
    // Function to find the maximum number of meetings that can
    // be performed in a meeting room.
    maxMeetings(n, start, end) {
        // code here
        let meetings = [];
        for (let i = 0; i < n; i++) {
            meetings.push([start[i], end[i]]);
        }

        // Sort meetings by their end times.
        meetings.sort((a, b) => a[1] - b[1]);

        // Initialize the count of meetings.
        let count = 0;
        // Initialize the end time of the last selected meeting.
        let lastEndTime = 0;

        // Iterate through the sorted meetings.
        for (let i = 0; i < n; i++) {
            // If the start time of the current meeting is greater than
            // the end time of the last selected meeting, include this meeting.
            if (meetings[i][0] > lastEndTime) {
                count++;
                // Update the end time of the last selected meeting.
                lastEndTime = meetings[i][1];
            }
        }

        // Return the count of meetings that can be accommodated.
        return count;
    }
}
// Completed
For Input: 6
1 3 0 5 8 5
2 4 6 7 9 9

Your Output: 4
Expected Output: 4