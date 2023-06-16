function isCyclic(graph) {
  const visited = new Set();
  const recursionStack = new Set();

  function dfs(node) {
    const strNode = String(node);
    if (!visited.has(strNode)) {
      visited.add(strNode);
      recursionStack.add(strNode);

      const neighbors = graph[node];
      for (const neighbor of neighbors) {
        const strNeighbor = String(neighbor);
        if (!visited.has(strNeighbor) && dfs(strNeighbor)) {
          return true;
        } else if (recursionStack.has(strNeighbor)) {
          return true;
        }
      }
    }

    recursionStack.delete(strNode);
    return false;
  }

  for (const node in graph) {
    if (dfs(node)) {
      return true;
    }
  }

  return false;
}


const graph = {
  0: [1],
  1: [2],
  2: [0, 3],
  3: [4],
  4: []
};

const isGraphCyclic = isCyclic(graph);
console.log(isGraphCyclic); // Output: true

/*

Certainly! Here's a step-by-step explanation of the algorithm for detecting cycles in a graph using Depth-First Search (DFS):

1. The algorithm takes a graph as input, represented as an adjacency list, where each key represents a node, and the corresponding value is an array of its neighboring nodes.

2. It initializes two sets: `visited` and `recursionStack`. The `visited` set keeps track of nodes that have been visited during the DFS traversal, while the `recursionStack` set keeps track of nodes that are currently in the recursion stack.

3. The algorithm defines a recursive helper function called `dfs`, which takes a node as an argument and performs the DFS traversal.

4. Inside the `dfs` function, it first checks if the node has not been visited before. If it is a new node, it marks it as visited and adds it to the `recursionStack`.

5. Next, it retrieves the neighbors of the current node from the graph.

6. For each neighbor, the algorithm checks if it has not been visited and recursively calls the `dfs` function on that neighbor. If the recursive call returns `true`, it means a cycle has been detected, and the algorithm returns `true`.

7. If the neighbor has already been visited and is present in the `recursionStack`, it means a back edge has been found, indicating the presence of a cycle. In this case, the algorithm also returns `true`.

8. After traversing all the neighbors of the current node, the algorithm removes the current node from the `recursionStack` since it has completed its traversal.

9. Finally, if no cycle is detected during the DFS traversal of any unvisited node in the graph, the algorithm returns `false`, indicating that the graph is acyclic.

10. The algorithm then starts the cycle detection process by calling the `dfs` function for each node in the graph.

11. If any call to the `dfs` function returns `true`, it means a cycle has been detected, and the algorithm immediately returns `true`.

12. If all calls to the `dfs` function return `false`, it means no cycle has been found, and the algorithm returns `false` to indicate an acyclic graph.

Overall, the algorithm performs a DFS traversal of the graph, keeping track of visited nodes and nodes in the recursion stack. By detecting back edges during the traversal, it can determine the presence of cycles in the graph.

*/

_______________________________________________________________________________________


/*

The `recursionStack` is used in the cycle detection algorithm to keep track of nodes that are currently being explored in the recursive depth-first search (DFS) traversal. It helps to detect cycles by identifying if a node is encountered again within the same DFS traversal.

Here's how the `recursionStack` is used in the algorithm:

1. When a node is visited during the DFS traversal, it is added to the `recursionStack` set to indicate that it is currently being explored.

2. As the DFS continues, if the algorithm encounters a neighbor of the current node that is already present in the `recursionStack`, it means a back edge has been found. A back edge is an edge that connects a node to one of its ancestors in the DFS traversal tree, forming a cycle.

3. If a neighbor is found in the `recursionStack`, it indicates that a cycle exists in the graph. The algorithm immediately returns `true` to indicate the presence of a cycle.

4. Once the DFS traversal completes for a particular node, it is removed from the `recursionStack`. This ensures that the `recursionStack` accurately reflects the nodes that are currently in the recursive call stack.

The `recursionStack` helps to distinguish between different DFS paths and detect cycles when a node is encountered again within the same path. It is a crucial component of the cycle detection algorithm and aids in identifying cycles in a directed graph.

I hope this explanation clarifies the purpose and usage of the `recursionStack` in the algorithm.

*/
