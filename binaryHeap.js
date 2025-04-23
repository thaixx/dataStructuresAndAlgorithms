class MaxBinaryHeap{
    constructor (){
        this.values = [];
    }
    insert(element){
        this.values.push(element); 
        this.swap();
    }
    swap(){
        let idx = this.values.length - 1; 
        const element = this.values[idx]; 
        while(idx > 0){
            let parentIdx = Math.floor((idx - 1)/2); 
            let parent = this.values[parentIdx] 
            if (element > parent){ 
                this.values[parentIdx] = element; 
                this.values[idx] = parent; 
                idx = parentIdx;
            }
            else break;
        }
    } 
    right(index) {
        return 2 * index + 2;
    }
    left(index) {
        return 2 * index + 1;
    } 
    isLeaf(index) {
        if (2 * index + 1 >= this.values.length) return true;
        return false;
    }
    extractMax(){
        const max = this.values[0];
        const end = this.values.pop();
        if(this.values.length > 0){
            this.values[0] = end;
            this.sinkDown();  
        }
        
        return max;
    } 
    sinkDown(){
        let idx = 0;
        const length = this.values.length;
        const element = this.values[0];
        while(true){
            let leftChildIdx = this.left(idx);
            let rigthChildIdx = this.right(idx);
            let leftChild, rigthChild;
            let internalSwap = null;

            if(leftChildIdx < length){
                leftChild = this.values[leftChildIdx]   
                if(leftChild > element){  
                    internalSwap = leftChildIdx
                }  
            }
            if(rigthChildIdx < length){
                rigthChild = this.values[rigthChildIdx]
                if((internalSwap === null && rigthChild > element)||   
                   (internalSwap !== null && rigthChild > leftChild)){
                        internalSwap = rigthChildIdx;
                }
            }

            if (internalSwap === null)break;
            this.values[idx] = this.values[internalSwap]; 
            this.values[internalSwap] = element; 
            idx = internalSwap;
        }
    }

}
// Testing:
let myHeap = new MaxBinaryHeap()
myHeap.insert(41);
myHeap.insert(39);
myHeap.insert(33);
myHeap.insert(18);
myHeap.insert(27);
myHeap.insert(12);
console.log(myHeap)

myHeap.insert(55);
console.log(myHeap.extractMax());
console.log(myHeap)











