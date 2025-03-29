// 246.) You are given two arrays: deadline[], and profit[], which represent a set of jobs, where 
//       each job is associated with a deadline, and a profit. Each job takes 1 unit of time to 
//       complete, and only one job can be scheduled at a time. You will earn the profit associated 
//       with a job only if it is completed by its deadline.

// Your task is to find:

// The maximum number of jobs that can be completed within their deadlines.
// The total maximum profit earned by completing those jobs.
// Examples :

// Input: deadline[] = [4, 1, 1, 1], profit[] = [20, 10, 40, 30]
// Output: [2, 60]
// Explanation: Job1 and Job3 can be done with maximum profit of 60 (20+40).
// Input: deadline[] = [2, 1, 2, 1, 1], profit[] = [100, 19, 27, 25, 15]
// Output: [2, 127]
// Explanation: Job1 and Job3 can be done with maximum profit of 127 (100+27).
// Input: deadline[] = [3, 1, 2, 2], profit[] = [50, 10, 20, 30]
// Output: [3, 100]
// Explanation: Job1, Job3 and Job4 can be completed with a maximum profit of 100 (50 + 20 + 30).
// Constraints:
// 1 ≤ deadline.size() == profit.size() ≤ 105
// 1 ≤ deadline[i] ≤ deadline.size()
// 1 ≤ profit[i] ≤ 500
// <______________________________________________SOLUTION___________________________________________________>
//{ Driver Code Starts
// Initial Template for Java
import java.util.*;


// } Driver Code Ends

class Solution {

    public ArrayList<Integer> jobSequencing(int[] deadline, int[] profit) {
        // code here
              ArrayList<Integer> result = new ArrayList<>();
        int[] sorted = new int[profit.length];
        boolean[] job = new boolean[profit.length];

        // Copy and sort profits in descending order
        System.arraycopy(profit, 0, sorted, 0, profit.length);
        Arrays.sort(sorted);
        reverseArray(sorted);

        int[] maxProfit = {0};
        int jobs = 0;

        for (int i = 0; i < profit.length; i++) {
            int curr = sorted[i];
            int index = findJob(profit, curr);
            jobs += DoneOrNot(deadline[index], job, maxProfit, curr);
        }

        result.add(jobs);
        result.add(maxProfit[0]);
        return result;
    }

    public static int DoneOrNot(int d, boolean[] j, int[] m, int c) {
        while (d > 0) {
            if (!j[d - 1]) { // If job slot is available
                m[0] += c;
                j[d - 1] = true;
                return 1;
            }
            d--; // Try earlier deadline slots
        }
        return 0;
    }

    public static void reverseArray(int[] arr) {
        int left = 0, right = arr.length - 1;
        while (left < right) {
            // Swap elements
            int temp = arr[left];
            arr[left] = arr[right];
            arr[right] = temp;
            left++;
            right--;
        }
    }

    public static int findJob(int[] profit, int n) {
        int ind = 0;
        for (int i = 0; i < profit.length; i++) {
            if (profit[i] == n) {
                ind = i;
                profit[i] = 0; // Mark job as taken
                break;
            }
        }
        return ind;
    }
}


//{ Driver Code Starts.

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int t = Integer.parseInt(sc.nextLine().trim());

        while (t-- > 0) {
            String[] deadlineInput = sc.nextLine().trim().split("\\s+");
            int[] deadline =
                Arrays.stream(deadlineInput).mapToInt(Integer::parseInt).toArray();

            String[] profitInput = sc.nextLine().trim().split("\\s+");
            int[] profit =
                Arrays.stream(profitInput).mapToInt(Integer::parseInt).toArray();
            Solution obj = new Solution();
            ArrayList<Integer> result = obj.jobSequencing(deadline, profit);
            System.out.println(result.get(0) + " " + result.get(1));
            System.out.println("~");
        }

        sc.close();
    }
}
// } Driver Code Ends

// Compilation Completed
Input: 
deadline =
4 1 1 1
profit =
20 10 40 30
Your Output:
2 60
Expected Output:
2 60