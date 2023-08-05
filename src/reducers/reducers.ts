import {combineReducers} from '@reduxjs/toolkit';
import {projectSlice} from '@/modules/Project/Redux/slice';

import {topicsSlice} from '@/modules/Topic/Redux/slice';
import authReducer from '@/modules/authentication_flow/redux/slice';

/**
 * The root reducer is the single point where all the reducers are combined,
 * it's responsible for creating the overall state of the src.
 */
const rootReducer = combineReducers({
  auth: authReducer,
  projects: projectSlice.reducer,
  topics: topicsSlice.reducer,
});

export type StoreState = ReturnType<typeof rootReducer>;
export default rootReducer;
