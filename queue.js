class Queue {

    constructor() {

        this.items = [];
    }

    enqueue(element) {
        this.items.unshift(element);
    }

    dequeue() {
        return this.items.pop();
    }


    front() {
        return this.items[this.items.length - 1];
    }


    size() {
        return this.items.length;
    }


    getMin(){

        let bottom = 0
        let top = this.items.length-1
        let min = this.items[top]

        while(bottom <= top){
            if(this.items[top] < min){
                min = this.items[top]
            }
            top-- 
    
        }
        return min  

    }
    

    isEmpty(){
    return this.size === 0;
    }

    clear() {
        this.items = [];
    }

}
//Testing:
const queue = new Queue();

queue.enqueue(7);
queue.enqueue(13);
queue.enqueue(5);
queue.enqueue(10);
queue.enqueue(2);
queue.enqueue(33);
console.log(queue.items);

queue.dequeue() //fifo
console.log(queue.items);

console.log(queue.front())
console.log(queue.isEmpty())
console.log(queue.getMin())