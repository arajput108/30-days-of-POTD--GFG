// 249.) Given a connected undirected graph represented by a 2-d adjacency list adj[][], where 
//       each adj[i] represents the list of vertices connected to vertex i. Perform a Depth First 
//       Search (DFS) traversal starting from vertex 0, visiting vertices from left to right as per 
//       the given adjacency list, and return a list containing the DFS traversal of the graph.

// Note: Do traverse in the same order as they are in the given adjacency list.

// Examples:

// Input: adj[][] = [[2, 3, 1], [0], [0, 4], [0], [2]]

// Output: [0, 2, 4, 3, 1]
// Explanation: Starting from 0, the DFS traversal proceeds as follows:
// Visit 0 → Output: 0 
// Visit 2 (the first neighbor of 0) → Output: 0, 2 
// Visit 4 (the first neighbor of 2) → Output: 0, 2, 4 
// Backtrack to 2, then backtrack to 0, and visit 3 → Output: 0, 2, 4, 3 
// Finally, backtrack to 0 and visit 1 → Final Output: 0, 2, 4, 3, 1
// Input: adj[][] = [[1, 2], [0, 2], [0, 1, 3, 4], [2], [2]]

// Output: [0, 1, 2, 3, 4]
// Explanation: Starting from 0, the DFS traversal proceeds as follows: 
// Visit 0 → Output: 0 
// Visit 1 (the first neighbor of 0) → Output: 0, 1 
// Visit 2 (the first neighbor of 1) → Output: 0, 1, 2 
// Visit 3 (the first neighbor of 2) → Output: 0, 1, 2, 3 
// Backtrack to 2 and visit 4 → Final Output: 0, 1, 2, 3, 4
// Constraints:
// 1 ≤ adj.size() ≤ 104
// 1 ≤ adj[i][j] ≤ 104
// <______________________________________________SOLUTION___________________________________________________>
//{ Driver Code Starts
// Initial Template for Java
import java.io.*;
import java.util.*;

class GFG {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int tc = Integer.parseInt(br.readLine().trim());

        while (tc-- > 0) {
            int V = Integer.parseInt(br.readLine().trim());
            ArrayList<ArrayList<Integer>> adj = new ArrayList<>();

            for (int i = 0; i < V; i++) {
                String[] input = br.readLine().trim().split(" ");
                ArrayList<Integer> node = new ArrayList<>();
                for (String s : input) {
                    if (!s.isEmpty()) {
                        node.add(Integer.parseInt(s));
                    }
                }
                adj.add(node);
            }

            Solution obj = new Solution();
            ArrayList<Integer> ans = obj.dfs(adj);
            for (int num : ans) {
                System.out.print(num + " ");
            }
            System.out.println();
            System.out.println("~");
        }
    }
}

// } Driver Code Ends

// <___________________________________________________MAIN-SOLUTION_____________________________________________________>

class Solution {
    // Function to return a list containing the DFS traversal of the graph.
    public ArrayList<Integer> dfs(ArrayList<ArrayList<Integer>> adj) {
        // Code here
        ArrayList<Integer> res = new ArrayList<>();
        if(adj==null||adj.size()==0)
        return res;
        
        int n = adj.size();
        boolean[] vis = new boolean[n];
        for(int i=0;i<n;i++)
        {
            if(!vis[i])
            dfsUtils(adj,0,vis,res);
        }
        return res;
    }
    private void dfsUtils(ArrayList<ArrayList<Integer>> adj,int source,
    boolean[] vis,ArrayList<Integer> res)
    {
        res.add(source);
        vis[source] = true;
        
        for(int neighbour:adj.get(source))
        {
            if(!vis[neighbour])
            dfsUtils(adj,neighbour,vis,res);
        }
    }
}



// Compilation Completed
Input: 
n =
5
adj[][] =
2 3 1 
0 
0 4
0
2
Your Output:
0 2 4 3 1
Expected Output:
0 2 4 3 1