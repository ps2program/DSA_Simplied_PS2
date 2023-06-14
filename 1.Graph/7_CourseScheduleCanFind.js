function canFinish(numCourses, prerequisites) {
  // Step 1: Build a directed graph
  const graph = Array.from({ length: numCourses }, () => []);
  const inDegree = Array(numCourses).fill(0);

  for (const [course, prerequisite] of prerequisites) {
    graph[prerequisite].push(course);
    inDegree[course]++;
  }

  // Step 2: Perform topological sorting
  const stack = [];
  const visited = new Set();

  function topologicalSort(course) {
    visited.add(course);
    for (const nextCourse of graph[course]) {
      if (!visited.has(nextCourse)) {
        topologicalSort(nextCourse);
      }
    }
    stack.push(course);
  }

  for (let i = 0; i < numCourses; i++) {
    if (inDegree[i] === 0 && !visited.has(i)) {
      topologicalSort(i);
    }
  }

  // Step 3: Check if there is a valid course order
  if (stack.length !== numCourses) {
    return false; // Cannot finish all courses
  }

  return true; // Can finish all courses
}

// Example usage:
const numCourses = 4;
const prerequisites = [[1, 0], [2, 0], [3, 1], [3, 2]];

const canFinishAll = canFinish(numCourses, prerequisites);
console.log('Can finish all courses:', canFinishAll);
