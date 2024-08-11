#18.) Given a set of n jobs where each jobi has a deadline and profit associated with it.

# Each job takes 1 unit of time to complete and only one job can be scheduled at a time. We earn the profit associated with a job if and only if the job is completed by its deadline.

# // Find the number of jobs done and the maximum profit.

# // Note: Jobs will be given in the form (Jobid, Deadline, Profit) associated with that Job. Deadline of the job is the time on or before which job needs to be completed to earn the profit.

# // Examples :

# // Input: Jobs = [[1,4,20],[2,1,1],[3,1,40],[4,1,30]]
# // Output: 2 60
# // Explanation: Job1 and Job3 can be done with maximum profit of 60 (20+40).
# // Input: Jobs = [[1,2,100],[2,1,19],[3,2,27],[4,1,25],[5,1,15]]
# // Output: 2 127
# // Explanation: 2 jobs can be done with maximum profit of 127 (100+27).
# // Expected Time Complexity: O(nlogn)
# // Expected Auxilliary Space: O(n)

# // Constraints:
# // 1 <= n <= 105
# // 1 <= Deadline,id <= n
# // 1 <= Profit <= 500

#<______________________________________________SOLUTION__________________________________________________________>

#User function Template for python3
'''
class Job:
    
    # Job class which stores profit and deadline.
    
    def __init__(self,profit=0,deadline=0):
        self.profit = profit
        self.deadline = deadline
        self.id = 0
'''        

#<_____________________________________________MAIN-SOLUTION__________________________________________________________>

class Solution:
    
    #Function to find the maximum profit and the number of jobs done.
    def JobScheduling(self,Jobs,n):
        
        # code here
         # Sorting jobs based on profit in descending order
        Jobs.sort(key=lambda x: x.profit, reverse=True)
        
        # Array to keep track of used slots
        used = [False] * (n + 1)
        
        sum_profit = 0
        count_jobs = 0
        
        # Iterating through each job
        for job in Jobs:
            deadline = job.deadline
            
            # Find a slot for the job, starting from its deadline
            while deadline > 0:
                if not used[deadline]:
                    used[deadline] = True
                    count_jobs += 1
                    sum_profit += job.profit
                    break
                deadline -= 1
        
        return [count_jobs, sum_profit]




#Compilation Completed
For Input: 
4
1 4 20 2 1 10 3 1 40 4 1 30
Your Output: 
2 60
Expected Output: 
2 60