import { AuthNavigator } from './navigators/AuthNavigator';
import { AppNavigator } from './navigators/AppNavigator';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsUserLoggedIn } from '@/modules/authentication_flow/redux/auth/selectors';
import { useMountEffect } from '@/utils/utils';
import { initializeApp } from '@/modules/authentication_flow/redux/auth/slice';

export const Routes = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsUserLoggedIn);

  useMountEffect(() => {
    dispatch(initializeApp());
  });

  return isLoggedIn ? <AppNavigator /> : <AuthNavigator />;
};
