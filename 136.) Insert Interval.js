// 136.) Geek has an array of non-overlapping intervals intervals where intervals[i] = [starti, endi] 
//       represent the start and the end of the ith event and intervals is sorted in ascending order 
//       by starti. He wants to add a new interval newInterval= [newStart, newEnd] where newStart and 
//       newEnd represent the start and end of this interval.

//       Help Geek to insert newInterval into intervals such that intervals is still sorted in ascending order 
//       by starti and intervals still does not have any overlapping intervals (merge overlapping intervals if 
//       necessary).

// Examples:

// Input: intervals = [[1,3], [4,5], [6,7], [8,10]], newInterval = [5,6]
// Output: [[1,3], [4,7], [8,10]]
// Explanation: The newInterval [5,6] overlaps with [4,5] and [6,7].
// Input: intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,9]
// Output: [[1,2], [3,10], [12,16]]
// Explanation: The new interval [4,9] overlaps with [3,5],[6,7],[8,10].
// Constraints:
// 1 ≤ intervals.size() ≤  105
// 0 ≤ start[i], end[i] ≤ 109
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
        let h = readLine().split(' ').map(x => parseInt(x));
        let obj = new Solution();
        let ans = obj.insertInterval(arr, h);
        process.stdout.write("[");

        for (let i = 0; i < ans.length; i++) {
            process.stdout.write("[");
            process.stdout.write(ans[i][0] + "," + ans[i][1]);
            process.stdout.write("]");

            if (i !== ans.length - 1) {
                process.stdout.write(",");
            }
        }

        console.log("]");
        console.log("~");
    }
}
// } Driver Code Ends
// <___________________________________________________MAIN-SOLUTION_____________________________________________________>
class Solution {
    insertInterval(intervals, newInterval) {
        // Your code here
const result = [];
        let i = 0;
        const n = intervals.length;
        const [newStart, newEnd] = newInterval;

        // Step 1: Add all intervals that come before the new interval
        while (i < n && intervals[i][1] < newStart) {
            result.push(intervals[i]);
            i++;
        }

        // Step 2: Merge overlapping intervals
        let start = newStart;
        let end = newEnd;

        while (i < n && intervals[i][0] <= end) {
            start = Math.min(start, intervals[i][0]);
            end = Math.max(end, intervals[i][1]);
            i++;
        }
        result.push([start, end]);

        // Step 3: Add all intervals that come after the new interval
        while (i < n) {
            result.push(intervals[i]);
            i++;
        }

        return result;
    }
}


// Compilation Completed
For Input: 
3
1 3
10 15
20 30
5 6
Your Output: 
[[1,3],[5,6],[10,15],[20,30]]
Expected Output: 
[[1,3],[5,6],[10,15],[20,30]]