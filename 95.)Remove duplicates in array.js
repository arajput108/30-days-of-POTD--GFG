95.) Given an array arr consisting of positive integer numbers, remove all duplicate numbers.

Example:

Input: arr[] = [2, 2, 3, 3, 7, 5] 
Output: [2, 3, 7, 5]
Explanation: After removing the duplicates 2 and 3 we get 2 3 7 5.
Input: arr[] = [2, 2, 5, 5, 7, 7] 
Output: [2, 5, 7]
Input: arr[] = [8, 7] 
Output: [8, 7]
Constraints:
1<= arr.size() <=106
2<= arr[i] <=100
// <______________________________________________SOLUTION___________________________________________________>
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
        let arr = readLine().split(' ').map(Number);
        let ob = new Solution();
        let ans = ob.removeDuplicate(arr);
        console.log(ans.join(' '));
        console.log("~");
        tc--;
    }
}
// } Driver Code Ends


// User function Template for javascript


// <___________________________________________________MAIN-SOLUTION_____________________________________________________>
class Solution {

    removeDuplicate(arr) {
        // your code here
         return [...new Set(arr)];
    }
}



// Compilation Completed
For Input: 
2 2 3 3 7 5
Your Output: 
2 3 7 5
Expected Output: 
2 3 7 5