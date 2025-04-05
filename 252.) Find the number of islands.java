// 252.) Given a grid of size n*m (n is the number of rows and m is the number of columns in the grid) 
//       consisting of 'W's (Water) and 'L's (Land). Find the number of islands.

// Note: An island is either surrounded by water or the boundary of a grid and is formed by connecting 
// adjacent lands horizontally or vertically or diagonally i.e., in all 8 directions.

// Examples:

// Input: grid[][] = [['L', 'L', 'W', 'W', 'W'], ['W', 'L', 'W', 'W', 'L'], ['L', 'W', 'W', 'L', 'L'], 
// ['W', 'W', 'W', 'W', 'W'], ['L', 'W', 'L', 'L', 'W']]
// Output: 4
// Explanation:
// The image below shows all the 4 islands in the grid.
 
// Input: grid[][] = [['W', 'L', 'L', 'L', 'W', 'W', 'W'], ['W', 'W', 'L', 'L', 'W', 'L', 'W']]
// Output: 2
// Expanation:
// The image below shows 2 islands in the grid.
 
// Constraints:
// 1 ≤ n, m ≤ 500
// grid[i][j] = {'L', 'W'}
// <______________________________________________SOLUTION___________________________________________________>
//{ Driver Code Starts
import java.util.*;

class GFG {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int tc = scanner.nextInt();
        while (tc-- > 0) {
            int n = scanner.nextInt();
            int m = scanner.nextInt();
            char[][] grid = new char[n][m];

            // Read the grid input
            for (int i = 0; i < n; i++) {
                for (int j = 0; j < m; j++) {
                    grid[i][j] = scanner.next().charAt(0);
                }
            }
            Solution obj = new Solution();
            int ans = obj.countIslands(grid);
            System.out.println(ans);
            System.out.println("~");
        }
        scanner.close();
    }
}

// } Driver Code Ends

// <___________________________________________________MAIN-SOLUTION_____________________________________________________>

class Solution {
    public int countIslands(char[][] grid) {
        // Code here
         int n = grid.length;
        int m = grid[0].length;
        boolean visited[][] = new boolean[n][m];
        int ans = 0;
        for(int i = 0; i < n; i++){
            for(int j = 0; j < m; j++){
                if(grid[i][j] == 'L' && !visited[i][j]){
                    ans++;
                    dfs(i,j,grid,visited,n,m);
                }
            }
        }
        return ans;
    }
    public void dfs(int i , int j , char grid[][], boolean visited[][],int n , int m){
        if(i < 0 || j < 0 || i >= n || j >= m || visited[i][j] ||grid[i][j] == 'W') return;
        
        visited[i][j] = true;
        
        dfs(i-1,j-1,grid,visited,n,m);
        dfs(i-1,j,grid,visited,n,m);
        dfs(i-1,j+1,grid,visited,n,m);
        dfs(i,j-1,grid,visited,n,m);
        dfs(i,j+1,grid,visited,n,m);
        dfs(i+1,j-1,grid,visited,n,m);
        dfs(i+1,j,grid,visited,n,m);
        dfs(i+1,j+1,grid,visited,n,m);
    }
}




// Compilation Completed
Input: 
n =
4
m =
2
grid[][] =
W L
L W
L L
L W
Your Output:
1
Expected Output:
1