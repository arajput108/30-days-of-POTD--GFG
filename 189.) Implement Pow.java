// 189.) Implement the function power(b, e), which calculates b raised to the power of e (i.e. be).

// Examples:

// Input: b = 3.00000, e = 5
// Output: 243.00000
// Input: b = 0.55000, e = 3
// Output: 0.16638
// Input: b = -0.67000, e = -7
// Output: -16.49971
// Constraints:

// -100.0 < b < 100.0
// -109 <= e <= 109
// Either b is not zero or e > 0.
// -104 <= be <= 104
// <______________________________________________SOLUTION___________________________________________________>
//{ Driver Code Starts
// Initial Template for javascript

// Position this line where user code will be pasted.

// Function to handle input and output
function main() {
    const readline = require('readline');

    const rl =
        readline.createInterface({input : process.stdin, output : process.stdout});

    let tokens = [];

    rl.on('line', (line) => {
          // Split the input line into tokens separated by whitespace
          tokens = tokens.concat(line.trim().split(/\s+/));
      }).on('close', () => {
        let idx = 0;
        const t = parseInt(tokens[idx++], 10); // Number of test cases
        const sol = new Solution();

        for (let i = 0; i < t; i++) {
            // Parse base and exponent for each test case
            const b = parseFloat(tokens[idx++]);
            const e = parseInt(tokens[idx++], 10);

            // Compute the power and format the output to 5 decimal places
            const result = sol.power(b, e).toFixed(5);
            console.log(result);
            console.log("~");
        }

        process.exit(0);
    });
}

// Invoke the main function to start the program
main();

// } Driver Code Ends
// User function Template for javascript
// <___________________________________________________MAIN-SOLUTION_____________________________________________________>

class Solution {
    /**
     * Computes b raised to the power e recursively.
     * @param {number} b - The base.
     * @param {number} e - The exponent.
     * @returns {number} - The result of b^e.
     */
    power(b, e) {
        // Code here
        return Math.pow(b,e);
    }
}

// Compilation Completed
For Input: 
3.00000
5
Your Output: 
243.00000
Expected Output: 
243.00000