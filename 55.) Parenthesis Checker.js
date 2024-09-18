// 55.) Given an expression string x. Examine whether the pairs and the orders of {,},(,),[,] are correct in exp. 
//      For example, the function should return 'true' for exp = [()]{}{[()()]()} and 'false' for exp = [(]).

// Note: The driver code prints "balanced" if function return true, otherwise it prints "not balanced".

// Examples :

// Input: {([])}
// Output: true
// Explanation: { ( [ ] ) }. Same colored brackets can form balanced pairs, with 0 number of unbalanced bracket.
// Input: ()
// Output: true
// Explanation: (). Same bracket can form balanced pairs,and here only 1 type of bracket is present and in balanced way.
// Input: ([]
// Output: false
// Explanation: ([]. Here square bracket is balanced but the small bracket is not balanced and Hence , the output will be unbalanced.
// Expected Time Complexity: O(|x|)
// Expected Auixilliary Space: O(|x|)

// Constraints:
// 1 ≤ |x| ≤ 105

// <___________________________________________________SOLUTION__________________________________________________>
//{ Driver Code Starts
//Initial Template for javascript
'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for(;i<t;i++)
    {
        let str = readLine();
        let obj = new Solution();
        if(obj.ispar(str)){
            console.log("balanced");
        }
        else{
            console.log("not balanced");
        }
        
    }
}
// } Driver Code Ends


//User function Template for javascript

/**
 * @param {string} x
 * @returns {boolean}
*/


// <________________________________________________MAIN-SOLUTION________________________________________________>
class Solution
{
    //Function to check if brackets are balanced or not.
    ispar(x)
    {
        //your code here
        // Stack to store opening brackets.
        let stack = [];

        // Hash map to match closing and opening brackets.
        let matchingBrackets = {
            ')': '(',
            ']': '[',
            '}': '{'
        };

        // Iterate through each character in the expression string.
        for (let i = 0; i < x.length; i++) {
            let char = x[i];

            // If it's an opening bracket, push it to the stack.
            if (char === '(' || char === '{' || char === '[') {
                stack.push(char);
            }
            // If it's a closing bracket, check for matching opening bracket.
            else if (char === ')' || char === '}' || char === ']') {
                // If the stack is empty or the top doesn't match, return false.
                if (stack.length === 0 || stack[stack.length - 1] !== matchingBrackets[char]) {
                    return false;
                } else {
                    // Pop the opening bracket from the stack.
                    stack.pop();
                }
            }
        }

        // If the stack is empty, all brackets are balanced.
        return stack.length === 0;

    }
}



// Compilation Completed
For Input:  {([])}
Your Output: balanced
Expected Output: balanced

 