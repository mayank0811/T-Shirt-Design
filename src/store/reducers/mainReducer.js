import authReducer from './authReducer';
import designReducer from './designReducer';
import { combineReducers } from 'redux';

const mainReducer = combineReducers ({
    auth: authReducer,
    design: designReducer
})

console.log(mainReducer.design)
export default mainReducer;