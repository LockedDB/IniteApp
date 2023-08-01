import {combineReducers} from '@reduxjs/toolkit';
import {projectSlice} from '@/modules/Project/Redux/slice';
import authReducer from '@/store/authentication/authReducer';

/**
 * The root reducer is the single point where all the reducers are combined,
 * it's responsible for creating the overall state of the src.
 */
const rootReducer = combineReducers({
  authentication: authReducer,
  projects: projectSlice.reducer,
});

export type StoreState = ReturnType<typeof rootReducer>;
export default rootReducer;
