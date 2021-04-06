//Receiving data
fetch('https://jsonplaceholder.typicode.com/posts')
.then(response => {
    if (response.ok){
        return response.json()
    } 
    return Promise.reject(response);
})

.then(json => {
  //Transformation
    const posts = json.slice(0,4);
    const updatedPosts = posts.map(post => {
        return {
            ...post,
            author: 'Bakari'
        }
    })
    return this.setState({posts: updatedPosts
    })
})

//Sending data
fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(post),
            headers: {'Content-type': 'application/json; charset=UTF-8'}
        })
        .then(response => {
            if(response.ok) {
                return response.json();
            }
            return Promise.reject(response);
        })
        //Chain thens to operate on data

        
//Delete data
fetch('https://jsonplaceholder.typicode.com/posts/' + id, {
            method: 'DELETE',
        })
        .then(response => console.log('response' ,response))