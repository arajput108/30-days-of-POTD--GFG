97.) Given a sorted doubly linked list and an element x, you need to insert the element x into the correct 
     position in the sorted Doubly linked list(DLL).

Note: The DLL is sorted in ascending order

Example:

Input: LinkedList: 3->5->8->10->12 , x = 9

Output: 3->5->8->9->10->12

Explanation: Here node 9 is inserted in the Doubly Linked-List.
Input: LinkedList: 1->4->10->11 , x = 15

Output: 1->4->10->11->15

Constraints:
1 <= number of nodes <= 103
1 <= node -> data , x <= 104
// <______________________________________________SOLUTION___________________________________________________>
//{ Driver Code Starts
class Node {
    constructor(data) {
        this.data = data;
        this.prev = null;
        this.next = null;
    }
}

function printList(head) {
    let current = head;
    let result = [];
    while (current) {
        result.push(current.data);
        current = current.next;
    }
    console.log(result.join(" "));
}

const readline = require('readline');
const rl = readline.createInterface({input : process.stdin, output : process.stdout});

let inputLines = [];
let currentLine = 0;

rl.on('line', (line) => { inputLines.push(line.trim()); });

rl.on('close', () => {
    let t = parseInt(inputLines[currentLine++]);

    for (let i = 0; i < t; i++) {
        let values = inputLines[currentLine++].split(" ").map(Number);
        let head = null;
        let tail = null;

        for (let value of values) {
            if (head === null) {
                head = new Node(value);
                tail = head;
            } else {
                tail.next = new Node(value);
                tail.next.prev = tail;
                tail = tail.next;
            }
        }

        let valueToInsert = parseInt(inputLines[currentLine++]);
        let solution = new Solution();
        head = solution.sortedInsert(head, valueToInsert);
        printList(head);
        console.log("~");
    }
});

// } Driver Code Ends


// User function Template for javascript

/*Doubly linked list Node
class Node {
    constructor(data) {
        this.data = data;
        this.prev = null;
        this.next = null;
    }
}
*/

/**
 * @param {Node} head
 * @param {number} x
 * @return {Node}
 */


// <___________________________________________________MAIN-SOLUTION_____________________________________________________>
class Solution {
    sortedInsert(head, x) {
        // code here
         let newNode = new Node(x);

        // Case 1: If the list is empty, make the new node the head.
        if (head === null) {
            return newNode;
        }

        // Case 2: If the new node needs to be inserted at the beginning.
        if (x <= head.data) {
            newNode.next = head;
            head.prev = newNode;
            return newNode;
        }

        // Case 3: Find the correct position in the list.
        let current = head;
        while (current.next !== null && current.next.data < x) {
            current = current.next;
        }

        // Insert the new node at the correct position
        newNode.next = current.next;
        if (current.next !== null) {
            current.next.prev = newNode;
        }
        current.next = newNode;
        newNode.prev = current;

        return head;
    }
}



// Compilation Completed
For Input: 
1 9 16 25 78
2
Your Output: 
1 2 9 16 25 78
Expected Output: 
1 2 9 16 25 78