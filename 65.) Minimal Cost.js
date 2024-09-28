// 65.) There is an array arr of heights of stone and Geek is standing at the first stone and can jump to 
//      one of the following: Stone i+1, i+2, ... i+k stone, where k is the maximum number of steps that 
//      can be jumped and cost will be |hi-hj| is incurred, where j is the stone to land on. 
//      Find the minimum possible total cost incurred before the Geek reaches the last stone.

// Example:

// Input: k = 3, arr[]= [10, 30, 40, 50, 20]
// Output: 30
// Explanation: Geek will follow the path 1->2->5, the total cost would be | 10-30| + |30-20| = 30, which is minimum
// Input: k = 1, arr[]= [10, 20, 10]
// Output: 20
// Explanation: Geek will follow the path 1->2->3, the total cost would be |10 - 20| + |20 - 10| = 20.
// Expected Time Complexity: O(n*k)
// Expected Auxilary Space: O(n)

// Constraint:
// 1<= arr.size() <=104
// 1 <= k <= 100
// 1 <= arr[i] <= 104
// <_______________________________________________SOLUTION___________________________________________________>


//{ Driver Code Starts
// Driver code
const readline = require('readline');
const rl = readline.createInterface({input : process.stdin, output : process.stdout});

let inputLines = [];
let currentLine = 0;

rl.on('line', (line) => { inputLines.push(line.trim()); });

rl.on('close', () => { main(); });

function readLine() { return inputLines[currentLine++]; }

function main() {
    let tc = parseInt(readLine());
    while (tc > 0) {
        let k = parseInt(readLine());
        let arr = readLine().split(' ').map(Number);
        let ob = new Solution();
        let ans = ob.minimizeCost(k, arr);
        console.log(ans);
        tc--;
    }
}
// } Driver Code Ends


// User function Template for javascript

// <_____________________________________________MAIN-SOLUTION______________________________________________>   
class Solution {
    // Function to minimize the cost of reducing the heights.
    minimizeCost(k, arr) {
        // your code here
         const n = arr.length;
        const dp = new Array(n).fill(Infinity);  // Initialize the DP array with Infinity
        dp[0] = 0;  // Starting point cost is 0

        // Iterate through each stone
        for (let i = 0; i < n; i++) {
            // Check up to k steps forward
            for (let j = 1; j <= k; j++) {
                if (i + j < n) {
                    dp[i + j] = Math.min(dp[i + j], dp[i] + Math.abs(arr[i] - arr[i + j]));
                }
            }
        }
        
        // Return the minimum cost to reach the last stone
        return dp[n - 1];

    }
}


// Compilation Completed
For Input: 
3
10 30 40 50 20
Your Output: 30
Expected Output: 30