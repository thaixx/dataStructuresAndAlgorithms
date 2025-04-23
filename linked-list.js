
class Node {
    constructor(val){
        this.node = val;
        this.next = null;   
    }    
}

class LinkedList {
    constructor(){
            this.head = null
    };
    
    addBegin(val){
        let newNode = new Node(val)
        newNode.next = this.head
        this.head = newNode
    };

    addEnd(val){
        let newNode = new Node(val)
        let tail = this.head
        if(this.head == null){
            this.head = newNode
            return;
        }
        while(tail.next !== null){
            tail = tail.next
        }
        tail.next = newNode;
    };  

    addAnywhere(val,pos){
        let newNode = new Node(val)
        let prev = this.head
        if(this.head == null) return;
        while(prev < pos){
            prev = prev.next
        }
        newNode.next = prev.next
        prev.next = newNode
    };

    removeBegin(){
        if(this.head == null) return;
        this.head = this.head.next

    }
    removeEnd(){
        if(this.head == null)return;
        if(this.head.next == null){
            this.head = null
            return
        }
        let tail = this.head
        while(tail.next.next !== null){
            tail = tail.next
        }
        tail.next = null

    }
    removeAnywhere(pos){
        let prev = this.head
        if(this.head == null)return;
        while(prev.next < pos){
            if(prev == null) return;
            prev = prev.next
        }
        if(prev.next == null) return;
        prev.next = prev.next.next

    }
}
//Testing:
let list = new LinkedList()
console.log(list)
list.addBegin(3)
list.addEnd(6)
list.addAnywhere(4,1)
console.log(list)
list.removeAnywhere(1)
console.log(list)
