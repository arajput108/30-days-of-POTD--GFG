// 243.) You are given a boolean expression s containing
// 'T' ---> true
// 'F' ---> false 
// and following operators between symbols
// &   ---> boolean AND
// |   ---> boolean OR
// ^   ---> boolean XOR
// Count the number of ways we can parenthesize the expression so that the value of expression evaluates to true.

// Note: The answer is guaranteed to fit within a 32-bit integer.

// Examples:

// Input: s = "T|T&F^T"
// Output: 4
// Explaination: The expression evaluates to true in 4 ways: ((T|T)&(F^T)), (T|(T&(F^T))), (((T|T)&F)^T) and 
//               (T|((T&F)^T)).
// Input: s = "T^F|F"
// Output: 2
// Explaination: The expression evaluates to true in 2 ways: ((T^F)|F) and (T^(F|F)).
// Constraints:
// 1 ≤ |s| ≤ 100 

// <______________________________________________SOLUTION___________________________________________________>

//{ Driver Code Starts
import java.io.*;
import java.lang.*;
import java.util.*;
import java.util.stream.*;

class GFG {

    public static void main(String[] args) throws IOException {

        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int t = Integer.parseInt(br.readLine());
        while (t-- > 0) {
            String s = br.readLine();
            Solution obj = new Solution();
            System.out.println(obj.countWays(s));
            System.out.println("~");
        }
    }
}
// } Driver Code Ends


// User function Template for Java


// <___________________________________________________MAIN-SOLUTION_____________________________________________________>

class Solution {
    static int countWays(String s) {
        // code here
         int n = s.length();
        memo = new HashMap<>();

        return solve(s,0,n-1,true);
    }
    
    static Map<String, Integer> memo ;
    
    static int solve(String s, int i, int j, boolean isTrue){
        if( i>j) return 0;
        
        if( i == j){
            if( isTrue ){
                if(s.charAt(i) == 'T' ){
                    return  1;
                 } else return 0;
            } else {
               if(s.charAt(j) == 'F' ){
                   return 1 ;
               } else return 0;
            }
        }
        
        String key = i+","+j+","+ isTrue+"";
        if(memo.containsKey(key)) return memo.get(key);
        
        int ans = 0;     
        
        for( int k = i+1; k<=j-1; k = k+2 ){
            int lT = solve(s, i, k-1, true);
            int lF = solve(s, i, k-1, false);
            int rT = solve(s, k+1, j, true);
            int rF = solve(s, k+1, j, false);
            
            if( s.charAt(k) == '&' ){
                if(isTrue) {
                    ans += (lT*rT);
                } else{
                     ans += (lT*rF) + (lF*rT) + (lF*rF);
                }
            } else if( s.charAt(k) == '|' ){
                if(isTrue) {
                     ans += (lT*rF) + (lF*rT) + (lT*rT);
                } else{
                     ans += (lF*rF);
                }
            } else if (s.charAt(k) == '^') {
                if (isTrue) {
                    ans += (lT * rF) + (lF * rT); 
                } else {
                    ans += (lT * rT) + (lF * rF);
                }
            }
        }
        
        memo.put(key,ans);
        return ans;
    }
}



// Compilation Completed
Input: 
s =
T|T&F^T
Your Output:
4
Expected Output:
4
Java (1.8)



        return ans;


 

Custom Input
