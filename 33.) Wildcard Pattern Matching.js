// 33.) Given two strings pattern and str which may be of different size, You have to return 1 if the wildcard pattern 
//      i.e. pattern, matches with str else return 0. All characters of the string str and pattern always belong to the 
//      Alphanumeric characters.

// The wildcard pattern can include the characters ? and *
// ‘?’ – matches any single character.
// ‘*’ – Matches any sequence of characters (including the empty sequence).

// Note: The matching should cover the entire str (not partial str).

// Examples:

// Input: pattern = "ba*a?", str = "baaabab"
// Output: 1
// Explanation: replace '*' with "aab" and 
// '?' with 'b'.
// Input: pattern = "a*ab", str = "baaabab"
// Output: 0
// Explanation: Because in string pattern character 'a' at first position,
// pattern and str can't be matched. 
// Expected Time Complexity: O(n*m)
// Expected Auxiliary Space: O(n*m)

// Constraints:
// 1 <= length of(str, pattern) <= 200


// <___________________________________________SOLUTION__________________________________________________________>
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
    let pattern = readLine();
    let str = readLine();
    let obj = new Solution();
    let res = obj.wildCard(pattern,str);
    console.log(res);
  }
}
// } Driver Code Ends


//User function Template for javascript

/**
 * @param {string} pattern
 * @param {string} str
 * @return {number}
 */



// <___________________________________________MAIN-SOLUTION__________________________________________________________>
class Solution {
    wildCard(pattern,str){
        //code here
        let m = pattern.length;
        let n = str.length;

        // Create a 2D dp array
        let dp = Array(m + 1).fill(false).map(() => Array(n + 1).fill(false));

        // Empty pattern matches empty string
        dp[0][0] = true;

        // Fill the first row for patterns like *, **, ***, etc.
        for (let i = 1; i <= m; i++) {
            if (pattern[i - 1] == '*') {
                dp[i][0] = dp[i - 1][0];
            }
        }

        // Fill the dp array
        for (let i = 1; i <= m; i++) {
            for (let j = 1; j <= n; j++) {
                if (pattern[i - 1] == '*') {
                    dp[i][j] = dp[i - 1][j] || dp[i][j - 1];
                } else if (pattern[i - 1] == '?' || pattern[i - 1] == str[j - 1]) {
                    dp[i][j] = dp[i - 1][j - 1];
                }
            }
        }

        // The result is in the last cell
        return dp[m][n] ? 1 : 0;
    }
}



// Compilation Completed
For Input: 
ba*a?
baaabab
Your Output: 
1
Expected Output: 
1