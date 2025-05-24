// 299.) Given an integer s represented as a string, the task is to get the sum of all possible sub-strings 
//       of this string.

// Note: The number may have leading zeros.
// It is guaranteed that the total sum will fit within a 32-bit signed integer.

// Examples:

// Input: s = "6759"
// Output: 8421
// Explanation:
// Sum = 6 + 7 + 5 + 9 + 67 + 75 + 59 + 675 + 759 + 6759 = 8421
// Input: s = "421"
// Output: 491
// Explanation: 
// Sum = 4 + 2 + 1 + 42 + 21 + 421 = 491
// Constraints:
// 1 <= |s| <= 9
// <-------------------------------------------------SOLUTION-------------------------------------------------->
class Solution {
    public static int sumSubstrings(String s) {
        // code here
         int n = s.length();
        long sum = s.charAt(0) - '0';
        long prev = sum;

        for (int i = 1; i < n; i++) {
            int digit = s.charAt(i) - '0';
            prev = prev * 10 + digit * (i + 1);
            sum += prev;
        }

        return (int)sum;
    }
}



// Compilation Completed
Input: 
s =
1234
Your Output:
1670
Expected Output:
1670