// 21.) You are given two strings str1 and str2. Your task is to find the length of the longest common substring among the given strings.

// Examples:

// Input: str1 = "ABCDGH", str2 = "ACDGHR"
// Output: 4
// Explanation: The longest common substring is "CDGH" which has length 4.
// Input: str1 = "ABC", str2 = "ACB"
// Output: 1
// Explanation: The longest common substrings are "A", "B", "C" all having length 1.
// Expected Time Complexity: O(n*m).
// Expected Auxiliary Space: O(n*m).

// Constraints:
// 1<= str1.size(), str2.size()<=1000
// Both strings may contain upper and lower case alphabets.


// <___________________________________________________SOLUTION__________________________________________________________>
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
        let s1 = readLine();
        let s2 = readLine();
        let obj = new Solution();
        let res = obj.longestCommonSubstr(s1, s2);
        console.log(res);
    }
}
// } Driver Code Ends


// User function Template for javascript

/**
 * @param {string} s1
 * @param {string} s2
 * @return {number}
 */


// <______________________________________________MAIN-SOLUTION__________________________________________________________>

class Solution {
    longestCommonSubstr(str1, str2) {
        // code here
        let n = str1.length;
        let m = str2.length;

        // Initialize a 2D array (dp) with zeros
        let dp = Array.from(Array(n + 1), () => Array(m + 1).fill(0));

        // Variable to store the length of the longest common substring
        let maxLength = 0;

        // Fill the dp array
        for (let i = 1; i <= n; i++) {
            for (let j = 1; j <= m; j++) {
                if (str1[i - 1] === str2[j - 1]) {
                    dp[i][j] = dp[i - 1][j - 1] + 1;
                    maxLength = Math.max(maxLength, dp[i][j]);
                }
            }
        }

        return maxLength;
    }
}



//Compilation Completed
For Input: 
ABCDGH
ACDGHR
Your Output: 4
Expected Output: 4