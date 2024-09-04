// 41.) There are n stairs, and a person standing at the bottom wants to reach the top. The person can climb 
//      either 1 stair or 2 stairs at a time. Count the number of ways, the person can reach the top (order does not matter).
//      Note: Order does not matter means for n = 4:- {1 2 1},{2 1 1},{1 1 2} are considered same.

// Examples :

// Input: n = 4
// Output: 3
// Explanation: Three ways to reach at 4th stair. They are {1, 1, 1, 1}, {1, 1, 2}, {2, 2}.
// Input: n = 5
// Output: 3
// Explanation: Three ways to reach at 5th stair. They are {1, 1, 1, 1, 1}, {1, 1, 2, 1} and {1, 2, 2}.
// Expected Time Complexity: O(n)
// Expected Space Complexity: O(n)

// Constraints:
// 1 ≤ n ≤ 104


// <___________________________________________________SOLUTION_____________________________________________________>

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

function printList(res,n){
    let s="";
    for(let i=0;i<n;i++){
        s+=res[i];
        s+=" ";
    }
    console.log(s);
}


function main() {
    let t = parseInt(readLine());
    let i = 0;
    for(;i<t;i++)
    {
        let n = parseInt(readLine());
        let obj = new Solution();
        let res = obj.nthStair(n);
        console.log(res);
        
    }
}// } Driver Code Ends




// } Driver Code Ends


//User function Template for javascript



/**
 * @param {number} n
 * @returns {number}
*/

// <___________________________________________________MAIN-SOLUTION_____________________________________________________>
class Solution{
    nthStair(n){
        //code here
        // Since order doesn't matter, the number of ways to reach the nth stair 
        // is simply the number of different pairs of (2-steps, 1-steps) that sum to n.
        // This equals floor(n / 2) + 1.
         return Math.floor(n / 2) + 1;
    }
}




// Compilation Completed
// For Input: 4
// Your Output: 3
// Expected Output: 3