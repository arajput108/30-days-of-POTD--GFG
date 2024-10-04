// 71.) Given a Circular Linked List. The task is to delete the given node, key in the circular linked list, and reverse the circular linked list.

// Note:

// You don't have to print anything, just return the head of the modified list in each function.
// Nodes may consist of Duplicate values.
// The key may or may not be present.
// Examples:

// Input: Linked List: 2->5->7->8->10, key = 8

// Output: 10->7->5->2 
// Explanation: After deleting 8 from the given circular linked list, it has elements as 2, 5, 7, 10. Now, 
// reversing this list will result in 10, 7, 5, 2 & the resultant list is also circular.
// Input: Linked List: 1->7->8->10, key = 8

// Output: 10->7->1
// Explanation: After deleting 8 from the given circular linked list, it has elements as 1, 7,10. Now, 
// reversing this list will result in 10, 7, 1 & the resultant list is also circular.
// Input: Linked List: 3->6->4->10, key = 9
// Output: 10->4->6->3
// Explanation: As there no key present in the list, so simply reverse the list & the resultant list is 
// also circular.
// Expected Time Complexity: O(n)
// Expected Auxillary Space: O(1)

// Constraints:
// 2 <= number of nodes, key  <= 105
// 1 <= node -> data <= 105

// <_______________________________________________SOLUTION___________________________________________________>
//{ Driver Code Starts
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

function printList(head) {
    if (head === null) {
        console.log("empty");
        return;
    }
    let temp = head;
    let result = [];
    do {
        result.push(temp.data);
        temp = temp.next;
    } while (temp !== head);
    console.log(result.join(' '));
}

// Position this line where user code will be pasted.

function main() {
    let t = parseInt(readLine());
    for (let i = 0; i < t; i++) {
        let arr = readLine().split(' ').map(x => parseInt(x));
        let key = parseInt(readLine());
        let head = new Node(arr[0]);
        let tail = head;

        // Creating the circular linked list
        for (let j = 1; j < arr.length; ++j) {
            tail.next = new Node(arr[j]);
            tail = tail.next;
        }
        tail.next = head; // Make the list circular

        // Instantiate the Solution class and process the linked list
        const ob = new Solution();
        head = ob.deleteNode(head, key); // Delete the node with the given key
        head = ob.reverse(head);         // Reverse the circular linked list

        // Print the modified linked list
        printList(head);
    }
}

// } Driver Code Ends

// <___________________________________________MAIN-SOLUTION-1______________________________________________>   

// User function Template for javascript
class Solution {
    // Function to reverse a circular linked list
    reverse(head) {
        // code here
        if (!head || head.next === head) return head; // if there's 0 or 1 element, no need to reverse

        let prev = null;
        let current = head;
        let nextNode;
        let tail = head;

        // Traversing through the circular linked list
        do {
            nextNode = current.next;
            current.next = prev;
            prev = current;
            current = nextNode;
        } while (current !== head);

        head.next = prev;  // adjusting the last node's next pointer
        head = prev;       // new head is the previous tail node

        return head;
    }

// <____________________________________________MAIN-SOLUTION-2______________________________________________>   

    // Function to delete a node from the circular linked list
    deleteNode(head, key) {
        // code here
         if (!head) return null;  // empty list
        let current = head;
        let prev = null;

        // If the list contains only one node
        if (head.next === head) {
            if (head.data === key) return null;
            else return head;
        }

        // Traverse through the list to find the node to delete
        while (true) {
            if (current.data === key) {
                if (prev) {
                    prev.next = current.next;
                } else {
                    // If the node to delete is the head, we need to adjust head pointer
                    let temp = head;
                    while (temp.next !== head) {
                        temp = temp.next;
                    }
                    temp.next = current.next;  // link the last node to the new head
                    head = current.next;       // change head
                }
                break;
            }

            prev = current;
            current = current.next;

            // If we have completed one full cycle and did not find the key
            if (current === head) break;
        }

        return head;
    }
}

// Compilation Completed
For Input: 
10 7 8 4 6
8
Your Output:  6 4 7 10
Expected Output:  6 4 7 10