// 217.) Given q queries, You task is to implement the following four functions for a stack:

// push(x) – Insert an integer x onto the stack.
// pop() – Remove the top element from the stack.
// peek() - Return the top element from the stack. If the stack is empty, return -1.
// getMin() – Retrieve the minimum element from the stack in O(1) time. If the stack is empty, return -1.
// Each query can be one of the following:

// 1 x : Push x onto the stack.
// 2 : Pop the top element from the stack.
// 3: Return the top element from the stack. If the stack is empty, return -1.
// 4: Return the minimum element from the stack.
// Examples:

// Input: q = 7, queries = [[1, 2], [1, 3], [3], [2], [4], [1, 1], [4]]
// Output: [3, 2, 1]
// Explanation: 
// push(2): Stack is [2]
// push(3): Stack is [2, 3]
// peek(): Top element is 3
// pop(): Removes 3, stack is [2]
// getMin(): Minimum element is 2
// push(1): Stack is [2, 1]
// getMin(): Minimum element is 1
// Input: q = 4, queries = [[1, 4], [1, 2], [4], [3]]
// Output: [2, 2]
// Explanation: 
// push(4): Stack is [4]
// push(2): Stack is [4, 2]
// getMin(): Minimum element is 2
// peek(): Top element is 2
// Input: q = 5, queries = [[1, 10], [4], [1, 5], [4], [2]]
// Output: [10, 5]
// Explanation: 
// push(10): Stack is [10]
// getMin(): Minimum element is 10
// push(5): Stack is [10, 5]
// getMin(): Minimum element is 5
// pop(): Removes 5, stack is [10]
// Constraints:
// 1 <= q <= 105
// 0 <= values on the stack <= 109
// <______________________________________________SOLUTION___________________________________________________>
//{ Driver Code Starts
'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => { inputString += inputStdin; });

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => string.trim());
    main();
});

function readLine() { return inputString[currentLine++]; }

function main() {
    let t = parseInt(readLine());

    for (let i = 0; i < t; i++) {
        let Q = parseInt(readLine());
        let st = new Solution();
        let results = [];

        for (let j = 0; j < Q; j++) {
            let query = readLine().split(' ').map(Number);
            let QueryType = query[0];

            if (QueryType === 1) {
                st.push(query[1]); // Push operation
            } else if (QueryType === 2) {
                st.pop(); // Pop operation (no output)
            } else if (QueryType === 3) {
                results.push(st.peek()); // Peek operation
            } else if (QueryType === 4) {
                results.push(st.getMin()); // GetMin operation
            }
        }

        console.log(results.join(" ")); // Print all results in one line
        console.log("~");
    }
}

// } Driver Code Ends


// <___________________________________________________MAIN-SOLUTION_____________________________________________________>

class Solution {
    constructor() {
        this.stack = [];
        this.minStack = [];
    }

    // Push an element onto the stack
    push(x) {
        this.stack.push(x);
        if (this.minStack.length === 0 || x <= this.minStack[this.minStack.length - 1]) {
            this.minStack.push(x);
        } else {
            this.minStack.push(this.minStack[this.minStack.length - 1]);
        }
    }

    // Pop the top element from the stack
    pop() {
        if (this.stack.length > 0) {
            this.stack.pop();
            this.minStack.pop();
        }
    }

    // Return the top element of the stack
    peek() {
        return this.stack.length > 0 ? this.stack[this.stack.length - 1] : -1;
    }

    // Retrieve the minimum element from the stack in O(1) time
    getMin() {
        return this.minStack.length > 0 ? this.minStack[this.minStack.length - 1] : -1;
    }
}



// Compilation Completed
For Input: 
7
1 2 
1 3 
3
2
4
1 1 
4
Your Output: 
3 2 1
Expected Output: 
3 2 1