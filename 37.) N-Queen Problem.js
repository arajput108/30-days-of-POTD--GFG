// 37.) The n-queens puzzle is the problem of placing n queens on a (n×n) chessboard such that no two queens can attack   
//      each other. Given an integer n, find all distinct solutions to the n-queens puzzle. Each solution contains distinct 
//      board configurations of the n-queens placement, where the solutions are a permutation of [1,2,3..n] in increasing 
//      order, here the number in the ith place denotes that the ith-column queen is placed in the row with that number. 
//      For eg below figure represents a chessboard [3 1 4 2].



// Examples:

// Input: 1
// Output: [1]
// Explaination: Only one queen can be placed in the single cell available.
// Input: 4
// Output: [[2 4 1 3 ],[3 1 4 2 ]]
// Explaination: These are the 2 possible solutions.
// Expected Time Complexity: O(n!)
// Expected Auxiliary Space: O(n2) 

// Constraints:
// 1 ≤ n ≤ 10


// <______________________________________________________SOLUTION_______________________________________________________>


//{ Driver Code Starts
//Initial Template for javascript

"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on("end", (_) => {
  inputString = inputString
    .trim()
    .split("\n")
    .map((string) => {
      return string.trim();
    });

  main();
});

function readLine() {
  return inputString[currentLine++];
}

/* Function to print an array */
function printArray(arr, size) {
  let i;
  let s = "";
  for (i = 0; i < size; i++) {
    s += arr[i] + " ";
  }
  console.log(s);
}

function main() {
  let t = parseInt(readLine());
  let i = 0;
  for (; i < t; i++) {
    let n = parseInt(readLine())
    let obj = new Solution();
    let res = obj.nQueen(n);
    if(res.length == 0){
      console.log(-1);
    } else {
      let ans = "";
      for(let row of res){
        let s = "[";
        for(let k = 0;k<row.length;k++){
          s+=row[k];
          s+=" ";
        }
        s+="]";
        ans+=s;
        ans+=" ";
      }
      console.log(ans);
    }
  }
}
// } Driver Code Ends


//User function Template for javascript

/**
 * @param {number} n
 * @return {number[][]}
 */


// <________________________________________________MAIN-SOLUTION_______________________________________________________>
class Solution {
    nQueen(n){
        //code here
          const result = [];
        const board = new Array(n).fill(0);
        this.solve(0, n, board, result);
        return result;
    }

    solve(col, n, board, result) {
        if (col === n) {
            result.push([...board]);
            return;
        }
        for (let row = 1; row <= n; row++) {
            if (this.isSafe(row, col, board)) {
                board[col] = row;
                this.solve(col + 1, n, board, result);
                board[col] = 0; // Backtrack
            }
        }
    }

    isSafe(row, col, board) {
        for (let prevCol = 0; prevCol < col; prevCol++) {
            const prevRow = board[prevCol];
            if (prevRow === row || Math.abs(prevRow - row) === Math.abs(prevCol - col)) {
                return false;
            }
        }
        return true;
    }
}




// Compilation Completed
For Input: 
4
Your Output: 
[2 4 1 3 ] [3 1 4 2 ]
Expected Output: 
[2 4 1 3 ] [3 1 4 2 ]