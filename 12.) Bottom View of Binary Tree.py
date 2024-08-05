# 12.) Given a binary tree, return an array where elements represent the bottom view of the binary tree from left to right.

# Note: If there are multiple bottom-most nodes for a horizontal distance from the root, then the latter one in the level traversal is considered. For example, in the below diagram, 3 and 4 are both the bottommost nodes at a horizontal distance of 0, here 4 will be considered.

#                       20
#                     /    \
#                   8       22
#                 /   \     /   \
#               5      3 4     25
#                      /    \      
#                  10       14

# For the above tree, the output should be 5 10 4 14 25.

# Examples :

# Input:
#        1
#      /   \
#     3     2
# Output: 3 1 2
# Explanation: First case represents a tree with 3 nodes and 2 edges where root is 1, left child of 1 is 3 and right child of 1 is 2.

# Thus bottom view of the binary tree will be 3 1 2.
# Input:
#          10
#        /    \
#       20    30
#      /  \
#     40   60
# Output: 40 20 60 30
# Expected Time Complexity: O(n)
# Expected Auxiliary Space: O(n)

# Constraints:
# 1 <= Number of nodes <= 105
# 1 <= Data of a node <= 105

#<_______________________________________________SOLUTION______________________________________________________________>

from collections import deque

class Node:
    def __init__(self, data):
        self.data = data
        self.left = None
        self.right = None

#<_______________________________________________SOLUTION______________________________________________________________>

class Solution:
    def bottomView(self, root):
        if not root:
            return []
        
        # Dictionary to store the bottom-most node at each horizontal distance
        hd_map = {}
        # Queue for level-order traversal (BFS)
        queue = deque([(root, 0)])
        min_hd, max_hd = 0, 0
        
        while queue:
            node, hd = queue.popleft()
            
            # Update the map with the bottom-most node at each horizontal distance
            hd_map[hd] = node.data
            
            # Update min_hd and max_hd
            min_hd = min(min_hd, hd)
            max_hd = max(max_hd, hd)
            
            # If there is a left child, add it to the queue with horizontal distance - 1
            if node.left:
                queue.append((node.left, hd - 1))
            # If there is a right child, add it to the queue with horizontal distance + 1
            if node.right:
                queue.append((node.right, hd + 1))
        
        # Constructing the result array
        result = []
        for hd in range(min_hd, max_hd + 1):
            result.append(hd_map[hd])
        
        return result

# Example usage:
root = Node(20)
root.left = Node(8)
root.right = Node(22)
root.left.left = Node(5)
root.left.right = Node(3)
root.right.left = Node(4)
root.right.right = Node(25)
root.left.right.left = Node(10)
root.left.right.right = Node(14)

sol = Solution()
print(sol.bottomView(root))  # Output: [5, 10, 4, 14, 25]
