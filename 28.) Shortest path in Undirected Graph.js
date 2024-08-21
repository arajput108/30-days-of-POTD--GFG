// 28.) You are given an Undirected Graph having unit weight of the edges, find the shortest path from src to all the vertex and if it is unreachable to reach any vertex, then return -1 for that vertex.

// Examples :

// Input:
// n = 9, m = 10
// edges=[[0,1],[0,3],[3,4],[4,5],[5,6],[1,2],[2,6],[6,7],[7,8],[6,8]] 
// src=0
// Output:
// 0 1 2 1 2 3 3 4 4

// Input:
// n = 4, m = 2
// edges=[[1,3],[3,0]] 
// src=3
// Output:
// 1 1 -1 0

// Constraint:
// 1<=n,m<=104
// 0<=edges[i][j]<=n-1

// Expected Time Complexity: O(N + E), where N is the number of nodes and E is the edges
// Expected Space Complexity: O(N)



// <______________________________________________SOLUTION__________________________________________________________>
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

        let nd = readLine().split(' ').map(Number);
        let n = nd[0];
        let m = nd[1];

        let edges = [];
        for (let i = 0; i < m; i++) {
            let a = readLine().trim().split(' ').map((x) => parseFloat(x));
            edges.push(a);
        }
        let src = parseInt(readLine());
        let obj = new Solution();
        let res = obj.shortestPath(edges, n, m, src);

        let S_res = '';
        for (let i = 0; i < res.length; i++) {
            S_res += (res[i]);
            S_res += ' ';
        }
        console.log(S_res);
    }
}

// } Driver Code Ends
// <____________________________________________MAIN-SOLUTION_________________________________________________________>
class Solution {
    /**
    * @param number n
    * @param number m
    * @param number src
    * @param number[][] edges

    * @returns number[]
    */
    shortestPath(edges, n, m, src) {
        // code here
         // Initialize the adjacency list
        const adj = Array.from({ length: n }, () => []);
        
        // Build the graph
        for (let [u, v] of edges) {
            adj[u].push(v);
            adj[v].push(u);
        }
        
        // Distance array initialized to -1
        const dist = Array(n).fill(-1);
        dist[src] = 0; // Distance to the source itself is 0
        
        // BFS queue
        const queue = [src];
        
        while (queue.length > 0) {
            const node = queue.shift();
            
            // Explore neighbors
            for (let neighbor of adj[node]) {
                if (dist[neighbor] === -1) { // If not visited
                    dist[neighbor] = dist[node] + 1;
                    queue.push(neighbor);
                }
            }
        }
        
        return dist;
    }
}


Compilation Completed
For Input: 
9 10
0 1
0 3 
3 4 
4 5 
5 6 
1 2 
2 6 
6 7 
7 8 
6 8 
0
Your Output: 
0 1 2 1 2 3 3 4 4
Expected Output: 
0 1 2 1 2 3 3 4 4




Explanation:
Graph Representation: The graph is represented using an adjacency list where each node points to a list of its neighboring nodes.

Distance Array: We maintain an array dist where dist[i] represents the shortest distance from the source src to node i. Initially, all distances are set to -1 indicating that the node is unreachable. The distance to the source itself is set to 0.

BFS Algorithm:

Start BFS from the src node.
For each node, explore its neighbors. If a neighbor hasn't been visited (i.e., its distance is still -1), update its distance and add it to the queue for further exploration.
Output: After the BFS completes, the dist array contains the shortest distance from the source to each node. If a node is unreachable from the source, its distance remains -1.

This solution meets the expected time complexity of 
𝑂
(
𝑁
+
𝐸
)
O(N+E) and space complexity of 
𝑂
(
𝑁
)
O(N).






