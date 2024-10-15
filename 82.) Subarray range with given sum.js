// 82.) Given an unsorted array of integers arr[], and a target tar, determine the number of subarrays whose 
//      elements sum up to the target value.

// Examples:

// Input: arr[] = [10, 2, -2, -20, 10] , tar = -10
// Output: 3
// Explanation: Subarrays with sum -10 are: [10, 2, -2, -20], [2, -2, -20, 10] and [-20, 10].
// Input: arr[] = [1, 4, 20, 3, 10, 5] , tar = 33
// Output: 1
// Explanation: Subarray with sum 33 is: [20,3,10].
// Expected Time Complexity: O(n)
// Expected Auxilary Space: O(n)

// Constraints:
// 1 <= arr.size() <= 106
// -105 <= arr[i] <= 105
// -105 <= tar <= 105
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
        let tar = parseInt(readLine());
        let ob = new Solution();
        let ans = ob.subArraySum(arr, tar);
        console.log(ans);
        tc--;
    }
}
// } Driver Code Ends


// User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number} tar
 * @returns {number}
 */


// <___________________________________________________MAIN-SOLUTION_____________________________________________________>
class Solution {
    // Function to count the number of subarrays which adds to the given sum.
    subArraySum(arr, tar) {
        // code here
         let count = 0;
        let currSum = 0;
        let prefixSumMap = new Map();

        // Initialize the map with 0 sum occurring once (for subarrays starting from index 0)
        prefixSumMap.set(0, 1);

        for (let i = 0; i < arr.length; i++) {
            // Add the current element to the cumulative sum
            currSum += arr[i];

            // Check if (currSum - tar) exists in the map
            if (prefixSumMap.has(currSum - tar)) {
                count += prefixSumMap.get(currSum - tar);
            }

            // Update the map with the current cumulative sum
            prefixSumMap.set(currSum, (prefixSumMap.get(currSum) || 0) + 1);
        }

        return count;
    }
}





// Compilation Completed
For Input: 
10 2 -2 -20 10
-10
Your Output: 
3
Expected Output: 
3