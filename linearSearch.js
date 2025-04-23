
function linearSearch (arr, val){
    
    for(let i = 0; i <arr.length; i++ ){
        if (arr[i] === val)  return i; 
    } 
    return -1


}
//Testing:
let words = ["cat", "duck", "rat", "bat", "dog"]
console.log(linearSearch(words, "bat"))

