//Google Question
//Given an array [2,5,1,2,3,5,1,2,4]
//It should return 2

const firstRepeating = arr => {
    // Create a hash map
    // Loop through the array
    // If there is already a key with that number in the hash map, return the key
    
    //[2,5,1,2,3,5,1,2,4]

    const numMap = {}

    for(let val of arr) { // O(n)
        if(numMap[val] !== undefined) {
            return val;
        }
        
        numMap[val] = val;
    }

    return 'Did not find recurring values';
}
const testArr = [2,5,1,3,3,5,1,2,4];
console.log(firstRepeating(testArr))
