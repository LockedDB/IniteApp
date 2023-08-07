import { StoreState } from '@/reducers/reducers';

export const selectUserId = ({ profile: { user } }: StoreState) =>
  user?.uid ?? '';

export const selectUserPhotoUrl = ({ profile: { user } }: StoreState): string =>
  user?.photoURL ?? '';
