// Graph Node class
class Node {
  constructor(val, neighbors = []) {
    this.val = val;
    this.neighbors = neighbors;
  }
}

// Function to clone a graph
function cloneGraph(node) {
  if (!node) return null;

  const visited = new Map();

  // Helper function to perform DFS
  function dfs(original) {
    // Create a copy of the current node
    const cloned = new Node(original.val);
    visited.set(original, cloned);

    // Traverse neighbors
    for (const neighbor of original.neighbors) {
      // If the neighbor has not been visited, recursively clone it
      if (!visited.has(neighbor)) {
        cloned.neighbors.push(dfs(neighbor));
      } else {
        // If the neighbor has been visited, retrieve the cloned version
        cloned.neighbors.push(visited.get(neighbor));
      }
    }

    return cloned;
  }

  return dfs(node);
}

// Example usage
// Create an example graph
const node1 = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);
const node4 = new Node(4);

node1.neighbors.push(node2, node4);
node2.neighbors.push(node1, node3);
node3.neighbors.push(node2, node4);
node4.neighbors.push(node1, node3);

// Clone the graph
const clonedGraph = cloneGraph(node1);

// Test the cloned graph
console.log(clonedGraph);
