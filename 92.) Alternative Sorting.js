// 92.) Given an array arr of distinct integers. Rearrange the array in such a way that the first element is the largest and the second element is the smallest, the third element is the second largest and the fourth element is the second smallest, and so on.

// Examples:

// Input: arr[] = [7, 1, 2, 3, 4, 5, 6]
// Output: [7, 1, 6, 2, 5, 3, 4]
// Explanation: The first element is first maximum and second element is first minimum and so on.
// Input: arr[] = [1, 6, 9, 4, 3, 7, 8, 2]
// Output: [9, 1, 8, 2, 7, 3, 6, 4]
// Explanation: The first element is first maximum and second element is first minimum and so on.
// Expected Time Complexity: O(nlogn).
// Expected Auxiliary Space: O(n).

// Constraints:
// 1 ≤ arr.size() ≤ 105
// 1 ≤ arr[i] ≤ 105
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
        let ans = ob.alternateSort(arr);
        console.log(ans.join(' '));
        console.log("~");
        tc--;
    }
}
// } Driver Code Ends


// User function Template for javascript

// <___________________________________________________MAIN-SOLUTION_____________________________________________________>
class Solution {
    alternateSort(arr) {
        // code here
         // Sort the array in ascending order
        arr.sort((a, b) => a - b);
        
        // Create a new array to store the result
        let result = [];
        
        // Use two pointers, one starting from the beginning (for the smallest)
        // and one from the end (for the largest)
        let i = 0, j = arr.length - 1;
        
        while (i <= j) {
            // Add the largest remaining element
            result.push(arr[j--]);
            
            if (i <= j) {
                // Add the smallest remaining element
                result.push(arr[i++]);
            }
        }
        
        return result;
    }
}




// Compilation Completed
For Input:  7 1 2 3 4 5 6
Your Output:  7 1 6 2 5 3 4
Expected Output: 7 1 6 2 5 3 4