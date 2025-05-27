// 301.) Given a preorder traversal of a BST, find the leaf nodes of the tree without building the tree.


// Examples:

// Input: preorder[] = [5, 2, 10]
// Output: [2, 10]
// Explaination: 

// 2 and 10 are the leaf nodes as shown in the figure.
// Input: preorder[] = [4, 2, 1, 3, 6, 5]
// Output: [1, 3, 5]
// Explaination: 

// 1, 3 and 5 are the leaf nodes as shown in the figure.
// Input: preorder[] = [8, 2, 5, 10, 12]
// Output: [5, 12]
// Explaination: 

// 5 and 12 are the leaf nodes as shown in the figure.

// Constraints:
// 1 ≤ preorder.size() ≤ 103
// 1 ≤ preorder[i] ≤ 103
// <-------------------------------------------------SOLUTION-------------------------------------------------->
class Solution {
    public ArrayList<Integer> leafNodes(int[] preorder) {
        // code here
        Stack<Integer>stk = new Stack<>();
        int n = preorder.length;
        ArrayList<Integer>res = new ArrayList<>();
        for(int i =0;i<n;++i)
        {
            if(stk.isEmpty())stk.push(preorder[i]);
            else
            {
                if(stk.peek()<preorder[i])
                {
                    int storage = stk.peek();
                    int counter = 0;
                    while(!stk.isEmpty()&&stk.peek()<preorder[i])
                    {
                        counter++;
                        stk.pop();
                    }
                    if(counter>=2)
                    {
                        res.add(storage);
                    }
                }
                stk.push(preorder[i]);
            }
        }
        if(!stk.isEmpty())res.add(stk.peek());
        return res;
    }
}



// Compilation Completed
Input: 
preorder[] =
5 2 10
Your Output:
2 10
Expected Output:
2 10
