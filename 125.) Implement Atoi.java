// 125.) Given a string s, the objective is to convert it into integer format without utilizing any built-in functions. Refer the below steps to know about atoi() function.

// Cases for atoi() conversion:

// Skip any leading whitespaces.
// Check for a sign (‘+’ or ‘-‘), default to positive if no sign is present.
// Read the integer by ignoring leading zeros until a non-digit character is encountered or end of the string is 
// reached. If no digits are present, return 0.
// If the integer is greater than 231 – 1, then return 231 – 1 and if the integer is smaller than -231, 
// then return -231.
// Examples:

// Input: s = "-123"
// Output: -123
// Explanation: It is possible to convert -123 into an integer so we returned in the form of an integer

// Input: s = "  -"
// Output: 0
// Explanation: No digits are present, therefore the returned answer is 0.

// Input: s = " 1231231231311133"
// Output: 2147483647
// Explanation: The converted number will be greater than 231 – 1, therefore print 231 – 1 = 2147483647.

// Input: s = "-999999999999"
// Output: -2147483648
// Explanation: The converted number is smaller than -231, therefore print -231 = -2147483648.

// Input: s = "  -0012gfg4"
// Output: -12
// Explanation: Nothing is read after -12 as a non-digit character ‘g’ was encountered.
// Constraints:
// 1 ≤ |s| ≤ 15
// <______________________________________________SOLUTION___________________________________________________>
//{ Driver Code Starts
// Initial template for JAVA

import java.util.Scanner;

class Main {
    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);
        int t = sc.nextInt();
        sc.nextLine();
        while (t > 0) {
            String str = sc.nextLine();

            Solution obj = new Solution();
            int num = obj.myAtoi(str);
            System.out.println(num);
            System.out.println("~");
            t--;
        }
    }
}
// } Driver Code Ends


class Solution {
    public int myAtoi(String s) {
        // Your code here
           if (s == null || s.isEmpty()) {
            return 0;  
        }
        
        s = s.trim();
        int n = s.length();
        long sum = 0;
        int b = 0;
        
        if (n == 0) return 0; 
        
        if (s.charAt(0) == '-') {
            b = 1;
            s = s.substring(1); 
        } else if (s.charAt(0) == '+') {
            s = s.substring(1); 
        }
        
        s = s.replaceFirst("^0+", ""); 
        n = s.length(); 
        
        for (int i = 0; i < n; i++) {
            char c = s.charAt(i);
            if (c < '0' || c > '9') break; 
            int a = c - '0';
            sum = sum * 10 + a;
            
            if (sum >= Integer.MAX_VALUE && b == 0) return Integer.MAX_VALUE;
            if (sum > Integer.MAX_VALUE && b == 1) return Integer.MIN_VALUE;
        }
        
        return b == 1 ? -(int) sum : (int) sum;
    }
}




// Compilation Completed
For Input:  -123
Your Output:  -123
Expected Output:  -123