function merge(left, right) {
    let sorted = [];
    //Guard against empty arrays
    while(left.length && right.length) {
        //Pick the smaller among the smallest element of left & right sub arrays
        if(left[0] < right[0]) {
            sorted.push(left.shift())
        } else {
            sorted.push(right.shift());
        }
    }
    
    //Concatenating the leftover elements
    return sorted.concat(left.slice().concat(right.slice()));
}

function sort(arr) {
    if(arr.length > 2) {
        const half = arr.length / 2;
        const left = arr.splice(0, half);
        return merge(sort(left), sort(arr));
    } else {
        return arr;
    }
}

const testArr = [1,3,5,21,54,13421,421,213,2]
console.log(sort(testArr))