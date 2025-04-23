class Graph {
    constructor (vertices) {
      this.vertices = vertices
      this.edges = 0
      this.adjList = []
      this.weightList = [] 
      for (let i = 0; i <= vertices; i++) { 
        this.adjList[i] = []
        this.weightList[i] = []
      }
    }
  
    addEdge (source, target, weight) {
      this.edges += 1
      this.adjList[source].push(target)
      this.weightList[source].push(weight)
    }
  
    hasEdge (source, target) {
      return this.adjList[source].includes(target);
    }
  
    bfs (source) {
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
  
    dfs (source) {
      let stack = [source] 
      let visited = new Array(this.vertices).fill(false)
      let visitedNodes = []
  
      visited[source] = true
  
      while (!stack.length) {
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
  
    dijkstra (heightMatrix) {
      let visited = new Set()
      let row = heightMatrix.length
      let col = heightMatrix[0].length
      
      let d = new Array(row*col).fill(Infinity)
      
  
      d[0] = 0
  
      let heap = new MinPriorityQueue()
      heap.enqueue(0, 0)
  
      while (!heap.isEmpty()) {
        //Chosing first node
        let { element: wNode } = heap.dequeue()
  
        if (visited.has(wNode)) continue
  
        //Mark first node as visited
        visited.add(wNode)
          
      let neighbors = [wNode - col, wNode + col, wNode - 1, wNode + 1]
      
      if (neighbors[1]>=row*col) {
          neighbors[1] = -1
      }
      
      if (wNode%col==0) {
          neighbors[2] = -1
      }
          
      if (wNode%col==row-1) {
          neighbors[3] = -1
      }
      
        for (let i = 0; i < neighbors.length ; i++) {
          let neigh = neighbors[i]
          if(neigh<0) continue;
            
          let edgeWeight = heightMatrix[Math.floor(wNode/col)][wNode%col];
          let neighWeight = heightMatrix[Math.floor(neigh/col)][neigh%col];
          let effort = Math.max(d[wNode], Math.abs(edgeWeight - neighWeight));
           
          if (effort < d[neigh]) {
            d[neigh] = effort
            heap.enqueue(neigh, d[neigh])
          }
        }
      }
   
  
      return d[row*col -1]
    }
}

//Testing: 
var minimumEffortPath = function(heights) {
    const rows = heights.length; 
    const cols = heights[0].length; 

    const dist = Array.from(Array(rows), () => Array(cols).fill(Infinity)); 

    const minHeap = [[0, 0, 0]];  // [effort, x, y]
    
    dist[0][0] = 0;
    const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];
    
    while (minHeap.length > 0) {
        const [effort, x, y] = minHeap.shift();
        
        if (effort > dist[x][y]) continue;
        
        if (x === rows - 1 && y === cols - 1) return effort;
        
        for (const [dx, dy] of directions) {
            const nx = x + dx, ny = y + dy;
            if (nx >= 0 && nx < rows && ny >= 0 && ny < cols) {
                const newEffort = Math.max(effort, Math.abs(heights[x][y] - heights[nx][ny]));
                if (newEffort < dist[nx][ny]) {
                    dist[nx][ny] = newEffort;
                    minHeap.push([newEffort, nx, ny]);
                    minHeap.sort((a, b) => a[0] - b[0]);
                }
            }
        }
    }
    return -1;
    
}; 

heights = [[1,2,2],[3,8,2],[5,3,5]]
console.log(minimumEffortPath(heights))