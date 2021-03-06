import React, { Component } from 'react';
import { connect } from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import * as actionTypes from '../../store/actions';


class Counter extends Component {
    state = {
        counter: 0
    }

    counterChangedHandler = ( action, value ) => {
        switch ( action ) {
            case 'inc':
                this.setState( ( prevState ) => { return { counter: prevState.counter + 1 } } )
                break;
            case 'dec':
                this.setState( ( prevState ) => { return { counter: prevState.counter - 1 } } )
                break;
            case 'add':
                this.setState( ( prevState ) => { return { counter: prevState.counter + value } } )
                break;
            case 'sub':
                this.setState( ( prevState ) => { return { counter: prevState.counter - value } } )
                break;
        }
    }

    render () {
        console.log(this.props);
        let listOfResults = null;

        if(this.props.storedResults) {
            listOfResults = this.props.storedResults.map(result => 
            <li key={result.id} onClick={() => this.props.onDeleteResult(result.id)}>{result.val}</li>);
        }
        
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add 5" clicked={() => this.props.onAddCounter(5)}  />
                <CounterControl label="Subtract 5" clicked={() => this.props.onSubtractCounter(5)}  />
                <hr />
                <button onClick={() => this.props.onStoreResult(this.props.ctr)}>Store Result</button>
                <ul>
                    {listOfResults}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ctr:  state.counter.counter,
        storedResults: state.results.storedResults
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch({type: actionTypes.INCREMENT}),
        onDecrementCounter: () => dispatch({type: actionTypes.DECREMENT}),
        onAddCounter: num => dispatch({type: actionTypes.ADD, amount: num}),
        onSubtractCounter: num => dispatch({type: actionTypes.SUBTRACT, amount: num}),
        onStoreResult: result => dispatch({type: actionTypes.STORE_RESULT, counter: result}),
        onDeleteResult: id => dispatch({type: actionTypes.DELETE_RESULT, toDelete: id})
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(Counter);