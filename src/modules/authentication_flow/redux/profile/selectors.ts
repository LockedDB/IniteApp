import { StoreState } from '@/reducers/reducers';

export const selectUserId = ({ profile: { user } }: StoreState) =>
  user?.uid ?? '';
