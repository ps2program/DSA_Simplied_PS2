const graph = {
    a: ['b','c'],
    b: ['d'],
    c: ['e'],
    d: ['f'],
    e: [],
    f:[]
}



const DepthFirstPrint = (graph, source) => {
    // DFS -> stack
    // push -> pop -> look for child

    const stack =[source];

    //main algo
    while(stack.length > 0) {
        const current = stack.pop();
        console.log(current);

        // access depth childs/ neighbors

        for(let neighbors of graph[current]) {
            stack.push(neighbors)
        }
    }
}

const DepthFirstPrintRec = (graph, source) => {
   console.log(source);

    for(let neighbor of graph[source]) {
        DepthFirstPrintRec(graph, neighbor);
    }
}

DepthFirstPrint(graph,'a')







const breadthFirstPrint = (graph, source) => {

    const queue = [source];

    while(queue.length > 0) {
        const current = queue.shift();
        console.log(current)

        for(let neighbor of graph[current]) {
            queue.push(neighbor);
        }
    }
}

const breadthFirstPrintRec = (graph, source) => {
   console.log(source);

    for(let neighbor of graph[source]) {
        DepthFirstPrintRec(graph, neighbor);
    }
    
  
}

breadthFirstPrint(graph,'a')
