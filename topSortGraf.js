//Topological Sort Application

var canFinish = function(numCourses, prerequisites) {

    let visited = new Set()
    let paths = new Set()
    let adjList = {}
    //create adjlist
    for ( let node = 0; node < numCourses; node++ ) {
        adjList[node] = []
    }
    //populate adjList
    for ( let courses of prerequisites) {
        let course1 = courses[0]
        let course2 = courses[1]

        adjList[course2].push(course1)
    }
    //dfs to visit all nodes
    function dfs(node, visited, paths, adjList){
        if (paths.has(node) ) return false //checking cicles
        if (visited.has(node) )  return
        
        paths.add(node)
        visited.add(node)

        for (let neighbor of adjList[node]) {
            let isAciclical = dfs(neighbor, visited, paths, adjList)
            if( isAciclical === false) return false
        }
        paths.delete(node)
    }
    //for to run dfs 
    for (let course = 0; course < numCourses; course++ ) {
        const isValid = dfs(course, visited, paths, adjList)
        if(isValid == false) return false
    }
    return true

}
//Testing:

console.log( canFinish(2,[1,0]) )
