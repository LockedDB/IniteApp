import { createSlice, isAnyOf } from '@reduxjs/toolkit';

import { RemoteDataType } from '@/utils/services';
import { Topic } from '@/Models/topic';
import {
  dispatchCreateTopic,
  dispatchFetchTopics,
} from '@/modules/Topic/Redux/actions';

export const topicsSlice = createSlice({
  name: 'topics',
  initialState: {
    topics: [] as Topic[],
    error: undefined as string | undefined,
    type: RemoteDataType.NotRequested,
  },
  reducers: {},
  extraReducers: builder => {
    builder.addCase(dispatchCreateTopic.Success, state => ({
      ...state,
      type: RemoteDataType.Success,
    }));

    builder.addCase(dispatchCreateTopic.Error, (state, { payload }) => ({
      ...state,
      type: RemoteDataType.Error,
      error: payload,
    }));

    builder.addCase(dispatchFetchTopics.Success, (state, { payload }) => ({
      ...state,
      type: RemoteDataType.Success,
      topics: payload,
    }));

    builder.addMatcher(
      isAnyOf(dispatchCreateTopic.Request, dispatchFetchTopics.Request),
      state => ({
        ...state,
        type: RemoteDataType.Loading,
      }),
    );
  },
});
