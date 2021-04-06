# State management tool
npm install --save redux react-redux

> Is independent of React, stores entire state

Pros
> Great for managing large projects, 
> Easier to debug with devTools

Cons
> Big boiler plate, not very efficient if doing simple updates

Redux is great for holding state on users & global data, not great for local UI state & simple components

# Actions are dispatched by the component
    > Actions call the reducers based on type

    store.dispatch({type: 'INC_COUNTER'});
    store.dispatch({type: 'ADD_COUNTER', value: 10});

# Reducer operates on the store, receives the Action & the old state
    > We can only have one reducer

    > The reducer always makes a copy of the old state and operates on that

# Store holds the state
    > Cannot create a store without a reducer
    <const store = createStore(rootReducer);>

    # .getState returns the state from the store

# Subscriber keeps an eye on the action dispatches & returns the state
    store.subscribe(() => {
        console.log('[Subscription]', store.getState())
    });

[Example](./CodedExamples/redux-basics.js)


1. Wrap the entire app in the Provider

import { Provider } from 'react-redux';
<Provider store={store}><App /></Provider>

2. Wrap the component that receives the state in connect (hoc) 

import { connect } from 'react-redux';
const mapStateToProps = state => {
    return {
        ctr:  state.counter
    };
};

export default connect(mapStateToProps)(Counter);

//Use it like this
<ExampleOutput value={this.props.ctr}><ExampleOutput/>

3. Add Actions to the file via props

const mapStateToProps = state => {
    return {
        ctr:  state.counter
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch({type: 'INCREMENT'}),
        onDecrementCounter: () => dispatch({type: 'DECREMENT'}),
        onAddCounter: num => dispatch({type: 'ADD', amount: num}),
        onSubtractCounter: num => dispatch({type: 'SUBTRACT', amount: num})
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);

4. Update State Immutably [Official](https://redux.js.org/recipes/structuring-reducers/immutable-update-patterns/)

case 'ADD':
    returnState = {
        ...state,counter: 
        state.counter + action.amount};
break;

> Create new arrays immutably
 returnState = {
    ...state, 
    storedResults: state.storedResults.concat({
            id: new Date(),
            val: state.counter
    })
};

> Search arrays Immutably
const newArray = state.storedResults.filter(
    result => result.id !== action.toDelete)
        returnState = {
            ...state,
        storedResults: newArray
        };

# Create & Pass actions

import { connect } from 'react-redux';

const mapDispatchToProps = dispatch => {
    return {
         onDeleteResult: id => dispatch({type: 'DELETE_RESULT', toDelete: id})
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(Component);

# Create multiple reducers
import { createStore, combineReducers } from 'redux';

import counterReducer from './store/reducers/counter';
import resultsReducer from './store/reducers/results';

const rootReducer = combineReducers({
    counter: counterReducer,
    results: resultsReducer
})

> Accessing 
const mapStateToProps = state => {
    return {
        ctr:  state.counter.counter,
        storedResults: state.results.storedResults
    };
};

> The reducer cannot access global state, pass the state around in the component
const mapDispatchToProps = dispatch => {
    return {
        onStoreResult: result => dispatch({type: actionTypes.STORE_RESULT, counter: result})
         };
}