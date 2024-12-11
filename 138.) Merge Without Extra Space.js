// 138.) Given two sorted arrays a[] and b[] of size n and m respectively, the task is to merge them in 
//       sorted order without using any extra space. Modify a[] so that it contains the first n elements 
//       and modify b[] so that it contains the last m elements.

// Examples:

// Input: a[] = [2, 4, 7, 10], b[] = [2, 3]
// Output:
// 2 2 3 4
// 7 10
// Explanation: After merging the two non-decreasing arrays, we get, 2 2 3 4 7 10
// Input: a[] = [1, 5, 9, 10, 15, 20], b[] = [2, 3, 8, 13]
// Output:
// 1 2 3 5 8 9
// 10 13 15 20
// Explanation: After merging two sorted arrays we get 5 10 12 18 20.
// Input: a[] = [0, 1], b[] = [2, 3]
// Output:
// 0 1
// 2 3
// Explanation: After merging two sorted arrays we get 0 1 2 3.
// Constraints:
// 1 <= a.size(), b.size() <= 105
// 0 <= a[i], b[i] <= 107
// <______________________________________________SOLUTION___________________________________________________>
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

    while (t-- > 0) {
        // Read the array of integers
        let a = readLine().split(' ').map(x => parseInt(x));
        let b = readLine().split(' ').map(x => parseInt(x));

        // Create an instance of the Solution class
        let obj = new Solution();

        // Call the missingNumber method and print the result
        obj.mergeArrays(a, b)
        console.log(a.join(' '));
        console.log(b.join(' '));
    }
}
// } Driver Code Ends

// <___________________________________________________MAIN-SOLUTION_____________________________________________________>
class Solution {
    mergeArrays(a, b) {
        // code here
         let n = a.length, m = b.length;
        let gap = Math.ceil((n + m) / 2);

        // Function to calculate the next gap
        const nextGap = (gap) => (gap <= 1 ? 0 : Math.ceil(gap / 2));

        while (gap > 0) {
            let i = 0, j = gap;

            // Compare elements within `a`
            while (j < n) {
                if (a[i] > a[j]) {
                    [a[i], a[j]] = [a[j], a[i]]; // Swap if needed
                }
                i++;
                j++;
            }

            // Compare elements between `a` and `b`
            j = j - n; // Adjust index for `b`
            while (i < n && j < m) {
                if (a[i] > b[j]) {
                    [a[i], b[j]] = [b[j], a[i]]; // Swap if needed
                }
                i++;
                j++;
            }

            // Compare elements within `b`
            i = 0;
            while (j < m) {
                if (b[i] > b[j]) {
                    [b[i], b[j]] = [b[j], b[i]]; // Swap if needed
                }
                i++;
                j++;
            }

            // Reduce the gap for the next iteration
            gap = nextGap(gap);
        }

       

    }
}



// Compilation Completed
For Input: 
1 3 5 7
0 2 6 8 9
Your Output: 
0 1 2 3
5 6 7 8 9
Expected Output: 
0 1 2 3
5 6 7 8 9