import { StoreState } from '@/reducers/reducers';

export const selectIsUserLoggedIn = (state: StoreState): boolean =>
  state.auth.authenticated;

export const selectIsAuthLoading = ({
  auth: { loading },
}: StoreState): boolean => loading;

export const selectErrorAuth = ({
  auth: { error },
}: StoreState): string | null => error;
