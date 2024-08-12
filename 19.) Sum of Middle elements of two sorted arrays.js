// 19.) Given 2 sorted integer arrays arr1 and arr2. Find the sum of the middle elements of two sorted arrays arr1 and arr2.

// Examples:

// Input: arr1 = [1, 2, 4, 6, 10], arr2 = [4, 5, 6, 9, 12]
// Output: 11
// Explanation: The merged array looks like [1, 2, 4, 4, 5, 6, 6, 9, 10, 12]. Sum of middle elements is 11 (5 + 6).
// Input: arr1 = [1, 12, 15, 26, 38], arr2 = [2, 13, 17, 30, 45]
// Output: 32
// Explanation: The merged array looks like [1, 2, 12, 13, 15, 17, 26, 30, 38, 45]. Sum of middle elements is 32 (15 + 17).
// Expected Time Complexity: O(log n)
// Expected Auxiliary Space: O(1)

// Constraints:
// 1 <= arr1.size() == arr2.size() <= 103
// 1 <= arr1[i] <= 106
// 1 <= arr2[i] <= 106

//<______________________________________________SOLUTION__________________________________________________________>

//{ Driver Code Starts
// Initial Template for javascript
// Position this line where user code will be pasted.

const readline = require('readline');

function main() {
    const rl =
        readline.createInterface({input : process.stdin, output : process.stdout});

    let t;
    let testCases = [];
    let inputCount = 0;

    rl.question('', (line) => {
        t = parseInt(line.trim());
        inputCount = t * 2;

        rl.on('line', (line) => {
            testCases.push(line.trim());
            if (testCases.length === inputCount) {
                rl.close();
            }
        });
    });

    rl.on('close', () => {
        const solution = new Solution();
        for (let i = 0; i < t; i++) {
            const arr1 = testCases[2 * i].split(' ').map(Number);
            const arr2 = testCases[2 * i + 1].split(' ').map(Number);
            const res = solution.SumofMiddleElements(arr1, arr2);
            console.log(res);
        }
    });
}

main();

// } Driver Code Ends


// User function Template for javascript

//<_____________________________________________MAIN-SOLUTION__________________________________________________________>

class Solution {
    SumofMiddleElements(arr1, arr2) {
        // Code Here
        let n = arr1.length;
        let low = 0, high = n;
        
        while (low <= high) {
            let partition1 = Math.floor((low + high) / 2);
            let partition2 = n - partition1;

            let maxLeft1 = partition1 === 0 ? -Infinity : arr1[partition1 - 1];
            let minRight1 = partition1 === n ? Infinity : arr1[partition1];
            
            let maxLeft2 = partition2 === 0 ? -Infinity : arr2[partition2 - 1];
            let minRight2 = partition2 === n ? Infinity : arr2[partition2];

            if (maxLeft1 <= minRight2 && maxLeft2 <= minRight1) {
                return Math.max(maxLeft1, maxLeft2) + Math.min(minRight1, minRight2);
            } else if (maxLeft1 > minRight2) {
                high = partition1 - 1;
            } else {
                low = partition1 + 1;
            }
        }
    }
}



//Compilation Completed
For Input: 
1 2 4 6 10
4 5 6 9 12
Your Output: 
11
Expected Output: 
11