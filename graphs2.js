class Graph{
    constructor(){
        this.adjacencyList = {}
    }
    addVertex(vertex){
        if(!this.adjacencyList[vertex]){
           this.adjacencyList[vertex] = [];
           return true
        }
        return false
    }
    addEdge(vertex1, vertex2){
        if(this.adjacencyList[vertex1] && this.adjacencyList[vertex2] ){
            this.adjacencyList[vertex1].push(vertex2)
            this.adjacencyList[vertex2].push(vertex1)
            return true;   
        }
        return false;
    }
    removeEdge(vertex1, vertex2){
        if(this.adjacencyList[vertex1] && this.adjacencyList[vertex2] ){
            this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(v => v !== vertex2) // do .filter pra frente significa, um fç q retorna tudo que não é =  vertex2
            this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(v => v !== vertex1)
            return true;
        }
        return false;
    }
    removeVertex(vertex){
        if(!this.adjacencyList[vertex]) return undefined
        while(this.adjacencyList[vertex].length){
            let temp = this.adjacencyList[vertex].pop()
            this.removeEdge(vertex, temp) 
        }
        delete this.adjacencyList[vertex]
        return this
    }

    //DFS RECURSIVE>>
    dfsRecursive(start){
   
        const result = [];
        const visited = {};
        const adjList = this.adjacencyList; 
        
        function dfs(vertex){
            if(!vertex) return null;
            visited[vertex] = true;
            result.push(vertex);
            adjList[vertex].forEach(neighbor => {
                if(!visited[neighbor]){
                    return dfs(neighbor)
                }
            });
        }
        dfs(start)

        return result;

    }

    // DFS ITERATIVE>>
    dfsIterative(start){ 
    const stack = [start];
    const result = [];
    const visited = {};
    let currentVertex;

    visited[start] = true;
    while(stack.length){
        currentVertex = stack.pop() 
        result.push(currentVertex)

        this.adjacencyList[currentVertex].forEach(neighbor =>{
            if(!visited[neighbor]){
            visited[neighbor] = true;
            stack.push(neighbor)  
            } 
        })      
     }
    return result 
    }
    BFS(start){
        
        const queue = [start];
        const result = [];
        const visited = {};
        let currentVertex;

        visited[start] = true;

        while(queue.length){
            currentVertex =  queue.shift(); 
            result.push(currentVertex);

            this.adjacencyList[currentVertex].forEach(neighbor => {
                if(!visited[neighbor]){
                    visited[neighbor] = true;
                    queue.push(neighbor)
                }
            })
        }
        return result;
    }

}
//Testing:
let myGraph = new Graph();
console.log(myGraph)

myGraph.addVertex('A')
myGraph.addVertex('B')
myGraph.addEdge('A','B')
myGraph.addVertex('C')
myGraph.addEdge('B','C')
myGraph.addEdge('C','A')
console.log(myGraph)

myGraph.removeEdge('C','A')
console.log(myGraph)

let newGraph = new Graph();
newGraph.addVertex('A');
newGraph.addVertex('B');
newGraph.addVertex('C');
newGraph.addVertex('D');
newGraph.addEdge('A','B');
newGraph.addEdge('A','C');
newGraph.addEdge('A','D');
newGraph.addEdge('B','D');
newGraph.addEdge('C','D');
console.log(newGraph);

newGraph.removeVertex('D')
console.log(newGraph);
