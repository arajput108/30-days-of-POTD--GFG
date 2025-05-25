// 300.) Given an array arr[], return true if there is a triplet (a, b, c) from the array 
//       (where a, b, and c are on different indexes) that satisfies a2 + b2 = c2, otherwise return false.

// Examples:

// Input: arr[] = [3, 2, 4, 6, 5]
// Output: true
// Explanation: a=3, b=4, and c=5 forms a pythagorean triplet.
// Input: arr[] = [3, 8, 5]
// Output: false
// Explanation: No such triplet possible.
// Input: arr[] = [1, 1, 1]
// Output: false
// Constraints:
// 1 <= arr.size() <= 105
// 1 <= arr[i] <= 103
// <-------------------------------------------------SOLUTION-------------------------------------------------->
class Solution {
    boolean pythagoreanTriplet(int[] arr) {
        // code here
        if(arr.length < 2){
            return false; 
        }
        
        HashSet<Integer>hs = new HashSet<>(); 
        
        for(int num : arr){
            hs.add(num); 
        }
        
        for(int i=0;i<arr.length;i++){
            int a = arr[i]; 
            
            for(int j=i+1;j<arr.length;j++){
                int b = arr[j]; 
                
                int root = (int)Math.sqrt(a*a+b*b);
                
                if(hs.contains(root) && root*root == a*a + b*b){
                    return true; 
                }
            }
        }
        return false;
    }
}


// Compilation Completed
Input: 
arr[] =
3 2 4 6 5
Your Output:
true
Expected Output:
true
