// exercicio da aula 1
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
        if(!this.head){ ///não usar ==  null verificar depois
            this.head = newNode
            this.tail = newNode

        }else{
            this.tail.next = newNode
            this.tail = newNode ///13 -> null/ 13 ->newNode
            
        }
        this.length++  // adiciona 1 no tamanho da lista
        return this  // retorna toda a linked list

    }
    pop(){
        if(!this.head) return undefined
        let temp = this.head
        let pre = this.head // 2 ponteiros apontando pro head
        while(temp.next){
            pre = temp
            temp = temp.next // temp sempre vai estar um nó a frente, pre só iguala quando começa o novo loop
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

        if(!this.head){ ///não usar ==  null verificar depois
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
        let temp = this.head // 2 ponteiros apontando pro head
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

        let newNode = new Node(element); //novo nó
        let temp = this.get(index -1) //novo nó colocado antes do index

        newNode.next = temp.next //novo nó aponta para o nó do index
        temp.next = newNode //o anterior que apontava para o nó do index aponta pro newNode

        this.length++;
        return true;
    }
    remove (index){
        if(index === 0) return this.shift()
        if(index === this.length - 1) return this.pop()
        if (index < 0 || index >= this.lenght) return undefined

        let before = this.get(index -1) //ponteiro colocado antes do index
        let temp = before.next

        before.next = temp.next  // aponta o anterior pro proximo do nó que quer tirar
        temp.next = null        // aponta o nó pra null

        this.length--
        return temp
    }

    reverse(){
        let temp = this.head
        this.head = this.tail //head aponta no tail
        this.tail = temp //tail aponta no head
        let next = temp.next // segundo item que ira virar o penultimo
        let prev = null  //anterior a temp (antigo head) e apontando pra null

        for(let i = 0; i < this.lenght; i++){
            next = temp.next
            temp.next = prev
            prev = temp
            temp = next
        }
        return this
    }

}

let newLinkedList =  new LinkedList(13); // cria lista

newLinkedList.push(31); /// adiciona node
console.log(newLinkedList);
newLinkedList.pop();  //remove e fica com 1
console.log(newLinkedList);

newLinkedList.push(31);
newLinkedList.push(27);
newLinkedList.push(5);

console.log(newLinkedList);

newLinkedList.unshift(99); //adiciona no head
console.log(newLinkedList);

newLinkedList.shift();  //remove o head
console.log(newLinkedList);

console.log(newLinkedList.get(2));// pega o item no idx 2

newLinkedList.insert(2,27);// insere na pos 2 o numero 27

newLinkedList.remove(2); //remove da pos 2

console.log(newLinkedList.reverse())