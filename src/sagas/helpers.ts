import { navigationRef } from '@/modules/navigation/types';
import { NavigationAction } from '@react-navigation/native';

export function* dispatchNavigateActionSaga(action: NavigationAction) {
  yield navigationRef.current?.dispatch(action);
}
