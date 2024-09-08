// 45.) Given an array arr[] of non-negative integers. Each array element represents the maximum length of the 
//     jumps that can be made forward from that element. This means if arr[i] = x, then we can jump any distance
//     y such that y ≤ x.
//     Find the minimum number of jumps to reach the end of the array starting from the first element. 
//     If an element is 0, then you cannot move through that element.
// Note:  Return -1 if you can't reach the end of the array.

// Examples : 

// Input: arr[] = {1, 3, 5, 8, 9, 2, 6, 7, 6, 8, 9}
// Output: 3 
// Explanation:First jump from 1st element to 2nd element with value 3. From here we jump to 5th element with value 9, and from here we will jump to the last. 
// Input: arr = {1, 4, 3, 2, 6, 7}
// Output: 2 
// Explanation: First we jump from the 1st to 2nd element and then jump to the last element.
// Input: arr = {0, 10, 20}
// Output: -1
// Explanation: We cannot go anywhere from the 1st element.
// Expected Time Complexity: O(n)
// Expected Space Complexity: O(1)

// Constraints:
// 0 ≤ arr[i] ≤ 105
// 2 ≤ arr.size() ≤ 106

// <_______________________________________________SOLUTION___________________________________________________>
//{ Driver Code Starts
// Initial Template for javascript

"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => { inputString += inputStdin; });

process.stdin.on("end", (_) => {
    inputString =
        inputString.trim().split("\n").map((string) => { return string.trim(); });

    main();
});

function readLine() { return inputString[currentLine++]; }

/* Function to print an array */
function printArray(arr, size) {
    let i;
    let s = "";
    for (i = 0; i < size; i++) {
        s += arr[i] + " ";
    }
    console.log(s);
}

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for (; i < t; i++) {
        // let n = parseInt(readLine());
        // let arr = new Array(n);
        let arr = readLine().split(" ").map((x) => parseInt(x));
        // for (let j = 0; j < n; j++) {
        //     arr[j] = inputArr2[j];
        // }
        let obj = new Solution();
        let res = obj.minJumps(arr);
        console.log(res);
    }
}
// } Driver Code Ends


// User function Template for javascript

/**
 * @param {number[]} arr
 * @return {number}
 */


// <___________________________________________________MAIN-SOLUTION_____________________________________________________>
class Solution {
    minJumps(arr) {
        // code here
        // If the array has only one element, no jumps are needed
        if (arr.length <= 1) {
            return 0;
        }

        // If the first element is 0, we can't move anywhere
        if (arr[0] === 0) {
            return -1;
        }

        // Initialize variables
        let jumps = 1;  // At least one jump is needed
        let maxReach = arr[0];  // The maximum index we can reach with the current jump
        let steps = arr[0];  // The steps we can still take within the current jump

        for (let i = 1; i < arr.length; i++) {
            // If we have reached the end of the array
            if (i === arr.length - 1) {
                return jumps;
            }

            // Update maxReach
            maxReach = Math.max(maxReach, i + arr[i]);

            // Use a step to get to the current index
            steps--;

            // If no steps are left, we need to make another jump
            if (steps === 0) {
                jumps++;

                // If the current index is beyond the maximum reachable index, return -1
                if (i >= maxReach) {
                    return -1;
                }

                // Reinitialize the steps to the number of steps we can take from the current index
                steps = maxReach - i;
            }
        }

        return -1;
    }
}



// Compilation Completed
For Input: 
1 3 5 8 9 2 6 7 6 8 9
Your Output: 3
Expected Output: 3