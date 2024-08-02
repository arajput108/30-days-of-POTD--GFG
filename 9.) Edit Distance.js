// 9.) Given two strings str1 and str2. Return the minimum number of operations required to convert str1 to str2.
// The possible operations are permitted:

// Insert a character at any position of the string.
// Remove any character from the string.
// Replace any character from the string with any other character.
// Examples:

// Input: str1 = "geek", srt2 = "gesek"
// Output: 1
// Explanation: One operation is required, inserting 's' between two 'e'.
// Input : str1 = "gfg", str2 = "gfg"
// Output: 0
// Explanation: Both strings are same.
// Expected Time Complexity: O(|str1|*|str2|)
// Expected Space Complexity: O(|str1|*|str2|)

// Constraints:
// 1 ≤ str1.length(), str2.length() ≤ 100
// Both the strings are in lowercase.


//{ Driver Code Starts
// Initial Template for javascript

// <_______________________________________________SOLUTION______________________________________________________________>
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
        let input = readLine().split(" ");
        let s = input[0];
        let t = input[1];
        let obj = new Solution();
        let res = obj.editDistance(s, t);
        console.log(res);
    }
}
// } Driver Code Ends


// User function Template for javascript

/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */

// <______________________________________________MAIN-SOLUTION__________________________________________________________>
class Solution {
    editDistance(str1, str2) {
        // code here
        const m = str1.length;
        const n = str2.length;

        // Create a DP table to memoize the result of previous computations
        const dp = Array(m + 1).fill(null).map(() => Array(n + 1).fill(0));

        // Fill dp[][] in bottom-up manner
        for (let i = 0; i <= m; i++) {
            for (let j = 0; j <= n; j++) {
                // If first string is empty, only option is to
                // insert all characters of second string
                if (i === 0) {
                    dp[i][j] = j; // Min. operations = j
                }
                // If second string is empty, only option is to
                // remove all characters of first string
                else if (j === 0) {
                    dp[i][j] = i; // Min. operations = i
                }
                // If last characters are the same, ignore the last character
                // and recur for the remaining substring
                else if (str1[i - 1] === str2[j - 1]) {
                    dp[i][j] = dp[i - 1][j - 1];
                }
                // If the last character is different, consider all
                // possibilities and find the minimum
                else {
                    dp[i][j] = 1 + Math.min(
                        dp[i - 1][j],    // Remove
                        dp[i][j - 1],    // Insert
                        dp[i - 1][j - 1] // Replace
                    );
                }
            }
        }

        return dp[m][n];
    }
}

//Compilation Completed
For Input: geek gesek
Your Output: 1
Expected Output: 1