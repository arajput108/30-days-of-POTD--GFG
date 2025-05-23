// 298.) Given n dice each with m faces. Find the number of ways to get sum x which is the summation of values 
//       on each face when all the dice are thrown.

// Example:

// Input: m = 6, n = 3, x = 12
// Output: 25
// Explanation: There are 25 total ways to get the Sum 12 using 3 dices with faces from 1 to 6.
// Input: m = 2, n = 3, x = 6
// Output: 1
// Explanation: There is only 1 way to get the Sum 6 using 3 dices with faces from 1 to 2. All the dices will 
//              have to land on 2.
// Constraints:
// 1 <= m,n,x <= 50
// <-------------------------------------------------SOLUTION-------------------------------------------------->
class Solution {
    static int noOfWays(int m, int n, int x) {
        // code here
         return rec(m,n,x,new HashMap<>());
    }
    private static int rec(int m,int n,int x,Map<String,Integer> hm){
        if(x==0){
            if(n==0) return 1;
            return 0;
        }
        String key=m+" "+n+" "+x;
        if(hm.containsKey(key)) return hm.get(key);
        int ways=0;
        for(int i=m;i>0;i--){
            if(x>=i) ways+=rec(m,n-1,x-i,hm);
        }
        hm.put(key,ways);
        return ways;
    }
};



// Compilation Completed
Input: 
m =
6
n =
3
x =
12
Your Output:
25
Expected Output:
25