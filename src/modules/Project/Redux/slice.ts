import { createSlice } from '@reduxjs/toolkit';
import { dispatchCreateProject, dispatchFetchProjects } from './actions';
import { Project } from '@/modules/Project/Models/project';
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
      state.projects = payload;
    });

    builder.addCase(dispatchFetchProjects.Error, (state, { payload }) => {
      state.type = RemoteDataType.Error;
      state.error = payload;
    });
  },
});
