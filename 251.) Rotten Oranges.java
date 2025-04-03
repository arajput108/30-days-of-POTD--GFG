// 251.) Given a matrix mat[][] of dimension n * m where each cell in the matrix can have values 0, 1 or 2 
//       which has the following meaning:
// 0 : Empty cell
// 1 : Cell have fresh oranges
// 2 : Cell have rotten oranges

// We have to determine what is the earliest time after which all the oranges are rotten. A rotten orange 
// at index (i, j) can rot other fresh orange at indexes (i-1, j), (i+1, j), (i, j-1), (i, j+1) (up, down, 
// left and right) in a unit time.

// Note: Your task is to return the minimum time to rot all the fresh oranges. If not possible returns -1.

// Examples:

// Input: mat[][] = [[0, 1, 2], [0, 1, 2], [2, 1, 1]]
// Output: 1
// Explanation: Oranges at positions (0,2), (1,2), (2,0) will rot oranges at (0,1), (1,1), (2,2) and (2,1) in 
// unit time.
// Input: mat[][] = [[2, 2, 0, 1]]
// Output: -1
// Explanation: Oranges at (0,0) and (0,1) can't rot orange at (0,3).
// Input: mat[][] = [[2, 2, 2], [0, 2, 0]]
// Output: 0
// Explanation: There is no fresh orange. 
// Constraints:
// 1 ≤ mat.size() ≤ 500
// 1 ≤ mat[0].size() ≤ 500
// mat[i][j] = {0, 1, 2} 
// <______________________________________________SOLUTION___________________________________________________>
//{ Driver Code Starts
import java.io.*;
import java.lang.*;
import java.util.*;

class GFG {
    public static void main(String[] args) throws IOException {
        Scanner sc = new Scanner(System.in);
        int t = sc.nextInt();

        while (t-- > 0) {
            int n = sc.nextInt();
            int m = sc.nextInt();

            int mat[][] = new int[n][m];
            for (int i = 0; i < n; i++) {
                for (int j = 0; j < m; j++) mat[i][j] = sc.nextInt();
            }
            Solution obj = new Solution();
            int ans = obj.orangesRotting(mat);
            System.out.println(ans);
            System.out.println("~");
        }
    }
}
// } Driver Code Ends


// <___________________________________________________MAIN-SOLUTION_____________________________________________________>

class Solution {
    public int orangesRotting(int[][] mat) {
        // Code here
         Queue<Pair> q = new LinkedList<>();
        int fresh = 0, m = mat.length, n = mat[0].length;
        int[] X = {-1, 1, 0, 0};
        int[] Y = {0, 0, -1, 1};

        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                if (mat[i][j] == 2) {
                    q.add(new Pair(i, j));
                } else if (mat[i][j] == 1) {
                    fresh++;
                }
            }
        }

        if (fresh == 0) return 0;

        int res = 0;

        while (!q.isEmpty()) {
            int size = q.size();
            boolean hasRot = false;
            for (int i = 0; i < size; i++) {
                Pair node = q.remove();
                int x = node.x, y = node.y;

                for (int j = 0; j < 4; j++) {
                    int nx = x + X[j];
                    int ny = y + Y[j];

                    if (nx >= 0 && nx < m && ny >= 0 &&
                    ny < n && mat[nx][ny] == 1) {
                        mat[nx][ny] = 2;
                        q.add(new Pair(nx, ny));
                        fresh--;
                        hasRot = true;
                    }
                }
            }
            if (hasRot) res++;
        }

        return (fresh == 0) ? res : -1; 
    }
}

class Pair {
    int x, y;

    Pair(int x, int y) {
        this.x = x;
        this.y = y;

    }
}



// Compilation Completed
Input: 
n =
3
m =
3
mat[][] =
0 1 2 
0 1 2 
2 1 1
Your Output:
1
Expected Output:
1