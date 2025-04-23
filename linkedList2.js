
class Node {
    constructor(element){
     this.element = element;
     this.next = null;
    }
    
}

class LinkedList{
    constructor(element){
        let newNode = new Node(element)
        this.head = newNode;
        this.tail = this.head;
        this.length = 1;
    }

    push(element){
        const newNode = new Node(element);
        if(!this.head){ 
            this.head = newNode
            this.tail = newNode

        }else{
            this.tail.next = newNode
            this.tail = newNode 
            
        }
        this.length++  
        return this  

    }
    pop(){
        if(!this.head) return undefined
        let temp = this.head
        let pre = this.head 
        while(temp.next){
            pre = temp
            temp = temp.next 
        }
        this.tail = pre
        this.tail.next = null
        this.length--

        if(this.length === 0){
            this.head = null
            this.tail = null
        }
        return temp
        
    }

    unshift(element){
        let newNode = new Node(element)

        if(!this.head){ 
            this.head = newNode
            this.tail = newNode
        }else {
           newNode.next = this.head
           this.head = newNode
        }
        this.length++
        return this
    }

    shift(){
        if(!this.head) return undefined
        let temp = this.head 
        this.head = this.head.next
        temp.next = null
        this.length--
        if(this.length === 0){
            this.tail = null
        } 
        return temp
    }

    get(index){
        if (index < 0 || index >= this.length) return undefined
        let temp = this.head
        for (let i = 0; i < index; i++){
            temp = temp.next
        }
        return temp
    }

    set(index, element){
        let temp = this.get(index)
        if (temp){
            temp.element = element
            return true
        }
        return false
    }

    insert(index, element){
        
        if(index === 0) return this.unshift(element)
        if(index === this.length) return this.push(element)
        if (index < 0 || index > this.length) return false

        let newNode = new Node(element); 
        let temp = this.get(index -1) 

        newNode.next = temp.next 
        temp.next = newNode 

        this.length++;
        return true;
    }
    remove (index){
        if(index === 0) return this.shift()
        if(index === this.length - 1) return this.pop()
        if (index < 0 || index >= this.lenght) return undefined

        let before = this.get(index -1) 
        let temp = before.next

        before.next = temp.next  
        temp.next = null       

        this.length--
        return temp
    }

    reverse(){
        let temp = this.head
        this.head = this.tail 
        this.tail = temp 
        let next = temp.next 
        let prev = null 

        for(let i = 0; i < this.lenght; i++){
            next = temp.next
            temp.next = prev
            prev = temp
            temp = next
        }
        return this
    }

}
//Testing:
let newLinkedList =  new LinkedList(13); 

newLinkedList.push(31);
newLinkedList.pop();  
console.log(newLinkedList);

newLinkedList.push(31);
newLinkedList.push(27);
newLinkedList.push(5);

console.log(newLinkedList);

newLinkedList.unshift(99); 
console.log(newLinkedList);

newLinkedList.shift(); 
console.log(newLinkedList);

console.log(newLinkedList.get(2));

newLinkedList.insert(2,27);

newLinkedList.remove(2); 

console.log(newLinkedList.reverse())