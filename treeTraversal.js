class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BST{
    constructor (){
        this.root = null;
    }

    insert(value){
            const newNode = new Node(value);
            if (this.root === null) {
                this.root = newNode;
                return this;
            }
            let temp = this.root;
            while (true){
                if (newNode.value === temp.value) return undefined;
                if (newNode.value < temp.value){
                    if(temp.left == null){
                        temp.left = newNode;
                        return this
                    }
                    temp = temp.left

                }else{
                    if(temp.right == null){
                        temp.right = newNode;
                        return this;
                    }
                    temp = temp.right 
                }
            }    
    }
    contains(value){
        if (this.root === null) return false
        let temp = this.root
        while (temp){
            if(value < temp.value){
                temp = temp.left
            }else if (value > temp.value){
                temp = temp.right 
            }else{
                return true
            }  
        }
        return false
    }
    minValue(currentNode){
        while(currentNode.left != null){
            currentNode = currentNode.left
        }
        return currentNode

    }

    BFS (){
        let currentNode = this.root 
        let queue = []
        let results = []
        queue.push(currentNode)

        while (queue.length){
            currentNode = queue.shift()
            results.push(currentNode.value)
            if(currentNode.left) queue.push(currentNode.left)
            if(currentNode.right) queue.push(currentNode.right)
        }
    return results
    }
    DFSPreOrder(){
        let results = []
        function traverse(currentNode){
            results.push(currentNode.value) 
            if(currentNode.left) traverse(currentNode.left) 
            if(currentNode.right) traverse(currentNode.right) 
        }
        traverse(this.root)
        return results
    }
    DFSPostOrder(){
        let results = []
        function traverse(currentNode){
            if(currentNode.left) traverse(currentNode.left) 
            if(currentNode.right) traverse(currentNode.right) 
            results.push(currentNode.value) 
        }
        traverse(this.root) 
        return results
    }
    DFSInOrder(){
        let results = []
        function traverse(currentNode){
            if(currentNode.left) traverse(currentNode.left) 
            results.push(currentNode.value)
            if(currentNode.right) traverse(currentNode.right) 
        }
        traverse(this.root)
        return results
    }


}
//Testing:

let myTree = new BST()
console.log(myTree)
myTree.insert(47)
myTree.insert(21)
myTree.insert(76)
myTree.insert(18)
myTree.insert(27)

myTree.insert(52)
myTree.insert(82)

console.log(myTree)

console.log(myTree.BFS())
console.log(myTree.DFSPreOrder())
console.log(myTree.DFSPostOrder())
console.log(myTree.DFSInOrder())
