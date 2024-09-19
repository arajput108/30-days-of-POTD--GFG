// 56.) Given a String str, reverse the string without reversing its individual words. 
//      Words are separated by dots.

// Note: The last character has not been '.'. 

// Examples :

// Input: str = i.like.this.program.very.much
// Output: much.very.program.this.like.i
// Explanation: After reversing the whole string(not individual words), the input string becomes much.very.program.this.like.i
// Input: str = pqr.mno
// Output: mno.pqr
// Explanation: After reversing the whole string , the input string becomes mno.pqr
// Expected Time Complexity: O(|str|)
// Expected Auxiliary Space: O(|str|)

// Constraints:
// 1 <= |str| <= 105


// <___________________________________________________SOLUTION__________________________________________________>
//{ Driver Code Starts
// Initial Template for javascript
'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => { inputString += inputStdin; });

process.stdin.on('end', _ => {
    inputString =
        inputString.trim().split('\n').map(string => { return string.trim(); });

    main();
});

function readLine() { return inputString[currentLine++]; }

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for (; i < t; i++) {
        let input_line = readLine().split(' ');
        let s = input_line[0];
        let obj = new Solution();
        let ans = obj.reverseWords(s);
        console.log(ans);
    }
}
// } Driver Code Ends


// User function Template for javascript
/**
 * @param {string} str
 * @returns {string}
 */

// <________________________________________________MAIN-SOLUTION________________________________________________>
class Solution {
    // Function to reverse words in a given string.
    reverseWords(str) {
        // code here
         // Split the string into an array of words using '.' as the separator
        let words = str.split('.');

        // Reverse the array of words
        let reversedWords = words.reverse();

        // Join the reversed array of words back into a string with '.' as the separator
        return reversedWords.join('.');
    }
}


// Compilation Completed
// For Input:  i.like.this.program.very.much
// Your Output:  much.very.program.this.like.i
// Expected Output:  much.very.program.this.like.i




// Explanation:
// Splitting the string: The split() function splits the string at every occurrence of the dot (.), turning the 
// string into an array of words.

// Step 1.) Example:
// str = "i.like.this.program.very.much";
// words = ["i", "like", "this", "program", "very", "much"];

// Reversing the array: The reverse() function reverses the order of elements in the array.


// Step 2.) Example:
// reversedWords = ["much", "very", "program", "this", "like", "i"];

// Joining the words: The join() function joins the reversed array of words into a single string, with the dot (.) as the separator.


// Step 3:- Final output:
// "much.very.program.this.like.i"
