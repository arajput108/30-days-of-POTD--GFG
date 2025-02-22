// 213.) Given a string s consisting of opening and closing parenthesis '(' and ')'. Find the length 
//       of the longest valid parenthesis substring.

// A parenthesis string is valid if:

// For every opening parenthesis, there is a closing parenthesis.
// The closing parenthesis must be after its opening parenthesis.
// Examples :

// Input: s = "((()"
// Output: 2
// Explanation: The longest valid parenthesis substring is "()".
// Input: s = ")()())"
// Output: 4
// Explanation: The longest valid parenthesis substring is "()()".
// Input: s = "())()"
// Output: 2
// Explanation: The longest valid parenthesis substring is "()".
// Constraints:
// 1 ≤ s.size() ≤ 106  
// s consists of '(' and ')' only
// <______________________________________________SOLUTION___________________________________________________>
//{ Driver Code Starts
// Initial Template for Java

import java.io.*;
import java.util.*;

class GFG {
    public static void main(String args[]) throws IOException {
        BufferedReader in = new BufferedReader(new InputStreamReader(System.in));
        int t = Integer.parseInt(in.readLine());
        while (t-- > 0) {
            String S = in.readLine();

            Solution ob = new Solution();
            System.out.println(ob.maxLength(S));

            System.out.println("~");
        }
    }
}
// } Driver Code Ends



class Solution {
    static int maxLength(String s) {
        // code here
        
        Stack<Integer> stack=new Stack<>();
        stack.push(-1);
        int result=0;
        for(int i=0;i<s.length();i++){
            if(s.charAt(i)=='('){
                stack.push(i);
            }

             else{

                stack.pop(); 

                if(!stack.isEmpty()){
                   result=Math.max(result,i-stack.peek()); 
                }
                else{
                    stack.push(i);
                }
            }
        }
        return result;
    }
}


// Compilation Completed
For Input: 
((()
Your Output: 
2
Expected Output: 
2