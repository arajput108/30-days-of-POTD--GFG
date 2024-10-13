// 80.) Given a Singly Linked List, Delete all alternate nodes of the list ie delete all the nodes 
//      present in even positions.

// Examples :

// Input: LinkedList: 1->2->3->4->5->6
 
// Output: 1->3->5

// Explanation: Deleting alternate nodes ie 2, 4, 6 results in the linked list with elements 1->3->5.
// Input: LinkedList: 99->59->42->20
 
// Output: 99->42
 
// Expected Time Complexity: O(n)
// Expected Auxiliary Space: O(1)

// Constraints:
// 1 <= number of nodes <= 105
// 1 <= node->data <= 103
// <______________________________________________SOLUTION___________________________________________________>

//{ Driver Code Starts
// Initial Template for javascript

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

function printList(node) {
    let result = [];
    while (node !== null) {
        result.push(node.data);
        node = node.next;
    }
    console.log(result.join(" "));
}

const readline = require('readline');

const rl = readline.createInterface({input : process.stdin, output : process.stdout});

let inputLines = [];
let currentLine = 0;

rl.on('line', (input) => { inputLines.push(input); });

rl.on('close', () => { main(); });

function readLine() { return inputLines[currentLine++]; }

function main() {
    const t = parseInt(readLine());
    for (let i = 0; i < t; i++) {
        const arr = readLine().split(" ").map(Number);
        let head = new Node(arr[0]);
        let tail = head;
        for (let j = 1; j < arr.length - 1; j++) {
            tail.next = new Node(arr[j]);
            tail = tail.next;
        }
        const ob = new Solution();
        ob.deleteAlt(head);
        printList(head);
    }
}

// } Driver Code Ends

2
// User function Template for javascript

/*LINKED LIST NODE
class Node {
  constructor(x){
    this.data = x;
    this.next = null;
  }
}
*/

/**
 * @param {Node} head
 */

// <___________________________________________________MAIN-SOLUTION_____________________________________________________>
class Solution {
    deleteAlt(head) {
        // Code here
        if (!head) return null;  // If the list is empty, return null
        
        let current = head;  // Initialize current pointer to head
        
        while (current !== null && current.next !== null) {
            current.next = current.next.next;  // Skip the next node
            current = current.next;  // Move to the next node after the skipped one
        }
        
        return head;  // Return the modified head of the list
    }
}



// Compilation Completed
For Input:  1 2 3 4 5 6
Your Output:  1 3 5
Expected Output:  1 3 5
