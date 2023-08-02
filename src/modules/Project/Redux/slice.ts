import { createSlice, isAnyOf } from '@reduxjs/toolkit';
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
    builder.addCase(dispatchFetchProjects.Success, (state, { payload }) => ({
      ...state,
      projects: payload ?? undefined,
      type: RemoteDataType.Success,
    }));

    builder.addMatcher(
      isAnyOf(dispatchCreateProject.Success, dispatchDeleteProject.Success),
      state => ({
        ...state,
        type: RemoteDataType.Success,
      }),
    );

    builder.addMatcher(
      isAnyOf(
        dispatchCreateProject.Request,
        dispatchFetchProjects.Request,
        dispatchDeleteProject.Request,
      ),
      state => ({
        ...state,
        type: RemoteDataType.Loading,
      }),
    );

    builder.addMatcher(
      isAnyOf(
        dispatchCreateProject.Error,
        dispatchFetchProjects.Error,
        dispatchDeleteProject.Error,
      ),
      (state, { payload }) => ({
        ...state,
        type: RemoteDataType.Error,
        error: payload,
      }),
    );
  },
});
