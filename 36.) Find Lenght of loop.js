// 36.) Given the head of a linked list, determine whether the list contains a loop. If a loop is present,  
//      return the number of nodes in the loop, otherwise return 0.



//     Note: 'c' is the position of the node which is the next pointer of the last node of the linkedlist. If c is 0, 
//     then there is no loop.

// Examples:

// Input: LinkedList: 25->14->19->33->10->21->39->90->58->45, c = 4
// Output: 7
// Explanation: The loop is from 33 to 45. So length of loop is 33->10->21->39-> 90->58->45 = 7. 
// The number 33 is connected to the last node of the linkedlist to form the loop because according to the input the 4th node from the beginning(1 based indexing) 
// will be connected to the last node for the loop.
 
// Input: LinkedList: 5->4, c = 0
// Output: 0
// Explanation: There is no loop.

// Expected Time Complexity: O(n)
// Expected Auxiliary Space: O(1)

// Constraints:
// 1 <= no. of nodes <= 106
// 0 <= node.data <=106
// 0 <= c<= n-1

// <__________________________________________________SOLUTION__________________________________________________________>
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
    }
}

function printList(head) {
    let temp = head;
    let s = '';
    while (temp !== null) {
        s += temp.data + " ";
        temp = temp.next;
    }
    console.log(s);
}

function loopHere(head, tail, position) {
    if (position === 0) return;
    let walk = head;
    for (let i = 1; i < position; i++) walk = walk.next;
    tail.next = walk;
}

function main() {
    let t = parseInt(readLine());
    for (let i = 0; i < t; i++) {
        let input_ar1 = readLine().split(' ').map(x => parseInt(x));
        let head = new Node(input_ar1[0]);
        let tail = head;
        for (let j = 1; j < input_ar1.length; j++) {
            tail.next = new Node(input_ar1[j]);
            tail = tail.next;
        }
        let k = parseInt(readLine());
        loopHere(head, tail, k);
        let obj = new Solution();
        console.log(obj.countNodesinLoop(head));
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



// <________________________________________________MAIN-SOLUTION_______________________________________________________>
class Solution {
    // Function to find the length of a loop in the linked list.
    countNodesinLoop(head) {
        // your code here
        let slow = head;
        let fast = head;
        
        // Step 1: Detect the loop using Floyd's Cycle Detection Algorithm
        while (fast !== null && fast.next !== null) {
            slow = slow.next;
            fast = fast.next.next;

            // If slow and fast meet, a loop exists
            if (slow === fast) {
                return this.countLoopLength(slow);
            }
        }
        
        // If no loop is found, return 0
        return 0;
    }
    
    // Helper function to count the number of nodes in the loop
    countLoopLength(loopNode) {
        let current = loopNode;
        let count = 1;

        while (current.next !== loopNode) {
            count++;
            current = current.next;
        }

        return count;
    }
}


// Compilation Completed
For Input: 25 14 19 33 10 21 39 90 58 45 4
Your Output: 7
Expected Output: 7