// 209.) Given an array of points where each point is represented as points[i] = [xi, yi] on the X-Y plane and an integer k, return the k closest points to the origin (0, 0).

// The distance between two points on the X-Y plane is the Euclidean distance, defined as: 

// sqrt( (x2 - x1)2 + (y2 - y1)2 )

// Note: You can return the k closest points in any order, driver code will sort them before printing.

// Examples:

// Input: k = 2, points[] = [[1, 3], [-2, 2], [5, 8], [0, 1]]
// Output: [[-2, 2], [0, 1]]
// Explanation: The Euclidean distances from the origin are:
// Point (1, 3) = sqrt(10)
// Point (-2, 2) = sqrt(8)
// Point (5, 8) = sqrt(89)
// Point (0, 1) = sqrt(1)
// The two closest points to the origin are [-2, 2] and [0, 1].
// Input: k = 1, points = [[2, 4], [-1, -1], [0, 0]]
// Output: [[0, 0]]
// Explanation: The Euclidean distances from the origin are:
// Point (2, 4) = sqrt(20)
// Point (-1, -1) = sqrt(2)
// Point (0, 0) = sqrt(0)
// The closest point to origin is (0, 0).
// Constraints:

// 1 <= k <= points.size() <= 105
// -104 <= xi, yi <= 104

// <______________________________________________SOLUTION___________________________________________________>
//{ Driver Code Starts
import java.util.*;


// } Driver Code Ends
class Solution {
    public int[][] kClosest(int[][] points, int k) {
        // Your code here
         int res[][] = new int[k][2];
        Arrays.sort(points, (a, b) -> {
           return (a[0]*a[0] + a[1]*a[1]) - (b[0]*b[0] + b[1]*b[1]); 
        });
        
        int idx=0;
        while(idx < k) {
            res[idx] = points[idx];
            idx++;
        }
        
        return res;
    }
}

//{ Driver Code Starts.




// <___________________________________________________MAIN-SOLUTION_____________________________________________________>

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int t = scanner.nextInt();

        while (t-- > 0) {
            int k = scanner.nextInt();
            int n = scanner.nextInt();
            int[][] points = new int[n][2];
            for (int i = 0; i < n; i++) {
                points[i][0] = scanner.nextInt();
                points[i][1] = scanner.nextInt();
            }
            Solution solution = new Solution();
            int[][] ans = solution.kClosest(points, k);

            Arrays.sort(ans, (a, b) -> {
                if (a[0] != b[0]) {
                    return Integer.compare(a[0], b[0]);
                }
                return Integer.compare(a[1], b[1]);
            });
            for (int[] point : ans) {
                System.out.println(point[0] + " " + point[1]);
            }
            System.out.println("~");
        }

        scanner.close();
    }
}
// } Driver Code Ends


// Compilation Completed
For Input: 
2
4
1 3
-2 2
5 8
0 1
Your Output: 
-2 2
0 1
Expected Output: 
-2 2
0 1