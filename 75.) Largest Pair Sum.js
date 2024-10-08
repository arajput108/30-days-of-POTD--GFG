// 75.) Find the largest pair sum in an array of distinct integers.

// Examples :

// Input: arr[] = [12, 34, 10, 6, 40]
// Output: 74
// Explanation: Sum of 34 and 40 is the largest, i.e, 34 + 40 = 74.
// Input: arr[] = [10, 20, 30]
// Output: 50
// Explanation: 20 + 30 = 50.
// Expected Time Complexity: O(n)
// Expected Auxiliary Space: O(1)

// Constraints:
// 2 ≤ arr.size() ≤ 106
// 0 ≤ arr[i] ≤ 106
// <______________________________________________SOLUTION___________________________________________________>

//{ Driver Code Starts

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => { inputString += inputStdin; });

process.stdin.on('end', _ => {
    inputString =
        inputString.trim().split("\n").map(string => { return string.trim(); });

    main();
});

function readLine() { return inputString[currentLine++]; }

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for (; i < t; i++) {

        // let arr = new Array(5);
        let arr = readLine().split(' ').map(x => parseInt(x));

        let obj = new Solution();
        let res = obj.pairsum(arr);
        console.log(res);
    }
}

// } Driver Code Ends


// <___________________________________________MAIN-SOLUTION______________________________________________>   

class Solution {
    /**
    * @param number[] arr

    * @returns number
    */
    pairsum(arr) {
        // code here
        // Initialize two variables to store the two largest numbers
        let firstMax = -Infinity;
        let secondMax = -Infinity;

        // Loop through the array to find the largest and second-largest numbers
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > firstMax) {
                // Update secondMax before updating firstMax
                secondMax = firstMax;
                firstMax = arr[i];
            } else if (arr[i] > secondMax) {
                // If current element is less than firstMax but greater than secondMax, update secondMax
                secondMax = arr[i];
            }
        }

        // Return the sum of the two largest numbers
        return firstMax + secondMax;
    }
}


// Compilation Completed
For Input: 12 34 10 6 40
Your Output: 74
Expected Output: 74