// 72.)Given a sorted array arr[] of positive integers, find the smallest positive integer such that it cannot 
//     be represented as the sum of elements of any subset of the given array set.

// Examples:

// Input: arr[] = [1, 2, 3]
// Output: 7
// Explanation: 7 is the smallest positive number for which no subset is there with sum 7.
// Input: arr[] = [3, 6, 9, 10, 20, 28]
// Output: 1
// Explanation: 1 is the smallest positive number for which no subset is there with sum 1.
// Expected Time Complexity: O(n)
// Expected Auxiliary Space: O(1)

// Constraints
// 1 <= arr.size() <= 106
// 0 <= arr[i] <= 108
// <______________________________________________SOLUTION___________________________________________________>
//{ Driver Code Starts
function main() {
    const t = parseInt(readLine(), 10);
    for (let i = 0; i < t; i++) {
        const arr = readLine().split(' ').map(Number);
        const ob = new Solution();
        const ans = ob.findSmallest(arr);
        console.log(ans);
    }
}

// Input handling (inputjs() style)
process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => { inputString += inputStdin; });

process.stdin.on('end', () => {
    inputString = inputString.trim().split('\n').map(string => string.trim());
    main();
});

function readLine() { return inputString[currentLine++]; }
// } Driver Code Ends

// <___________________________________________MAIN-SOLUTION______________________________________________>   
class Solution {
    findSmallest(arr) {
        // Your code goes here
        // Initialize result
        let res = 1;
        
        // Traverse the sorted array and find the smallest number
        for (let i = 0; i < arr.length; i++) {
            // If arr[i] is greater than res, return the result
            if (arr[i] > res) {
                break;
            }
            // Otherwise, add arr[i] to res
            res += arr[i];
        }
        
        return res;
    }
}


// Compilation Completed
For Input:  1 42 47 48 49 90
Your Output: 2
Expected Output: 2

