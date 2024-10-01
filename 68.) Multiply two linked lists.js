// 68.) Given elements as nodes of the two singly linked lists. The task is to multiply these two linked lists,
//      say L1 and L2.

// Note: The output could be large take modulo 109+7.

// Examples :

// Input: LinkedList L1 : 3->2 , LinkedList L2 : 2
// Output: 64
// Explanation: 

// Multiplication of 32 and 2 gives 64.
// Input: LinkedList L1: 1->0->0 , LinkedList L2 : 1->0
// Output: 1000
// Explanation: 

// Multiplication of 100 and 10 gives 1000.
// Expected Time Complexity: O(max(n,m))
// Expected Auxilliary Space: O(1)
// where n is the size of L1 and m is the size of L2

// Constraints:
// 1 <= number of nodes <= 9
// 0 <= node->data <= 9

// <_______________________________________________SOLUTION___________________________________________________>

//{ Driver Code Starts
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

function push(head_ref, new_data) {
    let new_Node = new Node(new_data);
    new_Node.next = head_ref[0];
    head_ref[0] = new_Node;
}

function reverse(head_ref) {
    let prev = null;
    let cur = head_ref[0];
    let nxt;
    while (cur != null) {
        nxt = cur.next;
        cur.next = prev;
        prev = cur;
        cur = nxt;
    }
    head_ref[0] = prev;
}

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => { inputString += inputStdin; });

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => string.trim());
    main();
});

function readLine() {
    if (currentLine < inputString.length) {
        return inputString[currentLine++];
    } else {
        return null;
    }
}

function main() {
    let t = parseInt(readLine());
    for (let i = 0; i < t; i++) {
        let first = [ null ];
        let second = [ null ];

        let arrLine = readLine();
        if (arrLine === null) return;
        let arr = arrLine.split(' ').map(x => parseInt(x));
        for (let num of arr) {
            push(first, num);
        }

        let brrLine = readLine();
        if (brrLine === null) return;
        let brr = brrLine.split(' ').map(x => parseInt(x));
        for (let num of brr) {
            push(second, num);
        }

        reverse(first);
        reverse(second);

        let obj = new Solution();
        let res = obj.multiplyTwoLists(first[0], second[0]);
        console.log(res.toString());
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
 * @param {Node} l1
 * @param {Node} l2
 * @return {number}
 */

// Use Bigint for javascript

// <_____________________________________________MAIN-SOLUTION______________________________________________>   
class Solution {
    multiplyTwoLists(first, second) {
        // Code Here
        const MOD = 1000000007n;  // Using BigInt for large number operations

        // Helper function to convert a linked list to a BigInt number
        const linkedListToBigInt = (node) => {
            let num = 0n;  // Start with BigInt 0
            while (node !== null) {
                num = (num * 10n + BigInt(node.data)) % MOD;
                node = node.next;
            }
            return num;
        };

        // Convert both linked lists to BigInt numbers
        let num1 = linkedListToBigInt(first);
        let num2 = linkedListToBigInt(second);

        // Multiply the two BigInt numbers and take modulo
        let result = (num1 * num2) % MOD;

        return Number(result); 
    }
}



// Compilation Completed
For Input: 
1 0 0
1 0
Your Output: 1000
Expected Output: 1000
