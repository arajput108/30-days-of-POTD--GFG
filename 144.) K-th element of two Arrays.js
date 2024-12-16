// 144.) Given two sorted arrays a[] and b[] and an element k, the task is to find the element that would be 
//       at the kth position of the combined sorted array.

// Examples :

// Input: a[] = [2, 3, 6, 7, 9], b[] = [1, 4, 8, 10], k = 5
// Output: 6
// Explanation: The final combined sorted array would be [1, 2, 3, 4, 6, 7, 8, 9, 10]. The 5th element of this 
// array is 6.
// Input: a[] = [100, 112, 256, 349, 770], b[] = [72, 86, 113, 119, 265, 445, 892], k = 7
// Output: 256
// Explanation: Combined sorted array is [72, 86, 100, 112, 113, 119, 256, 265, 349, 445, 770, 892]. The 
// 7th element of this array is 256.
// Constraints:

// 1 <= a.size(), b.size() <= 106
// 1 <= k <= a.size() + b.size()
// 0 <= a[i], b[i] < 108
// <______________________________________________SOLUTION___________________________________________________>
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
        let k = parseInt(readLine());
        let a = readLine().split(" ").map((x) => parseInt(x));
        let b = readLine().split(" ").map((x) => parseInt(x));
        let obj = new Solution();
        let res = obj.kthElement(a, b, k);

        console.log(res);
        console.log("~");
    }
}
// } Driver Code Ends


// User function Template for javascript

/**
 * @param {number[]} a
 * @param {number[]} b
 * @param {number} k

 * @returns {number}
 */
// <___________________________________________________MAIN-SOLUTION_____________________________________________________>
class Solution {
    kthElement(a, b, k) {
        // code here
          // Ensure `a` is the smaller array for binary search efficiency
        if (a.length > b.length) return this.kthElement(b, a, k);

        let n = a.length;
        let m = b.length;

        // Binary search on the smaller array
        let low = Math.max(0, k - m), high = Math.min(k, n);

        while (low <= high) {
            let cutA = Math.floor((low + high) / 2);
            let cutB = k - cutA;

            // Elements just outside the left partition
            let leftA = cutA === 0 ? Number.NEGATIVE_INFINITY : a[cutA - 1];
            let leftB = cutB === 0 ? Number.NEGATIVE_INFINITY : b[cutB - 1];

            // Elements just inside the right partition
            let rightA = cutA === n ? Number.POSITIVE_INFINITY : a[cutA];
            let rightB = cutB === m ? Number.POSITIVE_INFINITY : b[cutB];

            // Check if valid partition
            if (leftA <= rightB && leftB <= rightA) {
                return Math.max(leftA, leftB);
            } else if (leftA > rightB) {
                // Move left in `a`
                high = cutA - 1;
            } else {
                // Move right in `a`
                low = cutA + 1;
            }
        }

        return -1; // Should never reach here
    }
}



// Compilation Completed
For Input: 
5
2 3 6 7 9
1 4 8 10
Your Output: 
6
Expected Output: 
6