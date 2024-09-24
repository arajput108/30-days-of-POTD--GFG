// 61.) Given two strings s and p. Find the smallest window in the string s consisting of all the 
//      characters(including duplicates) of the string p.  Return "-1" in case there is no such window 
//      present. In case there are multiple such windows of same length, return the one with the least 
//      starting index.
// Note : All characters are in Lowercase alphabets. 

// Examples:

// Input: s = "timetopractice", p = "toc"
// Output: toprac
// Explanation: "toprac" is the smallest
// substring in which "toc" can be found.
// Input: s = "zoomlazapzo", p = "oza"
// Output: apzo
// Explanation: "apzo" is the smallest 
// substring in which "oza" can be found.
// Expected Time Complexity: O(|s|)
// Expected Auxiliary Space: O(n), n = len(p)

// Constraints: 
// 1 ≤ |s|, |p| ≤ 105

// <_______________________________________________SOLUTION___________________________________________________>
//{ Driver Code Starts
//Initial Template for javascript
'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

function main() {
    let t = parseInt(readLine());
    for(let i=0;i<t;i++)
    {
        let input_line = readLine().split();
        let S = input_line[0];
        input_line = readLine().split();
        let P = input_line[0];
        let obj = new Solution();
        let ans = obj.smallestWindow(S, P);
        console.log(ans);
    }
}
// } Driver Code Ends


//User function Template for javascript

/**
 * @param {string} s
 * @param {string} p
 * @returns {string}
*/

// <_____________________________________________MAIN-SOLUTION______________________________________________>   
class Solution 
{
    //Function to find the smallest window in the string s consisting
    //of all the characters of string p.
    smallestWindow(s, p)
    {
        // code here
         const lenS = s.length;
        const lenP = p.length;

        if (lenP > lenS) {
            return "-1";
        }

        // To store the frequency of characters in string p
        const pFreq = new Array(26).fill(0);
        const sFreq = new Array(26).fill(0);

        // Count frequency of characters in p
        for (let i = 0; i < lenP; i++) {
            pFreq[p.charCodeAt(i) - 97]++;
        }

        let start = 0;
        let minLength = Infinity;
        let startIndex = -1;
        let count = 0;

        // Sliding window over string s
        for (let j = 0; j < lenS; j++) {
            // Update the frequency of current character in the window
            sFreq[s.charCodeAt(j) - 97]++;

            // If the current character is part of p and its count in the window
            // does not exceed its count in p, increase the count.
            if (pFreq[s.charCodeAt(j) - 97] !== 0 &&
                sFreq[s.charCodeAt(j) - 97] <= pFreq[s.charCodeAt(j) - 97]) {
                count++;
            }

            // If all characters are matched
            if (count === lenP) {
                // Try to minimize the window by moving the start pointer
                while (pFreq[s.charCodeAt(start) - 97] === 0 || 
                       sFreq[s.charCodeAt(start) - 97] > pFreq[s.charCodeAt(start) - 97]) {
                    if (sFreq[s.charCodeAt(start) - 97] > pFreq[s.charCodeAt(start) - 97]) {
                        sFreq[s.charCodeAt(start) - 97]--;
                    }
                    start++;
                }

                // Update the minimum length of the window
                let windowLength = j - start + 1;
                if (minLength > windowLength) {
                    minLength = windowLength;
                    startIndex = start;
                }
            }
        }

        // If no window is found
        if (startIndex === -1) {
            return "-1";
        }

        // Return the smallest window
        return s.substring(startIndex, startIndex + minLength);
    }
}







// Compilation Completed
For Input: 
timetopractice
toc
Your Output: toprac
Expected Output: toprac