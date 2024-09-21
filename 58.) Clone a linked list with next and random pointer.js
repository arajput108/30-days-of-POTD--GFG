// 58.) You are given a special linked list where each node has a next pointer pointing to its next node. 
//      You are also given some random pointers, where you will be given some pairs denoting two nodes a 
//      and b i.e. a->random = b (random is a pointer to a random node).

// Construct a copy of the given list. The copy should consist of the same number of new nodes, where each 
// new node has its value set to the value of its corresponding original node. Both the next and random pointer 
// of the new nodes should point to new nodes in the copied list such that the original and copied list pointers 
// represent the same list state. None of the pointers in the new list should point to nodes in the original list.

// For example, if there are two nodes x and y in the original list, where x->random = y, then for the corresponding two nodes xnew and ynew in the copied list, xnew->random = ynew.

// Return the head of the copied linked list.

// NOTE : 
// 1. If there is any node whose arbitrary pointer is not given then it's by default NULL. 
// 2. Don't make any changes to the original linked list.

// ArbitLinked List1

// Note: The diagram isn't part of any example, it just depicts an example of how the linked list may look.

// Examples:

// Input: LinkedList: 1->2->3->4 , pairs = [{1,2},{2,4}]
// Output: true
// Explanation: In this test case, there are 4 nodes in linked list.  Among these 4 nodes,  2 nodes have arbitrary pointer set, rest two nodes have arbitrary pointer as NULL. Second line tells us the value of four nodes. The third line gives the information about arbitrary pointers. The first node arbitrary pointer is set to node 2.  The second node arbitrary pointer is set to node 4.
// Input: LinkedList: 1->3->5->9 , pairs[] = [{1,1},{3,4}]
// Output: true
// Explanation: In the given testcase, applying the method as stated in the above example, the output will be 1.
// Expected Time Complexity: O(n)
// Expected Auxilliary Space: O(1)

// Constraints:
// 1 <= numbers of random pointer <= number of nodes <= 100
// 0 <= node->data <= 1000
// 1 <= a, b <= 100

// <_______________________________________________SOLUTION___________________________________________________>

//{ Driver Code Starts
'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => { inputString += inputStdin; });

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => string.trim());

    main();
});

function readLine() { return inputString[currentLine++]; }

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.random = null; // Changed from arb to random
    }
}

function printList(head) {
    let current = head;
    let s = '';
    while (current !== null) {
        let k = current.random === null
                    ? -1
                    : current.random.data; // Changed from arb to random
        s += `${current.data} ${k} `;
        current = current.next;
    }
    console.log(s);
}

function validation(head, res) {
    let temp1 = head;
    let temp2 = res;
    let len1 = 0, len2 = 0;
    while (temp1 !== null) {
        len1++;
        temp1 = temp1.next;
    }
    while (temp2 !== null) {
        len2++;
        temp2 = temp2.next;
    }
    if (len1 !== len2) return false;

    temp1 = head;
    temp2 = res;
    let a = new Map();
    while (temp1 !== null) {
        if (temp1 === temp2) return false;
        if (temp1.data !== temp2.data) return false;
        if (temp1.random !== null &&
            temp2.random !== null) { // Changed from arb to random
            if (temp1.random.data !== temp2.random.data)
                return false; // Changed from arb to random
        } else if ((temp1.random !== null &&
                    temp2.random === null) || // Changed from arb to random
                   (temp1.random === null &&
                    temp2.random !== null)) { // Changed from arb to random
            return false;
        }
        a.set(temp1, temp2);
        temp1 = temp1.next;
        temp2 = temp2.next;
    }

    temp1 = head;
    temp2 = res;
    while (temp1 !== null) {
        if (temp1.random !== null &&
            temp2.random !== null) { // Changed from arb to random
            if (a.get(temp1.random) !== temp2.random)
                return false; // Changed from arb to random
        }
        temp1 = temp1.next;
        temp2 = temp2.next;
    }
    return true;
}

function main() {
    let t = parseInt(readLine());
    for (let i = 0; i < t; i++) {
        let input_ar1 = readLine().split(' ').map(x => parseInt(x));
        let n = input_ar1.length;
        let head = new Node(input_ar1[0]);
        let head2 = new Node(input_ar1[0]);
        let tail = head;
        let tail2 = head2;
        for (let j = 1; j < n; j++) {
            tail.next = new Node(input_ar1[j]);
            tail = tail.next;
            tail2.next = new Node(input_ar1[j]);
            tail2 = tail2.next;
        }

        let input_ar2 = readLine().split(' ').map(x => parseInt(x));
        let k = input_ar2.length / 2;
        let index = 0;
        for (let j = 0; j < k; j++) {
            let a = input_ar2[index++];
            let b = input_ar2[index++];
            let tempA = head;
            let temp2A = head2;
            let count = 0;
            while (tempA !== null) {
                if (count === a - 1) break;
                tempA = tempA.next;
                temp2A = temp2A.next;
                count++;
            }
            let tempB = head;
            let temp2B = head2;
            count = 0;
            while (tempB !== null) {
                if (count === b - 1) break;
                tempB = tempB.next;
                temp2B = temp2B.next;
                count++;
            }
            if (a <= n) {
                tempA.random = tempB;   // Changed from arb to random
                temp2A.random = temp2B; // Changed from arb to random
            }
        }

        let obj = new Solution();
        let res = obj.copyList(head);
        if (validation(head2, res) && validation(head, res))
            console.log("true");
        else
            console.log("false");
    }
}

// } Driver Code Ends


// User function Template for javascript

/**
 * @param {Node} head
 * @returns {Node}
 */

/*
class Node{
    constructor(data){
        this.data = data;
        this.next = null;
        this.random = null;
    }
}
*/
// <_____________________________________________MAIN-SOLUTION______________________________________________>   
class Solution {
    // Function to clone a linked list with next and random pointer.
    copyList(head) {
        // your code here
         if (!head) return null;
        
        // Step 1: Insert cloned nodes interleaved with original nodes
        let curr = head;
        while (curr) {
            const cloneNode = new Node(curr.data); // Use curr.data to copy the data properly
            cloneNode.next = curr.next;
            curr.next = cloneNode;
            curr = cloneNode.next;
        }

        // Step 2: Set the random pointers for the cloned nodes
        curr = head;
        while (curr) {
            if (curr.random) {
                curr.next.random = curr.random.next;
            }
            curr = curr.next.next;
        }

        // Step 3: Restore the original list and extract the cloned list
        curr = head;
        const cloneHead = head.next;
        let copy = cloneHead;
        
        while (curr) {
            curr.next = curr.next.next;
            if (copy.next) {
                copy.next = copy.next.next;
            }
            curr = curr.next;
            copy = copy.next;
        }

        return cloneHead;
    }
}





// Compilation Completed
For Input: 
1 2 3 4
1 2 2 4
Your Output: true
Expected Output: true