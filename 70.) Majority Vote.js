// 70.) You are given an array of integer nums[] where each number represents a vote to a candidate. 
//      Return the candidates that have votes greater than one-third of the total votes, If there's 
//      not a majority vote, return -1. 

// Note: The answer should be returned in an increasing format.

// Examples:

// Input: nums = [2, 1, 5, 5, 5, 5, 6, 6, 6, 6, 6]
// Output: [5, 6]
// Explanation: 5 and 6 occur more n/3 times.
// Input: nums = [1, 2, 3, 4, 5]
// Output: [-1]
// Explanation: no candidate occur more than n/3 times.
// Expected Time Complexity: O(n)
// Expected Space Complexity: O(1)

// Constraint:
// 1 <= nums.size() <= 106
// 0 <= nums[i] <= 109
// <_______________________________________________SOLUTION___________________________________________________>

//{ Driver Code Starts
process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => { inputString += inputStdin; });

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => string.trim());
    main();
});

function readLine() { return inputString[currentLine++]; }

function main() {
    let t = parseInt(readLine());
    for (let i = 0; i < t; i++) {
        let nums = readLine().split(' ').map(x => parseInt(x));
        let solution = new Solution();
        let ans = solution.findMajority(nums);
        console.log(ans.join(' '));
    }
}
// } Driver Code Ends

// <_____________________________________________MAIN-SOLUTION______________________________________________>   
class Solution {
    // Function to find the majority elements in the array
    findMajority(nums) {
        // Your code goes here
        let n = nums.length;
        let candidate1 = null, candidate2 = null;
        let count1 = 0, count2 = 0;

        // Phase 1: Find potential candidates
        for (let num of nums) {
            if (candidate1 === num) {
                count1++;
            } else if (candidate2 === num) {
                count2++;
            } else if (count1 === 0) {
                candidate1 = num;
                count1 = 1;
            } else if (count2 === 0) {
                candidate2 = num;
                count2 = 1;
            } else {
                count1--;
                count2--;
            }
        }

        // Phase 2: Verify candidates
        count1 = 0;
        count2 = 0;
        for (let num of nums) {
            if (num === candidate1) count1++;
            else if (num === candidate2) count2++;
        }

        let result = [];
        if (count1 > Math.floor(n / 3)) result.push(candidate1);
        if (count2 > Math.floor(n / 3)) result.push(candidate2);

        // Return the result in increasing order or [-1] if no such candidate
        return result.length > 0 ? result.sort((a, b) => a - b) : [-1];
    }
}

// Compilation Completed
For Input: 
2 1 5 5 5 5 6 6 6 6 6
Your Output: 5 6
Expected Output: 5 6