
class Graph {

  constructor(V) {
    this.V = V;
    this.E = 0;

    this.adjList = {};
    this.weightList = {};
    
    for (let i = 0; i < this.V; i++) {
      this.adjList[i] = [];
      this.weightList[i] = [];
    }
  }

  addEdge(source, target, weight) {
    this.E++;
    this.adjList[source].push(target);
    this.weightList[source].push(target);
  }

  hasEdge(source, target) {
    return this.adjList[source].includes(target);
  }

  bfs(source){
    let queue = []; 
    let visited = Array(this.V).fill(false);  
    let visitedNodes = [];
    
    queue.push(source);     
    visited[source] = true; 
    
    while (queue.length > 0) {
      let wNode = queue.shift(); 
      visitedNodes.push(wNode);
      const myNeighs = this.adjList[wNode];
      for (const neigh of myNeighs) { 
        if (!visited[neigh]) { 
          visited[neigh] = true; 
          queue.push(neigh);     
        }
      }
    }

    return visitedNodes;
  }

  dfs(source, visitedNodes){
    if (visitedNodes === undefined) {
      visitedNodes = new Set();
    }
    if (!visitedNodes.has(source)) {
      visitedNodes.add(source)
      for (const neigh of this.adjList[source]) {
        this.dfs(neigh, visitedNodes);
      }
    }
    return visitedNodes;
  }


  dfsInter(source){
    let stack = []; 
    let visited = Array(this.V).fill(false);  
    let visitedNodes = [];
    
    stack.push(source);     
    visited[source] = true; 
    
    while (stack.length > 0) {
      let wNode = stack.pop(); 
      visitedNodes.push(wNode);

      const myNeighs = this.adjList[wNode];
      for (const neigh of myNeighs) { 
        if (!visited[neigh]) { 
          visited[neigh] = true; 
          stack.push(neigh);     
        }
      }
    }

    return visitedNodes;
  }
  
}
//Testing:

let graph = new Graph(100);

graph.addEdge(1,2);
graph.addEdge(1,4);

graph.addEdge(2,1);
graph.addEdge(2,3);
graph.addEdge(2,4);
graph.addEdge(2,5);

graph.addEdge(3,2);
graph.addEdge(3,5);

graph.addEdge(4,1);
graph.addEdge(4,2);
graph.addEdge(4,5);

graph.addEdge(5,2);
graph.addEdge(5,3);
graph.addEdge(5,4);


console.log(graph.bfs(1))
console.log(graph.dfs(1))
console.log(graph.dfsInter(1))