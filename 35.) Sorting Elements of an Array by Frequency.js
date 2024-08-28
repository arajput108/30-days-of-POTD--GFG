// 35.) Given an array of integers arr, sort the array according to the frequency of elements, i.e. elements 
//      that have higher frequency comes first. If the frequencies of two elements are the same, then the smaller 
//      number comes first.

// Examples :

// Input: arr[] = [5, 5, 4, 6, 4]
// Output: [4, 4, 5, 5, 6]
// Explanation: The highest frequency here is 2. Both 5 and 4 have that frequency. Now since the frequencies are the same the smaller element comes first. So 4 4 comes first then comes 5 5. Finally comes 6. The output is 4 4 5 5 6.
// Input: arr[] = [9, 9, 9, 2, 5]
// Output: [9, 9, 9, 2, 5]
// Explanation: The highest frequency here is 3. Element 9 has the highest frequency So 9 9 9 comes first. Now both 2 and 5 have the same frequency. So we print smaller elements first. The output is 9 9 9 2 5.
// Expected Time Complexity: O(n*logn)
// Expected Space Complexity: O(n)

// Constraints:
// 1 ≤ arr.size() ≤ 105
// 1 ≤ arr[i]≤ 105



// <__________________________________________________SOLUTION__________________________________________________________>
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
    for (let i = 0; i < t; i++) {
        let arr = readLine().split(' ').map(Number);

        let obj = new Solution();

        let s = "";
        let ans = obj.sortByFreq(arr)
        for (let i = 0; i < ans.length; i++) {
            if (ans[i] == -0) ans[i] = 0;
            s += ans[i];
            s += " ";
        }
        console.log(s);
    }
}
// } Driver Code Ends


// User function Template for javascript

/**
 * @param {number[]} arr
 * @returns {number[]}
 */

class Solution {
    // Function to sort the array according to frequency of elements.
    sortByFreq(arr) {
        // code here
         // Step 1: Count the frequency of each element
        const frequencyMap = new Map();
        for (const num of arr) {
            frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
        }

        // Step 2: Sort the array based on frequency and then by value
        arr.sort((a, b) => {
            const freqA = frequencyMap.get(a);
            const freqB = frequencyMap.get(b);
            
            if (freqA === freqB) {
                return a - b; // Ascending order if frequencies are the same
            }
            return freqB - freqA; // Descending order of frequencies
        });

        return arr;
    }
}

// Compilation Completed
For Input: 
5 5 4 6 4
Your Output: 
4 4 5 5 6
Expected Output: 
4 4 5 5 6