// 6.) Consider a rat placed at (0, 0) in a square matrix mat of order n* n. It has to reach the destination at (n - 1, n - 1). Find all possible paths that the rat can take to reach from source to destination. The directions in which the rat can move are 'U'(up), 'D'(down), 'L' (left), 'R' (right). Value 0 at a cell in the matrix represents that it is blocked and rat cannot move to it while value 1 at a cell in the matrix represents that rat can be travel through it.
// Note: In a path, no cell can be visited more than one time. If the source cell is 0, the rat cannot move to any other cell. In case of no path, return an empty list. The driver will output "-1" automatically.

// Examples:

// Input: mat[][] = [[1, 0, 0, 0],
//                 [1, 1, 0, 1], 
//                 [1, 1, 0, 0],
//                 [0, 1, 1, 1]]
// Output: DDRDRR DRDDRR
// Explanation: The rat can reach the destination at (3, 3) from (0, 0) by two paths - DRDDRR and DDRDRR, when printed in sorted order we get DDRDRR DRDDRR.
// Input: mat[][] = [[1, 0],
//                 [1, 0]]
// Output: -1
// Explanation: No path exists and destination cell is blocked.
// Expected Time Complexity: O(3n^2)
// Expected Auxiliary Space: O(l * x)
// Here l = length of the path, x = number of paths.

// Constraints:
// 2 ≤ n ≤ 5
// 0 ≤ mat[i][j] ≤ 1

// <_______________________________________________SOLUTION______________________________________________________________>

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

        let n = parseInt(readLine());

        let arr = [];
        for (let i = 0; i < n; i++) {
            let a = readLine().trim().split(' ').map((x) => parseFloat(x));
            arr.push(a);
        }

        let obj = new Solution();
        let res = obj.findPath(arr);

        let S_res = '';
        if (res.length == 0) {
            console.log(-1);
        } else {
            for (let i = 0; i < res.length; i++) {
                S_res += (res[i]);
                S_res += ' ';
            }
            console.log(S_res);
        }
    }
}

// } Driver Code Ends


// <______________________________________________MAIN-SOLUTION__________________________________________________________>

class Solution {
    /**
    * @param number n
    * @param number[][] arr

    * @returns string[]
    */
    findPath(arr) {
        // code here
        const n = arr.length;
        const result = [];

        // If the source or destination is blocked, return empty list
        if (arr[0][0] === 0 || arr[n - 1][n - 1] === 0) {
            return [];
        }

        const directions = ['D', 'L', 'R', 'U'];
        const moveX = [1, 0, 0, -1];
        const moveY = [0, -1, 1, 0];

        const isSafe = (x, y, visited) => {
            return (
                x >= 0 && x < n &&
                y >= 0 && y < n &&
                arr[x][y] === 1 &&
                !visited[x][y]
            );
        };

        const solve = (x, y, path, visited) => {
            if (x === n - 1 && y === n - 1) {
                result.push(path);
                return;
            }

            for (let i = 0; i < 4; i++) {
                const nextX = x + moveX[i];
                const nextY = y + moveY[i];

                if (isSafe(nextX, nextY, visited)) {
                    visited[x][y] = true;
                    solve(nextX, nextY, path + directions[i], visited);
                    visited[x][y] = false;
                }
            }
        };

        const visited = Array.from({ length: n }, () => Array(n).fill(false));
        solve(0, 0, '', visited);

        return result.length > 0 ? result.sort() : ["-1"];
    }
}

//Compilation Completed
For Input: 
4
1 0 0 0
1 1 0 1 
1 1 0 0 
0 1 1 1
Your Output:  DDRDRR DRDDRR
Expected Output: DDRDRR DRDDRR
