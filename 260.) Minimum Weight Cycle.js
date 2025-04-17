// 260.) Given an undirected, weighted graph with V vertices numbered from 0 to V-1 and E edges, represented 
//       by a 2d array edges[][], where edges[i] = [u, v, w] represents the edge between the nodes u and v 
//       having w edge weight.
// Your task is to find the minimum weight cycle in this graph.

// Examples:

// Input: V = 5, edges[][] = [[0, 1, 2], [1, 2, 2], [1, 3, 1], [1, 4, 1], [0, 4, 3], [2, 3, 4]]

// Output: 6
// Explanation: 

// Minimum-weighted cycle is  0 → 1 → 4 → 0 with a total weight of 6(2 + 1 + 3)
// Input: V = 5, edges[][] = [[0, 1, 3], [1, 2, 2], [0, 4, 1], [1, 4, 2], [1, 3, 1], [3, 4, 2], [2, 3, 3]]

// Output: 5
// Explanation: 

// Minimum-weighted cycle is  1 → 3 → 4 → 1 with a total weight of 5(1 + 2 + 2)
// Constraints:
// 1 ≤ V ≤ 100
// 1 ≤ E = edges.size() ≤ 103 
// 1 ≤ edges[i][j] ≤ 100
//{ Driver Code Starts
// <______________________________________________SOLUTION___________________________________________________>
//{ Driver Code Starts
// Initial Template for javascript

const readline = require('readline');

const rl = readline.createInterface({input : process.stdin, output : process.stdout});

let input = [];

rl.on('line', (line) => { input.push(line.trim()); });

rl.on('close', () => {
    let idx = 0;
    const t = parseInt(input[idx++]);

    for (let test = 0; test < t; test++) {
        const V = parseInt(input[idx++]);
        const E = parseInt(input[idx++]);

        let edges = [];

        for (let i = 0; i < E; i++) {
            const [u, v, w] = input[idx++].split(' ').map(Number);
            edges.push([ u, v, w ]);
            edges.push([ v, u, w ]); // Undirected
        }

        const obj = new Solution();
        const res = obj.findMinCycle(V, edges);

        console.log(res);
    }
});
// } Driver Code Ends


// <___________________________________________________MAIN-SOLUTION_____________________________________________________>


class Solution {
    constructor() {
        this.INF = Number.MAX_SAFE_INTEGER;
    }

    findMinCycle(V, edges) {
        const dist = Array.from({ length: V }, () => Array(V).fill(this.INF));
        const graph = Array.from({ length: V }, () => Array(V).fill(this.INF));

        for (const [u, v, w] of edges) {
            graph[u][v] = graph[v][u] = Math.min(graph[u][v], w);
            dist[u][v] = dist[v][u] = graph[u][v];
        }

        let ans = this.INF;

        for (let k = 0; k < V; k++) {
            for (let i = 0; i < k; i++) {
                for (let j = 0; j < i; j++) {
                    if (
                        dist[i][j] !== this.INF &&
                        graph[i][k] !== this.INF &&
                        graph[k][j] !== this.INF
                    ) {
                        const cycleWeight = dist[i][j] + graph[i][k] + graph[k][j];
                        ans = Math.min(ans, cycleWeight);
                    }
                }
            }

            for (let i = 0; i < V; i++) {
                for (let j = 0; j < V; j++) {
                    if (dist[i][k] !== this.INF && dist[k][j] !== this.INF) {
                        dist[i][j] = Math.min(dist[i][j], dist[i][k] + dist[k][j]);
                    }
                }
            }
        }

        return ans === this.INF ? -1 : ans;
    }
}



// Compilation Completed
Input: 
V =
5
E =
6
edges[][] =
0 1 2
1 2 2
1 3 1
1 4 1
0 4 3
2 3 4
Your Output:
6
Expected Output:
6