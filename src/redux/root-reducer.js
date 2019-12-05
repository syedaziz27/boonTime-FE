import { combineReducers } from 'redux';

import userReducer from './user/user.reducer.js';

// combine all of the reducers together

export default combineReducers({
    user: userReducer,
});