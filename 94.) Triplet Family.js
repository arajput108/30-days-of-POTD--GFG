// 94.) Given an array arr of integers. Find whether three numbers are such that the sum of two elements equals 
//      the third element.

// Example:

// Input: arr[] = [1, 2, 3, 4, 5]
// Output: true
// Explanation: The pair (1, 2) sums to 3.
// Input: arr[] = [5, 3, 4]
// Output: false
// Explanation: No triplets satisfy the condition.
// Expected Time Complexity: O(n2)
// Expected Auxilary Space: O(1)

// Constraints:
// 1 <= arr.size() <= 103
// 0 <= arr[i] <= 105

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
        let ans = ob.findTriplet(arr);
        // console.log(ans);
        if (ans) {
            console.log("true");
        } else {
            console.log("false");
        }
        console.log("~");
        tc--;
    }
}
// } Driver Code Ends


// User function Template for javascript


// <___________________________________________________MAIN-SOLUTION_____________________________________________________>
class Solution {
    findTriplet(arr) {
        // code here
         arr.sort((a, b) => a - b); // Sort the array

        for (let i = arr.length - 1; i >= 0; i--) {
            let target = arr[i];
            let left = 0;
            let right = i - 1;

            while (left < right) {
                const sum = arr[left] + arr[right];
                
                if (sum === target) {
                    return true;
                } else if (sum < target) {
                    left++;
                } else {
                    right--;
                }
            }
        }
        
        return false;
    }
}


// Compilation Completed
For Input: 1 2 3 4 5
Your Output: true
Expected Output: true