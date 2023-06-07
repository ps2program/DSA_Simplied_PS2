const edges = [
    ['i', 'j'],
    ['k', 'i'],
    ['m', 'l'],
    ['k', 'l'],
    ['j', 'k'],
    ['o', 'n'],
];

//convert the edgeslist to graph i.e. adjacency edgeslist

// graph ={
//     i:['j','k'],
//     j:['i','k'],
// }

const buildGraph = (edges) => {
    const graph = {};

    for(let edge of edges) {
        const [a, b] = edge;

        if(!(a in graph)) graph[a] = [];
        if(!(b in graph)) graph[b] = [];

        graph[a].push(b)
        graph[b].push(a)
    }

    return graph;
}

const undirectedPath = (edges, nodeA, nodeB) => {
    const graph = buildGraph(edges);

    return hasPath(graph, nodeA, nodeB, new Set());
}

const hasPath = (graph, src, dst, visited) => {
    if(src=== dst) return true;

    if(visited.has(src)) return false;

    visited.add(src);
    

    for(let neighbor of graph[src]) {
        if(hasPath(graph, neighbor, dst,visited) === true) {
            return true;
        }
    }
}


undirectedPath(edges, 'i', 'k')


/**

1. focus on creating graph(here adjlist) form any data formate.
2. by default assume acyclic thus remember to keep record of visited set. constant lookup... O(1). thus use Set here
e = # edges
n = # nodes
Time: O(e) = O(n^2)
Space: O(n)
*/
