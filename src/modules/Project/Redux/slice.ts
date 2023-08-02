import { createSlice } from '@reduxjs/toolkit';
import {
  dispatchCreateProject,
  dispatchDeleteProject,
  dispatchFetchProjects,
} from './actions';
import { Project } from '@/Models/project';
import { RemoteDataType } from '@/utils/services';

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

    builder.addCase(dispatchFetchProjects.Request, state => {
      state.type = RemoteDataType.Loading;
    });

    builder.addCase(dispatchFetchProjects.Success, (state, { payload }) => {
      state.type = RemoteDataType.Success;

      if (payload) {
        state.projects = payload;
      }
    });

    builder.addCase(dispatchFetchProjects.Error, (state, { payload }) => {
      state.type = RemoteDataType.Error;
      state.error = payload;
    });

    builder.addCase(dispatchDeleteProject.Request, state => {
      state.type = RemoteDataType.Loading;
    });

    builder.addCase(dispatchDeleteProject.Success, (state, { payload }) => {
      state.type = RemoteDataType.Success;

      if (payload) {
        state.projects = payload;
      }
    });

    builder.addCase(dispatchDeleteProject.Error, (state, { payload }) => {
      state.type = RemoteDataType.Error;
      state.error = payload;
    });
  },
});