import { StoreState } from '@/reducers/reducers';

export const selectIsUserLoggedIn = (state: StoreState): boolean =>
  state.auth.authenticated;
