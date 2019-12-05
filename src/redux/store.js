import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger'; // catches errors in redux
import rootReducer from './root-reducer';

const middleware = [logger] // place multiple middlewares inside array

const store = createStore(rootReducer, applyMiddleware(...middleware));

export default store;