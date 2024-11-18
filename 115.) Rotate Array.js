// 115.) Given an unsorted array arr[]. Rotate the array to the left (counter-clockwise direction) by d steps, 
//       where d is a positive integer. Do the mentioned change in the array in place.

// Note: Consider the array as circular.

// Examples :

// Input: arr[] = [1, 2, 3, 4, 5], d = 2
// Output: [3, 4, 5, 1, 2]
// Explanation: when rotated by 2 elements, it becomes 3 4 5 1 2.
// Input: arr[] = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20], d = 3
// Output: [8, 10, 12, 14, 16, 18, 20, 2, 4, 6]
// Explanation: when rotated by 3 elements, it becomes 8 10 12 14 16 18 20 2 4 6.
// Input: arr[] = [7, 3, 9, 1], d = 9
// Output: [3, 9, 1, 7]
// Explanation: when we rotate 9 times, we'll get 3 9 1 7 as resultant array.
// Constraints:
// 1 <= arr.size(), d <= 105
// 0 <= arr[i] <= 105
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
    let i = 0;
    for (; i < t; i++) {
        let arr = readLine().split(' ').map(x => parseInt(x));
        let input_ar0 = readLine().split(' ').map(x => parseInt(x));
        let d = input_ar0[0];
        let obj = new Solution();
        obj.rotateArr(arr, d);
        let S = '';
        for (let i = 0; i < arr.length; i++) {
            S += arr[i];
            S += ' ';
        }
        console.log(S);

        console.log("~");
    }
}
// } Driver Code Ends


// User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number} d
 */


// <___________________________________________________MAIN-SOLUTION_____________________________________________________>
class Solution {
    // Function to rotate an array by d elements in counter-clockwise direction.
    rotateArr(arr, d) {
        // code here
         const n = arr.length;

        // Handle cases where d > n
        d = d % n;

        // Reverse the three segments of the array
        this.reverse(arr, 0, d - 1); // Reverse the first part (0 to d-1)
        this.reverse(arr, d, n - 1); // Reverse the second part (d to n-1)
        this.reverse(arr, 0, n - 1); // Reverse the entire array
    }

    // Helper function to reverse a part of the array
    reverse(arr, start, end) {
        while (start < end) {
            // Swap elements
            const temp = arr[start];
            arr[start] = arr[end];
            arr[end] = temp;
            start++;
            end--;
        }
         
    }
}



// Compilation Completed
For Input: 
1 2 3 4 5
2
Your Output: 
3 4 5 1 2
Expected Output: 
3 4 5 1 2