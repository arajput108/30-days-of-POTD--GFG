// 27.) Given a binary tree and a node data called target. Find the minimum time required to burn the complete binary 
        // tree if the target is set on fire. It is known that in 1 second all nodes connected to a given node get burned. 
        // That is its left child, right child, and parent.
// Note: The tree contains unique values.


// Examples : 

// Input:      
//           1
//         /   \
//       2      3
//     /  \      \
//    4    5      6
//        / \      \
//       7   8      9
//                    \
//                    10
// Target Node = 8
// Output: 7
// Explanation: If leaf with the value 8 is set on fire. 
// After 1 sec: 5 is set on fire.
// After 2 sec: 2, 7 are set to fire.
// After 3 sec: 4, 1 are set to fire.
// After 4 sec: 3 is set to fire.
// After 5 sec: 6 is set to fire.
// After 6 sec: 9 is set to fire.
// After 7 sec: 10 is set to fire.
// It takes 7s to burn the complete tree.
// Input:      
//           1
//         /   \
//       2      3
//     /  \      \
//    4    5      7
//   /    / 
//  8    10
// Target Node = 10
// Output: 5

// Expected Time Complexity: O(number of nodes)
// Expected Auxiliary Space: O(height of tree)


// Constraints:
// 1 ≤ number of nodes ≤ 105

// 1 ≤ values of nodes ≤ 105


# <__________________________________________MAIN-SOLUTION__________________________________________________________>
#User function Template for python3


class Solution:
    def ans(self, ptr, target, maxtime):
        if ptr is None:
            return 0
        
        val_1 = self.ans(ptr.left, target, maxtime)
        val_2 = self.ans(ptr.right, target, maxtime)
        
        if ptr.data == target:
            maxtime[0] = max(maxtime[0], max(val_1, val_2))
            return -1
        
        if val_1 >= 0 and val_2 >= 0:
            return max(val_1, val_2) + 1
        
        if val_1 > val_2:
            val_1, val_2 = val_2, val_1
        
        maxtime[0] = max(maxtime[0], val_2 - val_1)
        return val_1 - 1

    def minTime(self, root, target):
        maxtime = [0]  # Using a list to allow updates inside the ans method
        self.ans(root, target, maxtime)
        return maxtime[0]

#<_______________________________________________SOLUTION-ENDS__________________________________________________________>


#{ 
 # Driver Code Starts
#Initial Template for Python 3

from collections import deque

# Tree Node
class Node:
    def __init__(self, val):
        self.right = None
        self.data = val
        self.left = None

# Function to Build Tree   
def buildTree(s):
    #Corner Case
    if(len(s)==0 or s[0]=="N"):           
        return None
        
    # Creating list of strings from input 
    # string after spliting by space
    ip=list(map(str,s.split()))
    
    # Create the root of the tree
    root=Node(int(ip[0]))                     
    size=0
    q=deque()
    
    # Push the root to the queue
    q.append(root)                            
    size=size+1 
    
    # Starting from the second element
    i=1                                       
    while(size>0 and i<len(ip)):
        # Get and remove the front of the queue
        currNode=q[0]
        q.popleft()
        size=size-1
        
        # Get the current node's value from the string
        currVal=ip[i]
        
        # If the left child is not null
        if(currVal!="N"):
            
            # Create the left child for the current node
            currNode.left=Node(int(currVal))
            
            # Push it to the queue
            q.append(currNode.left)
            size=size+1
        # For the right child
        i=i+1
        if(i>=len(ip)):
            break
        currVal=ip[i]
        
        # If the right child is not null
        if(currVal!="N"):
            
            # Create the right child for the current node
            currNode.right=Node(int(currVal))
            
            # Push it to the queue
            q.append(currNode.right)
            size=size+1
        i=i+1
    return root

if __name__=="__main__":
    t=int(input())
    for _ in range(t):
        line=input()
        target=int(input())
        root=buildTree(line)
        print(Solution().minTime(root,target))

# } Driver Code Ends



#Compilation Completed
For Input: 
1 2 3 4 5 N 6 N N 7 8 N 9 10 11 N N N 12 N N N 13
8
Your Output: 7
Expected Output: 7