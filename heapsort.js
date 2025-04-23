function swap(arr, a, b) {
    const tmp = arr[a];
    arr[a] = arr[b];
    arr[b] = tmp;
}

function heapSort(arr) {
    let arrLength = arr.length;
    for (let i = arr.length - 1; i >= 0; i--) {
        swap(arr, 0, i);
        arrLength--;
        heapify(arr, arrLength, 0);
    }
}

function left(i) {
    return 2*i + 1;
}

function right(i) {
    return 2*i + 2;
}

function heapify(arr, arrLength, curr) {
    const l = left(curr);
    const r = right(curr);
    let largest = curr;

    if (
          l < arrLength &&
          arr[l] > arr[largest]
    ) {
        largest = l;
    }

    if (
          r < arrLength &&
          arr[r] > arr[largest]
    ) {
        largest = r;
    }

    if (largest !== curr) {
        swap(arr, curr, largest);
        heapify(arr, arrLength, largest)
    }
}

function buildHeap(arr) {
    const startIdx = Math.floor(arr.length / 2) - 1;

    for (let i = startIdx; i >= 0; i--) {
        heapify(arr, arr.length, i);
    }
}


const sortArray = function(nums) {
    buildHeap(nums);
    heapSort(nums);
    return nums
    
};
//Testing:
let nums = [ 3,4,7,1,2,0]
console.log(sortArray(nums))