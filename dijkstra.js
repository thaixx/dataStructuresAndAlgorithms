/*
look to visit a node, choose the smallest distance, move to the new node and compare with the distance with the neighbors, if the total dist
is small then the previouly total dist,we store the new shortest dist 
1- marca todos com infinity
2- start node com 0
3- o que é menor (weight or infinity)? / weight + weight or infinity?
___________
pseudocode
- this function should accpet the start and end vertex
- create an object(distances) and set INFINITY in all vertex except the start/end, they should've value of 0
- add all in the priority queue with priority = infinity, except for the start vertex
- create another object called previous with every vertex in the adjList with a value of null
-start looping at the priority queue
    -deque vertex from the PQ
    -if this vertex is = to the end vertex , IS DONE!!
    -else, loop through each valuein the adjList at the vertex
        -calculate the dist to that vertex from the start vertex
        -if its lower than the current stored dist
            -updade the dist stored
            -update the previous object to contain that vertex
            -enqueue the vertex with the total dist from the start node ("result")
 */
class PriorityQueue { //"heap"
    constructor(){
      this.values = [];
    }
    enqueue(val, priority){
      this.values.push({val, priority}); // coloca na fila
      this.sort(); //ordena
    };
    dequeue(){
      return this.values.shift(); // tira da fila o que é de menor valor
    };
    sort(){
      this.values.sort((a, b) => a.priority - b.priority);// ordenando com base na prioridade
    };
}

class Graph{
    constructor(){
        this.adjList = {};
    }
    
    addVertex(vertex){
        if(!this.adjList[vertex]){
          this.adjList[vertex] = [] 
          return true; 
        } 
        return false
    }

    addEdge(vertex1,vertex2, weight){
        if(this.adjList[vertex1] && this.adjList[vertex2] ){
            this.adjList[vertex1].push({node:vertex2,weight}); // tem que usar um objeto para adicionar o par
            this.adjList[vertex2].push({node:vertex1,weight});
            return true
        }
        return false
    }
    Dijkstra(start, end){
        const nodes = new PriorityQueue();
        const distances = {};
        const previous = {};
        let path = [];
        let smallest;

        //build up inicial state
        for(let vertex in this.adjList){
            if(vertex === start){
                distances[vertex] = 0; 
                nodes.enqueue(vertex, 0)
            }else{
                distances[vertex] = Infinity;
                nodes.enqueue(vertex, Infinity)
            }
            previous[vertex] = null;
        }

        //as long as there is something to visit
        while(nodes.values.length){
            smallest = nodes.dequeue().val; 
            if(smallest === end){
                // stop condition

                //build a path to return
                while(previous[smallest]){
                    path.push(smallest);
                    smallest = previous[smallest]
                }
                break;
            }
            if(smallest || distances[smallest] !==Infinity){
                for(let neighbor in this.adjList[smallest]){
                    //find neighbor node
                    let nextNode = this.adjList[smallest][neighbor]
                    //calculate the new distance =to the neighbor node
                    let candidate = distances[smallest] + nextNode.weight;
                    let nextNeighbor = nextNode.node
                    if(candidate < distances[nextNeighbor]){
                        //updating new smallest dist to neighbor
                        distances[nextNeighbor] = candidate; 
                        //updating previouss - how we got to neighbor
                        previous[nextNeighbor] = smallest;
                        //enqueue in PQ, with new priority
                        nodes.enqueue(nextNeighbor, candidate)
                    }

                }

            }
        }
        return path.concat(smallest).reverse();

    }
}
//Testing:
var graph = new Graph()
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A","B", 4);
graph.addEdge("A","C", 2);
graph.addEdge("B","E", 3);
graph.addEdge("C","D", 2);
graph.addEdge("C","F", 4);
graph.addEdge("D","E", 3);
graph.addEdge("D","F", 1);
graph.addEdge("E","F", 1);


console.log(graph.Dijkstra("A", "E"));