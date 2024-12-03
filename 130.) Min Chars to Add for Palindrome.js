// 130.) Given a string s, the task is to find the minimum characters to be added at the front to make the string 
//       palindrome.

// Note: A palindrome string is a sequence of characters that reads the same forward and backward.

// Examples:

// Input: s = "abc"
// Output: 2
// Explanation: Add 'b' and 'c' at front of above string to make it palindrome : "cbabc"
// Input: s = "aacecaaaa"
// Output: 2
// Explanation: Add 2 a's at front of above string to make it palindrome : "aaaacecaaaa"
// Constraints:
// 1 <= s.size() <= 106
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
        let s = readLine();
        let obj = new Solution();
        console.log(obj.minChar(s));

        console.log("~");
    }
}
// } Driver Code Ends


// User function Template for javascript
/**
 * @param {string} str
 * @returns {number}
 */


// <___________________________________________________MAIN-SOLUTION_____________________________________________________>
class Solution {
    // Function to find minimum number of characters needed to make the string
    // palindrome.
    minChar(s) {
        // your code here
         // Reverse the input string
        const revStr = s.split("").reverse().join("");
        
        // Create a new string by appending the reverse with a separator
        const combinedStr = s + "#" + revStr;
        
        // Compute the LPS array
        const lps = this.computeLPS(combinedStr);
        
        // Minimum characters to add = length of s - last value in LPS array
        return s.length - lps[lps.length - 1];
    }
    
    // Helper function to compute LPS (Longest Prefix Suffix) array
    computeLPS(str) {
        const n = str.length;
        const lps = new Array(n).fill(0);
        let length = 0; // Length of the previous longest prefix suffix
        let i = 1;

        while (i < n) {
            if (str[i] === str[length]) {
                length++;
                lps[i] = length;
                i++;
            } else {
                if (length !== 0) {
                    length = lps[length - 1];
                } else {
                    lps[i] = 0;
                    i++;
                }
            }
        }

        return lps;
    }
}




// Compilation Completed
For Input:        abc
Your Output:      2
Expected Output:  2