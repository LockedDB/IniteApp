import {createReducer} from '@reduxjs/toolkit';

const initialState = {
  data: undefined,
};

export default createReducer(initialState, builder => {
  return builder;
});
