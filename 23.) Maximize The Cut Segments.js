// 23.) Given an integer n denoting the Length of a line segment. You need to cut the line segment in such a way that the cut length of a line segment each time is either x , y or z. Here x, y, and z are integers.
// After performing all the cut operations, your total number of cut segments must be maximum. Return the maximum number of cut segments possible.

// Note: if no segment can be cut then return 0.

// Examples:

// Input: n = 4, x = 2, y = 1, z = 1
// Output: 4
// Explanation: Total length is 4, and the cut
// lengths are 2, 1 and 1.  We can make
// maximum 4 segments each of length 1.
// Input: n = 5, x = 5, y = 3, z = 2
// Output: 2
// Explanation: Here total length is 5, and
// the cut lengths are 5, 3 and 2. We can
// make two segments of lengths 3 and 2.
// Expected Time Complexity : O(n)
// Expected Auxiliary Space: O(n)

// Constraints
// 1 <= n, x, y, z <= 104



// <______________________________________________SOLUTION__________________________________________________________>
//{ Driver Code Starts
//Initial Template for javascript
'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

function main() {
    let t = parseInt(readLine());
    for(let i=0;i<t;i++)
    {
        let input_line = readLine().split(' ');
        let n = parseInt(input_line[0]);
        
        input_line = readLine().split(' ');
        let x = parseInt(input_line[0]);
        let y = parseInt(input_line[1]);
        let z = parseInt(input_line[2]);
        
        
        let obj = new Solution();
        let ans = obj.maximizeTheCuts(n, x, y, z);
        if(ans==-0)
        ans=0;
        console.log(ans);
    }
}

// } Driver Code Ends


//User function Template for javascript

/**
 * @param {number} n
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @returns {number}
*/


// <______________________________________________MAIN-SOLUTION__________________________________________________________>
class Solution
{
    //Function to find the maximum number of cuts.
    maximizeTheCuts(n, x, y, z)
    {
        // code here
        // Create a dp array and initialize with -1.
        let dp = new Array(n + 1).fill(-1);
        
        // Base case: 0 length means 0 cuts.
        dp[0] = 0;
        
        // Iterate through the entire length from 1 to n.
        for (let i = 1; i <= n; i++) {
            // If it's possible to make a cut of length x.
            if (i >= x && dp[i - x] != -1) {
                dp[i] = Math.max(dp[i], dp[i - x] + 1);
            }
            // If it's possible to make a cut of length y.
            if (i >= y && dp[i - y] != -1) {
                dp[i] = Math.max(dp[i], dp[i - y] + 1);
            }
            // If it's possible to make a cut of length z.
            if (i >= z && dp[i - z] != -1) {
                dp[i] = Math.max(dp[i], dp[i - z] + 1);
            }
        }
        
        // If dp[n] is still -1, it means we couldn't make any valid cuts.
        return dp[n] === -1 ? 0 : dp[n];
    }
}


//Compilation Completed
For Input: 
4
2 1 1
Your Output: 4
Expected Output: 4