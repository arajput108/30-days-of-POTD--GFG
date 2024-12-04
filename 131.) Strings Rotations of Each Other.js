131.) You are given two strings of equal lengths, s1 and s2. The task is to check if s2 is a rotated version of 
      the string s1.

Note: The characters in the strings are in lowercase.

Examples :

Input: s1 = "abcd", s2 = "cdab"
Output: true
Explanation: After 2 right rotations, s1 will become equal to s2.
Input: s1 = "aab", s2 = "aba"
Output: true
Explanation: After 1 left rotation, s1 will become equal to s2.
Input: s1 = "abcd", s2 = "acbd"
Output: false
Explanation: Strings are not rotations of each other.
Constraints:
1 <= s1.size(), s2.size() <= 105
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
        let input_line = readLine().split(' ');
        let s1 = input_line[0];
        input_line = readLine().split(' ');
        let s2 = input_line[0];
        let obj = new Solution();
        if (obj.areRotations(s1, s2))
            console.log("true");
        else
            console.log("false");

        console.log("~");
    }
}

// } Driver Code Ends


// User function Template for javascript
/**
 * @param {string} s1
 * @param {string} s2
 * @returns {boolean}
 */


// <___________________________________________________MAIN-SOLUTION_____________________________________________________>
class Solution {
    // Function to check if two strings are rotations of each other or not.
    areRotations(s1, s2) {
        // code here
        // Check if the strings are of equal length
        if (s1.length !== s2.length) {
            return false;
        }
        // Concatenate s1 with itself
        const concatenated = s1 + s1;
        // Check if s2 is a substring of concatenated string
        return concatenated.includes(s2);
    }
}


// Compilation Completed
For Input: 
abcd
cdab
Your Output: 
true
Expected Output: 
true