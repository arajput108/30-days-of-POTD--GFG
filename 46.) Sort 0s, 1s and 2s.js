// 46.) Given an array arr containing only 0s, 1s, and 2s. Sort the array in ascending order.

// Examples:

// Input: arr[]= [0, 2, 1, 2, 0]
// Output: 0 0 1 2 2
// Explanation: 0s 1s and 2s are segregated into ascending order.
// Input: arr[] = [0, 1, 0]
// Output: 0 0 1
// Explanation: 0s 1s and 2s are segregated into ascending order.
// Expected Time Complexity: O(n)
// Expected Auxiliary Space: O(1)

// Constraints:
// 1 <= arr.size() <= 106
// 0 <= arr[i] <= 2



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

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for (; i < t; i++) {
        let arr = readLine().trim().split(" ").map((x) => parseInt(x));
        let obj = new Solution();
        obj.sort012(arr);
        let S = "";
        for (let j = 0; j < arr.length; j++) {
            S += arr[j];
            S += " "
        }
        console.log(S);
    }
}

// } Driver Code Ends


// User function Template for javascript
/**
 * @param {number[]} a
 * @returns {void}
 */


// <___________________________________________________MAIN-SOLUTION_____________________________________________________>
class Solution {
    // Function to sort an array of 0s, 1s, and 2s
    sort012(arr) {
        // your code here
        let low = 0, mid = 0, high = arr.length - 1;
        
        while (mid <= high) {
            switch (arr[mid]) {
                case 0:
                    // Swap arr[low] and arr[mid], increment both low and mid
                    [arr[low], arr[mid]] = [arr[mid], arr[low]];
                    low++;
                    mid++;
                    break;
                case 1:
                    // No need to swap, just move to the next element
                    mid++;
                    break;
                case 2:
                    // Swap arr[mid] and arr[high], decrement high
                    [arr[mid], arr[high]] = [arr[high], arr[mid]];
                    high--;
                    break;
            }
        }
    }
}



//Compilation Completed
For Input: 
0 2 1 2 0
Your Output: 
0 0 1 2 2
Expected Output: 
0 0 1 2 2