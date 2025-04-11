// 254.) Given an undirected, weighted graph with V vertices numbered from 0 to V-1 and E edges, 
//       represented by 2d array edges[][], where edges[i]=[u, v, w] represents the edge between 
//       the nodes u and v having w edge weight. You have to find the shortest distance of all 
//       the vertices from the source vertex src, and return an array of integers where the ith 
//       element denotes the shortest distance between ith node and source vertex src.

// Note: The Graph is connected and doesn't contain any negative weight edge.

// Examples:

// Input: V = 3, edges[][] = [[0, 1, 1], [1, 2, 3], [0, 2, 6]], src = 2
// Output: [4, 3, 0]
// Explanation:

// Shortest Paths:
// For 2 to 0 minimum distance will be 4. By following path 2 -> 1 -> 0
// For 2 to 1 minimum distance will be 3. By following path 2 -> 1
// For 2 to 2 minimum distance will be 0. By following path 2 -> 2
// Input: V = 5, edges[][] = [[0, 1, 4], [0, 2, 8], [1, 4, 6], [2, 3, 2], [3, 4, 10]], src = 0
// Output: [0, 4, 8, 10, 10]
// Explanation: 

// Shortest Paths: 
// For 0 to 1 minimum distance will be 4. By following path 0 -> 1
// For 0 to 2 minimum distance will be 8. By following path 0 -> 2
// For 0 to 3 minimum distance will be 10. By following path 0 -> 2 -> 3 
// For 0 to 4 minimum distance will be 10. By following path 0 -> 1 -> 4
// Constraints:
// 1 ≤ V ≤ 105
// 1 ≤ E = edges.size() ≤ 105
// 0 ≤ edges[i][j] ≤ 104
// 0 ≤ src < V
// <______________________________________________SOLUTION___________________________________________________>
//{ Driver Code Starts
import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int t = Integer.parseInt(sc.nextLine());

        while (t-- > 0) {
            int V = Integer.parseInt(sc.nextLine());
            int E = Integer.parseInt(sc.nextLine());

            List<int[]> edgeList = new ArrayList<>();

            for (int i = 0; i < E; i++) {
                String[] parts = sc.nextLine().split(" ");
                int u = Integer.parseInt(parts[0]);
                int v = Integer.parseInt(parts[1]);
                int w = Integer.parseInt(parts[2]);
                edgeList.add(new int[] {u, v, w});
                edgeList.add(new int[] {v, u, w});
            }

            int[][] edges = new int[edgeList.size()][3];
            for (int i = 0; i < edgeList.size(); i++) {
                edges[i] = edgeList.get(i);
            }

            int src = Integer.parseInt(sc.nextLine());

            Solution obj = new Solution();
            int[] res = obj.dijkstra(V, edges, src);

            for (int val : res) {
                System.out.print(val + " ");
            }
            System.out.println();
            System.out.println("~");
        }

        sc.close();
    }
}

// } Driver Code Ends


// User function Template for Java



// <___________________________________________________MAIN-SOLUTION_____________________________________________________>

class Solution {
    public int[] dijkstra(int V, int[][] edges, int src) {
        // code here
        List<List<int[]>> adj = new ArrayList<>();
        
        for(int i=0;i<=V;i++)
            adj.add(new ArrayList<>());
        
        for(int[] edge: edges){
            
            int u = edge[0];
            int v = edge[1];
            int w = edge[2];
            
            adj.get(u).add(new int[]{u,w});
            adj.get(v).add(new int[]{u,w});
        }
        
        int[] dist = new int[V];
        Arrays.fill(dist, Integer.MAX_VALUE);
        dist[src] = 0;
        
        PriorityQueue<int[]> pq = new PriorityQueue<>((a,b)-> a[1]-b[1]);
        pq.add(new int[]{src,0});
        
        while(!pq.isEmpty()){
            
            int [] curr = pq.poll();
            int u = curr[0];
            int d = curr[1];
            
            if(d>dist[u]) continue;
            
            for(int[] neighbor : adj.get(u)){
                int v = neighbor[0];
                int w = neighbor[1];
                
                if(dist[u]+w<dist[v]){
                    dist[v]= dist[u]+w;
                    pq.add(new int[]{v,dist[v]});
                }
            }
        }
        return dist;
    }
}




// Compilation Completed
Input: 
V =
3
E =
3
edges[][] =
0 1 1
1 2 3
0 2 6
src =
2
Your Output:
4 3 0
Expected Output:
4 3 0