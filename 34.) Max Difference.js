// 34.) Given an integer array arr of integers, the task is to find the maximum absolute difference between the nearest 
//      left smaller element and the nearest right smaller element of every element in array arr. If for any component 
//      of the arr, the nearest smaller element doesn't exist then consider it as 0.

// Examples :

// Input: arr = [2, 1, 8]
// Output: 1
// Explanation: left smaller array ls = [0, 0, 1], right smaller array rs = [1, 0, 0]. Maximum Diff of abs(ls[i] - rs[i]) = 1
// Input: arr = [2, 4, 8, 7, 7, 9, 3]
// Output: 4
// Explanation: left smaller array ls = [0, 2, 4, 4, 4, 7, 2], right smaller rs = [0, 3, 7, 3, 3, 3, 0]. Maximum Diff of abs(ls[i] - rs[i]) = abs(7 - 3) = 4
// Expected Time Complexity: O(n)
// Expected Space Complexity: O(n)

// Constraints:
// 1 <= arr.size() <= 106
// 1<= arr[i] <=109

// <__________________________________________________SOLUTION__________________________________________________________>
//{ Driver Code Starts
process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => { inputString += inputStdin; });

process.stdin.on('end', _ => {
    inputString = inputString.trim().split("\n").map(string => string.trim());
    main();
});

function readLine() { return inputString[currentLine++]; }

function main() {
    let t = parseInt(readLine());

    for (let i = 0; i < t; i++) {
        let arr = readLine().split(' ').map(Number);
        let obj = new Solution();
        let res = obj.findMaxDiff(arr);
        console.log(res);
    }
}

// } Driver Code Ends

// <_____________________________________________MAIN-SOLUTION__________________________________________________________>

// User function Template for javascript
class Solution {
    findMaxDiff(arr) {
        // code here
        const n = arr.length;
        let leftSmaller = new Array(n).fill(0);
        let rightSmaller = new Array(n).fill(0);
        let stack = [];

        // Finding nearest smaller to the left
        for (let i = 0; i < n; i++) {
            while (stack.length > 0 && arr[stack[stack.length - 1]] >= arr[i]) {
                stack.pop();
            }
            if (stack.length > 0) {
                leftSmaller[i] = arr[stack[stack.length - 1]];
            }
            stack.push(i);
        }

        // Reset stack for the next traversal
        stack = [];

        // Finding nearest smaller to the right
        for (let i = n - 1; i >= 0; i--) {
            while (stack.length > 0 && arr[stack[stack.length - 1]] >= arr[i]) {
                stack.pop();
            }
            if (stack.length > 0) {
                rightSmaller[i] = arr[stack[stack.length - 1]];
            }
            stack.push(i);
        }

        // Calculate the maximum absolute difference
        let maxDiff = 0;
        for (let i = 0; i < n; i++) {
            let diff = Math.abs(leftSmaller[i] - rightSmaller[i]);
            if (diff > maxDiff) {
                maxDiff = diff;
            }
        }

        return maxDiff;
    }
}

// Compilation Completed
For Input: 2 1 8
Your Output: 1
Expected Output: 1