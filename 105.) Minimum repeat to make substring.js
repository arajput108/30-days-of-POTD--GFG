// 105.) Given two strings s1 and s2. Return a minimum number of times s1 has to be repeated such that s2 is a 
//       substring of it. If s2 can never be a substring then return -1.

// Note: Both the strings contain only lowercase letters.

// Examples:

// Input: s1 = "ww", s2 = "www"
// Output: 2
// Explanation: Repeating s1 two times (wwww), s2 is a substring of it.
// Input: s1 = "abcd", s2 = "cdabcdab" 
// Output: 3 
// Explanation: Repeating s1 three times (abcdabcdabcd), s2 is a substring of it. s2 is not a substring of s2 
//              when it is repeated less than 3 times.
// Input: s1 = "ab", s2 = "cab"
// Output: -1
// Explanation: No matter how many times we repeat s1, we can't get a string such that s2 is a substring of it.
// Constraints:
// 1 ≤ |s1|, |s2| ≤ 105

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
        let A = readLine().trim();
        let B = readLine().trim();
        let obj = new Solution();
        let res = obj.minRepeats(A, B);
        console.log(res);
    }
}
// } Driver Code Ends


// User function Template for javascript
/*
 * @param {number[]} A
 * @param {number[]} B
 * @returns {number}
 */


// <___________________________________________________MAIN-SOLUTION_____________________________________________________>
class Solution {
    // Function to find minimum number of rotations required
    // to make the array A an array B.
    minRepeats(s1, s2) {
        // your code here
        let repeated = s1;
        let count = 1;
        
        // Repeat s1 until the length of the repeated string is at least the length of s2
        while (repeated.length < s2.length) {
            repeated += s1;
            count++;
        }
        
        // Check if s2 is a substring of the current repeated string
        if (repeated.includes(s2)) return count;
        
        // Add one more repetition and check again
        repeated += s1;
        count++;
        
        if (repeated.includes(s2)) return count;
        
        // If s2 cannot be found in the repeated s1 string
        return -1;
    }
}



// Compilation Completed
For Input: 
abcd
cdabcdab
Your Output: 
3
Expected Output: 
3