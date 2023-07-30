import { createSlice } from '@reduxjs/toolkit';
import { RemoteDataType } from '@utils/services';
import { Project } from '../Models/project';
import { dispatchCreateProject } from './actions';

export const projectSlice = createSlice({
  name: 'projects',
  initialState: {
    projects: [] as Project[],
    error: undefined as string | undefined,
    type: RemoteDataType.NotRequested,
  },
  reducers: {},
  extraReducers: builder => {
    builder.addCase(dispatchCreateProject.Request, state => {
      state.type = RemoteDataType.Loading;
    });

    builder.addCase(dispatchCreateProject.Success, (state, { payload }) => {
      state.type = RemoteDataType.Success;
    });

    builder.addCase(dispatchCreateProject.Error, (state, { payload }) => {
      state.type = RemoteDataType.Error;
      state.error = payload;
    });
  },
});
