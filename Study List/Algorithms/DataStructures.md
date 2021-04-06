1. Array (String questions)
    * Lookup O(1)
    * push O(1)
    * insert O(n)
    * delete O(n)

    arr.push('e'); // O(1)
    arr.pop(); // O(1)
    arr.unshift('x'); // O(n)
    arr.splice(2, 0, 'alien') // O(n)



2. Hashmap. Uses hash generation to create the key address
    * Lookup O(1)
    * Search O(1)
    * Insertion O(1)
    * Deletion O(1)
    
    Pros:
    > Fantastic for speed

    Cons:
    > Limited memory creates collisions for hash tables. Can possibly take O(n) time for lookups 

    new Map() //Creates hash map that can hold any data type as a key, maintains insertion order
    new Set() //Only stores keys, no values

3. Linked Lists
    
Tree
    Lookup O(logN)