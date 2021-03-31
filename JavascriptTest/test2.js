//Comment Box
//Comment Add
//Reply to Comment use IDs
//Nested Comments 
//Edit the comments
//Delete Comments AND their children
//Live, AJAX


//List of Tasks
//Task
//Edit the ListName
//Edit, Delete a Task
//Drag and drop feature


//Data fetch API
//Photo, description
//Rating of restaurant
//Name, Rating, ETA, Menu
//Sort based on Name, Rating, ETA
//TAGGING based on cuisine, etc.
//Responsive main thing when B -> C
//Search Functionality



function main() {
    let input =
        [["dog", "mammal"],
        ["shark", "fish"],
        ["cat", "mammal"],
        ["mammal", "animal"],
        ["fish", "animal"],
        ["whitecat", "cat"],
        ["sheep", "mammal"],
        ["sparrow", "bird"],
        ["blacksheep", "sheep"]];


    let map = {};
    let result = {};

    for (let item of input) {
        if (map.hasOwnProperty(item[1])) {
            
            let data = map[item[1]];
            map[item[1]].push(item[0]);
        } else {
            map[item[1]] = [item[0]];
        }
    }


    let keys = Object.keys(map);

    for (let i = 0; i < keys.length; i++) {
        let temp = keys.slice();
        temp.splice(i, 1);
        let count = 0;
        for (let tempKey of temp) {
            if (map[tempKey].length > 0) {
                if (map[tempKey].includes(keys[i])) {
                    count++;
                }
            }
        }
        // if parent property call DFS
        if (count == 0) {
            result[keys[i]] = dfs(keys[i]);
        }

    }

    function dfs(parent) {
        let store = {};
        let children = map[parent];
        if (children) {
            for (let child of children) {
                store[child] = dfs(child);
            }
        }

        return store;
    }
    console.log(result);
}