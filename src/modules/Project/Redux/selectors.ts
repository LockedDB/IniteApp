import { StoreState } from '@/reducers/reducers';
import { createSelector } from '@reduxjs/toolkit';
import { RemoteDataType } from '@/utils/services';

const stateSelector = (state: StoreState) => state.projects;

const projectIdProp = (_: StoreState, id: string) => id;

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

export const getProjectsParticipants = createSelector(
  stateSelector,
  ({ projects }) => projects.flatMap(({ participants }) => participants),
);

export const getProjectById = createSelector(
  stateSelector,
  projectIdProp,
  ({ projects }, projectId) => projects.find(p => p.id === projectId),
);
