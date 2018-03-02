// Core
import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

// Instrumnets
import rootReducer from './reducer-1';

// This is a middleware
const logger = createLogger({
    duration:  true,
    collapsed: true,
    diff:      true,
    colors:    {
        title:     () => '#139BFE',
        prevState: () => '#1C5FAF',
        action:    () => '#149945',
        nextState: () => '#A47104',
        error:     () => '#ff0005',
    },
});

// Environment check
const dev = process.env.NODE_ENV === 'development'; // eslint-disable-line

const middleware = [thunk];

if (dev) {
    middleware.push(logger);
}

// Init store
export default createStore(rootReducer, applyMiddleware(...middleware));
