function canFinish(numCourses, prerequisites) {
  const graph = Array.from({ length: numCourses }, () => []);
  const inDegree = Array(numCourses).fill(0);

  for (const [course, prerequisite] of prerequisites) {
    graph[prerequisite].push(course);
    inDegree[course]++;
  }

  const stack = [];
  const visited = new Set();
  const visiting = new Set();

  function hasCycle(course) {
    if (visiting.has(course)) {
      return true; // Cycle detected
    }

    if (visited.has(course)) {
      return false; // Already visited and no cycle
    }

    visiting.add(course);
    for (const nextCourse of graph[course]) {
      if (hasCycle(nextCourse)) {
        return true; // Cycle detected
      }
    }
    visiting.delete(course);
    visited.add(course);
    stack.push(course);
    return false;
  }

  for (let i = 0; i < numCourses; i++) {
    if (!visited.has(i) && hasCycle(i)) {
      return false; // Cycle detected, cannot finish all courses
    }
  }

  return true; // No cycles, can finish all courses
}


// Example usage:
const numCourses = 4;
const prerequisites = [[1, 0], [2, 0], [3, 1], [3, 2]];

const canFinishAll = canFinish(numCourses, prerequisites);
console.log('Can finish all courses:', canFinishAll);


/*

there is another approach to solve this problem using the concept of indegree and topological sorting.

Here's the alternative approach:

Create an adjacency list representation of the graph using the prerequisites array.
Create an array called indegree of size numCourses and initialize all its elements to 0.
Iterate through the prerequisites array and increment the indegree of each course based on its prerequisite relationship.
Create a queue and enqueue all the courses with an indegree of 0.
Initialize a variable called count to keep track of the number of courses that can be finished.
While the queue is not empty, perform the following steps:
  Dequeue a course from the queue.
  Increment count by 1 to indicate that a course has been finished.
  Iterate through the neighbors of the dequeued course in the adjacency list.
  Decrement the indegree of each neighbor.
  If the indegree of a neighbor becomes 0, enqueue it.
Finally, check if count is equal to numCourses. If they are equal, it means all courses can be finished, so return true. Otherwise, return false.
Here's the implementation in JavaScript:

*/

