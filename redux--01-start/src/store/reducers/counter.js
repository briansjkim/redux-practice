// outsource action types in a separate file so that there aren't any mistakes/mispelling
import * as actionTypes from '../actions/actions';

const initialState = {
    counter : 0,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        // reducers should NOT touch the old state
            // it should update the state IMMUTABLY
        case actionTypes.INCREMENT:
            return {
                ...state,
                counter: state.counter + 1
            }
        case actionTypes.DECREMENT:
            return {
                ...state,
                counter: state.counter - 1
            }
        case actionTypes.ADD:
            return {
                ...state,
                counter: state.counter + action.value
            }
        case actionTypes.SUBTRACT:
            return {
                ...state,
                counter: state.counter - action.value
            }
    }

    return state;
}

export default reducer;
