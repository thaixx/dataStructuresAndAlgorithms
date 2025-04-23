
//Also called as Union Find, this algorithm could be used in some graphs problems
class DisjointSet{
    constructor(size){
        this.DS = []
        for(let i = 0; i < size; i++ ){
            this.DS.push(i)
        }
    }
    set(elem){
        if(DS[elem] !== elem){
             DS[elem] = this.set(DS[elem]) 
        }
        return DS[elem]
    }

    union(elem1, elem2){
        DS[this.set(elem1)] = this.set(elem2)
    }
}

