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


