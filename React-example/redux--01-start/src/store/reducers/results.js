import * as actionTypes from '../actions';

const initialState = {
    storedResults: []
};

const results = (state = initialState, action) => {
let returnState = state;

switch(action.type) {
    case actionTypes.STORE_RESULT:
        returnState = {
            ...state, 
            storedResults: state.storedResults.concat({
                    id: new Date(),
                    val: action.counter
            })
        };
    break;
    case actionTypes.DELETE_RESULT:
        const newArray = state.storedResults.filter(
            result => result.id !== action.toDelete)
                returnState = {
                    ...state,
                storedResults: newArray
                };
    break;
}

    return returnState;
}

export default results;