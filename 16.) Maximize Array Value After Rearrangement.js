// 16.) Given an array arr of n integers. Your task is to write a program to find the maximum value of ∑arr[i]*i, where i = 0, 1, 2,., n-1. You are allowed to rearrange the elements of the array.

// Note: Since the output could be large, print the answer modulo 109+7.

// Examples :

// Input : arr[] = [5, 3, 2, 4, 1]
// Output : 40
// Explanation: If we arrange the array as 1 2 3 4 5 then we can see that the minimum index will multiply with minimum number and maximum index will multiply with maximum number. So, 1*0 + 2*1 + 3*2 + 4*3 + 5*4 = 0+2+6+12+20 = 40 mod(109+7) = 40

// Input : arr[] = [1, 2, 3]
// Output : 8
// Expected Time Complexity: O(nlog(n)).
// Expected Auxiliary Space: O(1).

// Constraints:
// 1 ≤ arr.size ≤ 105
// 1 ≤ arri ≤ 105

//{ Driver Code Starts
// Initial Template for javascript



// <______________________________________________MAIN-SOLUTION__________________________________________________________>
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

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for (; i < t; i++) {
        // let n = parseInt(readLine());
        let A = readLine().trim().split(" ").map((x) => parseInt(x));
        // let key = parseInt(readLine());
        let obj = new Solution();
        let res = obj.Maximize(A);
        console.log(res);
    }
}

// } Driver Code Ends


// User function Template for javascript

/**
 * @param {number[]} arr
 * @return {number}
 */


// <______________________________________________SOLUTION__________________________________________________________>

class Solution {
    Maximize(arr) {
        // code here
        // Sort the array in ascending order
        arr.sort((a, b) => a - b);
        
        // Initialize the result variable
        let result = 0;
        const MOD = 1000000007;

        // Calculate the sum of arr[i] * i
        for (let i = 0; i < arr.length; i++) {
            result = (result + arr[i] * i) % MOD;
        }

        // Return the result
        return result;
    }
}




//Compilation Completed
For Input: 
5 3 2 4 1
Your Output: 
40
Expected Output: 
40