# 17.) Given the head of a singly linked list, the task is to rotate the linked list clockwise by k nodes, i.e., left-shift the linked list by k nodes, where k is a given positive integer smaller than or equal to length of the linked list.

# Examples:

# Input: linkedlist: 2->4->7->8->9 , k = 3
# Output: 8->9->2->4->7
# Explanation:
# Rotate 1: 4 -> 7 -> 8 -> 9 -> 2
# Rotate 2: 7 -> 8 -> 9 -> 2 -> 4
# Rotate 3: 8 -> 9 -> 2 -> 4 -> 7

# Input: linkedlist: 1->2->3->4->5->6->7->8 , k = 4
# Output: 5->6->7->8->1->2->3->4

# Expected Time Complexity: O(n)
# Expected Auxiliary Space: O(1)

# Constraints:
# 1 <= number of nodes <= 103
# 1 <= node -> data <= 104
# 1 <= k <= number of nodes 



# <______________________________________________MAIN-SOLUTION__________________________________________________________>

# Your task is to complete this function

'''

class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

'''
# <______________________________________________SOLUTION__________________________________________________________>

class Solution:
    
    #Function to rotate a linked list.
    def rotate(self, head, k):
        # code here
        last = head
        sz = 1
        while last.next:
            last = last.next
            sz+=1
        if k==sz:
            return head
        
        pev = None
        curr = head
        while k:
            pev = curr
            curr = curr.next
            k-=1
        
        pev.next = None
        last.next = head
        return curr





#Compilation Completed
For Input: 
1 2 3 4 5 6 7 8
4

Your Output: 
5 6 7 8 1 2 3 4

Expected Output: 
5 6 7 8 1 2 3 4

