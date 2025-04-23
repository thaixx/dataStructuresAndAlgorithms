class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor(value) {
        const newNode = new Node(value);
        this.head = newNode;
        this.tail = newNode;
        this.length = 1;
    }

    pushBack(value) {
        const newNode = new Node(value);
        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    pushFront(value) {
        const newNode = new Node(value);
        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    get(index) {
        if (index < 0 || index >= this.length) return undefined;
        let temp = this.head;
        if (index < this.length / 2) {
            for (let i = 0; i < index; i++) {
                temp = temp.next;
            }
        } else {
            temp = this.tail;
            for (let i = this.length - 1; i > index; i--) {
                temp = temp.prev;
            }
        }
        return temp;
    }

    insert(index, value) {
        if (index === 0) return this.unshift(value)
        if (index === this.lenght) return this.push(value)
        if (index < 0 || index > this.lenght) return false

        let newNode = new Node(value)
        let before = this.get(index - 1)
        let after = before.next
        before.next = newNode
        newNode.prev = before
        newNode.next = after
        after.prev = newNode

        this.length++
        return true
    }

    delete(index) {
        if (index === 0) return this.shift()
        if (index === this.lenght - 1) return this.pop()
        if (index < 0 || index >= this.lenght) return undefined

        let temp = this.get(index) 
        temp.prev.next = temp.next
        temp.next.prev = temp.prev
        temp.next = null
        temp.prev = null

        this.length--
        return temp
    }

    size() {
        let temp = this.tail
        if (temp.prev = null ) return null
        else {
            return this.length
        }

    }
}
//Testing:
let myDoublyLinkedList = new DoublyLinkedList(3);
myDoublyLinkedList.pushBack(13);
myDoublyLinkedList.pushFront(31);
console.log(myDoublyLinkedList)

myDoublyLinkedList.insert(1, 1);
myDoublyLinkedList.insert(1, 99);
console.log(myDoublyLinkedList);

myDoublyLinkedList.delete(1)
console.log(myDoublyLinkedList);
console.log("The size is " + myDoublyLinkedList.size(13));

