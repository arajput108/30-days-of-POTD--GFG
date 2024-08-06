// 13.) You are given a string str in the form of an IPv4 Address. Your task is to validate an IPv4 Address, if it is valid return true otherwise return false.

// IPv4 addresses are canonically represented in dot-decimal notation, which consists of four decimal numbers, each ranging from 0 to 255, separated by dots, e.g., 172.16.254.1

// A valid IPv4 Address is of the form x1.x2.x3.x4 where 0 <= (x1, x2, x3, x4) <= 255. Thus, we can write the generalized form of an IPv4 address as (0-255).(0-255).(0-255).(0-255)

// Note: Here we are considering numbers only from 0 to 255 and any additional leading zeroes will be considered invalid.

// Examples :

// Input: str = 222.111.111.111
// Output: true
// Explanation: Here, the IPv4 address is as per the criteria mentioned and also all four decimal numbers lies in the mentioned range.
// Input: str = 5555..555
// Output: false
// Explanation: 5555..555 is not a valid. IPv4 address, as the middle two portions are missing.
// Expected Time Complexity: O(n)
// Expected Auxiliary Space: O(1)

// Constraints:
// 1<=str.length() <=15
// <______________________________________________MAIN-SOLUTION__________________________________________________________>
//Driver Code Starts
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
        let IPadd = readLine();

        let obj = new Solution();
        let res = obj.isValid(IPadd);
        if (res)
            console.log("true");
        else
            console.log("false");
    }
}//Driver Code Ends

// User function Template for javascript

/**
 * @param {string} s
 * @returns {number}
 */

// <______________________________________________MAIN-SOLUTION__________________________________________________________>
class Solution {
    isValid(str) {
        // code here
        // Split the string by the dot character
        const parts = str.split('.');

        // Check if there are exactly 4 parts
        if (parts.length !== 4) {
            return false;
        }

        // Validate each part
        for (let part of parts) {
            // Check if the part is a valid number
            if (!/^\d+$/.test(part)) {
                return false;
            }

            // Convert to a number
            const num = Number(part);

            // Check the range and leading zeros
            if (num < 0 || num > 255 || (part.length > 1 && part[0] === '0')) {
                return false;
            }
        }

        // If all checks passed, return true
        return true;
    }
}


//Compilation Completed: -
// Input: 222.111.111.111
// Output: true

// Expected Output: - true
