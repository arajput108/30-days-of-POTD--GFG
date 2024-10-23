// 90.) Given a single linked list, calculate the sum of the last n nodes.

// Note: It is guaranteed that n <= number of nodes.

// Examples:

// Input: Linked List: 5->9->6->3->4->10, n = 3

// Output: 17
// Explanation: The sum of the last three nodes in the linked list is 3 + 4 + 10 = 17.
// Input: Linked List: 1->2, n = 2

// Output: 3
// Explanation: The sum of the last two nodes in the linked list is 2 + 1 = 3.
// Constraints:
// 1 <= number of nodes, n <= 105
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
        let n = parseInt(readLine());
        let head = new Node(arr[0]);
        let tail = head;
        for (let j = 1; j < arr.length; j++) {
            tail.next = new Node(arr[j]);
            tail = tail.next;
        }
        let obj = new Solution();
        console.log(obj.sumOfLastN_Nodes(head, n));
    }
}
// } Driver Code Ends


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
 * @return {number}
 */

// <___________________________________________________MAIN-SOLUTION_____________________________________________________>
class Solution {
    sumOfLastN_Nodes(head, n) {
        // code here
        let totalNodes = 0;
        let current = head;

        // First pass to count total nodes
        while (current !== null) {
            totalNodes++;
            current = current.next;
        }

        // Find the position from where we need to start summing
        let start = totalNodes - n;
        current = head;
        let sum = 0;

        // Traverse again, summing up the last n nodes
        while (current !== null) {
            if (start <= 0) {
                sum += current.data;
            }
            start--;
            current = current.next;
        }

        return sum;
    }
}





// Compilation Completed
For Input: 
5 9 6 3 4 10
3
Your Output: 
17
Expected Output: 
17