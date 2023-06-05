
const graph = {
    f: ['i', 'g'],
    g: ['h'],
    h: [],
    i: ['g', 'k'],
    j: ['i'],
    k: []
}

const hasPath = (graph, src, dst)=>{
 
    //base condition of recursion
    if (src == dst)
        return true;

    //main algo
    for (let neighbor of graph[src]) {
        if (hasPath(graph, neighbor, dst) == true) {
            return true;
        }
    }

    // after all if not find the path return false
    return false;

}

hasPath(graph, 'f', 'h')


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
