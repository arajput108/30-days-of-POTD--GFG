// 77.)Given an array arr[] with repeated elements, the task is to find the maximum distance between two 
//     occurrences of an element.

// Note: You may assume that every input array has repetitions.

// Examples:

// Input: arr = [1, 1, 2, 2, 2, 1]
// Output: 5
// Explanation: distance for 1 is: 5-0 = 5, distance for 2 is : 4-2 = 2, So max distance is 5.
// Input: arr = [3, 2, 1, 2, 1, 4, 5, 8, 6, 7, 4, 2]
// Output: 10
// Explanation: maximum distance for 2 is 11-1 = 10, maximum distance for 1 is 4-2 = 2 ,maximum distance for 4 
//              is 10-5 = 5, So max distance is 10.
// Expected Time Complexity :  O(n)
// Expected Auxilliary Space : O(n)

// Constraints:
// 1 <= arr.size() <= 106
// 1 <= arr[i] <= 109
// <______________________________________________SOLUTION___________________________________________________>

//{ Driver Code Starts
const readline = require('readline')
                     .createInterface({input : process.stdin, output : process.stdout});

const input = [];
readline.on('line', (line) => { input.push(line); }).on('close', () => {
    const t = parseInt(input[0], 10);
    for (let i = 1; i <= t; i++) {
        const arr = input[i].split(' ').map(Number);
        const ob = new Solution();
        console.log(ob.maxDistance(arr));
    }
});
// } Driver Code Ends


// User function Template for javascript

/**
 * @param {number[]} arr
 * @return {number}
 */

// <___________________________________________MAIN-SOLUTION______________________________________________>   
class Solution {

    maxDistance(arr) {
        // code here
        let firstIndex = {};  // Object to store the first occurrence of each element
        let maxDist = 0;  // To track the maximum distance

        for (let i = 0; i < arr.length; i++) {
            if (firstIndex[arr[i]] === undefined) {
                // Store the index of the first occurrence
                firstIndex[arr[i]] = i;
            } else {
                // Calculate the distance from the first occurrence
                let dist = i - firstIndex[arr[i]];
                maxDist = Math.max(maxDist, dist);  // Update max distance
            }
        }

        return maxDist;
    }
}




//Compilation Completed
For Input:  1 1 2 2 2 1
Your Output:  5
Expected Output:  5

