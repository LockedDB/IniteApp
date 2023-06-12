import { combineReducers } from '@reduxjs/toolkit';
import authReducer from '../Store/authentication/authReducer';

/**
 * The root reducer is the single point where all the reducers are combined,
 * it's responsible for creating the overall state of the src.
 */
const rootReducer = combineReducers({ authentication: authReducer });

export default rootReducer;
