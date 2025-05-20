// 295.) Given a binary tree and a target node, determine the minimum time required to burn the entire tree if 
//       the target node is set on fire. In one second, the fire spreads from a node to its left child, right 
//       child, and parent.
// Note: The tree contains unique values.

// Examples : 

// Input: root[] = [1, 2, 3, 4, 5, 6, 7], target = 2
  
// Output: 3
// Explanation: Initially 2 is set to fire at 0 sec 
// At 1 sec: Nodes 4, 5, 1 catches fire.
// At 2 sec: Node 3 catches fire.
// At 3 sec: Nodes 6, 7 catches fire.
// It takes 3s to burn the complete tree.
// Input: root[] = [1, 2, 3, 4, 5, N, 7, 8, N, 10], target = 10

// Output: 5
// Explanation: Initially 10 is set to fire at 0 sec 
// At 1 sec: Node 5 catches fire.
// At 2 sec: Node 2 catches fire.
// At 3 sec: Nodes 1 and 4 catches fire.
// At 4 sec: Node 3 and 8 catches fire.
// At 5 sec: Node 7 catches fire.
// It takes 5s to burn the complete tree.
// Constraints:
// 1 ≤ number of nodes ≤ 105
// 1 ≤ node->data ≤ 105
// <-------------------------------------------------SOLUTION-------------------------------------------------->
/*
class Node {
    int data;
    Node left;
    Node right;

    Node(int data) {
        this.data = data;
        left = null;
        right = null;
    }
}  */

// <-------------------------------------------MAIN-SOLUTION-------------------------------------------------->

class Solution {
    public static int minTime(Node root, int target) {
        // code here
         Queue<Node> que=new LinkedList<>();
        que.add(root);
        Node start=null;
        HashMap<Node,ArrayList<Node>> map=new HashMap<>();
        while(que.size()>0){
           Node temp=que.poll();
           if(temp.data==target) start=temp;
           if(temp.left!=null){
               que.add(temp.left);
               if(map.get(temp)!=null){
                   map.get(temp).add(temp.left);
                   
               }
               else{
                   map.put(temp,new ArrayList<>());
                   map.get(temp).add(temp.left);
               }
               
                if(map.get(temp.left)!=null){
                   map.get(temp.left).add(temp);
                   
               }
               else{
                    map.put(temp.left,new ArrayList<>());
                   map.get(temp.left).add(temp);
               }
           }
           if(temp.right!=null){
               que.add(temp.right);
               if(map.get(temp)!=null){
                   map.get(temp).add(temp.right);
                   
               }
               else{
                   map.put(temp,new ArrayList<>());
                   map.get(temp).add(temp.right);
               }
               
                if(map.get(temp.right)!=null){
                   map.get(temp.right).add(temp);
                   
               }
               else{
                    map.put(temp.right,new ArrayList<>());
                   map.get(temp.right).add(temp);
               }
           }
        }
        start.data=0;
        que.add(start);
        int max=0;
        
       HashMap<Node,Integer> vis=new HashMap<>();
        while(que.size()>0){
            
           Node temp=que.poll();
           if(max<temp.data) max=temp.data;
           if(map.get(temp)!=null){
               vis.put(temp,1);
           for(Node i:map.get(temp)){
               if(vis.get(i)==null){
                   vis.put(i,1);
                   i.data=temp.data+1;
                   que.add(i);
               }
           }}
            
        }
        return max;

    }
}



// Compilation Completed
Input: 
root[] =
1 2 3 4 5 6 7
target =
2
Your Output:
3
Expected Output:
3