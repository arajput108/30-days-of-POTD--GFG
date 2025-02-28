// 218.) You are given an array of strings arr that represents a valid arithmetic expression written in 
//       Reverse Polish Notation (Postfix Notation). Your task is to evaluate the expression and return 
//       an integer representing its value.

// Key Details:

// The valid operators are '+', '-', '*', and '/'.
// Each operand is guaranteed to be a valid integer or another expression.
// The division operation between two integers always rounds the result towards zero, discarding any fractional part.
// No division by zero will occur in the input.
// The input is a valid arithmetic expression in Reverse Polish Notation.
// The result of the expression and all intermediate calculations will fit in a 32-bit signed integer.
// Examples:

// Input: arr = ["2", "3", "1", "*", "+", "9", "-"]
// Output: -4
// Explanation: If the expression is converted into an infix expression, it will be 2 + (3 * 1) – 9 = 5 – 9 = -4.
// Input: arr = ["100", "200", "+", "2", "/", "5", "*", "7", "+"]
// Output: 757
// Explanation: If the expression is converted into an infix expression, it will be ((100 + 200) / 2) * 5 + 7  = 150 * 5 + 7 = 757.
// Constraints:

// 1 <= arr.size() <= 105
// arr[i] is either an operator: "+", "-", "*", or "/", or an integer in the range [-104, 104]
// <______________________________________________SOLUTION___________________________________________________>
//{ Driver Code Starts
// Initial Template for Java
import java.io.*;
import java.util.*;


// } Driver Code Ends


class Solution {
    public int evaluate(String[] arr) {
        // code here
        Stack<Integer> st = new Stack<>();
        for(String s : arr){
            if(Character.isDigit(s.charAt(0)) || 
            (s.length() > 1 && s.charAt(0) == '-' && 
            Character.isDigit(s.charAt(1)))){
                st.push(Integer.parseInt(s));
            }else{
                int b = st.pop();
                int a = st.pop();
                int c = 0;
                
                switch(s){
                    case "+":
                        c = a + b;
                        break;
                    case "-":
                        c = a - b;
                        break;
                    case "*":
                        c = a * b;
                        break;
                    case "/":
                        c = a / b;
                        break;
                }
                
                st.push(c);
            }
        }
        return st.pop();
    }
}


//{ Driver Code Starts.

// <___________________________________________________MAIN-SOLUTION_____________________________________________________>

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader reader = new BufferedReader(new InputStreamReader(System.in));
        String line = reader.readLine();
        int t = Integer.parseInt(line);
        while (t-- > 0) {
            line = reader.readLine();
            String[] arr = line.split(" ");
            Solution solution = new Solution();
            System.out.println(solution.evaluate(arr));
            System.out.println("~");
        }
    }
}

// } Driver Code Ends

// Compilation Completed
Input: 
arr[] =
2 3 1 * + 9 -
Your Output:
-4
Expected Output:
-4