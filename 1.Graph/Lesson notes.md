1. Graph = nodes + edges
  
   i. nodes - container with data
   
   ii. edges - connection between the nodes
  
  ![image](https://github.com/ps2program/DSA_Simplied_PS2/assets/107313898/9b4a8465-9b7e-4090-b043-131c185e0d74)
  
_________________________________________________________________________________________________________________

2. Graph Types = Directed and Undirected

![image](https://github.com/ps2program/DSA_Simplied_PS2/assets/107313898/9c46a266-25c1-4504-8977-437c150096de)

_________________________________________________________________________________________________________________

3. Programmatic Representation of Graph => i. Adjacency list ii. Adjacency Matrix

![image](https://github.com/ps2program/DSA_Simplied_PS2/assets/107313898/0a0a289f-40d9-4d2b-be19-d61f919b3f52)


_________________________________________________________________________________________________________________

4. Graph Algos => DFS and BFS
  
  (i) Depth First Traversal -> go deeper instead of lateral till the dead end(i.e. no available neighbor)
      explore one direction as far as posible before switching direction.
      - implemented using STACK.

  (i) Breadth First Traversal -> go lateral instead of deeper till the dead end(i.e. no available neighbor)
      explore all direction evenly.
      - implemented using QUEUE.
  
  ![image](https://github.com/ps2program/DSA_Simplied_PS2/assets/107313898/fb013abe-cccc-4c5c-8517-a25182438076)

  ![image](https://github.com/ps2program/DSA_Simplied_PS2/assets/107313898/5c48b789-f737-426a-ab2e-db84fc8cbea2)  ![image](https://github.com/ps2program/DSA_Simplied_PS2/assets/107313898/d935a0ef-0179-43a4-a728-a803f9e31b7b)


_________________________________________________________________________________________________________________

4. Graph Algos Implementation => DFS and BFS - Lesson Video Link - https://youtube.com/clip/Ugkxexr2vqNJA0SI6TkKnMZ6rRFy5SKKR2NJ

  (i) Depth First Search
    Follow the below method to implement DFS traversal.

        Step 1: Create a set or array to keep track of visited nodes.
        Step 2: Choose a starting node.
        Step 3: Create an empty stack and push the starting node onto the stack.
        Step 4: Mark the starting node as visited.
        Step 5: While the stack is not empty, do the following:
          Pop a node from the stack.
          Process or perform any necessary operations on the popped node.
          Get all the adjacent neighbors of the popped node.
          For each adjacent neighbor, if it has not been visited, do the following:
          Mark the neighbor as visited.
          Push the neighbor onto the stack.
        Step 6: Repeat step 5 until the stack is empty.
  (ii) Breadth First Search
    Algorithm of Breadth-First Search:
    
      Step 1: Consider the graph you want to navigate.
      Step 2: Select any vertex in your graph (say v1), from which you want to traverse the graph.
      Step 3: Utilize the following two data structures for traversing the graph.
        Visited array(size of the graph)
        Queue data structure
      Step 4: Add the starting vertex to the visited array, and afterward, you add v1’s adjacent vertices to the queue data structure.
      Step 5: Now using the FIFO concept, remove the first element from the queue, put it into the visited array, and then add the adjacent vertices of the removed element to the queue.
      Step 6: Repeat step 5 until the queue is not empty and no vertex is left to be visited.
      
      
      
 ```js
const graph = {
    a: ['b','c'],
    b: ['d'],
    c: ['e'],
    d: ['f'],
    e: [],
    f:[]
}



const DepthFirstPrint = (graph, source) => {
    // DFS -> stack
    // push -> pop -> look for child

    const stack =[source];

    //main algo
    while(stack.length > 0) {
        const current = stack.pop();
        console.log(current);

        // access depth childs/ neighbors

        for(let neighbors of graph[current]) {
            stack.push(neighbors)
        }
    }
}

const DepthFirstPrintRec = (graph, source) => {
   console.log(source);

    for(let neighbor of graph[source]) {
        DepthFirstPrintRec(graph, neighbor);
    }
}

DepthFirstPrint(graph,'a')
```



 ```js

const graph = {
    a: ['b','c'],
    b: ['d'],
    c: ['e'],
    d: ['f'],
    e: [],
    f:[]
}


const breadthFirstPrint = (graph, source) => {

    const queue = [source];

    while(queue.length > 0) {
        const current = queue.shift();
        console.log(current)

        for(let neighbor of graph[current]) {
            queue.push(neighbor);
        }
    }
}

const breadthFirstPrintRec = (graph, source) => {
   console.log(source);

    for(let neighbor of graph[source]) {
        DepthFirstPrintRec(graph, neighbor);
    }
    
  
}

breadthFirstPrint(graph,'a')

```



      




  


  


  
