// 49.) Given the head of a linked list, the task is to find the middle. For example, the middle 
//      of 1-> 2->3->4->5 is 3. If there are two middle nodes (even count), return the second middle. 
//      For example, middle of 1->2->3->4->5->6 is 4.

// Examples:

// Input: Linked list: 1->2->3->4->5
// Output: 3

// Explanation: The given linked list is 1->2->3->4->5 and its middle is 3.
// Input: Linked list: 2->4->6->7->5->1
// Output: 7 

// Explanation: The given linked list is 2->4->6->7->5->1 and its middle is 7.
// Expected Time Complexity: O(n)
// Expected Auxiliary Space: O(1)

// Constraints:
// 1 <= no. of nodes <= 105


// <_______________________________________________SOLUTION___________________________________________________>

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

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

let head = null;

function findNode(head, search_for) {
    let current = head;
    while (current !== null) {
        if (current.data == search_for) break;
        current = current.next;
    }
    return current;
}

function printlist(head) {
    let current = head;
    let s = '';
    while (current !== null) {
        s += current.data + " ";
        current = current.next;
    }
    console.log(s);
}

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for (; i < t; i++) {

        let input_ar1 = readLine().split(' ').map(x => parseInt(x));
        head = null;
        head = new Node(input_ar1[0]);
        let tail = head;
        let n = input_ar1.length;
        for (let i = 1; i < n; i++) {
            tail.next = new Node(input_ar1[i]);
            tail = tail.next;
        }
        let obj = new Solution();
        let res = obj.getMiddle(head);
        console.log(res);
    }
}
// } Driver Code Ends


// User function Template for javascript

/**
 * @param {Node} node
 * @return {number}
 */

/*
class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

let head;
This is method only submission.
You only need to complete the below method.
*/



// <___________________________________________________MAIN-SOLUTION_____________________________________________________>
class Solution {
    /* Should return data of middle node. If linked list is empty, then  -1*/
    getMiddle(node) {
        // your code here
        if (node === null) return -1;

        let slow = node;  // Slow pointer moves one step at a time
        let fast = node;  // Fast pointer moves two steps at a time

        // Traverse the list with two pointers
        while (fast !== null && fast.next !== null) {
            slow = slow.next;       // Slow moves one step
            fast = fast.next.next;  // Fast moves two steps
        }

        // When the loop ends, slow will be at the middle node
        return slow.data;
    }
}


// Compilation Completed
For Input: 
1 2 3 4 5
Your Output: 3
Expected Output: 3