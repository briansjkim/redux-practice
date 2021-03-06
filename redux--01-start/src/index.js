import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
// provider is a helper component that allows us to inject our store into the react components
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import counterReducer from './store/reducers/counter';
import resultReducer from './store/reducers/result';


const rootReducer = combineReducers({
    ctr: counterReducer,
    res: resultReducer
});

const logger = store => {
    // this nested function is simply a middleware
    return next => {
        return action => {
            console.log('[Middleware] Dispatching', action);
            // this lets the action continue to the reducer
            const result = next(action);
            console.log('[Middlware] next state', store.getState());
            return result;
        }
    }
};

// logic to use redux devtools and connect the store to the site
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(logger)));

// we have a single store while having multiple reducers. each reducer should tackle a single functionality

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));
registerServiceWorker();
