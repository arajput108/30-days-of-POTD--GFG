// 24.) Given an array nums[], construct a Product Array nums[] such that nums[i] is equal to the product of all the elements of nums except nums[i].

// Examples:

// Input: nums[] = [10, 3, 5, 6, 2]
// Output: [180, 600, 360, 300, 900]
// Explanation: For i=0, P[i] = 3*5*6*2 = 180.
// For i=1, P[i] = 10*5*6*2 = 600.
// For i=2, P[i] = 10*3*6*2 = 360.
// For i=3, P[i] = 10*3*5*2 = 300.
// For i=4, P[i] = 10*3*5*6 = 900.
// Input: nums[] = [12,0]
// Output: [0, 12]
// Expected Time Complexity: O(n)
// Expected Auxiliary Space: O(n)

// Constraints:
// 1 <= nums.size() <= 1000
// 0 <= nums[i] <= 200
// nums[i] may contain duplicates.


// <______________________________________________SOLUTION__________________________________________________________>
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
        if (arr[i] == -0) arr[i] = 0;
        s += arr[i] + " ";
    }
    console.log(s);
}

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for (; i < t; i++) {
        let n = parseInt(readLine());
        let arr = new Array(n);
        let input = readLine().split(" ").map((x) => parseInt(x));
        for (let j = 0; j < n; j++) arr[j] = input[j];
        let obj = new Solution();
        let res = obj.productExceptSelf(arr);
        printArray(res, res.length);
    }
}
// } Driver Code Ends


// User function Template for javascript

/**
 * @param {number[]} arr
 * @return {number[]}
 */


// <______________________________________________MAIN-SOLUTION__________________________________________________________>

class Solution {
    productExceptSelf(nums) {
        // code here
        const n = nums.length;
        const result = new Array(n).fill(1); // Initialize the result array with 1s
        const leftProducts = new Array(n).fill(1); // Array to hold left products
        const rightProducts = new Array(n).fill(1); // Array to hold right products
        
        // Calculate left products
        for (let i = 1; i < n; i++) {
            leftProducts[i] = leftProducts[i - 1] * nums[i - 1];
        }
        
        // Calculate right products
        for (let i = n - 2; i >= 0; i--) {
            rightProducts[i] = rightProducts[i + 1] * nums[i + 1];
        }
        
        // Construct the result array
        for (let i = 0; i < n; i++) {
            result[i] = leftProducts[i] * rightProducts[i];
        }
        
        return result;

    }
}

//Compilation Completed
For Input: 
5
10 3 5 6 2
Your Output: 180 600 360 300 900
Expected Output: 180 600 360 300 900