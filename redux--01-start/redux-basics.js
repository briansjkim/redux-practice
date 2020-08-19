// node.js syntax
const redux = require('redux');
const createStore = redux.createStore;

const initialState = {
    counter: 0
}

// Reducer
const rootReducer = (state = initialState, action) => {
    // NEVER MUTATE ANY DATA
    // ALWAYS MUTATE IMMUTABLY
    if (action.type === 'INC_COUNTER') {
        return {
            ...state,
            counter: state.counter + 1
        }
    }

    if (action.type === 'ADD_COUNTER') {
        return {
            ...state,
            counter: state.counter + action.value
        }
    }
    return state;
};

// Store
// store needs to be initialized by a reducer
const store = createStore(rootReducer);
// this function will pull out the state from the store
console.log(store.getState());

// Subscription
store.subscribe(() => {
    console.log('[Subscription]', store.getState());
});

// Dispatching Action
store.dispatch({ type: 'INC_COUNTER' });
store.dispatch({ type: 'ADD_COUNTER', value: 10 });
console.log(store.getState());


