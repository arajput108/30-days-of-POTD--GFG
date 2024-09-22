// 59.) Given a string of characters, find the length of the longest proper prefix which is also a proper suffix.

// NOTE: Prefix and suffix can be overlapping but they should not be equal to the entire string.

// Examples :

// Input: str = "abab"
// Output: 2
// Explanation: "ab" is the longest proper prefix and suffix. 
// Input: str = "aaaa"
// Output: 3
// Explanation: "aaa" is the longest proper prefix and suffix. 
// Expected Time Complexity: O(|str|)
// Expected Auxiliary Space: O(|str|)

// Constraints:
// 1 ≤ |str| ≤ 10^6

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

        let S = readLine();
        let obj = new Solution();
        let res = obj.lps(S);

        console.log(res);
    }
}
// } Driver Code Ends


// User function Template for javascript

/**
 * @param {string} str
 * @returns {number}
 */


// <_____________________________________________MAIN-SOLUTION______________________________________________>   
class Solution {
    lps(str) {
        // code here
          const n = str.length;
        const lps = new Array(n).fill(0); // LPS array to store the longest prefix suffix values.
        
        let len = 0; // Length of the previous longest prefix suffix.
        let i = 1; // Loop starts from 1 because lps[0] is always 0.
        
        while (i < n) {
            if (str[i] === str[len]) {
                len++;
                lps[i] = len;
                i++;
            } else {
                if (len !== 0) {
                    len = lps[len - 1]; // Fall back to the previous lps value.
                } else {
                    lps[i] = 0;
                    i++;
                }
            }
        }
        
        // The longest proper prefix which is also a suffix will be in lps[n-1].
        return lps[n - 1];
    }
}


// Compilation Completed
For Input: abab
Your Output: 2
Expected Output: 2