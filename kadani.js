
function maxSubArraySum (a, size) {

    var max = -Infinity
    var currentMax = 0
      
    for (var i = 0; i < size; i++){
        currentMax = currentMax + a[i]
        if (max < currentMax) {
            max = currentMax
        }
        if (currentMax < 0) {
            currentMax = 0
        }
    }
            
    return max
}
  
// Testing:
var a = [ -2, -3, 4, -1, -2, 1, 5, -3 ]
console.log("Maximum contiguous sum is",
               maxSubArraySum(a, a.length))

  