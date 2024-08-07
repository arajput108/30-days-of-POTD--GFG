// 14.) Given two sorted arrays arr1 and arr2 and an element k. The task is to find the element that would be at the kth position of the combined sorted array.

// Examples :

// Input: k = 5, arr1[] = [2, 3, 6, 7, 9], arr2[] = [1, 4, 8, 10]
// Output: 6
// Explanation: The final combined sorted array would be - 1, 2, 3, 4, 6, 7, 8, 9, 10. The 5th element of this array is 6.
// Input: k = 7, arr1[] = [100, 112, 256, 349, 770], arr2[] = [72, 86, 113, 119, 265, 445, 892]
// Output: 256
// Explanation: Combined sorted array is - 72, 86, 100, 112, 113, 119, 256, 265, 349, 445, 770, 892. 7th element of this array is 256.
// Expected Time Complexity: O(log(n) + log(m))
// Expected Auxiliary Space: O(log (n))

// Constraints:
// 1 <= k<= arr1.size()+arr2.size()
// 1 <= arr1.size(), arr2.size() <= 106
// 0 <= arr1[i], arr2[i] < 108

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
        let arr1 = readLine().split(" ").map((x) => parseInt(x));
        let arr2 = readLine().split(" ").map((x) => parseInt(x));
        let obj = new Solution();
        let res = obj.kthElement(k, arr1, arr2);

        console.log(res);
    }
}
// } Driver Code Ends


// User function Template for javascript

/**
 * @param {number} k
 * @param {number[]} arr1
 * @param {number[]} arr2

 * @returns {number}
 */

class Solution {
    kthElement(k, arr1, arr2) {
        // code here
        let n = arr1.length;
        let m = arr2.length;

        if (n > m) {
            // the first array is the smaller array
            return this.kthElement(k, arr2, arr1);
        }

        let low = Math.max(0, k - m), high = Math.min(k, n);

        while (low <= high) {
            let cut1 = Math.floor((low + high) / 2);
            let cut2 = k - cut1;

            let left1 = cut1 === 0 ? Number.MIN_SAFE_INTEGER : arr1[cut1 - 1];
            let left2 = cut2 === 0 ? Number.MIN_SAFE_INTEGER : arr2[cut2 - 1];
            let right1 = cut1 === n ? Number.MAX_SAFE_INTEGER : arr1[cut1];
            let right2 = cut2 === m ? Number.MAX_SAFE_INTEGER : arr2[cut2];

            if (left1 <= right2 && left2 <= right1) {
                return Math.max(left1, left2);
            } else if (left1 > right2) {
                high = cut1 - 1;
            } else {
                low = cut1 + 1;
            }
        }
    }
}


//Compilation Completed
For Input: 
5
2 3 6 7 9
1 4 8 10
Your Output: 6
Expected Output: 6