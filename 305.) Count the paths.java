// 305.) Given a Directed Acyclic Graph (DAG) with V nodes labeled from 0 to V-1, and a list of directed edges, 
//       count the total number of distinct paths from a given start node to a destination node. Each edge is 
//       represented as edges[i] = [u, v], indicating a directed edge from u to v.

// Examples :

// Input: edges[][] = [[0,1], [0,3], [2,0], [2,1], [1,3]], V = 4, src = 2, dest = 3
// Output: 3
// Explanation: There are three ways to reach at 3 from 2. These are: 2 -> 1 -> 3, 2 -> 0 -> 3 and 2 -> 0 -> 1 -> 3.
// Print-all-paths-1
// Input: edges[][] = [[0,1], [1,2], [1,3], [2,3]], V = 4, src = 0, dest = 3
// Output: 2
// Explanation: There is two way to reach at 3 from 0 that is : 0 -> 1 -> 2 -> 3 and 0 -> 1 -> 3.
// Print-all-paths-2
// Constraints:
// 2  ≤  V  ≤  103
// 1  ≤   E = edges.size()  ≤  (V * (V - 1)) / 2
// <-------------------------------------------------SOLUTION-------------------------------------------------->
class Solution {
    public int countPaths(int[][] edges, int V, int src, int dest) {
        // Code here
         List<List<Integer>> graph = new ArrayList<>();
        
        for(int i=0; i<V; i++){
            graph.add(new ArrayList<>());
        }
        
        for(int[] edge : edges){
            graph.get(edge[0]).add(edge[1]);
        }
        
        Integer[] memo = new Integer[V];
        
        return dfs(graph, src, dest, memo);
    }
    
    private int dfs(List<List<Integer>> graph, int node, int dest, Integer[] memo){
        if(node == dest) return 1;
        
        if(memo[node] != null) return memo[node];
        
        int totalPaths = 0;
        
        for(int neighbor : graph.get(node)){
            totalPaths += dfs(graph, neighbor, dest, memo);
        }
        
        memo[node] = totalPaths;
        
        return totalPaths;
    }
}











// Compilation Completed
Input: 
V =
4
E =
5
src =
2
dest =
3
edges[][] =
0 1
0 3
2 0
2 1
1 3
Your Output:
3
Expected Output:
3