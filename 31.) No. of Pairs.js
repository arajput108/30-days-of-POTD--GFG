// 31.) Given two positive integer arrays arr and brr, find the number of pairs such that xy > yx (raised to power of) 
//      where x is an element from arr and y is an element from brr.

// Examples :

// Input: arr[] = [2, 1, 6], brr[] = [1, 5]
// Output: 3
// Explanation: The pairs which follow xy > yx are: 21 > 12,  25 > 52 and 61 > 16 .
// Input: arr[] = [2 3 4 5], brr[] = [1 2 3]
// Output: 5
// Explanation: The pairs which follow xy > yx are: 21 > 12 , 31 > 13 , 32 > 23 , 41 > 14 , 51 > 15 .
// Expected Time Complexity: O((N + M)log(N)).
// Expected Auxiliary Space: O(1).

// Constraints:
// 1 ≤ arr.size(), brr.size() ≤ 105
// 1 ≤ brr[i], arr[i] ≤ 103

// <______________________________________________SOLUTION__________________________________________________________>
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
        let brr = readLine().split(' ').map(x => parseInt(x));
        let obj = new Solution();
        console.log(obj.countPairs(arr, brr));
    }
}
// } Driver Code Ends


// User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number[]} brr
 * @returns {number}
 */




// <___________________________________________MAIN-SOLUTION__________________________________________________________>
class Solution {
    // Function to count number of pairs such that x^y is greater than y^x.
    countPairs(arr, brr) {
        // your code here
        let n = arr.length;
        let m = brr.length;
        
        // Sort brr to make binary search possible
        brr.sort((a, b) => a - b);

        // Precompute counts for specific values in brr
        let count1 = this.countOccurrences(brr, 1);
        let count2 = this.countOccurrences(brr, 2);
        let count3 = this.countOccurrences(brr, 3);
        let count4 = this.countOccurrences(brr, 4);

        let result = 0;

        for (let x of arr) {
            result += this.countValidPairs(x, brr, count1, count2, count3, count4);
        }

        return result;
    }

    // Helper function to count valid pairs for a specific x
    countValidPairs(x, brr, count1, count2, count3, count4) {
        if (x === 0) return 0; // No valid pairs for x = 0
        if (x === 1) return 0; // No valid pairs for x = 1

        let m = brr.length;
        let pos = this.upperBound(brr, x);
        let count = m - pos;

        // Special cases:
        if (x === 2) {
            count -= count3 + count4;
            count += count1;
        } else if (x === 3) {
            count += count1 + count2;
        } else {
            count += count1;
        }

        return count;
    }

    // Binary search helper to find upper bound
    upperBound(arr, x) {
        let low = 0, high = arr.length;
        while (low < high) {
            let mid = Math.floor((low + high) / 2);
            if (arr[mid] <= x) low = mid + 1;
            else high = mid;
        }
        return low;
    }

    // Helper function to count occurrences of a particular value in an array
    countOccurrences(arr, val) {
        let count = 0;
        for (let num of arr) {
            if (num === val) count++;
        }
        return count;
    }
}


//Compilation Completed
For Input: 
2 1 6
1 5
Your Output: 3
Expected Output: 3