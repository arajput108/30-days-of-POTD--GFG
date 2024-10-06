// 73.) Given a grid of size n*m (n is the number of rows and m is the number of columns in the grid) consisting 
//      of '0's (Water) and '1's(Land). Find the number of islands.

// Note: An island is either surrounded by water or the boundary of a grid and is formed by connecting adjacent 
//       lands horizontally or vertically or diagonally i.e., in all 8 directions.

// Examples:

// Input: grid = [[0,1],[1,0],[1,1],[1,0]]
// Output: 1
// Explanation:
// The grid is-
// 0 1
// 1 0
// 1 1
// 1 0
// All lands are connected.
// Input: grid = [[0,1,1,1,0,0,0],[0,0,1,1,0,1,0]]
// Output: 2
// Expanation:
// The grid is-
// 0 1 1 1 0 0 0
// 0 0 1 1 0 2 0 
// There are two islands in the grid. One island is marked by '1' and the other by '2'.
// Expected Time Complexity: O(n*m)
// Expected Space Complexity: O(n*m)

// Constraints:
// 1 ≤ n, m ≤ 500
// 0 ≤ grid[i][j] ≤ 1Given a grid of size n*m (n is the number of rows and m is the number of columns in the grid) consisting of '0's (Water) and '1's(Land). Find the number of islands.


// Note: An island is either surrounded by water or the boundary of a grid and is formed by connecting adjacent lands horizontally or vertically or diagonally i.e., in all 8 directions.

// Examples:

// Input: grid = [[0,1],[1,0],[1,1],[1,0]]
// Output: 1
// Explanation:
// The grid is-
// 0 1
// 1 0
// 1 1
// 1 0
// All lands are connected.
// Input: grid = [[0,1,1,1,0,0,0],[0,0,1,1,0,1,0]]
// Output: 2
// Expanation:
// The grid is-
// 0 1 1 1 0 0 0
// 0 0 1 1 0 2 0 
// There are two islands in the grid. One island is marked by '1' and the other by '2'.
// Expected Time Complexity: O(n*m)
// Expected Space Complexity: O(n*m)

// Constraints:
// 1 ≤ n, m ≤ 500
// grid[i][j] = {'0', '1'}

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
    inputString = inputString.trim().split('\n').map(
        string => { return string.trim(); });

    main();
});

function readLine() {
    return inputString[currentLine++];
}

function main() {

    let t = parseInt(readLine());
    let i = 0;
    for (; i < t; i++) {
        let input_line = readLine().split(' ');
        let n = parseInt(input_line[0]);
        let m = parseInt(input_line[1]);

        let grid = new Array();
        let obj = new Solution();
        for (let i = 0; i < n; i++) {
            input_line = readLine().split(' ');
            grid.push(input_line);
        }
        let ans = obj.numIslands(grid);
        console.log(ans);
    }
}
// } Driver Code Ends


// User function Template for javascript

/**
 * @param {string[][]} grid
 * @returns {number}
*/

// <___________________________________________MAIN-SOLUTION______________________________________________>   
class Solution {
    // Function to find the number of islands.
    numIslands(grid) {
        // code here
        // Edge case: if grid is empty
        if (!grid || grid.length === 0) return 0;

        const n = grid.length; // number of rows
        const m = grid[0].length; // number of columns
        let count = 0; // To count the number of islands

        // Directions array for 8 directions (horizontal, vertical, diagonal)
        const directions = [
            [-1, 0], [1, 0], [0, -1], [0, 1], // vertical, horizontal
            [-1, -1], [-1, 1], [1, -1], [1, 1] // diagonal directions
        ];

        // Helper function to perform iterative DFS using a stack
        const dfs = (i, j) => {
            const stack = [[i, j]];
            grid[i][j] = '0'; // Mark the initial cell as visited

            while (stack.length > 0) {
                const [x, y] = stack.pop();

                // Explore all 8 directions
                for (let [dx, dy] of directions) {
                    const newX = x + dx;
                    const newY = y + dy;

                    // Boundary check and if it's land ('1'), visit it
                    if (newX >= 0 && newX < n && newY >= 0 && newY < m && grid[newX][newY] === '1') {
                        grid[newX][newY] = '0'; // Mark as visited
                        stack.push([newX, newY]); // Push the cell onto the stack for further exploration
                    }
                }
            }
        };

        // Main loop to go through the entire grid
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < m; j++) {
                // If we find land ('1'), it means we have found a new island
                if (grid[i][j] === '1') {
                    count++; // Increment the island count
                    dfs(i, j); // Perform iterative DFS to mark the entire island
                }
            }
        }

        return count;
    }
}






// Compilation Completed
For Input: 
4 2
0 1
1 0
1 1
1 0
Your Output: 
1
Expected Output: 
1