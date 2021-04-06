# React Router
npm install --save react-router-dom
import { BrowserRouter, Route, Switch } from 'react-router-dom';
<BrowserRouter>
    <YourApp>
</BrowserRouter>


1. Parse the URL path for the page
2. Read config for the page, what happens for that page?
3. Load code for the page

<Route path="/" exact component={Posts}/>
<Route path="/new-post" component={NewPost}/>

4. Make sure we don't actually reload on page changes

<import { Route, Link } from 'react-router-dom';>
<li><Link to="/">Home</Link></li>

> We can set url params & data with the "to" object
<Link to={{
        pathname: "/new-post", 
        hash: '#submit',
        search: '?quick-submit=true'}
        }>New Post</Link>

> To build a relative link we can use:
  this.props.match.url + '/new-post

> The history location & match variables (explaining the user's journey) are passed in props

> To pass this down to the children we can use
    import { withRouter } from 'react-router-dom';
    export default withRouter(ParentComponent);

> props.location.search //?start=5 
> This gets the key value pair
    <componentDidMount() {
        const query = new URLSearchParams(this.props.location.search);
        for (let param of query.entries()) {
            console.log(param); // yields ['start', '5']
        }
    }>

 

5. To give your links styling based on which page is active we can use NavLink

<import { Route, NavLink } from 'react-router-dom';>
<NavLink to="/" activeClassName="active" activeStyle={{textAlign: 'center'}} exact>Home</NavLink>

6. We can load components dynamically: path="/:id"

 <Route path="/:id" exact component={FullPost}></Route>
  <componentDidMount() {
      //Loads component with the data passed in by the URL (:id)
        if( this.props.match.params.id) {>


7. To load only one Route to avoid unnecessarily loading multiple pages

<import { Route, NavLink, Switch } from 'react-router-dom';>
<Route path="/" exact component={Posts}/>
<Switch>
    <Route path="/new-post" component={NewPost}/>
    <Route path="/:id" exact component={FullPost}></Route>
</Switch>

8. Navigating programmatically, click listener etc.
> We push a new page into the history & navigate to it

<this.props.history.push({pathname: '/' + id});>

10. We cannot nest routes if we have exact on the parent route
    We can also use the current URL to make our nested routing dynamic

<Route path={this.props.match.url + "/:id"} exact component={FullPost}></Route>

11. To force a re render on components on your page, use componentDidUpdate

12. To Redirect to another url use:
<Redirect from='/' to='/posts'></Redirect>

> We can load Redirect conditionally to Redirect to certain pages
> Redirect replaces the current page & does not allow us to go back to the page we were previously on

13. In order to only allow certain users to get to pages, we can use Navigation guards

{this.state.auth ? <Route path="/new-post" component={NewPost}/> : null}
<Redirect from='/' to='/safe-page'>

14. Catching unknown paths, don't define path:
<Route render={() => <h1>Not found</h1>} />

15. Code Splitting, imports components asynchronously
[Example](./CodedExamples/Codesplitting.js)

> If using React 16.6^ use React.lazy

import React, {Suspense} from "react";

const Posts = React.lazy(() => import('./containers/Posts'))
<Route path="/posts" render=(() => <Suspense fallback={<div>Loading...</div>}><Posts/><Suspense/>) />

16. Set base path to properly route users on initial load
<BrowserRouter basename={'/my-app'}>


17. To pass data to a routed element use render

<Route 
                    path={this.props.match.path + '/contact-data'} 
                    component={ContactData}
                    render={() => (<ContactData ingredients={this.state.ingredients} />)} /> 