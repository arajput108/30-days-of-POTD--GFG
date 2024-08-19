// 26.) Given an array arr[] and an integer k where k is smaller than the size of the array, the task is to 
//      find the kth smallest element in the given array. It is given that all array elements are distinct.

// Follow up: Don't solve it using the inbuilt sort function.

// Examples :

// Input: arr[] = [7, 10, 4, 3, 20, 15], k = 3
// Output:  7
// Explanation: 3rd smallest element in the given array is 7.
// Input: arr[] = [7, 10, 4, 20, 15], k = 4 
// Output:  15
// Explanation: 4th smallest element in the given array is 15.
// Expected Time Complexity: O(n+(max_element) )
// Expected Auxiliary Space: O(max_element)
// Constraints:
// 1 <= arr.size <= 106
// 1<= arr[i] <= 106
// 1 <= k <= n

// <______________________________________________SOLUTION__________________________________________________________>
//{ Driver Code Starts
// Initial Template for javascript

"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => { inputString += inputStdin; });

process.stdin.on("end", (_) => {
    inputString =
        inputString.trim().split("\n").map((string) => { return string.trim(); });

    main();
});

function readLine() { return inputString[currentLine++]; }

function main() {
    let t = parseInt(readLine());
    let i = 0;

    for (; i < t; i++) {
        // let N = parseInt(readLine());
        let arr = readLine().trim().split(" ").map((x) => parseInt(x));
        let k = parseInt(readLine());
        let obj = new Solution();
        let res = obj.kthSmallest(arr, k);
        console.log(res);
    }
}

// } Driver Code Ends


// User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */



// <_____________________________________________MAIN-SOLUTION__________________________________________________________>

// To solve the problem of finding the kth smallest element in an array without using the inbuilt sort function,
// you can use the QuickSelect algorithm. This algorithm is based on the QuickSort technique and can find the kth 
// smallest element in expected O(n) time.

//Here’s how the QuickSelect algorithm can be implemented in JavaScript:
class Solution {
    kthSmallest(arr, k) {
        // code here
        return this.quickSelect(arr, 0, arr.length - 1, k - 1);
    }

    quickSelect(arr, left, right, k) {
        if (left === right) { 
            return arr[left];
        }
        
        let pivotIndex = this.partition(arr, left, right);

        if (k === pivotIndex) {
            return arr[k];
        } else if (k < pivotIndex) {
            return this.quickSelect(arr, left, pivotIndex - 1, k);
        } else {
            return this.quickSelect(arr, pivotIndex + 1, right, k);
        }
    }

    partition(arr, left, right) {
        let pivot = arr[right];
        let pivotIndex = left;

        for (let i = left; i < right; i++) {
            if (arr[i] < pivot) {
                [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];
                pivotIndex++;
            }
        }
        [arr[pivotIndex], arr[right]] = [arr[right], arr[pivotIndex]];
        return pivotIndex;
    }
}


//Compilation Completed
For Input: 
7 10 4 3 20 15
3
Your Output: 7
Expected Output: 7




// Explanation:

// 1.) QuickSelect Algorithm:

// It's similar to the QuickSort algorithm.
// The key idea is to partition the array around a pivot element, such that elements on the left of the pivot are smaller,
// and elements on the right are larger.
// Depending on the position of the pivot element after partitioning, you can decide whether to recursively search in the 
// left or right subarray.

// 2.) Partition Function:

// The partition function rearranges the elements around a pivot.
// The pivot is chosen to be the last element in the current subarray.
// After partitioning, the pivot is placed in its correct position in the sorted array.
// Time Complexity:

// The expected time complexity of QuickSelect is O(n).
// In the worst case (e.g., when the array is already sorted), it can degrade to O(n^2), but on average, it's O(n).
// Auxiliary Space:

// The space complexity is O(1) if we ignore the space used by the recursion stack.
// This method is efficient and meets the problem's constraints.






