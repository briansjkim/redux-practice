// outsource action types in a separate file so that there aren't any mistakes/mispelling
import * as actionTypes from '../actions/actions';

const initialState = {
    results: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.STORE_RESULT:
            return {
                ...state,
                // use concat instead of push because push will touch the original state
                    // push will output unpredictable results
                results: state.results.concat({ id: new Date(), value: action.result })
            }
        case actionTypes.DELETE_RESULT:
            // const id = 2;
            // const newArray = [...state.results];
            // newArray.splice(id, 1);
            // filter returns a new array without touching the original array
                // returns true for every element that passes the condition 
            const updatedArray = state.results.filter( (result, idx) => result.id !== action.resultElId);
            return {
                ...state,
                results: updatedArray
            }
        default:
            return state;
    }
}

export default reducer;

