// 39.) You are given an array arr, you need to find any three elements in it such that arr[i] < arr[j] < arr[k] 
//      and i < j < k.

// Note:

// The output will be 1 if the subsequence returned by the function is present in the array arr
// If the subsequence is not present in the array then return an empty array, the driver code will print 0.
// If the subsequence returned by the function is not in the format as mentioned then the output will be -1.
// Examples :

// Input: arr = [1, 2, 1, 1, 3]
// Output: 1
// Explanation: A subsequence 1 2 3 exist.
// Input: arr = [1, 1, 3]
// Output: 0
// Explanation: No such Subsequence exist, so empty array is returned (the driver code automatically prints 0 in this case).
// Expected Time Complexity: O(n)
// Expected Auxiliary Space: O(n)

// Constraints:
// 1 <= arr.size() <= 105
// 1 <= arr[i] <= 106

// <______________________________________________________SOLUTION_______________________________________________________>

//{ Driver Code Starts

function isSubSequence(v1, v2) {
    const m = v2.length;
    const n = v1.length;
    let j = 0; // For index of v2
    // Traverse v1 and v2
    for (let i = 0; i < n; i++) {
        if (j < m && v1[i] === v2[j]) {
            j++;
        }
    }
    return j === m;
}

const readline = require('readline');

const rl = readline.createInterface({input : process.stdin, output : process.stdout});

const inputLines = [];
rl.on('line', (line) => { inputLines.push(line); });

rl.on('close', () => {
    const t = parseInt(inputLines[0]);
    let currentIndex = 1;

    for (let i = 0; i < t; i++) {
        const arr = inputLines[currentIndex].split(' ').map(Number);
        const n = arr.length;
        const obj = new Solution();
        const res = obj.find3Numbers(arr);

        if (res.length !== 0 && res.length !== 3) {
            console.log(-1);
        } else {
            if (res.length === 0) {
                console.log(0);
            } else if (res[0] < res[1] && res[1] < res[2] && isSubSequence(arr, res)) {
                console.log(1);
            } else {
                console.log(-1);
            }
        }

        currentIndex++;
    }
});
// } Driver Code Ends


// User function Template for javascript

//Back-end complete function Template for javascript




// <________________________________________________MAIN-SOLUTION_______________________________________________________>
class Solution {
    find3Numbers(arr) {
        // code here
        const n = arr.length;

        if (n < 3) return [];

        // Initialize arrays
        const leftMin = new Array(n).fill(0);
        const rightMax = new Array(n).fill(0);

        // Fill leftMin array
        leftMin[0] = arr[0];
        for (let i = 1; i < n; i++) {
            leftMin[i] = Math.min(leftMin[i - 1], arr[i]);
        }

        // Fill rightMax array
        rightMax[n - 1] = arr[n - 1];
        for (let i = n - 2; i >= 0; i--) {
            rightMax[i] = Math.max(rightMax[i + 1], arr[i]);
        }

        // Find the sequence
        for (let j = 1; j < n - 1; j++) {
            if (arr[j] > leftMin[j] && arr[j] < rightMax[j]) {
                return [leftMin[j], arr[j], rightMax[j]];
            }
        }

        return [];
    }
}


// Compilation Completed
For Input: 
1 2 1 1 3
Your Output: 1
Expected Output: 1
