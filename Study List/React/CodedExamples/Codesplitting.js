import React, {Component} from 'react';

const asyncComponent = importComponent => {
    return class extends Component {
        state = {
            component: null
        }

        componentDidMount () {
            importComponent()
                .then(cmp => {
                    this.setState({component: cmp.default})
                })
        }

        render () {
            const C = this.state.component;

            return C ? <C {...this.props}>{this.props.children}</C> : null;
        }
    }
}

export default asyncComponent;


//Usage
// import asyncComponent from '../../hoc/asyncComponent';

// const AsyncNewPost = asyncComponent(() => import('./NewPost/NewPost'));
// <Route path="/new-post" component={AsyncNewPost}/>