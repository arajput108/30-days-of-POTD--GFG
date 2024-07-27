// 4.) Given a string, find the minimum number of characters to be inserted to convert it to a palindrome.

// Examples :

// Input: str = "abcd"
// Output: 3
// Explanation: Inserted character marked with bold characters in dcbabcd, here we need minimum three characters to make it palindrome.

// Input: str = "aa"
// Output: 0
// Explanation: "aa" is already a palindrome.
// Expected Time Complexity: O(n2)
// Expected Auxiliary Space: O(n2)

// Constraints:
// 1 ≤ |str| ≤ 500
// str contains only lowercase alphabets.


// <_______________________________________________SOLUTION______________________________________________________________>

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

function printList(res,n){
    let s="";
    for(let i=0;i<n;i++){
        s+=res[i];
        s+=" ";
    }
    console.log(s);
}

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for(;i<t;i++)
    {
        let str = readLine();
        let obj = new Solution();
        let res = obj.countMin(str);
        console.log(res);
        
    }
}
// } Driver Code Ends
// } Driver Code Ends
//User function Template for javascript

/**
 * @param {string} str
 * @returns {number}
*/

// <______________________________________________MAIN-SOLUTION__________________________________________________________>
class Solution{
    countMin(str){
        //code here
const n = str.length;
        const dp = Array.from({ length: n }, () => Array(n).fill(0));
        
        // Every single character is a palindrome of length 1
        for (let i = 0; i < n; i++) {
            dp[i][i] = 1;
        }
        
        // Build the dp table
        for (let length = 2; length <= n; length++) {
            for (let i = 0; i < n - length + 1; i++) {
                const j = i + length - 1;
                if (str[i] === str[j]) {
                    dp[i][j] = dp[i + 1][j - 1] + 2;
                } else {
                    dp[i][j] = Math.max(dp[i + 1][j], dp[i][j - 1]);
                }
            }
        }
        
        // The minimum number of insertions needed is the difference
        // between the length of the string and the length of the longest
        // palindromic subsequence
        return n - dp[0][n - 1];

        //Compilation Completed
        // For Input: abcd
        // Your Output: 3
        // Expected Output: 3
        