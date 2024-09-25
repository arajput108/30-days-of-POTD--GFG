# 62.) Given a singly linked list of integers. The task is to check if the given linked list is palindrome 
#      or not.

# Examples:

# Input: LinkedList: 1->2->1->1->2->1
# Output: true
# Explanation: The given linked list is 1->2->1->1->2->1 , which is a palindrome and Hence, the output is true.

# Input: LinkedList: 1->2->3->4
# Output: false
# Explanation: The given linked list is 1->2->3->4, which is not a palindrome and Hence, the output is false.

# Expected Time Complexity: O(n)
# Expected Auxiliary Space: O(1) 
# Note: You should not use the recursive stack space as well

# Constraints:
# 1 <= number of nodes <= 105
# 1 ≤ node->data ≤ 103

# <_____________________________________________SOLUTION______________________________________________>   

#User function Template for python3
'''
	Your task is to check if given linkedlist
	is a pallindrome or not.
	
	Function Arguments: head (reference to head of the linked list)
	Return Type: boolean , no need to print just return True or False.

	{
		# Node Class
		class Node:
		    def __init__(self, data):   # data -> value stored in node
		        self.data = data
		        self.next = None
	}

	Contributed By: Nagendra Jha
'''

#<_____________________________________________MAIN-SOLUTION______________________________________________>   

#Function to check whether the list is palindrome.
class Solution:
    def isPalindrome(self, head):
        #code here
        #code here
        ans = []
        while head :
            ans.append(head.data)
            head = head.next
        
        return ans == ans[ : : -1]
#<_____________________________________________MAIN-SOLUTION______________________________________________>   


#{ 
 # Driver Code Starts
#main


class Node:
    # Constructor to initialize the node object
    def __init__(self, data):
        self.data = data
        self.next = None


class LinkedList:
    # Function to initialize head
    def __init__(self):
        self.head = None

    # Function to insert a new node at the beginning
    def push(self, new_data):
        new_node = Node(new_data)
        new_node.next = self.head
        self.head = new_node

    # Utility function to prit the linked LinkedList
    def printList(self):
        temp = self.head
        while (temp):
            print(temp.data, end=" ")
            temp = temp.next
        print("")


if __name__ == '__main__':
    t = int(input())
    while (t > 0):
        llist = LinkedList()
        values = input().strip().split()
        for i in reversed(values):
            llist.push(i)
        flag = Solution().isPalindrome(llist.head)
        if flag:
            print("true")
        else:
            print("false")
        t -= 1
# Contributed by: Harshit Sidhwa

# } Driver Code Ends


# Compilation Completed
For Input: 
1 2 1 1 2 1
Your Output: 
true
Expected Output: 
true