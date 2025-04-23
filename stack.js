class Stack {

    constructor() {

        this.items = [];
    }
    
    push(element) {
        this.items.push(element);
    }

    pop() {
        return this.items.pop();
    }

    peek() {
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
const stack = new Stack();

stack.clear();

console.log(stack.isEmpty());

stack.push(7);
stack.push(13);
stack.push(5);
stack.push(10);
stack.push(2);
stack.push(33);

console.log(stack.items);

console.log(stack.getMin());

