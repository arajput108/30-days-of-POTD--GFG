// 128.) Given a string s consisting of lowercase Latin Letters. Return the first non-repeating character in s. If there is no non-repeating character, return '$'.
// Note: When you return '$' driver code will output -1.

// Examples:

// Input: s = "geeksforgeeks"
// Output: 'f'
// Explanation: In the given string, 'f' is the first character in the string which does not repeat.
// Input: s = "racecar"
// Output: 'e'
// Explanation: In the given string, 'e' is the only character in the string which does not repeat.
// Input: s = "aabbccc"
// Output: -1
// Explanation: All the characters in the given string are repeating.
// Constraints:
// 1 <= s.size() <= 105
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
        let s = input_line[0];
        let obj = new Solution();
        let ans = obj.nonRepeatingChar(s);
        if (ans == '$') ans = '-1';
        console.log(ans);

        console.log("~");
    }
}
// } Driver Code Ends


// User function Template for javascript
/**
 * @param {string} s
 * @returns {string}
 */

// <___________________________________________________MAIN-SOLUTION_____________________________________________________>
class Solution {
    // Function to find the first non-repeating character in a string.
    nonRepeatingChar(s) {
        // code here
            const charCount = new Map(); // Map to store character counts

    // Step 1: Count the frequency of each character
    for (let char of s) {
        charCount.set(char, (charCount.get(char) || 0) + 1);
    }

    // Step 2: Find the first character with a count of 1
    for (let char of s) {
        if (charCount.get(char) === 1) {
            return char; // Return the first non-repeating character
        }
    }

    // If no non-repeating character is found, return '$'
    return '$';
    }
}



// Compilation Completed
For Input:  geeksforgeeks
Your Output:  f
Expected Output:  f