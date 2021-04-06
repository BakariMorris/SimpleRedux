# Class based components
    > Make requests in componentDidUpdate
    > use response.json() to receive the data from fetch
    > Use if statements to only send a request if we are prompted for new data


componentDidUpdate() {
        if( this.props.id) {
            if(!this.state.loadedPost || this.state.loadedPost && this.state.loadedPost.id !== this.props.id) {

            fetch('https://jsonplaceholder.typicode.com/posts/' + this.props.id)
            .then(response => response.json())
            .then(data => this.setState({loadedPost: data}))
            }
        }
    }