// 161.) Given an array of strings, return all groups of strings that are anagrams. The groups must be created 
//       in order of their appearance in the original array. Look at the sample case for clarification.

// Note: The final output will be in lexicographic order.

// Examples:

// Input: arr[] = ["act", "god", "cat", "dog", "tac"]
// Output: [["act", "cat", "tac"], ["god", "dog"]]
// Explanation: There are 2 groups of anagrams "god", "dog" make group 1. "act", "cat", "tac" make group 2.
// Input: arr[] = ["no", "on", "is"]
// Output: [["is"], ["no", "on"]]
// Explanation: There are 2 groups of anagrams "is" makes group 1. "no", "on" make group 2.
// Input: arr[] = ["listen", "silent", "enlist", "abc", "cab", "bac", "rat", "tar", "art"]
// Output: [["abc", "cab", "bac"], ["listen", "silent", "enlist"], ["rat", "tar", "art"]]
// Explanation: 
// Group 1: "abc", "bac", and "cab" are anagrams.
// Group 2: "listen", "silent", and "enlist" are anagrams.
// Group 3: "rat", "tar", and "art" are anagrams.
// Constraints:
// 1<= arr.size() <=100
// 1<= arr[i].size() <=10
// <______________________________________________SOLUTION___________________________________________________>
//{ Driver Code Starts
import java.util.*;


// } Driver Code Ends
class Solution {
    public ArrayList<ArrayList<String>> anagrams(String[] arr) {
        // code here
         Map<String,ArrayList<String>> m=new HashMap<>();
        
        for(int i=0;i<arr.length;i++){
            int[] f=new int [26];
            char[] c=arr[i].toCharArray();
            for(int j=0;j<c.length;j++){
                char ct=c[j];
                f[ct-'a']++;
            }
            
            String k=Arrays.toString(f);
            if(!m.containsKey(k)){
                m.put(k,new ArrayList<>());
                
            }
            m.get(k).add(arr[i]);
            
        }
        return new ArrayList<>(m.values());
    }
}


//{ Driver Code Starts.
// <___________________________________________________MAIN-SOLUTION_____________________________________________________>
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int t = sc.nextInt();
        sc.nextLine(); // Ignore the newline after the test case input
        while (t-- > 0) {
            String inputLine = sc.nextLine();
            String[] arr = inputLine.split(" ");

            Solution ob = new Solution();
            ArrayList<ArrayList<String>> result = ob.anagrams(arr);
            result.sort(Comparator.comparing(a -> a.get(0)));
            for (ArrayList<String> group : result) {
                for (String word : group) {
                    System.out.print(word + " ");
                }
                System.out.println();
            }
            System.out.println("~");
        }
        sc.close();
    }
}

// } Driver Code Ends


// Compilation Completed
For Input: 
act god cat dog tac
Your Output: 
act cat tac
god dog
Expected Output: 
act cat tac
god dog