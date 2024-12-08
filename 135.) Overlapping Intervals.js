135.) Given an array of Intervals arr[][], where arr[i] = [starti, endi]. The task is to merge all of the overlapping Intervals.

Examples:

Input: arr[][] = [[1,3],[2,4],[6,8],[9,10]]
Output: [[1,4], [6,8], [9,10]]
Explanation: In the given intervals we have only two overlapping intervals here, [1,3] and [2,4] which on merging will become [1,4]. Therefore we will return [[1,4], [6,8], [9,10]].
Input: arr[][] = [[6,8],[1,9],[2,4],[4,7]]
Output: [[1,9]]
Explanation: In the given intervals all the intervals overlap with the interval [1,9]. Therefore we will return [1,9].
Constraints:
1 ≤ arr.size() ≤ 105
0 ≤ starti ≤ endi ≤ 105
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
        let res = obj.mergeOverlap(arr);
        let s = "";
        for (let i = 0; i < res.length; i++) {
            for (let j = 0; j < res[i].length; j++) {
                s += res[i][j] + " ";
            }
        }
        console.log(s);
    }
}
// } Driver Code Ends


// User function Template for javascript
/**
 * @param {number[][]} arr
 * @returns {number[][]}
 */



// <___________________________________________________MAIN-SOLUTION_____________________________________________________>
class Solution {
    // Function to Merge overlapping arr.
    mergeOverlap(arr) {
        // your code here
         if (arr.length <= 1) {
            return arr; // No merging needed for 0 or 1 interval.
        }

        // Step 1: Sort intervals based on the starting time
        arr.sort((a, b) => a[0] - b[0]);

        const merged = [];
        let currentInterval = arr[0]; // Start with the first interval

        // Step 2: Traverse the intervals and merge
        for (let i = 1; i < arr.length; i++) {
            const nextInterval = arr[i];

            // If intervals overlap, merge them
            if (currentInterval[1] >= nextInterval[0]) {
                currentInterval[1] = Math.max(currentInterval[1], nextInterval[1]);
            } else {
                // If intervals don't overlap, push the current interval and move to the next one
                merged.push(currentInterval);
                currentInterval = nextInterval;
            }
        }

        // Push the last interval
        merged.push(currentInterval);

        return merged;
    }
}



// Compilation Completed
For Input: 
4
1 3
2 4
6 8
9 10
Your Output: 
1 4 6 8 9 10
Expected Output: 
1 4 6 8 9 10
