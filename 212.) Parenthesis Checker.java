// 212.) Given a string s, composed of different combinations of '(' , ')', '{', '}', '[', ']', verify the 
//       validity of the arrangement.
// An input string is valid if:

//          1. Open brackets must be closed by the same type of brackets.
//          2. Open brackets must be closed in the correct order.

// Examples :

// Input: s = "[{()}]"
// Output: true
// Explanation: All the brackets are well-formed.
// Input: s = "[()()]{}"
// Output: true
// Explanation: All the brackets are well-formed.
// Input: s = "([]"
// Output: False
// Explanation: The expression is not balanced as there is a missing ')' at the end.
// Input: s = "([{]})"
// Output: False
// Explanation: The expression is not balanced as there is a closing ']' before the closing '}'.
// Constraints:
// 1 ≤ s.size() ≤ 106
// s[i] ∈ {'{', '}', '(', ')', '[', ']'}
// <______________________________________________SOLUTION___________________________________________________>
//{ Driver Code Starts
import java.io.*;
import java.lang.*;
import java.util.*;

class Driverclass {
    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);

        // Reading total number of testcases
        int t = sc.nextInt();

        while (t-- > 0) {
            // reading the string
            String st = sc.next();

            // calling ispar method of Paranthesis class
            // and printing "balanced" if it returns true
            // else printing "not balanced"
            if (new Solution().isBalanced(st) == true)
                System.out.println("true");
            else
                System.out.println("false");

            System.out.println("~");
        }
    }
}
// } Driver Code Ends


// <___________________________________________________MAIN-SOLUTION_____________________________________________________>
class Solution {
    static boolean isBalanced(String s) {
        // code here
        Stack<Character> st=new Stack<>();
        for(int i=0;i<s.length();i++){
            char temp=s.charAt(i);
            if(temp=='[' || temp=='{' || temp=='('){
                st.push(temp);
            }else {
                if(st.size()>0 && temp==']' && st.peek()=='['){
                    st.pop();
                }else if(st.size()>0 && temp=='}' && st.peek()=='{'){
                    st.pop();
                }else if( st.size()>0 && temp==')' && st.peek()=='(') {
                    st.pop();
                }else {
                    st.push(temp);
                }
            }
        }
        if(st.size()>0)return false;
        else return true;
    }
}


// Compilation Completed
For Input: 
[{()}]
Your Output: 
true
Expected Output: 
true