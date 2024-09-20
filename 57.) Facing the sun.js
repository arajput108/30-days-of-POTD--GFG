// 57.) Given an array height representing the heights of buildings. You have to count the buildings that 
//      will see the sunrise (Assume the sun rises on the side of the array starting point).
// Note: The height of the building should be strictly greater than the height of the buildings 
// left in order to see the sun.

// Examples :

// Input: height = [7, 4, 8, 2, 9]
// Output: 3
// Explanation: As 7 is the first element, it can see the sunrise. 4 can't see the sunrise as 7 is hiding it. 8 
// can see. 2 can't see the sunrise. 9 also can see
// the sunrise.
// Input: height = [2, 3, 4, 5]
// Output: 4
// Explanation: As 2 is the first element, it can see the sunrise.  3 can see the sunrise as 2 is not hiding it. 
// Same for 4 and 5, they also can see the sunrise.
// Expected Time Complexity: O(n)
// Expected Auxiliary Space: O(1)

// Constraints:
// 1 ≤ height.size() ≤ 106
// 1 ≤ heighti ≤ 108

// <_______________________________________________SOLUTION___________________________________________________>

//{ Driver Code Starts
// Initial Template for javascript

const readline = require('readline');
const rl = readline.createInterface({input : process.stdin, output : process.stdout});

let inputLines = [];
let currentLine = 0;

rl.on('line', function(line) { inputLines.push(line); });

rl.on('close', function() {
    let t = parseInt(inputLines[currentLine++]);
    for (let i = 0; i < t; i++) {
        let height = inputLines[currentLine++].split(' ').map(Number);
        let ob = new Solution();
        let ans = ob.countBuildings(height);
        console.log(ans);
    }
});

// } Driver Code Ends


// User function Template for javascript

/**
 * @param {number[]} height
 * @returns {number}
 */

// <_____________________________________________MAIN-SOLUTION______________________________________________>   
class Solution {
    // Returns count buildings that can see sunlight
    countBuildings(height) {
        // code here
        let count = 0; // Counter for buildings that can see the sunrise
        let maxSeen = -Infinity; // Variable to track the maximum height seen so far
        
        for (let i = 0; i < height.length; i++) {
            if (height[i] > maxSeen) {
                count++; // This building can see the sunrise
                maxSeen = height[i]; // Update the maximum height seen
            }
        }
        
        return count;
    }
}





// Compilation Completed
For Input:  7 4 8 2 9
Your Output: 3
Expected Output: 3