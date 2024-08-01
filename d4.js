/*  
Ejemplo de los nodos
    A -- B -- C
    |    |
    D -- E

 */

    const graph = {
    A: ["B", "C"],
    B: ["A", "C", "E"],
    C: ["B"],
    D: ["A", "E"],
    E: ["B", "D"],
    };

    const bfs = (graph, start) => {
    const queue = [start];
    const visited = new Set();
    const result = [];

    while (queue.length) {
        const vertex = queue.shift();

        if (!visited.has(vertex)) {
        visited.add(vertex);
        result.push(vertex);

        for (const neighbor of graph[vertex]) {
            queue.push(neighbor);
        }
        }
    }
    console.log(result);
    return result;
    
    };

bfs(graph, "A");
