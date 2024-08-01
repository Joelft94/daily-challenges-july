/*  
Ejemplo de los nodos
    A -- B -- C
    |    |  /
    D -- E

 */

    const graph = {
        A: ["B", "C"],
        B: ["A", "C", "E"],
        C: ["B", "E"],
        D: ["A", "E"],
        E: ["B", "D", "C"],
    };
    
    const bfs = (graph, start, end) => {
        const queue = [[start]];
        const visited = new Set();
    
        while (queue.length) {
            const path = queue.shift();
            const vertex = path[path.length - 1];
    
            if (!visited.has(vertex)) {
                visited.add(vertex);
    
                for (const neighbor of graph[vertex]) {
                    const newPath = [...path, neighbor];
                    queue.push(newPath);
    
                    if (neighbor === end) {
                        console.log(newPath);
                        return newPath;
                    }
                }
            }
        }
    
        return null; // Return null if no path is found
    };
    
    const start = "A";
    const end = "E";
    bfs(graph, start, end);