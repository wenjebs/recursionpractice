function fibs (num) {
    let next;
    let array = [0,1]
    for (let i = 0; i < num-2; i++) {
        next = array[i] + array[i+1]
        array.push(next)
    }
    return array
}

console.log(fibs(10))

function fibsRec (num) {
    if (num===1) return [0]
    if (num===2) return [0,1]  
    arr = fibsRec(num-1)
    nextTerm = arr[arr.length-1] + arr[arr.length-2]
    return arr.concat([nextTerm]);
}

console.log(fibsRec(4))

function mergeSort (array) {
    if (array.length === 1) {
        return array
    }
    let leftArray = array.slice(0, array.length/2)
    let rightArray = array.slice(array.length/2)

    return merge(mergeSort(leftArray), mergeSort(rightArray))
}
// merging algorithm
function merge (leftArr, rightArr) {
    let temp = [];
    let i = 0;
    let j = 0;
    while (i<leftArr.length && j < rightArr.length) {
        if (leftArr[i] > rightArr[j]) {
            temp.push(rightArr[j])
            j++;
        } else {
            temp.push(leftArr[i])
            i++;
        }
    }
    for (i; i<leftArr.length; i++) {
        temp.push(leftArr[i])
    }

    for (j; j<rightArr.length; j++) {
        temp.push(rightArr[j])
    }

    return temp
}

console.log(mergeSort([1,2]))

// console.log(merge([1,2],[3,4]))
