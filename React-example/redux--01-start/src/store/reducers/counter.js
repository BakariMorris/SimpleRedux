import * as actionTypes from '../actions';

const initialState = {
    counter: 0
}

const counter = (state = initialState, action) => {
    let returnState = state;
    switch(action.type) {
        case actionTypes.INCREMENT:
            returnState = {
                ...state, 
                counter: state.counter + 1};
        break;
        case actionTypes.DECREMENT:
            returnState = {
                ...state, 
                counter: state.counter - 1};
        break;
        case actionTypes.ADD:
            returnState = {
                ...state,counter: 
                state.counter + action.amount};
        break;
        case actionTypes.SUBTRACT:
            returnState = {
                ...state,
                counter: state.counter - action.amount};
        break;
    }

    return returnState;
   
}

export default counter;