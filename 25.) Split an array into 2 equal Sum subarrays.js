// 25.) Given an array of integers arr, return true if it is possible to split it in two 
//      subarrays (without reordering the elements), such that the sum of the two subarrays are equal. 
//      If it is not possible then return false.

// Examples:

// Input: arr = [1, 2, 3, 4, 5, 5]
// Output: true
// Explanation: In the above example, we can divide the array into two subarrays with eqaul sum. The two subarrays are: [1, 2, 3, 4] and [5, 5]. The sum of both the subarrays are 10. Hence, the answer is true.
// Input: arr = [4, 3, 2, 1]
// Output: false
// Explanation: In the above example, we cannot divide the array into two subarrays with eqaul sum. Hence, the answer is false.
// Expected Time Complexity: O(n)
// Expected Space Complexity: O(1)

// Constraints:
// 1<=arr.size()<=105 
// 1<=arr[i]<=106



// <______________________________________________SOLUTION__________________________________________________________>
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

        const arr = readLine().split(' ').map(x => parseInt(x));

        let obj = new Solution();
        let res = obj.canSplit(arr);
        console.log(res);
    }
}

// } Driver Code Ends

// <______________________________________________MAIN-SOLUTION__________________________________________________________>
class Solution {
    canSplit(arr) {
        // code here
        // Find the total sum of the array
        const totalSum = arr.reduce((sum, num) => sum + num, 0);
        
        // If the total sum is odd, it's impossible to split into two equal parts
        if (totalSum % 2 !== 0) {
            return false;
        }
        
        // We are looking for a prefix sum that equals to half of the total sum
        let prefixSum = 0;
        for (let i = 0; i < arr.length; i++) {
            prefixSum += arr[i];
            
            // If prefixSum equals to half of totalSum, we can split the array
            if (prefixSum === totalSum / 2) {
                return true;
            }
        }
        
        // If we didn't find such a prefix sum, return false
        return false;
    }
}



//Compilation Completed
For Input: 4 3 2 1
Your Output: false
Expected Output: false