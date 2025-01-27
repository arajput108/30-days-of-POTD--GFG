// 187.) Design a data structure that works like a LRU Cache. Here cap denotes the capacity of the cache 
//       and Q denotes the number of queries. Query can be of two types:

// PUT x y: sets the value of the key x with value y
// GET x: gets the key of x if present else returns -1.
// The LRUCache class has two methods get() and put() which are defined as follows.

// get(key): returns the value of the key if it already exists in the cache otherwise returns -1.
// put(key, value): if the key is already present, update its value. If not present, add the key-value pair to the 
// cache. If the cache reaches its capacity it should remove the least recently used item before inserting the new 
// item.
// In the constructor of the class the capacity of the cache should be initialized.
// Examples:

// Input: cap = 2, Q = 2, Queries = [["PUT", 1, 2], ["GET", 1]]
// Output: [2]
// Explanation: Cache Size = 2
// ["PUT", 1, 2] will insert the key-value pair (1, 2) in the cache,
// ["GET", 1] will print the value corresponding to Key 1, ie 2.
// Input: cap = 2, Q = 8, Queries = [["PUT", 1, 2], ["PUT", 2, 3], ["PUT", 1, 5], ["PUT", 4, 5], ["PUT", 6, 7], 
// ["GET", 4], ["PUT", 1, 2], ["GET", 3]]
// Output: [5, -1]
// Explanation: Cache Size = 2
// ["PUT", 1, 2] will insert the pair (1,2) in the cache.
// ["PUT", 2, 3] will insert the pair (2,3) in the cache: 1->2, 2->3(the most recently used one is kept at the 
// rightmost position) 
// ["PUT", 1, 5] will replace the value of 1 from 2 to 5 : 2 -> 3, 1 -> 5
// ["PUT", 4, 5] : 1 -> 5, 4 -> 5 (Cache size is 2, hence we delete the least recently used key-value pair)
// ["PUT", 6, 7] : 4 -> 5, 6 -> 7 
// ["GET", 4] : Prints 5 (The cache now looks like 6 -> 7, 4->5)
// ["PUT", 1, 2] : 4 -> 5, 1 -> 2  (Cache size is 2, hence we delete the least recently used key-value pair)
// ["GET", 3] : No key value pair having key = 3. Hence, -1 is printed.
// Constraints:
// 1 <= cap <= 103
// 1 <= Q <= 105
// 1 <= x, y <= 104
// <______________________________________________SOLUTION___________________________________________________>
//{ Driver Code Starts
import java.io.*;
import java.lang.*;
import java.util.*;

public class LRUDesign {

    private static List<String> inputLine(Scanner sc) {
        return Arrays.asList(sc.nextLine().split(" "));
    }

    public static void main(String[] args) throws IOException {
        Scanner sc = new Scanner(System.in);
        int t = Integer.parseInt(sc.nextLine());

        while (t-- > 0) {
            int capacity = Integer.parseInt(sc.nextLine());
            LRUCache cache = new LRUCache(capacity);

            int queries = Integer.parseInt(sc.nextLine());
            while (queries-- > 0) {
                List<String> vec = inputLine(sc);
                if (vec.get(0).equals("PUT")) {
                    int key = Integer.parseInt(vec.get(1));
                    int value = Integer.parseInt(vec.get(2));
                    cache.put(key, value);
                } else {
                    int key = Integer.parseInt(vec.get(1));
                    System.out.print(cache.get(key) + " ");
                }
            }
            System.out.println();
            System.out.println("~");
        }
    }
}

// } Driver Code Ends


// design the class in the most optimal way


// <___________________________________________________MAIN-SOLUTION_____________________________________________________>

class LRUCache {
     private static int capacity;
    private static LinkedHashMap<Integer, Integer> cache;
    // Constructor for initializing the cache capacity with the given value.
    LRUCache(int cap) {
        // code here
        capacity = cap;
        cache = new LinkedHashMap<>(cap, 0.75f, true) {
            @Override
            protected boolean removeEldestEntry(Map.Entry<Integer, Integer> eldest) {
                return size() > capacity;
            }
        };
    }

    // Function to return value corresponding to the key.
    public static int get(int key) {
        // your code here
         return cache.getOrDefault(key, -1);
    }

    // Function for storing key-value pair.
    public static void put(int key, int value) {
        // your code here
         cache.put(key, value);
    }
}

// Compilation Completed
For Input: 
2
2
PUT 1 2 
GET 1
Your Output: 
2
Expected Output: 
2
