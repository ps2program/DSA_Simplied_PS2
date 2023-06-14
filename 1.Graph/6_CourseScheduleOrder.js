
/*
graph

each course as a node
prerequisites are directed edges connecting the nodes.

step

1. build directed graph: each course as node. preqs as edges between nodes.
2. Topological Sorting: soring in way that no node comes before prerequisites.
3. count number of course: after Topological sorting, number of courses = number of nodes in sorted graph.
4. Identify prerequisites: For each course in the sorted order, 
   identify its prerequisites by traversing the directed edges
   that point to it. This will give you the prerequisites for each course.


*/

class Course {
  constructor(name) {
    this.name = name;
    this.prerequisites = [];
  }
}

function findCourseOrder(courses) {
  // Step 1: Build a directed graph
  const graph = {};
  for (const course of courses) {
    graph[course.name] = new Course(course.name);
  }

  for (const course of courses) {
    for (const prereq of course.prerequisites) {
      graph[course.name].prerequisites.push(graph[prereq]);
    }
  }

  // Step 2: Perform topological sorting
  const stack = [];
  const visited = new Set();

  function topologicalSort(course) {
    visited.add(course);
    for (const prereq of course.prerequisites) {
      if (!visited.has(prereq)) {
        topologicalSort(prereq);
      }
    }
    stack.push(course);
  }

  for (const course of courses) {
    if (!visited.has(graph[course.name])) {
      topologicalSort(graph[course.name]);
    }
  }

  // Step 3: Count the number of courses
  const numCourses = stack.length;

  // Step 4: Identify prerequisites
  const courseOrder = [];
  while (stack.length > 0) {
    courseOrder.push(stack.pop().name);
  }

  return { numCourses, courseOrder };
}

// Example usage:
const courses = [
  { name: 'A', prerequisites: [] },
  { name: 'B', prerequisites: ['A'] },
  { name: 'C', prerequisites: ['A'] },
  { name: 'D', prerequisites: ['B', 'C'] },
];

const result = findCourseOrder(courses);
console.log('Number of courses:', result.numCourses);
console.log('Course order:', result.courseOrder);
