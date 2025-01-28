// 187.) Given a string s, which may contain duplicate characters, your task is to generate and return an 
//       array of all unique permutations of the string. You can return your answer in any order.

// Examples:

// Input: s = "ABC"
// Output: ["ABC", "ACB", "BAC", "BCA", "CAB", "CBA"]
// Explanation: Given string ABC has 6 unique permutations.
// Input: s = "ABSG"
// Output: ["ABGS", "ABSG", "AGBS", "AGSB", "ASBG", "ASGB", "BAGS", "BASG", "BGAS", "BGSA", "BSAG", "BSGA", 
//         "GABS", "GASB", "GBAS", "GBSA", "GSAB", "GSBA", "SABG", "SAGB", "SBAG", "SBGA", "SGAB", "SGBA"]
// Explanation: Given string ABSG has 24 unique permutations.
// Input: s = "AAA"
// Output: ["AAA"]
// Explanation: No other unique permutations can be formed as all the characters are same.
// Constraints:
// 1 <= s.size() <= 9
// s contains only Uppercase english alphabets
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
        let S = readLine();
        let obj = new Solution();
        let res = obj.findPermutation(S);
        res.sort()
        printArray(res, res.length);

        console.log("~");
    }
}
// } Driver Code Ends


// User function Template for javascript

/**
 * @param {string} s
 * @return {string[]}
 */


// <___________________________________________________MAIN-SOLUTION_____________________________________________________>
class Solution {
    findPermutation(s) {
        // code here
         const result = [];
        const arr = s.split('').sort();
        const used = new Array(arr.length).fill(false);
        const path = [];
        this.backtrack(arr, used, path, result);
        return result;
    }
    backtrack(arr, used, path, result) {
        if (path.length === arr.length) {
            result.push(path.join(''));
            return;
        }
        for (let i = 0; i < arr.length; i++) {
            if (used[i]) continue;
            if (i > 0 && arr[i] === arr[i - 1] && !used[i - 1]) continue;
            used[i] = true;
            path.push(arr[i]);
            this.backtrack(arr, used, path, result);
            path.pop();
            used[i] = false;
        }
    }
}




// Compilation Completed
For Input: 
ABC
Your Output: 
ABC ACB BAC BCA CAB CBA
Expected Output: 
ABC ACB BAC BCA CAB CBA
