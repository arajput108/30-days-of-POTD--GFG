// 253.) Given a 2D array houses[][], consisting of n 2D coordinates {x, y} where each coordinate represents 
//      the location of each house, the task is to find the minimum cost to connect all the houses of the city.

// The cost of connecting two houses is the Manhattan Distance between the two points (xi, yi) and (xj, yj) 
// i.e., |xi – xj| + |yi – yj|, where |p| denotes the absolute value of p.

// Examples :

// Input: n = 5 houses[][] = [[0, 7], [0, 9], [20, 7], [30, 7], [40, 70]]
// Output: 105
// Explanation:
// Connect house 1 (0, 7) and house 2 (0, 9) with cost = 2
// Connect house 1 (0, 7) and house 3 (20, 7) with cost = 20
// Connect house 3 (20, 7) with house 4 (30, 7) with cost = 10 
// At last, connect house 4 (30, 7) with house 5 (40, 70) with cost 73.
// All the houses are connected now.
// The overall minimum cost is 2 + 10 + 20 + 73 = 105.

// Input: n = 4 houses[][] = [[0, 0], [1, 1], [1, 3], [3, 0]]
// Output: 7
// Explanation: 
// Connect house 1 (0, 0) with house 2 (1, 1) with cost = 2
// Connect house 2 (1, 1) with house 3 (1, 3) with cost = 2 
// Connect house 1 (0, 0) with house 4 (3, 0) with cost = 3 
// The overall minimum cost is 3 + 2 + 2 = 7.
// Constraint:
// 1 ≤ n ≤ 103
// 0 ≤ houses[i][j] ≤ 103
// <______________________________________________SOLUTION___________________________________________________>
//{ Driver Code Starts
import java.io.*;
import java.lang.*;
import java.util.*;

class GFG {
    public static void main(String[] args) throws IOException {
        Scanner sc = new Scanner(System.in);
        int T = sc.nextInt();
        while (T-- > 0) {
            int n = sc.nextInt();
            int[][] edge = new int[n][2];
            for (int i = 0; i < n; i++) {
                edge[i][0] = sc.nextInt();
                edge[i][1] = sc.nextInt();
            }
            Solution obj = new Solution();
            int res = obj.minCost(edge);

            System.out.println(res);
            System.out.println("~");
        }
    }
}

// } Driver Code Ends


// <___________________________________________________MAIN-SOLUTION_____________________________________________________>

class Solution {

    public int minCost(int[][] houses) {
        // code here
         int n = houses.length;
        List<Edge> edges = new ArrayList<>();
        
        for(int i=0; i<n; i++){
            for(int j=i+1; j<n; j++){
                int cost = Math.abs(houses[i][0] - houses[j][0]) + Math.abs(houses[i][1] - houses[j][1]);
                edges.add(new Edge(i, j, cost));
            }
        }
        
        Collections.sort(edges, (a, b) -> a.cost - b.cost);
        
        UnionFind uf = new UnionFind(n);
        int totalCost = 0;
        
        for(Edge edge : edges){
            if(uf.union(edge.u, edge.v)){
                totalCost += edge.cost;
            }
        }
        
        return totalCost;
    }
    
    class Edge{
        int u, v, cost;
        Edge(int u, int v, int cost){
            this.u = u;
            this.v = v;
            this.cost = cost;
        }
    }
    
    class UnionFind{
        int[] parent, rank;
        
        UnionFind(int n){
            parent = new int[n];
            rank = new int[n];
            
            for(int i=0; i<n; i++){
                parent[i] = i;
                rank[i] = 0;
            }
        }
        
        int find(int u){
            if(parent[u] != u){
                parent[u] = find(parent[u]);
            }
            
            return parent[u];
        }
        
        boolean union(int u, int v){
            int rootU = find(u);
            int rootV = find(v);
            
            if(rootU !=  rootV){
                if(rank[rootU] > rank[rootV]){
                    parent[rootV] = rootU;
                }else if(rank[rootU] < rank[rootV]){
                    parent[rootU] = rootV;
                }else{
                    parent[rootV] = rootU;
                    rank[rootU]++;
                }
                
                return true;
            }
            
            return false;
        }
    }
}



// Compilation Completed
Input: 
n =
4
houses[][] =
0 0 
1 1
1 3
3 0
Your Output:
7
Expected Output:
7