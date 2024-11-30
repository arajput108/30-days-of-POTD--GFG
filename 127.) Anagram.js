// 126.) Given two strings s1 and s2 consisting of lowercase characters. The task is to check whether two given 
//       strings are an anagram of each other or not. An anagram of a string is another string that contains the 
//       same characters, only the order of characters can be different. For example, act and tac are an anagram 
//       of each other. Strings s1 and s2 can only contain lowercase alphabets.

// Note: You can assume both the strings s1 & s2 are non-empty.

// Examples :

// Input: s1 = "geeks", s2 = "kseeg"
// Output: true
// Explanation: Both the string have same characters with same frequency. So, they are anagrams.
// Input: s1 = "allergy", s2 = "allergic"
// Output: false
// Explanation: Characters in both the strings are not same, so they are not anagrams.
// Input: s1 = "g", s2 = "g"
// Output: true
// Explanation: Character in both the strings are same, so they are anagrams.
// Constraints:
// 1 ≤ s1.size(), s2.size() ≤ 105
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
        let a = readLine().trim();
        let b = readLine().trim();
        let obj = new Solution();
        if (obj.areAnagrams(a, b))
            console.log("true");
        else
            console.log("false");
        console.log("~");
    }
}

// } Driver Code Ends


// User function Template for javascript

/**
 * @param {string} a
 * @param {string} b
 * @returns {boolean}
 */


// <___________________________________________________MAIN-SOLUTION_____________________________________________________>
class Solution {
    // Function is to check whether two strings are anagram of each other or not.
    areAnagrams(s1, s2) {
        // code here
        // If lengths are different, they cannot be anagrams
        if (s1.length !== s2.length) return false;

        // Create frequency maps for both strings
        const frequencyMap = new Array(26).fill(0); // Array for 26 lowercase letters

        // Populate frequency maps
        for (let i = 0; i < s1.length; i++) {
            frequencyMap[s1.charCodeAt(i) - 97]++; // Increment count for character in s1
            frequencyMap[s2.charCodeAt(i) - 97]--; // Decrement count for character in s2
        }

        // Check if all counts are zero
        for (const count of frequencyMap) {
            if (count !== 0) return false;
        }

        return true;
    }
}

// Compilation Completed
For Input: 
geeks
kseeg
Your Output: 
true
Expected Output: 
true