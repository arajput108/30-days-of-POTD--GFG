// 63.) You are given the heights of consecutive buildings. You can move from the roof of a building to the roof 
//      of the next adjacent building. You need to find the maximum number of consecutive steps you can put 
//      forward such that you gain an increase in altitude with each step.

// Examples:

// Input: arr[] = [1, 2, 2, 3, 2]
// Output: 1
// Explanation: 1, 2, or 2, 3 are the only consecutive buildings with increasing heights thus maximum number of 
//             consecutive steps with an increase in gain in altitude would be 1 in both cases.
// Input: arr[] = [1, 2, 3, 4]
// Output: 3
// Explanation: 1 to 2 to 3 to 4 is the jump of length 3 to have a maximum number of buildings with increasing 
//             heights, so maximum steps with increasing altitude becomes 3.
// Expected Time Complexity: O(n)
// Expected Auxiliary Space: O(1)

// Constraints:
// 1 <= arr.size() <= 106
// 1 <= arr[i] <= 105

// <_______________________________________________SOLUTION___________________________________________________>
//{ Driver Code Starts
// Initial Template for javascript
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
        let input_ar1 = readLine().split(' ').map(x => parseInt(x));
        let n = input_ar1.length;
        let a = new Array(n);

        for (let i = 0; i < n; i++) a[i] = input_ar1[i];
        let obj = new Solution();
        console.log(obj.maxStep(a, n));
    }
}
// } Driver Code Ends


// User function Template for javascript

/**
 * @param {number[]} arr
 * @returns {number}
 */

// <_____________________________________________MAIN-SOLUTION______________________________________________>   
class Solution {
    // Function to find maximum number of consecutive steps
    // to gain an increase in altitude with each step.
    maxStep(arr) {
        // your code here
        // Initialize variables to track the current step count and max step count
        let maxSteps = 0;
        let currentSteps = 0;

        // Iterate through the array from the second building
        for (let i = 1; i < arr.length; i++) {
            // If the current building is taller than the previous one, increase the step count
            if (arr[i] > arr[i - 1]) {
                currentSteps++;
                // Update the maxSteps if currentSteps is greater
                maxSteps = Math.max(maxSteps, currentSteps);
            } else {
                // If not, reset the current step count
                currentSteps = 0;
            }
        }

        return maxSteps;
    }
}




// Compilation Completed
For Input: 1 2 2 3 2
Your Output: 1
Expected Output: 1