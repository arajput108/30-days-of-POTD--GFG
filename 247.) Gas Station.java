// 247.) There are some gas stations along a circular route. You are given two integer arrays gas[] 
//       denoted as the amount of gas present at each station and cost[] denoted as the cost of 
//       travelling to the next station. You have a car with an unlimited gas tank. You begin the 
//       journey with an empty tank from one of the gas stations. Return the index of the starting 
//       gas station if it's possible to travel around the circuit without running out of gas at any 
//       station in a clockwise direction. If there is no such starting station exists, return -1.
// Note: If a solution exists, it is guaranteed to be unique.

// Examples:

// Input: gas[] = [4, 5, 7, 4], cost[]= [6, 6, 3, 5]
// Output: 2
// Explanation: It is possible to travel around the circuit from station at index 2. Amount of gas at 
// station 2 is (0 + 7) = 7.
// Travel to station 3. Available gas = (7 – 3 + 4) = 8.
// Travel to station 0. Available gas = (8 – 5 + 4) = 7.
// Travel to station 1. Available gas = (7 – 6 + 5) = 6.
// Return to station 2. Available gas = (6 – 6) = 0.
// Input: gas[] = [1, 2, 3, 4, 5], cost[] = [3, 4, 5, 1, 2]
// Output: 3
// Explanation: It is possible to travel around the circuit from station at index 3. Amount of gas at 
// station 3 is (0 + 4) = 4.
// Travel to station 4. Available gas = 4 – 1 + 5 = 8.
// Travel to station 0. Available gas = 8 – 2 + 1 = 7.
// Travel to station 1. Available gas= 7 – 3 + 2 = 6.
// Travel to station 2. Available gas = 6 – 4 + 3 = 5.
// Travel to station 3. The cost is 5. The gas is just enough to travel back to station 3.
// Input: gas[] = [3, 9], cost[] = [7, 6]
// Output: -1
// Explanation: There is no gas station to start with such that you can complete the circuit.
// Constraints:
// 1 ≤ gas.size(), cost.size() ≤ 106
// 1 ≤ gas[i], cost[i] ≤ 103
// <______________________________________________SOLUTION___________________________________________________>
//{ Driver Code Starts
// Initial Template for Java

import java.io.*;
import java.lang.*;
import java.util.*;

class Main {
    public static void main(String args[]) throws IOException {
        BufferedReader read = new BufferedReader(new InputStreamReader(System.in));
        int t = Integer.parseInt(read.readLine());

        while (t-- > 0) {

            ArrayList<Integer> array1 = new ArrayList<Integer>();
            ArrayList<Integer> array2 = new ArrayList<Integer>();

            String line = read.readLine();
            String[] tokens = line.split(" ");
            for (String token : tokens) {
                array1.add(Integer.parseInt(token));
            }
            line = read.readLine();
            tokens = line.split(" ");
            for (String token : tokens) {
                array2.add(Integer.parseInt(token));
            }

            // ArrayList<Integer> v = new ArrayList<Integer>();
            int[] gas = new int[array1.size()];
            int idx = 0;
            for (int i : array1) gas[idx++] = i;

            int[] cost = new int[array2.size()];
            idx = 0;
            for (int i : array2) cost[idx++] = i;

            int ans = new Solution().startStation(gas, cost);

            System.out.println(ans);

            System.out.println("~");
        }
    }
}

// } Driver Code Ends


// <___________________________________________________MAIN-SOLUTION_____________________________________________________>

class Solution {
    public int startStation(int[] gas, int[] cost) {
        // Your code here
           int n = gas.length;
        int totalgas = 0;
        int totalcost = 0;
        for(int i=0;i<n;i++){
            totalgas=totalgas+gas[i];
            totalcost=totalcost+cost[i];
        }
        if(totalgas<totalcost) return -1;
        int currgas = 0;
        int ans = 0;
        for(int i=0;i<n;i++){
            currgas = currgas+(gas[i]-cost[i]);
            if(currgas<0){
                currgas=0;
                ans = i+1;
            }
        }
        return ans;
    }
}



// Compilation Completed
Input: 
gas[]
4 5 7 4
cost[]
6 6 3 5
Your Output:
2
Expected Output:
2