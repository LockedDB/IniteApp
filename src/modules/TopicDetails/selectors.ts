import { StoreState } from '@/reducers/reducers';

export const selectMessages = (state: StoreState) =>
  state.messages.messages?.messages;

export const selectIsLoadingMessages = (state: StoreState) =>
  state.messages.loading;
