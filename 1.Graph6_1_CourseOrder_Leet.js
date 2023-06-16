/*

There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai.

For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.
Return the ordering of courses you should take to finish all courses. If there are many valid answers, return any of them. If it is impossible to finish all courses, return an empty array./*

*/





function findOrder(numCourses, prerequisites) {
  // Step 1: Build a directed graph
  const graph = Array.from({ length: numCourses }, () => []);
  const inDegree = Array(numCourses).fill(0);

  for (const [course, prerequisite] of prerequisites) {
    graph[prerequisite].push(course);
    inDegree[course]++;
  }

  // Step 2: Perform topological sorting
  const queue = [];
  const result = [];

  // Initialize the queue with courses having no prerequisites
  for (let i = 0; i < numCourses; i++) {
    if (inDegree[i] === 0) {
      queue.push(i);
    }
  }

  while (queue.length > 0) {
    const currentCourse = queue.shift();
    result.push(currentCourse);

    // Decrease the in-degree of neighboring courses
    for (const nextCourse of graph[currentCourse]) {
      inDegree[nextCourse]--;

      // If the in-degree becomes 0, add the course to the queue
      if (inDegree[nextCourse] === 0) {
        queue.push(nextCourse);
      }
    }
  }

  // Step 3: Check if all courses have been taken
  if (result.length !== numCourses) {
    return []; // Impossible to finish all courses
  }

  return result;
}

/*

In this solution:

1. First, a directed graph is built using the prerequisites, similar to the previous solution.

2. Instead of using a stack, we use a queue to perform topological sorting. The queue is initialized with courses that have no prerequisites (in-degree of 0).

3. We iteratively dequeue a course, add it to the result, and decrease the in-degree of its neighboring courses. If the in-degree of a neighboring course becomes 0, we enqueue it.

4. After the loop, we check if all courses have been taken. If the number of courses in the result is not equal to the total number of courses, it means it is impossible to finish all courses, and an empty array is returned.

5. Otherwise, the result array contains the ordering of courses to finish all of them. Any valid ordering is acceptable, and the function can return any of them.

This solution performs a topological sort to find a valid order of courses, considering the prerequisite relationships. If there is no cycle in the graph, it is guaranteed to find a valid order.

*/
