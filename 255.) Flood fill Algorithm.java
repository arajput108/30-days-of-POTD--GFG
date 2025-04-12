// 255.) You are given a 2D grid image[][] of size n*m, where each image[i][j] represents the color of a pixel 
//       in the image. Also provided a coordinate(sr, sc) representing the starting pixel (row and column) and 
//       a new color value newColor.

// Your task is to perform a flood fill starting from the pixel (sr, sc), changing its color to newColor and 
// the color of all the connected pixels that have the same original color. Two pixels are considered connected 
// if they are adjacent horizontally or vertically (not diagonally) and have the same original color.

// Examples:

// Input: image[][] = [[1, 1, 1, 0], [0, 1, 1, 1], [1, 0, 1, 1]], sr = 1, sc = 2, newColor = 2

// Output: [[2, 2, 2, 0], [0, 2, 2, 2], [1, 0, 2, 2]]

// Explanation: Starting from pixel (1, 2) with value 1, flood fill updates all connected pixels 
//              (up, down, left, right) with value 1 to 2, resulting in [[2, 2, 2, 0], [0, 2, 2, 2], 
//              [1, 0, 2, 2]].
// Input: image[][] = [[1, 1, 1], [1, 1, 0], [1, 0, 1]], sr = 1, sc = 1, newColor = 2
// Output: [[2, 2, 2], [2, 2, 0], [2, 0, 1]]
// Explanation: From the center of the image (with position (sr, sc) = (1, 1)), all pixels connected 
//              by a path of the same color as the starting pixel are colored with the new color.
//              Note the bottom corner is not colored 2, because it is not 4-directionally connected 
//              to the starting pixel.
// Input: image[][] = [[0, 1, 0], [0, 1, 0]], sr = 0, sc = 1, newColor = 0
// Output: [[0, 0, 0], [0, 0, 0]]
// Explanation: Starting from pixel (0, 1) with value 1, flood fill changes all 4-directionally connected 
//              pixels with value 1 to 0, resulting in [[0, 0, 0], [0, 0, 0]]
// Constraints:
// 1 ≤ n ≤ m ≤ 500
// 0 ≤ image[i][j] ≤ 10
// 0 ≤ newColor ≤ 10
// 0 ≤ sr ≤ (n-1)
// 0 ≤ sc ≤ (m-1)
// <______________________________________________SOLUTION___________________________________________________>
//{ Driver Code Starts
import java.io.*;
import java.lang.*;
import java.util.*;

class GFG {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int T = Integer.parseInt(br.readLine().trim());
        while (T-- > 0) {
            int n = Integer.parseInt(br.readLine().trim());
            int m = Integer.parseInt(br.readLine().trim());
            int[][] image = new int[n][m];
            for (int i = 0; i < n; i++) {
                String[] S2 = br.readLine().trim().split(" ");
                for (int j = 0; j < m; j++) image[i][j] = Integer.parseInt(S2[j]);
            }
            int sr = Integer.parseInt(br.readLine().trim());
            int sc = Integer.parseInt(br.readLine().trim());
            int newColor = Integer.parseInt(br.readLine().trim());
            Solution obj = new Solution();
            int[][] ans = obj.floodFill(image, sr, sc, newColor);
            for (int i = 0; i < ans.length; i++) {
                for (int j = 0; j < ans[i].length; j++)
                    System.out.print(ans[i][j] + " ");
                System.out.println();
            }

            System.out.println("~");
        }
    }
}

// } Driver Code Ends


// <___________________________________________________MAIN-SOLUTION_____________________________________________________>

class Solution {
    public int[][] floodFill(int[][] image, int sr, int sc, int newColor) {
        // Code here
        int n=image.length,m=image[0].length;
        floodFill(sr,sc,image,image[sr][sc],newColor,new boolean[n][m],new int[][]{{0,1},{0,-1},{1,0},{-1,0}});
        return image;
    }
    private void floodFill(int i,int j,int mat[][],int cl,int nc,boolean vis[][],int dir[][]){
        if(i<0 || j<0 || i==mat.length || j==mat[0].length || mat[i][j]!=cl || vis[i][j]) return;
        mat[i][j]=nc;
        vis[i][j]=true;
        for(int[] d:dir) floodFill(i+d[0],j+d[1],mat,cl,nc,vis,dir);
    }
}


// Compilation Completed
Input: 
n =
3
m =
3
image[][] =
1 1 1
1 1 0
1 0 1
sr =
1
sc =
1
newColor =
2
Your Output:
2 2 2
2 2 0
2 0 1
Expected Output:
2 2 2
2 2 0
2 0 1