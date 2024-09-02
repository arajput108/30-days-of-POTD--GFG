// 40.) Given a square grid of size N, each cell of which contains an integer cost that represents a cost to traverse 
//      through that cell, we need to find a path from the top left cell to the bottom right cell by which the total 
//      cost incurred is minimum.
//      From the cell (i,j) we can go (i,j-1), (i, j+1), (i-1, j), (i+1, j).  

// Examples :

// Input: grid = {{9,4,9,9},{6,7,6,4},{8,3,3,7},{7,4,9,10}}
// Output: 43
// Explanation: The grid is-
// 9 4 9 9
// 6 7 6 4
// 8 3 3 7
// 7 4 9 10
// The minimum cost is-
// 9 + 4 + 7 + 3 + 3 + 7 + 10 = 43.
// Input: grid = {{4,4},{3,7}}
// Output: 14
// Explanation: The grid is-
// 4 4
// 3 7
// The minimum cost is- 4 + 3 + 7 = 14.
// Expected Time Complexity: O(n2*log(n))
// Expected Auxiliary Space: O(n2) 
//  Constraints:
// 1 ≤ n ≤ 500
// 1 ≤ cost of cells ≤ 500



// <___________________________________________________SOLUTION_____________________________________________________>

//{ Driver Code Starts
import java.util.*;
import java.lang.*;
import java.io.*;
class GFG
{
    public static void main(String[] args) throws IOException
    {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int T = Integer.parseInt(br.readLine().trim());
        while(T-->0)
        {
            String[] s = br.readLine().trim().split(" ");
            int n = Integer.parseInt(s[0]);
            int[][] grid = new int[n][n];
            for(int i = 0; i < n; i++){
                String[] S = br.readLine().trim().split(" ");
                for(int j = 0; j < n; j++){
                    grid[i][j] = Integer.parseInt(S[j]);
                }
            }
            Solution obj = new Solution();
            int ans = obj.minimumCostPath(grid);
            System.out.println(ans);
        }
    }
}
// } Driver Code Ends



// <___________________________________________________MAIN-SOLUTION_____________________________________________________>
class Solution
{
    //Function to return the minimum cost to react at bottom
	//right cell from top left cell.
    public int minimumCostPath(int[][] grid)
    {
        // Code here
         int n=grid.length,dis[][]=new int[n][n];
        int dir[][]=new int[][]{{0,1},{0,-1},{1,0},{-1,0}};
        Queue<int[]> pq=new PriorityQueue<>((x,y)->x[0]-y[0]);
        for(int[] d:dis) Arrays.fill(d,Integer.MAX_VALUE);
        dis[0][0]=grid[0][0];
        pq.add(new int[]{dis[0][0],0,0});
        while(!pq.isEmpty()){
            int[] curr=pq.poll();
            int cd=curr[0],ci=curr[1],cj=curr[2];
            if(ci==n-1 && cj==n-1) return cd;
            for(int[] d:dir){
                int ni=ci+d[0],nj=cj+d[1];
                if(ni<0 || nj<0 || ni==n || nj==n) continue;
                int newCost=cd+grid[ni][nj];
                if(newCost<dis[ni][nj]){
                    dis[ni][nj]=newCost;
                    pq.add(new int[]{newCost,ni,nj});
                }
            }
        }
        return dis[n-1][n-1];
    }
}


// Compilation Completed
For Input: 
4
9 4 9 9 
6 7 6 4 
8 3 3 7 
7 4 9 10
Your Output: 
43
Expected Output: 
43