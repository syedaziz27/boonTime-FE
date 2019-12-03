import userActionTypes from './user.types';

export default user => ({
    type: userActionTypes.SET_CURRENT_USER,
    payload: user
})