# 206.) Given a Binary Search Tree (with all values unique) and two nodes n1 and n2 (n1 != n2). 
#       You may assume that both nodes exist in the tree. Find the Lowest Common Ancestor (LCA) 
#       of the given two nodes in the BST.

#      LCA between two nodes n1 and n2 is defined as the lowest node that has both n1 and n2 as 
#      descendants (where we allow a node to be a descendant of itself).

# Examples:

# Input: root = [5, 4, 6, 3, N, N, 7, N, N, N, 8], n1 = 7, n2 = 8
        
# Output: 7
# Explanation: 7 is the closest node to both 7 and 8, which is also an ancestor of both the nodes.
# Input: root = [20, 8, 22, 4, 12, N, N, N, N, 10, 14], n1 = 8, n2 = 14
                
# Output: 8
# Explanation: 8 is the closest node to both 8 and 14, which is also an ancestor of both the nodes.
# Input: root = [2, 1, 3], n1 = 1, n2 = 3
        
# Output: 2
# Explanation: 2 is the closest node to both 1 and 3, which is also an ancestor of both the nodes.
# Constraints:
# 1 <= number of nodes <= 105
# 1 <= node->data <= 105
# 1 <= n1, n2 <= 105
# <______________________________________________SOLUTION___________________________________________________>
'''
class Node:
    def __init__(self, val):
        self.right = None
        self.data = val
        self.left = None
'''
class Solution:
    def LCA(self, root, n1, n2):
        # your code here
        if not root:
            return None

        # Dictionary to store parent references
        parent = {}
        stack = [root]

        # Traverse the tree and store parents
        while stack:
            node = stack.pop()

            if node.left:
                parent[node.left] = node
                stack.append(node.left)

            if node.right:
                parent[node.right] = node
                stack.append(node.right)

        # Store ancestors of n1
        ancestors = set()
        while n1:
            ancestors.add(n1)
            n1 = parent.get(n1, None)

        # Find the first common ancestor of n2
        while n2 not in ancestors:
            n2 = parent.get(n2, None)

        return n2
    



#{ 
 # Driver Code Starts
from collections import deque


# Tree Node
class Node:

    def __init__(self, val):
        self.right = None
        self.data = val
        self.left = None


# Function to Build Tree
def buildTree(s):
    # Corner Case
    if len(s) == 0 or s[0] == "N":
        return None

    # Creating list of strings from input string after splitting by space
    ip = list(map(str, s.split()))

    # Create the root of the tree
    root = Node(int(ip[0]))
    q = deque()

    # Push the root to the queue
    q.append(root)

    # Starting from the second element
    i = 1
    while len(q) > 0 and i < len(ip):
        # Get and remove the front of the queue
        currNode = q.popleft()

        # Get the current node's value from the string
        currVal = ip[i]

        # If the left child is not null
        if currVal != "N":
            # Create the left child for the current node
            currNode.left = Node(int(currVal))
            # Push it to the queue
            q.append(currNode.left)

        # For the right child
        i += 1
        if i >= len(ip):
            break
        currVal = ip[i]

        # If the right child is not null
        if currVal != "N":
            # Create the right child for the current node
            currNode.right = Node(int(currVal))
            # Push it to the queue
            q.append(currNode.right)
        i += 1
    return root


def searchBSTRecursive(root, num):
    if root is None or root.data == num:
        return root  # Found the node or reached a null node

    if num < root.data:
        return searchBSTRecursive(root.left, num)  # Search in left subtree
    else:
        return searchBSTRecursive(root.right, num)  # Search in right subtree


if __name__ == "__main__":
    t = int(input())
    ob = Solution()
    for _ in range(t):
        s = input()
        root = buildTree(s)

        # Read n1 and n2 from two separate lines
        x = int(input())
        y = int(input())
        n1 = searchBSTRecursive(root, x)
        n2 = searchBSTRecursive(root, y)
        print(ob.LCA(root, n1, n2).data)
        print("~")

# } Driver Code Ends



# Compilation Completed
For Input: 
5 4 6 3 N N 7 N N N 8
7
8
Your Output: 
7
Expected Output: 
7