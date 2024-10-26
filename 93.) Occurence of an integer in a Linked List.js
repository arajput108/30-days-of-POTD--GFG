93.) Given a singly linked list and a key, count the number of occurrences of the given key in the linked list.

Examples:

Input: Linked List: 1->2->1->2->1->3->1, key = 1

Output: 4
Explanation: 1 appears 4 times. 
Input: Linked List: 1->2->1->2->1, key = 3

Output: 0
Explanation: 3 appears 0 times.
Expected Time Complexity: O(n)
Expected Auxiliary Space: O(1)

Constraints:
1 ≤ number of nodes, key ≤ 105
1 ≤ data of node ≤ 105

// <______________________________________________SOLUTION___________________________________________________>
//{ Driver Code Starts
// Initial Template for javascript

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => { inputString += inputStdin; });

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => string.trim());
    main();
});

function readLine() { return inputString[currentLine++]; }

function main() {
    let t = parseInt(readLine());
    for (let i = 0; i < t; i++) {
        let arr = readLine().split(' ').map(x => parseInt(x));
        let head = new Node(arr[0]);
        let tail = head;
        for (let j = 1; j < arr.length; j++) {
            tail.next = new Node(arr[j]);
            tail = tail.next;
        }
        let key = parseInt(readLine());
        let obj = new Solution();
        console.log(obj.count(head, key));
        console.log("~");
    }
}
// } Driver Code Ends


// User function Template for javascript

/**
 * @param {Node} head
 * @param {number} key
 * @returns {number}
 */


// <___________________________________________________MAIN-SOLUTION_____________________________________________________>
class Solution {
    count(head, key) {
        // add your code here
         let count = 0;
        let current = head;
        
        while (current !== null) {
            if (current.data === key) {
                count++;
            }
            current = current.next;
        }
        
        return count;
    }
};


// Compilation Completed
For Input: 
1 2 1 2 1 3 1
1
Your Output: 
4
Expected Output: 
4
