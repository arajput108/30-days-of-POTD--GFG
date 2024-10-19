// 86.) A string str is given to represent a positive number. The task is to round str to the nearest multiple of 10.  
//      If you have two multiples equally apart from str, choose the smallest element among them.

// Examples:

// Input: str = 29 
// Output: 30
// Explanation: Close multiples are 20 and 30, and 30 is the nearest to 29. 
// Input: str = 15
// Output: 10
// Explanation: 10 and 20 are equally distant multiples from 20. The smallest of the two is 10.
// Expected Time Complexity: O(n).
// Expected Auxiliary Space: O(1).

// Constraints:
// 1 <= str.size()<= 105
// <______________________________________________SOLUTION___________________________________________________>

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

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for (; i < t; i++) {
        let str = readLine().trim();
        let obj = new Solution();
        let res = obj.roundToNearest(str);
        console.log(res);
    }
}
// } Driver Code Ends


// User function Template for javascript

/**
 * @param {string} str
 * @return {string}
 */


// <___________________________________________________MAIN-SOLUTION_____________________________________________________>
class Solution {
    roundToNearest(str) {
        // code here
        let len = str.length;
        let lastDigit = parseInt(str[len - 1]);

        // If the last digit is 0-4, round down by setting last digit to 0
        if (lastDigit <= 4) {
            return str.slice(0, len - 1) + '0';
        } 
        
        // If the last digit is 5, round down as per the rules (smallest multiple of 10)
        if (lastDigit === 5) {
            return str.slice(0, len - 1) + '0';
        } 

        // If the last digit is 6-9, round up
        let roundedUp = str.slice(0, len - 1); // Get all digits except the last one
        let carry = 1;
        let i = roundedUp.length - 1;

        // Propagate the carry if necessary
        while (i >= 0 && carry > 0) {
            let digit = parseInt(roundedUp[i]) + carry;
            if (digit === 10) {
                roundedUp = roundedUp.substring(0, i) + '0' + roundedUp.substring(i + 1);
                carry = 1;  // continue carrying over
            } else {
                roundedUp = roundedUp.substring(0, i) + digit + roundedUp.substring(i + 1);
                carry = 0;  // no more carry needed
            }
            i--;
        }

        // If carry is still left after most significant digit, prepend '1'
        if (carry > 0) {
            roundedUp = '1' + roundedUp;
        }

        // Append 0 to make it a multiple of 10
        return roundedUp + '0';

    }
}







// Compilation Completed
For Input:  29
Your Output:  30
Expected Output: 30