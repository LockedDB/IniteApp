import { StoreState } from '@/reducers/reducers';
import { createSelector } from '@reduxjs/toolkit';
import { RemoteDataType } from '@/utils/services';

const stateSelector = (state: StoreState) => state.topics;

const projectIdProp = (_: StoreState, id: string) => id;

export const getTopicByProjectId = createSelector(
  stateSelector,
  projectIdProp,
  ({ topics }, id) => topics.filter(({ projectId }) => projectId === id),
);

export const selectTopicById = (
  { topics: { topics } }: StoreState,
  topicId: string,
) => topics.find(({ id }) => id === topicId);

export const selectIsTopicLoading = (state: StoreState) =>
  state.topics.type === RemoteDataType.Loading;
