const array1 = ['a', 'b', 'c', 'x'];
const array2 = ['z', 'y', 'a'];


function containsCommonItem2(arr1, arr2) {
    //Loop though first array & create object where properties === items in the array
    //loop through second array and check if item in second array exists on created object.
    return arr1.some(item => arr2.include(item));
    
}

console.log(containsCommonItem2(array1, array2));