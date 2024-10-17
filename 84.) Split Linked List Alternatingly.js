// 84.) Given a singly linked list's head. Your task is to complete the function alternatingSplitList() 
//      that splits the given linked list into two smaller lists. The sublists should be made from alternating 
//      elements from the original list.
// Note: 

// The sublist should be in the order with respect to the original list.
// Your have to return an array containing the both sub-linked lists.
// Examples:

// Input: LinkedList = 0->1->0->1->0->1
// Output: 0->0->0 , 1->1->1
// Explanation: After forming two sublists of the given list as required, we have two lists as: 0->0->0 and 1->1->1.

// Input: LinkedList = 2->5->8->9->6
// Output: 2->8->6 , 5->9
// Explanation: After forming two sublists of the given list as required, we have two lists as: 2->8->6 and 5->9.
// Input: LinkedList: 7 
// Output: 7 , <empty linked list>
// Constraints:
// 1 <= number of nodes <= 100
// 1 <= node -> data <= 104
// <______________________________________________SOLUTION___________________________________________________>
//{ Driver Code Starts
class Node {
    constructor(x) {
        this.data = x;
        this.next = null;
    }
}

function printList(node) {
    let current = node;
    while (current !== null) {
        process.stdout.write(current.data + " ");
        current = current.next;
    }
    console.log();
}

const readline = require('readline');
const rl = readline.createInterface({input : process.stdin, output : process.stdout});

let input = [];
rl.on('line', (line) => { input.push(line.trim()); }).on('close', () => {
    let t = parseInt(input[0]);
    let count = 1;
    let index = 1;

    while (count <= t) {
        let arr = input[index].split(' ').map(Number);
        let head = new Node(arr[0]);
        let tail = head;

        for (let i = 1; i < arr.length; ++i) {
            tail.next = new Node(arr[i]);
            tail = tail.next;
        }

        const solution = new Solution();
        let result = solution.alternatingSplitList(head);
        printList(result[0]);
        printList(result[1]);

        count++;
        index++;
    }
});

// } Driver Code Ends


// User function Template for javascript

/*
class Node {
  constructor(x){
    this.data = x;
    this.next = null;
  }
}
*/

/**
 * @param {Node} head
 * @return {Array} [Node, Node]
 */

// <___________________________________________________MAIN-SOLUTION_____________________________________________________>
class Solution {
    alternatingSplitList(head) {
        // code here
          if (!head) return [null, null];  // If the list is empty, return two empty lists

        let list1 = null, list2 = null;
        let tail1 = null, tail2 = null;
        let current = head;
        let count = 0;  // To keep track of even and odd positions

        while (current) {
            let nextNode = current.next;  // Save the next node
            current.next = null;  // Disconnect the current node from the list

            if (count % 2 === 0) {  // Even index (0-based), add to list1
                if (!list1) {
                    list1 = current;
                    tail1 = list1;
                } else {
                    tail1.next = current;
                    tail1 = tail1.next;
                }
            } else {  // Odd index, add to list2
                if (!list2) {
                    list2 = current;
                    tail2 = list2;
                } else {
                    tail2.next = current;
                    tail2 = tail2.next;
                }
            }

            current = nextNode;  // Move to the next node
            count++;
        }

        return [list1, list2];  // Return the two lists
    }
}


// Compilation Completed
For Input: 
25 36 96 45 78 41
Your Output: 
25 96 78
36 45 41
Expected Output: 
25 96 78
36 45 41