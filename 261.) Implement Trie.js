// 261.) Implement Trie class and complete insert(), search() and isPrefix() function for the following queries :

// Type 1 : (1, word), calls insert(word) function and insert word in the Trie
// Type 2 : (2, word), calls search(word) function and check whether word exists in Trie or not.
// Type 3 : (3, word), calls isPrefix(word) function and check whether word exists as a prefix of any string in 
//          Trie or not.
// Examples :

// Input: query[][] = [[1, "abcd"], [1, "abc"], [1, "bcd"], [2, "bc"], [3, "bc"], [2, "abc"]]
// Output: [false, true, true]
// Explanation: string "bc" does not exist in the trie, "bc" exists as prefix of the word "bcd" in the trie, 
//              and "abc" also exists in the trie.
// Input: query[][] = [[1, "gfg"], [1, "geeks"], [3, "fg"], [3, "geek"], [2, "for"]]
// Output: [false, true, false]
// Explanation: The string "for" is not present in the trie, "fg" is not a valid prefix, while "geek" is a 
//               valid prefix of the word "geeks" in the trie.
// Constraints:
// 1 ≤ query.size() ≤ 104
// 1 ≤ word.size() ≤ 103

// <_______________________________________________SOLUTION______________________________________________________________>
//{ Driver Code Starts
import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;


// } Driver Code Ends

// User function Template for Java
// <___________________________________________________MAIN-SOLUTION_____________________________________________________>

class Trie {

        private TrieNode root;
    
    public Trie() {
        // Implement Trie
        root = new TrieNode();
    }

    // Insert a word into the Trie
    public void insert(String word) {
        TrieNode node = root;
        for(char c : word.toCharArray()){
            int index = c - 'a';
            if(node.children[index] == null){
                node.children[index] = new TrieNode();
            }
            node = node.children[index];
        }
        node.isEndOfWord = true;
    }

    // Search for a word in the Trie
    public boolean search(String word) {
        TrieNode node = root;
        for(char c : word.toCharArray()){
            int index = c - 'a';
            if(node.children[index] == null){
                return false;
            }
            node = node.children[index];
        }
        return node.isEndOfWord;
    }

    // Check if a prefix exists in the Trie
    public boolean isPrefix(String word) {
        TrieNode node = root;
        for(char c : word.toCharArray()){
            int index = c - 'a';
            if(node.children[index] == null){
                return false;
            }
            node = node.children[index];
        }
        return true;
    }
}

class TrieNode{
    TrieNode[] children;
    boolean isEndOfWord;
    
    public TrieNode(){
        children = new TrieNode[26];
        isEndOfWord = false;
    }
}


//{ Driver Code Starts.

public class GfG {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int t = sc.nextInt();
        sc.nextLine();

        while (t-- > 0) {
            int q = sc.nextInt();
            sc.nextLine();
            List<Boolean> ans = new ArrayList<>();
            Trie ob = new Trie();

            for (int i = 0; i < q; i++) {
                int x = sc.nextInt();
                String s = sc.next();
                if (i != q - 1) sc.nextLine();

                if (x == 1) {
                    ob.insert(s);
                } else if (x == 2) {
                    ans.add(ob.search(s));
                } else if (x == 3) {
                    ans.add(ob.isPrefix(s));
                }
            }

            for (Boolean result : ans) {
                System.out.print(result + " ");
            }
            System.out.println();
            System.out.println("~");
        }

        sc.close();
    }
}

// } Driver Code Ends



// Compilation Completed
Input: 
q
6
query[][]
1 abcd
1 abc
1 bcd 
2 bc 
3 bc 
2 abc
Your Output:
false true true
Expected Output:
false true true