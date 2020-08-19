import * as actionTypes from './actions.js';

// action creators are functions that create/returns an action
// can receive an input like payloads
export const increment = () => {
    return {
        type: actionTypes.INCREMENT
    }
};

export const decrement = () => {
    return {
        type: actionTypes.DECREMENT
    }
};

export const add = (val) => {
    return {
        type: actionTypes.ADD,
        value: val
    }
};

export const subtract = (val) => {
    return {
        type: actionTypes.SUBTRACT,
        value: val
    }
};
