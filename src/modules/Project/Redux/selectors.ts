import { StoreState } from '@/reducers/reducers';
import { createSelector } from '@reduxjs/toolkit';
import { RemoteDataType } from '@/utils/services';

const stateSelector = (state: StoreState) => state.projects;

export const projectsSelector = createSelector(
  stateSelector,
  ({ projects }) => projects,
);

export const isProjectsLoadingSelector = createSelector(
  stateSelector,
  ({ type }) => type === RemoteDataType.Loading,
);

export const isProjectsErrorSelector = createSelector(
  stateSelector,
  ({ type }) => type === RemoteDataType.Error,
);
