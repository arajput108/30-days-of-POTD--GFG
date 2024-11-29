// 126.) Given two binary strings s1 and s2 consisting of only 0s and 1s. Find the resultant string after 
//       adding the two Binary Strings.
// Note: The input strings may contain leading zeros but the output string should not have any leading zeros.

// Input: s1 = "1101", s2 = "111"
// Output: 10100
// Explanation:
//  1101
// + 111
// 10100
// Input: s1 = "00100", s2 = "010"
// Output: 110
// Explanation: 
//   100
// +  10
//   110
// Constraints:
// 1 ≤s1.size(), s2.size()≤ 106
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

        let S1 = readLine();
        let S2 = readLine();
        let obj = new Solution();
        let res = obj.addBinary(S1, S2);

        console.log(res);

        console.log("~");
    }
}
// } Driver Code Ends


// User function Template for javascript

/**
 * @param {string} s1
 * @param {string} s2
 * @returns {string}
 */



// <___________________________________________________MAIN-SOLUTION_____________________________________________________>
class Solution {
    addBinary(s1, s2) {
        // code here
        let i = s1.length - 1; // Pointer for s1
        let j = s2.length - 1; // Pointer for s2
        let carry = 0; // Carry for addition
        let result = []; // To store the result

        // Loop through both strings until pointers or carry exist
        while (i >= 0 || j >= 0 || carry) {
            // Extract binary digits from the strings, or 0 if pointer out of bounds
            const bit1 = i >= 0 ? parseInt(s1[i], 10) : 0;
            const bit2 = j >= 0 ? parseInt(s2[j], 10) : 0;

            // Calculate the sum and update the carry
            const sum = bit1 + bit2 + carry;
            result.push(sum % 2); // Append current bit to result
            carry = Math.floor(sum / 2); // Update carry

            i--; // Move pointers to the left
            j--;
        }

        // Reverse the result array to get the correct binary string
        return result.reverse().join('').replace(/^0+/, '') || '0'; // Remove leading zeros

    }
}




// Compilation Completed
For Input: 
1101
111
Your Output: 
10100
Expected Output: 
10100