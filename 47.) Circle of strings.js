// 47.) Given an array arr of lowercase strings, determine if the strings can be chained together to form a circle.
//      A string X can be chained together with another string Y if the last character of X is the same as the 
//      first character of Y. If every string of the array can be chained with exactly two strings of the 
//      array(one with the first character and the second with the last character of the string), it will form 
//      a circle.

// For example, for the array arr[] = {"for", "geek", "rig", "kaf"} the answer will be Yes as the given strings can be chained as "for", "rig", "geek" and "kaf"

// Examples

// Input: arr[] = ["abc", "bcd", "cdf"]
// Output: 0
// Explaination: These strings can't form a circle because no string has 'd'at the starting index.
// Input: arr[] = ["ab" , "bc", "cd", "da"]
// Output: 1
// Explaination: These strings can form a circle of strings.
// Expected Time Complexity: O(n)
// Expected Auxiliary Space: O(n)

// Constraints: 
// 1 ≤ length of strings ≤ 20



// <_______________________________________________SOLUTION___________________________________________________>
//{ Driver Code Starts
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
        let n = parseInt(readLine());
        let arr = new Array(n);
        let input_ar1 = readLine().split(' ');
        for (let i = 0; i < n; i++) arr[i] = input_ar1[i];
        let obj = new Solution();
        console.log(obj.isCircle(arr));
    }
}
// } Driver Code Ends


// User function Template for javascript

/**
 * @param {number} n
 * @param {number[} a
 * @returns {number}
 */

// <___________________________________________________MAIN-SOLUTION_____________________________________________________>

class Solution {
    isCircle(arr) {
        // your code here
        // Step 1: Initialize arrays to store in-degrees and out-degrees
        let inDegree = new Array(26).fill(0);
        let outDegree = new Array(26).fill(0);
        
        // Adjacency list for each character (represented by its index 0-25)
        let graph = new Array(26).fill(0).map(() => []);
        
        // Helper function to get the index of a character
        const getIndex = (ch) => ch.charCodeAt(0) - 'a'.charCodeAt(0);
        
        // Step 2: Build the graph, and calculate in-degrees and out-degrees
        for (let str of arr) {
            let firstChar = str[0];
            let lastChar = str[str.length - 1];
            let u = getIndex(firstChar);
            let v = getIndex(lastChar);
            
            outDegree[u]++;
            inDegree[v]++;
            graph[u].push(v);
        }
        
        // Step 3: Check if in-degrees and out-degrees match for every character
        for (let i = 0; i < 26; i++) {
            if (inDegree[i] !== outDegree[i]) {
                return 0;  // If they don't match, circle formation is not possible
            }
        }
        
        // Step 4: Check if all characters involved in the graph are in the same connected component
        let visited = new Array(26).fill(false);
        
        // Find the first vertex with a non-zero degree (start for DFS)
        let start = -1;
        for (let i = 0; i < 26; i++) {
            if (outDegree[i] > 0) {
                start = i;
                break;
            }
        }
        
        // If no valid start vertex is found, return false
        if (start === -1) return 0;
        
        // Depth-First Search (DFS) to check if the graph is connected
        const dfs = (node) => {
            visited[node] = true;
            for (let neighbor of graph[node]) {
                if (!visited[neighbor]) {
                    dfs(neighbor);
                }
            }
        };
        
        // Perform DFS starting from the first character that has an outgoing edge
        dfs(start);
        
        // Step 5: Check if all characters that have edges are visited
        for (let i = 0; i < 26; i++) {
            if ((outDegree[i] > 0 || inDegree[i] > 0) && !visited[i]) {
                return 0;  // If any such character is not visited, return false
            }
        }
        
        // If all checks pass, return true (circle is possible)
        return 1;
    }
}




//Compilation Completed
For Input: 3
abc bcd cdf
Your Output: 0
Expected Output: 0