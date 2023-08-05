import { AuthNavigator } from './navigators/AuthNavigator';
import { AppNavigator } from './navigators/AppNavigator';
import { useSelector } from 'react-redux';
import { selectIsUserLoggedIn } from '@/modules/authentication_flow/redux/selectors';

export const Routes = () => {
  const isLoggedIn = useSelector(selectIsUserLoggedIn);

  return isLoggedIn ? <AppNavigator /> : <AuthNavigator />;
};
