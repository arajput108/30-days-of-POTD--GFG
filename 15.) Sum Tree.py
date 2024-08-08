# 15.) Given a Binary Tree. Check for the Sum Tree for every node except the leaf node. Return true if it is a Sum Tree otherwise, return false.

# A SumTree is a Binary Tree where the value of a node is equal to the sum of the nodes present in its left subtree and right subtree. An empty tree is also a Sum Tree as the sum of an empty tree can be considered to be 0. A leaf node is also considered a Sum Tree.

# Examples :
# Input:
#     3
#   /   \    
#  1     2
# Output: true
# Explanation: The sum of left subtree and right subtree is 1 + 2 = 3, which is the value of the root node. Therefore,the given binary tree is a sum tree.
# Input:
#           10
#         /    \
#       20      30
#     /   \ 
#    10    10
# Output: false
# Explanation: The given tree is not a sum tree. For the root node, sum of elements in left subtree is 40 and sum of elements in right subtree is 30. Root element = 10 which is not equal to 30+40.
# Expected Time Complexity: O(n)
# Expected Auxiliary Space: O(Height of the Tree)

# Constraints:
# 1 ≤ number of nodes ≤ 105
# 1 ≤ node value ≤ 105

#<______________________________________________SOLUTION__________________________________________________________>

#{ 
 # Driver Code Starts
#Initial Template for Python 3
# 
# } Driver Code Ends
#User function Template for python3

'''
class Node:
    def __init__(self, data):
        self.data = data
        self.left = None
        self.right = None
'''



#<______________________________________________MAIN-SOLUTION__________________________________________________________>
class Solution:
    def is_sum_tree(self, node):
        # code here
         # Helper function to check if the tree is a Sum Tree and return the sum of the subtree.
        def check_sum_tree(node):
            if node is None:
                return 0, True
            
            if node.left is None and node.right is None:
                return node.data, True
            
            left_sum, is_left_sum_tree = check_sum_tree(node.left)
            right_sum, is_right_sum_tree = check_sum_tree(node.right)
            
            total_sum = left_sum + right_sum
            
            is_sum_tree = is_left_sum_tree and is_right_sum_tree and (node.data == total_sum)
            
            return total_sum + node.data, is_sum_tree
        
        # Calling the helper function and returning the result.
        _, result = check_sum_tree(root)
        return result

#{ 
 # Driver Code Starts.
class Node:

    def __init__(self, data):
        self.data = data
        self.left = None
        self.right = None


# Utility function to create a new Tree Node
def new_node(val):
    return Node(val)


# Function to Build Tree
def build_tree(s):
    # Corner Case
    if not s or s[0] == 'N':
        return None

    # Creating list of strings from input string after splitting by space
    ip = s.split()

    # Create the root of the tree
    root = new_node(int(ip[0]))

    # Push the root to the queue
    queue = []
    queue.append(root)

    # Starting from the second element
    i = 1
    while queue and i < len(ip):
        # Get and remove the front of the queue
        curr_node = queue.pop(0)

        # Get the current node's value from the string
        curr_val = ip[i]

        # If the left child is not null
        if curr_val != "N":
            # Create the left child for the current node
            curr_node.left = new_node(int(curr_val))

            # Push it to the queue
            queue.append(curr_node.left)

        # For the right child
        i += 1
        if i >= len(ip):
            break
        curr_val = ip[i]

        # If the right child is not null
        if curr_val != "N":
            # Create the right child for the current node
            curr_node.right = new_node(int(curr_val))

            # Push it to the queue
            queue.append(curr_node.right)
        i += 1

    return root


# Driver code
if __name__ == "__main__":
    t = int(input())
    for _ in range(t):
        s = input()
        root = build_tree(s)
        ob = Solution()
        if ob.is_sum_tree(root):
            print("true")
        else:
            print("false")



#Compilation Completed
For Input: 
3 1 2
Your Output: 
true
Expected Output: 
true
