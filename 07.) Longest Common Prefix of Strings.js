// 7.) Given an array of strings arr. Return the longest common prefix among all strings present in the array. If there's no prefix common in all the strings, return "-1".

// Examples :

// Input: arr[] = ["geeksforgeeks", "geeks", "geek", "geezer"]
// Output: gee
// Explanation: "gee" is the longest common prefix in all the given strings.
// Input: arr[] = ["hello", "world"]
// Output: -1
// Explanation: There's no common prefix in the given strings.
// Expected Time Complexity: O(n*min(|arri|))
// Expected Space Complexity: O(min(|arri|))

// Constraints:
// 1 ≤ |arr| ≤ 103
// 1 ≤ |arr[i]| ≤ 103

// <_______________________________________________SOLUTION______________________________________________________________>

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
        let inputAr = readLine().split(" ");
        let obj = new Solution();
        let res = obj.longestCommonPrefix(inputAr);

        console.log(res);
    }
}
// } Driver Code Ends


// User function Template for javascript

/**
 * @param {string[]} arr
 * @param {number} n
 * @returns {string}
 */

// <______________________________________________MAIN-SOLUTION__________________________________________________________>
class Solution {
    longestCommonPrefix(arr) {
        // code here
        if (!arr.length) return "-1";

        // Find the minimum length string from the array
        let minLength = Math.min(...arr.map(str => str.length));

        // Initialize the prefix to be checked
        let prefix = "";

        // Iterate over the characters up to the minimum length
        for (let i = 0; i < minLength; i++) {
            // Get the current character from the first string
            let currentChar = arr[0][i];

            // Check this character against all other strings
            for (let j = 1; j < arr.length; j++) {
                if (arr[j][i] !== currentChar) {
                    // If a mismatch is found, return the prefix so far
                    return prefix.length ? prefix : "-1";
                }
            }

            // If current character matches all, add to prefix
            prefix += currentChar;
        }

        // If we reached here, it means the whole prefix up to minLength is common
        return prefix;

    }
}

//Compilation Completed
For Input: geeksforgeeks geeks geek geezer
Your Output: gee
Expected Output: gee
