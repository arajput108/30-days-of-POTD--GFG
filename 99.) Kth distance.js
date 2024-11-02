99.) Given an unsorted array arr and a number k which is smaller than size of the array. 
     Find if the array contains duplicates within k distance.

Examples:
Input: arr[] = [1, 2, 3, 4, 1, 2, 3, 4] and k = 3
Output: false
Explanation: All duplicates are more than k distance away.

Input: arr[] = [1, 2, 3, 1, 4, 5] and k = 3
Output: true
Explanation: 1 is repeated at distance 3.
Constraints:
1 ≤ arr.size() ≤ 106
1 ≤ k < arr.size()
1 ≤ arr[i] ≤ 105
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
        let k = parseInt(readLine());
        let ob = new Solution();
        let ans = ob.checkDuplicatesWithinK(arr, k);
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
//Back-end complete function Template for javascript

// <___________________________________________________MAIN-SOLUTION_____________________________________________________>
class Solution {
    checkDuplicatesWithinK(arr, k) {
        // your code
         const set = new Set();

        for (let i = 0; i < arr.length; i++) {
            // If we find a duplicate within k distance, return true
            if (set.has(arr[i])) {
                return true;
            }
            
            // Add the current element to the set
            set.add(arr[i]);

            // Ensure the set only contains elements within the last k indices
            if (i >= k) {
                set.delete(arr[i - k]);
            }
        }

        // No duplicates within k distance found
        return false;
    }
}


// Compilation Completed
For Input: 
1 2 3 4 1 2 3 4
3
Your Output:  false
Expected Output:  false