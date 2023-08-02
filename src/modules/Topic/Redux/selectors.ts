import { StoreState } from '@/reducers/reducers';
import { createSelector } from '@reduxjs/toolkit';

const stateSelector = (state: StoreState) => state.topics;

const projectIdProp = (_: StoreState, id: string) => id;

export const getTopicByProjectId = createSelector(
  stateSelector,
  projectIdProp,
  ({ topics }, id) => topics.filter(({ projectId }) => projectId === id),
);
