class Node {
    constructor(value){
        this.value = value
        this.next = null
    }
}

class Stack{
    constructor(value){
        let newNode = new Node(value)
        this.top = newNode;
        this.lenght = 1
    }

    push(value){
        let newNode = new Node(value)

        if(!this.top){ 
            this.top = newNode
        }else {
           newNode.next = this.top
           this.top = newNode
        }
        this.lenght++
        return this
    }
    pop(){
        if(!this.top) return undefined
        let temp = this.top
        this.top = this.top.next
        temp.next = null

        this.lenght--
        return temp
    }
}
//Testing:
const stack = new Stack(2);
stack.push(5)
stack.push(13)
stack.pop()
console.log(stack);