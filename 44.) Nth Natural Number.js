// 44.) Given a positive integer n. You have to find nth natural number after removing all the numbers 
//      containing the digit 9.

// Examples :

// Input: n = 8
// Output: 8
// Explanation: After removing natural numbers which contains digit 9, first 8 numbers are 1,2,3,4,5,6,7,8 and 8th number is 8.
// Input: n = 9
// Output: 10
// Explanation: After removing natural numbers which contains digit 9, first 9 numbers are 1,2,3,4,5,6,7,8,10 and 9th number is 10.
// Expected Time Complexity: O(logn)
// Expected Auxiliary Space: O(1)


// Constraints:
// 1 ≤ n ≤ 109


// <_______________________________________________SOLUTION___________________________________________________>
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
        let input = readLine().split(' ').map(x => parseInt(x));
        let N = input[0];
        let obj = new Solution();
        let res = obj.findNth(N);
        console.log(res);
    }
}

// } Driver Code Ends


// User function Template for javascript

/**
 * @param {number} n
 * @returns {number}
 */


// <___________________________________________________MAIN-SOLUTION_____________________________________________________>
class Solution {
    findNth(n) {
        // code here
        let result = 0;
        let multiplier = 1;
        
        while (n > 0) {
            // Get the last digit in base 9 representation
            result += (n % 9) * multiplier;
            
            // Move to the next digit
            n = Math.floor(n / 9);
            multiplier *= 10;
        }
        
        return result;
    }
}




//Compilation Completed
For Input: 8
Your Output: 8
Expected Output: 8