// 192.) You are given a two-dimensional mat[][] of size n*m containing English alphabets and a string word. 
//       Check if the word exists on the mat. The word can be constructed by using letters from adjacent cells, 
//       either horizontally or vertically. The same cell cannot be used more than once.

// Examples :

// Input: mat[][] = [['T', 'E', 'E'], ['S', 'G', 'K'], ['T', 'E', 'L']], word = "GEEK"
// Output: true
// Explanation:

// The letter cells which are used to construct the "GEEK" are colored.
// Input: mat[][] = [['T', 'E', 'U'], ['S', 'G', 'K'], ['T', 'E', 'L']], word = "GEEK"
// Output: false
// Explanation:

// It is impossible to construct the string word from the mat using each cell only once.
// Input: mat[][] = [['A', 'B', 'A'], ['B', 'A', 'B']], word = "AB"
// Output: true
// Explanation:

// There are multiple ways to construct the word "AB".
// Constraints:
// 1 ≤ n, m ≤ 100
// 1 ≤ L ≤ n*m
// 1 ≤ |word| ≤ 100
// <______________________________________________SOLUTION___________________________________________________>
//{ Driver Code Starts
import java.io.*;
import java.util.*;

class GFG {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int tc = sc.nextInt(); // Number of test cases
        while (tc-- > 0) {
            int n = sc.nextInt();
            int m = sc.nextInt();
            char[][] mat = new char[n][m];

            // Reading the matrix
            for (int i = 0; i < n; i++) {
                for (int j = 0; j < m; j++) {
                    mat[i][j] = sc.next().charAt(0);
                }
            }

            String word = sc.next();
            Solution obj = new Solution();
            boolean ans = obj.isWordExist(mat, word);
            if (ans)
                System.out.println("true");
            else
                System.out.println("false");

            System.out.println("~");
        }
        sc.close();
    }
}
// } Driver Code Ends



// <___________________________________________________MAIN-SOLUTION_____________________________________________________>
class Solution {
    static public boolean isWordExist(char[][] mat, String word) {
        // Code here
        int n=mat.length;
        int m=mat[0].length;
        boolean[][] vis=new boolean[n][m];
        for(int i=0;i<n;i++){
            for(int j=0;j<m;j++){
                if(dfs(i,j,0,word,mat,vis)) return true;
            }
        }
        return false;
    }
    
    static boolean dfs(int i,int j,int s,String word,char[][] mat,boolean[][] vis){
        if(s==word.length()) return true;
        if(word.charAt(s)!=mat[i][j]) return false;
        vis[i][j]=true;
        int[] dir={0,1,0,-1,0};
        int n=mat.length;
        int m=mat[0].length;
        for(int d=0;d<4;d++){
            int nI=dir[d]+i;
            int nJ=dir[d+1]+j;
            if(isValid(nI,nJ,n,m) && !vis[nI][nJ]){
                if(dfs(nI,nJ,s+1,word,mat,vis)) return true;
            }
        }
        vis[i][j]=false;
        return false;
    }
    
    static boolean isValid(int i,int j,int n,int m){
        return i>=0 && j>=0 && i<n && j<m;
    }
}



// Compilation Completed
For Input: 
3
4
A B C D
P Q R S
U V W X
QRWX
Your Output: 
true
Expected Output: 
true