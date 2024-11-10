107.) Given two sorted arrays a[] and b[], where each array contains distinct elements , the task is to return 
      the elements in the union of the two arrays in sorted order.

Union of two arrays can be defined as the set containing distinct common elements that are present in either of 
the arrays.
Examples:

Input: a[] = [1, 2, 3, 4, 5], b[] = [1, 2, 3, 6, 7]
Output: 1 2 3 4 5 6 7
Explanation: Distinct elements including both the arrays are: 1 2 3 4 5 6 7.
Input: a[] = [2, 3, 4, 5], b[] = [1, 2, 3, 4]
Output: 1 2 3 4 5
Explanation: Distinct elements including both the arrays are: 1 2 3 4 5.
Input: a[] = [1], b[] = [2]
Output: 1 2
Explanation: Distinct elements including both the arrays are: 1 2.
Constraints:
1  <=  a.size(), b.size()  <=  105
-109  <=  a[i] , b[i]  <=  109
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

/* Function to print an array */
function printArray(arr, size) {
    let i;
    let s = '';
    for (i = 0; i < size; i++) {
        s += arr[i] + " ";
    }
    console.log(s);
}

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for (; i < t; i++) {
        let a = readLine().split(' ').map(x => parseInt(x, 10));
        let b = readLine().split(' ').map(x => parseInt(x, 10));
        let obj = new Solution();
        let res = obj.findUnion(a, b);
        printArray(res, res.length);

        console.log("~");
    }
}
// } Driver Code Ends


// User function Template for javascript
class Solution {
    // Function to return a list containing the union of the two arrays.
    findUnion(a, b) {
        // your code here
         let unionArray = [];
        let i = 0, j = 0;

        while (i < a.length && j < b.length) {
            // Avoid duplicates in the union array
            if (i > 0 && a[i] === a[i - 1]) {
                i++;
                continue;
            }
            if (j > 0 && b[j] === b[j - 1]) {
                j++;
                continue;
            }

            if (a[i] < b[j]) {
                unionArray.push(a[i]);
                i++;
            } else if (a[i] > b[j]) {
                unionArray.push(b[j]);
                j++;
            } else {
                // Both elements are equal
                unionArray.push(a[i]);
                i++;
                j++;
            }
        }

        // Add remaining elements from array a
        while (i < a.length) {
            if (i === 0 || a[i] !== a[i - 1]) {
                unionArray.push(a[i]);
            }
            i++;
        }

        // Add remaining elements from array b
        while (j < b.length) {
            if (j === 0 || b[j] !== b[j - 1]) {
                unionArray.push(b[j]);
            }
            j++;
        }

        return unionArray;
    }
}

// Compilation Completed
For Input: 
1 2 3 4 5
1 2 3
Your Output: 
1 2 3 4 5
Expected Output: 
1 2 3 4 5