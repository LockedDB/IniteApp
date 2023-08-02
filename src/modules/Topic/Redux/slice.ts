import { createSlice } from '@reduxjs/toolkit';

import { RemoteDataType } from '@/utils/services';
import { Topic } from '@/Models/topic';
import { dispatchCreateTopic } from '@/modules/Topic/Redux/actions';

export const topicsSlice = createSlice({
  name: 'topics',
  initialState: {
    projects: [] as Topic[],
    error: undefined as string | undefined,
    type: RemoteDataType.NotRequested,
  },
  reducers: {},
  extraReducers: builder => {
    builder.addCase(dispatchCreateTopic.Request, state => ({
      ...state,
      type: RemoteDataType.Loading,
    }));

    builder.addCase(dispatchCreateTopic.Success, state => ({
      ...state,
      type: RemoteDataType.Success,
    }));

    builder.addCase(dispatchCreateTopic.Error, (state, { payload }) => ({
      ...state,
      type: RemoteDataType.Error,
      error: payload,
    }));
  },
});
