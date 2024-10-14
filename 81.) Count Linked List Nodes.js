// 81.) Given a singly linked list. The task is to find the length of the linked list, where length is defined 
//      as the number of nodes in the linked list.

// Examples :

// Input: LinkedList : 1->2->3->4->5

// Output: 5
// Explanation: Count of nodes in the linked list is 5, which is its length.
// Input: LinkedList : 2->4->6->7->5->1->0
 
// Output: 7
// Explanation: Count of nodes in the linked list is 7. Hence, the output is 7.
// Expected Time Complexity: O(n)
// Expected Auxilliary Space: O(1)

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
        let obj = new Solution();
        console.log(obj.getCount(head));
    }
}
// } Driver Code Ends


// User function Template for javascript

/**
 * @param {Node} head
 * @returns {number}
 */

/*
class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}
*/

// <___________________________________________________MAIN-SOLUTION_____________________________________________________>
class Solution {
    // Function to count nodes of a linked list.
    getCount(head) {
        // Code here
        let count = 0;
        let current = head;
        
        // Traverse the linked list until the end (null)
        while (current !== null) {
            count++; // Increment the count for each node
            current = current.next; // Move to the next node
        }
        
        return count; // Return the final count of nodes
    }
}



// Compilation Completed
For Input:  1 2 3 4 5
Your Output: 5
Expected Output: 5