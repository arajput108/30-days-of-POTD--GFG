// 3.) Given a string str and an integer k, return true if the string can be changed into a pangram after at most k operations, else return false.
//     A single operation consists of swapping an existing alphabetic character with any other lowercase alphabetic character.
//     Note - A pangram is a sentence containing every letter in the english alphabet.

// Examples :

// Input: str = "the quick brown fox jumps over the lazy dog", k = 0
// Output: true
// Explanation: the sentence contains all 26 characters and is already a pangram.
// Input: str = "aaaaaaaaaaaaaaaaaaaaaaaaaa", k = 25 
// Output: true
// Explanation: The word contains 26 instances of 'a'. Since only 25 operations are allowed. We can keep 1 instance and change all others to make str a pangram.

// Input: str = "a b c d e f g h i j k l m", k = 20
// Output: false
// Explanation: Since there are only 13 alphabetic characters in this case, no amount of swapping can produce a panagram here.
// Expected Time Complexity: O(n)
// Expected Auxiliary Space: O(1)  

// Constraints:
// 1<= str.size() <= 105
// 0<= k <= 50
// str may contain duplicate characters
// str contains only lowercase alphabets or spaces.

// <_______________________________________________SOLUTION______________________________________________________________>
//{ Driver Code Starts

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => { inputString += inputStdin; });

process.stdin.on('end', _ => {
    inputString =
        inputString.trim().split("\n").map(string => { return string.trim(); });

    main();
});

function readLine() { return inputString[currentLine++]; }

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for (; i < t; i++) {
        let str = readLine();

        let k = parseInt(readLine());

        let obj = new Solution();
        let res = obj.kPangram(str, k);
        if (res)
            console.log("true");
        else
            console.log("false");
    }
}

// } Driver Code Ends


// <______________________________________________MAIN-SOLUTION__________________________________________________________>
class Solution {
    /**
    * @param string str
    * @param number k

    * @returns boolean
    */
    kPangram(str, k) {
        // A set to store unique characters present in the string
        const uniqueChars = new Set();
        // A counter to keep track of total alphabetic characters in the string
        let totalAlphabeticChars = 0;
        
        // Iterate over the string and add alphabetic characters to the set
        for (let char of str) {
            if (char >= 'a' && char <= 'z') {
                uniqueChars.add(char);
                totalAlphabeticChars++;
            }
        }
        
        // Calculate the number of unique characters present
        const presentUniqueChars = uniqueChars.size;
        
        // Calculate the number of missing characters to complete a pangram
        const missingChars = 26 - presentUniqueChars;
        
        // If there are enough total alphabetic characters and the number of operations (k) 
        // is greater than or equal to the number of missing characters, return true
        // We need at least 26 alphabetic characters to form a pangram
        return (totalAlphabeticChars >= 26 && missingChars <= k);
    }
}

