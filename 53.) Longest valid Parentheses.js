// 53.) Given a string str consisting of opening and closing parenthesis '(' and ')'. Find length of the 
//      longest valid parenthesis substring.

// A parenthesis string is valid if:

// For every opening parenthesis, there is a closing parenthesis.
// Opening parenthesis must be closed in the correct order.
// Examples :

// Input: str = ((()
// Output: 2
// Explaination: The longest valid parenthesis substring is "()".
// Input: str = )()())
// Output: 4
// Explaination: The longest valid parenthesis substring is "()()".
// Expected Time Complexity: O(|str|)
// Expected Auxiliary Space: O(|str|)

// Constraints:
// 1 ≤ |str| ≤ 105


// <___________________________________________________SOLUTION__________________________________________________>

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

        let s = readLine();
        let obj = new Solution();

        let res = obj.maxLength(s);
        console.log(res);
    }
}
// } Driver Code Ends


// User function Template for javascript

/**
 * @param {string} str
 * @returns {number}
 */


// <________________________________________________MAIN-SOLUTION________________________________________________>

class Solution {
    maxLength(str) {
        // code here
         let maxLen = 0;
        let stack = [];
        stack.push(-1);  // Initialize with base case
        
        for (let i = 0; i < str.length; i++) {
            if (str[i] === '(') {
                // Push the index of the '('
                stack.push(i);
            } else {
                // Pop the last opening parenthesis index
                stack.pop();
                
                // If stack is not empty, find the length of valid substring
                if (stack.length > 0) {
                    maxLen = Math.max(maxLen, i - stack[stack.length - 1]);
                } else {
                    // If the stack is empty, push the current index as base for future calculations
                    stack.push(i);
                }
            }
        }
        
        return maxLen;
    }
}





// Compilation Completed
For Input: ((()
Your Output: 2
Expected Output: 2