/*  
Ejemplo de los nodos
    A -- B -- C
    |    |
    D -- E

 */
const graph = {
    A: ['B', 'C'],
    B: ['A', 'C', 'E'],
    C: ['B'],
    D: ['A', 'E'],
    E: ['B', 'D'],
    
}


const dfs = (graph, start) => {
    const stack = [start];
    const visited = new Set();
    const result = [];


    while (stack.length) { 
        const current = stack.pop();

        if (!visited.has(current)){
            visited.add(current);
            result.push(current);

            for (const neightbor of graph[current]){
                stack.push(neightbor);
            }
        }
    }
    console.log(result);
    return result;
}

dfs(graph, 'A');
