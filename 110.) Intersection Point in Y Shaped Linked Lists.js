// 110.) Given two singly linked lists, return the point where two linked lists intersect.

// Note: If the linked lists do not merge at any point, return -1.

// Examples:

// Input: Linked list 1: 4->4->4->4->4, Linked list 2: 4->4->4
 
// Output: 4
// Explanation: From the above image, it is clearly seen that the common part is 4->4 whose starting point is 4.

// Input: Linked list 1: 4->1->8->4->5, Linked List 2: 5->6->1->8->4->5
 
// Output: 8
// Explanation: From the above image, it is clearly seen that the common part is 8->4->5 whose starting point is 8.
// Input: Linked list 1: 1->2->3, Linked list 2: 4->5->6
// Output: -1
// Explanation: There is no common part, so there is no interaction point.
// Try to solve the problem without using any extra space.

// Constraints:
// 2 ≤ size of first linkedist + size of second linkedlist ≤ 2*105
// -10000 ≤ data of nodes ≤ 10000
// <______________________________________________SOLUTION___________________________________________________>
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

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for (; i < t; i++) {

        let input_ar1 = readLine().split(' ').map(x => parseInt(x));
        let head1 = new Node(input_ar1[0]);
        let tail1 = head1;
        for (let i = 1; i < input_ar1.length; i++) {
            tail1.next = new Node(input_ar1[i]);
            tail1 = tail1.next;
        }
        let input_ar2 = readLine().split(' ').map(x => parseInt(x));
        let head2 = new Node(input_ar2[0]);
        let tail2 = head2;
        for (let i = 1; i < input_ar2.length; i++) {
            tail2.next = new Node(input_ar2[i]);
            tail2 = tail2.next;
        }
        let common_list = "";
        common_list = readLine();
        let input_ar3 = [];
        let head3 = null;
        input_ar3 = common_list.split(' ').map(x => parseInt(x));
        head3 = new Node(input_ar3[0]);
        let tail3 = head3;
        for (let i = 1; i < input_ar3.length; i++) {
            tail3.next = new Node(input_ar3[i]);
            tail3 = tail3.next;
        }

        let temp = head1;
        while (temp !== null && temp.next !== null) temp = temp.next;
        if (temp !== null) temp.next = head3;

        temp = head2;
        while (temp !== null && temp.next !== null) temp = temp.next;
        if (temp !== null) temp.next = head3;

        let obj = new Solution();
        console.log(obj.intersectPoint(head1, head2));

        console.log("~");
    }
}
// } Driver Code Ends


// User function Template for javascript

/**
 * @param {Node} head1
 * @param {Node} head2
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
    // Function to find intersection point in Y shaped Linked Lists.
    intersectPoint(head1, head2) {
        // your code here
         if (!head1 || !head2) return -1;
        
        let p1 = head1;
        let p2 = head2;

        // Traverse both lists, switching to the head of the other list when reaching the end
        while (p1 !== p2) {
            p1 = p1 ? p1.next : head2;
            p2 = p2 ? p2.next : head1;
        }

        // If there is an intersection, p1 will be at the intersection node, otherwise null
        return p1 ? p1.data : -1;
    }
}

// Compilation Completed
For Input: 
3 6 9
10
15 30
Your Output: 
15
Expected Output: 
15