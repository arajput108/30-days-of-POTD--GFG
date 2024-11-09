// 106.) Given an array arr[] such that each element is in the range [0 - 9], find the minimum possible sum 
//       of two numbers formed using the elements of the array. All digits in the given array must be used to 
//       form the two numbers. Return a string without leading zeroes.

// Examples :

// Input: arr[] = [6, 8, 4, 5, 2, 3]
// Output: 604
// Explanation: The minimum sum is formed by numbers 358 and 246.
// Input: arr[] = [5, 3, 0, 7, 4]
// Output: 82
// Explanation: The minimum sum is formed by numbers 35 and 047.
// Input: arr[] = [9, 4]
// Output: 13
// Explanation: The minimum sum is formed by numbers 9 and 4.
// Constraints:
// 1 ≤ arr.size() ≤ 106
// 0 ≤ arr[i] ≤ 9
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
        let arr = readLine().split(' ').map(x => parseInt(x));
        let obj = new Solution();
        let res = obj.minSum(arr);
        console.log(res);

        console.log("~");
    }
} // } Driver Code Ends

// } Driver Code Ends


// User function Template for javascript

/**
 * @param {number[]} arr
 * @returns {string}
 */


// <___________________________________________________MAIN-SOLUTION_____________________________________________________>
class Solution {
    minSum(arr) {
        // code here
        // Sort the array in ascending order
        arr.sort((a, b) => a - b);
        
        let num1 = '', num2 = '';
        
        // Distribute digits alternately to form two numbers as strings
        for (let i = 0; i < arr.length; i++) {
            if (i % 2 === 0) {
                num1 += arr[i];
            } else {
                num2 += arr[i];
            }
        }
        
        // Return the result by combining num1 and num2 in a way that represents their sum
        return this.addStrings(num1, num2);
    }
    
    // Helper function to add two large numbers represented as strings
    addStrings(num1, num2) {
        let carry = 0, result = '';
        let i = num1.length - 1, j = num2.length - 1;
        
        // Perform addition like elementary math, digit by digit from the end
        while (i >= 0 || j >= 0 || carry > 0) {
            const digit1 = i >= 0 ? parseInt(num1[i--]) : 0;
            const digit2 = j >= 0 ? parseInt(num2[j--]) : 0;
            const sum = digit1 + digit2 + carry;
            result = (sum % 10) + result;
            carry = Math.floor(sum / 10);
        }
        
        // Remove leading zeroes, if any
        return result.replace(/^0+/, '') || '0';
    }
}


// Compilation Completed

For Input:  6 8 4 5 2 3
Your Output:  604
Expected Output:  604
