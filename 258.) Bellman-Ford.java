// 258.) Given an weighted graph with V vertices numbered from 0 to V-1 and E edges, represented by a 
//       2d array edges[][], where edges[i] = [u, v, w] represents a direct edge from node u to v having 
//       w edge weight. You are also given a source vertex src.

// Your task is to compute the shortest distances from the source to all other vertices. If a vertex is 
// unreachable from the source, its distance should be marked as 108. Additionally, if the graph contains 
// a negative weight cycle, return [-1] to indicate that shortest paths cannot be reliably computed.

// Examples:

// Input: V = 5, edges[][] = [[1, 3, 2], [4, 3, -1], [2, 4, 1], [1, 2, 1], [0, 1, 5]], src = 0

// Output: [0, 5, 6, 6, 7]
// Explanation: Shortest Paths:
// For 0 to 1 minimum distance will be 5. By following path 0 → 1
// For 0 to 2 minimum distance will be 6. By following path 0 → 1  → 2
// For 0 to 3 minimum distance will be 6. By following path 0 → 1  → 2 → 4 → 3 
// For 0 to 4 minimum distance will be 7. By following path 0 → 1  → 2 → 4
// Input: V = 4, edges[][] = [[0, 1, 4], [1, 2, -6], [2, 3, 5], [3, 1, -2]], src = 0

// Output: [-1]
// Explanation: The graph contains a negative weight cycle formed by the path 1 → 2 → 3 → 1, where the total 
// weight of the cycle is negative.
// Constraints:
// 1 ≤ V ≤ 100
// 1 ≤ E = edges.size() ≤ V*(V-1)
// -1000 ≤ w ≤ 1000
// 0 ≤ src < V
// <______________________________________________SOLUTION___________________________________________________>
//{ Driver Code Starts
import java.io.*;
import java.lang.*;
import java.util.*;

class DriverClass {
    public static void main(String args[]) throws IOException {

        BufferedReader read = new BufferedReader(new InputStreamReader(System.in));
        int t = Integer.parseInt(read.readLine().trim());

        while (t-- > 0) {

            int V = Integer.parseInt(read.readLine().trim());
            int E = Integer.parseInt(read.readLine().trim());

            int[][] edges = new int[E][3];

            for (int i = 0; i < E; i++) {
                String[] parts = read.readLine().trim().split(" ");
                int u = Integer.parseInt(parts[0]);
                int v = Integer.parseInt(parts[1]);
                int w = Integer.parseInt(parts[2]);

                edges[i][0] = u;
                edges[i][1] = v;
                edges[i][2] = w;
            }

            // Read source vertex
            int S = Integer.parseInt(read.readLine().trim());

            Solution ob = new Solution();
            int[] ptr = ob.bellmanFord(V, edges, S);

            // Print the result
            for (int i = 0; i < ptr.length; i++) {
                System.out.print(ptr[i] + " ");
            }
            System.out.println();
            System.out.println("~");
        }
    }
}
// } Driver Code Ends


// User function Template for Java



// <___________________________________________________MAIN-SOLUTION_____________________________________________________>

class Solution {
    public int[] bellmanFord(int V, int[][] edges, int src) {
        // code here
         int[] dist = new int[V];
        // Initialize distances from src to all other vertices as INFINITE
        int INF = (int) Math.pow(10, 8);
        for (int i = 0; i < V; i++) {
            dist[i] = INF;
        }
        dist[src] = 0;

        // Relax all edges |V| - 1 times.
        for (int i = 1; i < V; i++) {
            for (int[] edge : edges) {
                int u = edge[0];
                int v = edge[1];
                int weight = edge[2];
                if (dist[u] != INF && dist[u] + weight < dist[v]) {
                    dist[v] = dist[u] + weight;
                }
            }
        }

        // Check for negative-weight cycles.
        for (int[] edge : edges) {
            int u = edge[0];
            int v = edge[1];
            int weight = edge[2];
            if (dist[u] != INF && dist[u] + weight < dist[v]) {
                return new int[]{-1};
            }
        }

        return dist;
    }
}


//Compilation Completed
Input: 
V =
5
E =
5
edges[][] =
1 3 2
4 3 -1
2 4 1
1 2 1
0 1 5
src =
0
Your Output:
0 5 6 6 7
Expected Output:
0 5 6 6 7