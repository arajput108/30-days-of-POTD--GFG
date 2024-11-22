// 119.) Given an array prices[] of length n, representing the prices of the stocks on different days. 
//       The task is to find the maximum profit possible by buying and selling the stocks on different 
//       days when at most one transaction is allowed. Here one transaction means 1 buy + 1 Sell. If it 
//       is not possible to make a profit then return 0.

// Note: Stock must be bought before being sold.

// Examples:

// Input: prices[] = [7, 10, 1, 3, 6, 9, 2]
// Output: 8
// Explanation: You can buy the stock on day 2 at price = 1 and sell it on day 5 at price = 9. Hence, the profit is 8.
// Input: prices[] = [7, 6, 4, 3, 1]
// Output: 0 
// Explanation: Here the prices are in decreasing order, hence if we buy any day then we cannot sell it at a greater 
//              price. Hence, the answer is 0.
// Input: prices[] = [1, 3, 6, 9, 11]
// Output: 10 
// Explanation: Since the array is sorted in increasing order, we can make maximum profit by buying at price[0] and 
//              selling at price[n-1].
// Constraint:
// 1 <= prices.size()<= 105
// 0 <= prices[i] <=104
// <______________________________________________SOLUTION___________________________________________________>
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
    let i = 0;
    for (; i < t; i++) {
        let prices = new Array();
        let input_ar1 = readLine().split(' ').map(x => parseInt(x));
        for (let i = 0; i < input_ar1.length; i++) prices.push(input_ar1[i]);
        let obj = new Solution();
        let res = obj.maximumProfit(prices);
        console.log(res);
        console.log("~");
    }
}
// } Driver Code Ends


// User function Template for javascript
/**
 * @param {number[]} prices
 * @returns {number}
 */


// <___________________________________________________MAIN-SOLUTION_____________________________________________________>
class Solution {
    // Function to find the maximum profit.
    maximumProfit(prices) {
        // your code here
        let minPrice = Infinity; // Initialize to a very high value
        let maxProfit = 0;       // Initialize the maximum profit to 0

        for (let price of prices) {
            // Update the minimum price seen so far
            minPrice = Math.min(minPrice, price);
            // Calculate the profit if we sell at the current price
            const profit = price - minPrice;
            // Update the maximum profit
            maxProfit = Math.max(maxProfit, profit);
        }

        return maxProfit;
    }
}



// Compilation Completed

For Input:  7 1 5 3 6 4
Your Output:  5
Expected Output:  5