//MERGE
function merge(array1, array2){
    let combined = []
    let i = 0
    let j = 0
    while(i < array1.length && j <array2.length){
        if(array1[i] < array2[j]){
            combined.push(array1[i])
            i++
        }else{
            combined.push(array2[j])
            j++
        }
    }
    while(i < array1.length){
        combined.push(array1[i])
        i++ 
    }
    while(j < array2.length){
        combined.push(array2[j])
        j++
    }
    return combined

}
//MERGESORT

function mergeSort(array){
    if(array.length ===1) return array

    let mid = Math.floor(array.length/2)//divide the array 
    let left = array.slice(0,mid) //gets the array's first part
    let right = array.slice(mid)//gets the array's last part
    
    return merge(mergeSort(left), mergeSort(right)) // repeat that recursively and sorting using merge
   
}

//Testing:
console.log(mergeSort([13,7,2,9]))

