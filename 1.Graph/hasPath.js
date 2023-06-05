// Note: the condition is that the graph is acyclic.

const graph = {
    f: ['i', 'g'],
    g: ['h'],
    h: [],
    i: ['g', 'k'],
    j: ['i'],
    k: []
}


// based on DFS and recursion
const hasPathDFS = (graph, src, dst)=>{
 
    //base condition of recursion
    if (src == dst)
        return true;

    //main algo - loop through the neighbor of current position and check if current position is destination
    for (let neighbor of graph[src]) {
        if (hasPathDFS(graph, neighbor, dst) == true) {
            return true;
        }
    }

    // after all, if not find the path return false
    return false;

}

hasPathDFS(graph, 'f', 'h')

//__________________________________________________________________________________________________________________________________

//DFS with iterative way
const hasPathDFSIterative = (graph,src,dst)=>{

    // default ds for DFS is stack
    let stack = [src];

    // main algo. travel through each node(current) and check the neighbors of current and check if the current's neighbor is destination.
    //do it till the end of the stack

    while (stack.length > 0) {
        const current = stack.pop();

        //base condition
        if (current === dst)
                return true;
        
        for (let neighbor of graph[current]) {
            stack.push(neighbor);
        }
        
    }

    return false;

}

hasPathDFSIterative(graph, 'f', 'h')
//__________________________________________________________________________________________________________________________________


// based on BFS and iterative
const hasPathBFS = (graph, src, dst) =>{

    let queue = graph[src];

    while(queue.length > 0) {
        const current = queue.shift();
        
        if(current === dst) {
            return true;
        }

        for(let neighbor of graph[current]) {
            queue.push(neighbor);
        }
    }

    return false;
}

hasPathBFS(graph, 'f', 'h')
//__________________________________________________________________________________________________________________________________

/**
n = # nodes
e= # edges
Time: O(e)
Space: O(n)
*/

/*
altenatively we can define the time and space complexity
n = # nodes
Time: O(n2)
Space: )(n)

*/

