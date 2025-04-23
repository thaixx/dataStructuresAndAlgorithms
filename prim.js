

class Graph {
    constructor(vertices) {
      this.vertices = vertices
      this.edges = 0
      this.adjList = []
      this.weightList = [] 
      for (let i = 0; i <= vertices; i++) { 
        this.adjList[i] = []
        this.weightList[i] = []
      }
    }

    addVertix(vertices){
        if(!this.adjList[vertices]) this.adjList[vertices] = []
    }
    removeVertix(vertices){
        while(this.adjList[vertices].length){
            const adjVertex = this.adjList[vertices].pop();
            this.removeEdge(vertices, adjVertex);
        }
        delete this.adjList[vertices]

    }
  
    addEdge(source, target, weight) {
      this.edges += 1
      this.adjList[source].push(target)
      this.weightList[source].push(weight)
    }
  
    hasEdge(source, target) {
      return this.adjList[source].includes(target);
    }
    removeEdge(v1, v2){ 
        this.adjList[v1] = this.adjList[v1].filter(v => v !== v2) 
        this.adjList[v2] = this.adjList[v2].filter(v => v !== v1) 

    }
  
    bfs(source) {
      let queue = [source] 
      let visited = new Array(this.vertices).fill(false)
      let visitedNodes = []
  
      visited[source] = true
  
      while (!!queue.length) {
        let workNode = queue.shift()
  
        visitedNodes.push(workNode)
  
        for (let neigh of this.adjList[workNode]) {
          if (!visited[neigh]) {
            visited[neigh] = true
            queue.push(neigh)
          }
        }
      }
  
      return visitedNodes
    }
  
    dfs(source) {
      let stack = [source] 
      let visited = new Array(this.vertices).fill(false)
      let visitedNodes = []
  
      visited[source] = true
  
      while (!!stack.length) {
        let workNode = stack.pop()
  
        visitedNodes.push(workNode)
  
        for (let neigh of this.adjList[workNode]) {
          if (!visited[neigh]) {
            visited[neigh] = true
            stack.push(neigh)
          }
        }
      }
  
      return visitedNodes
    }
  
    prim() {
      let visited = new Set()
      
      let d = new Array().fill(Infinity)
      let pred = new Array().fill(-1)
  
      d[0] = 0
    
      let heap = new MinPriorityQueue()
      heap.enqueue(0,(0, 0))

      let mst = new Graph()
  
      while (!heap.isEmpty()) {
        
        let { element: wNode } = heap.dequeue()
  
        if (visited.has(wNode)) continue
  
        visited.add(wNode)
        if(pred[wNode] !== -1){
            mst.addEdge(wNode, pred[wNode], cost)
            mst.addEdge(pred[wNode],wNode, cost)

        }
      }
          
        for(let i = 0;  i < neighbors.length ;i++){

            let neighbors = this.adjList[wNode][i]
            let edgeWeight = this.weightList[wNode][i]
            if(edgeWeight < d[neighbors]){
                d[neighbors] = edgeWeight
                pred[neighbors] = wNode
                heap.enqueue(h, (d[neighbors],neighbors))
            }

        }
      return mst
    }
}