# Context: 
> Globally available JavaScript Object to only pass state where needed
    1. Create new file to hold the context
    2. Import React from 'react'
    3. const authContext = React.createContext({})
    4. import the context from the file

    ex: 
    const authContext = React.createContext({
        authenticated: false,
        login: () => {}
        });

    import AuthContext from '../context/auth-context';

    5. Wrap the required parent code in the context
    <AuthContext.Provider value={{authenticated: this.state.authenticated, login: this.loginHandler}}>
    //Code
     </AuthContext>

    6. Import & Use the context in the child component
    
    import AuthContext from '../context/auth-context';
    <AuthContext.Consumer>
    
    </AuthContext>

    7. Use a function to return the required JSX code
    {(context) => <div>{context.authenticated}</div>}


Using cleaner syntax
> Class Based components
    //We need this exact name
    static contextType = AuthContext;

    //Use it like this
    {this.context.authenticated ? <p>We're in</p> : <p>Log in</p>}

> Functional Components
    import {useContext} from 'react;
    const authContext = useContext(AuthContext);
    {authContext.authenticated ? <p>We're in</p> : <p>Log in</p>}