// 5.) Given a string str without spaces, the task is to remove all duplicate characters from it, keeping only the first occurrence.

// Note: The original order of characters must be kept the same. 

// Examples :

// Input: str = "zvvo"
// Output: "zvo"
// Explanation: Only keep the first occurrence
// Input: str = "gfg"
// Output: "gf"
// Explanation: Only keep the first occurrence
// Expected Time Complexity: O(n)
// Expected Auxiliary Space: O(1)

// Constraints:
// 1 <= |str| <= 105
// str contains lowercase English alphabets

// <_______________________________________________SOLUTION______________________________________________________________>
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

function printList(res, n) {
    let s = "";
    for (let i = 0; i < n; i++) {
        s += res[i];
        s += " ";
    }
    console.log(s);
}

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for (; i < t; i++) {
        let str = readLine();
        let obj = new Solution();
        let res = obj.removeDups(str);
        console.log(res);
    }
} // } Driver Code Ends

// } Driver Code Ends


// User function Template for javascript

/**
 * @param {string} str
 * @returns {string}
 */

// <______________________________________________MAIN-SOLUTION__________________________________________________________>
class Solution {
    removeDups(str) {
        // code here
        let seen = new Set();
        let result = '';

        for (let char of str) {
            if (!seen.has(char)) {
                seen.add(char);
                result += char;
            }
        }

        return result;
    }
}

// Compilation Completed
For Input: zvvo
Your Output: zvo
Expected Output: zvo
