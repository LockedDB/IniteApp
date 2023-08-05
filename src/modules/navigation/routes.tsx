import { AuthNavigator } from './navigators/AuthNavigator';
import { AppNavigator } from './navigators/AppNavigator';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectIsAuthLoading,
  selectIsUserLoggedIn,
} from '@/modules/authentication_flow/redux/auth/selectors';
import LoadingComponent from '@/components/LoadingComponent/LoadingComponent';
import { useMountEffect } from '@/utils/utils';
import { initializeApp } from '@/modules/authentication_flow/redux/auth/slice';

export const Routes = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsUserLoggedIn);
  const isLoading = useSelector(selectIsAuthLoading);

  useMountEffect(() => {
    dispatch(initializeApp());
  });

  if (isLoading) return <LoadingComponent isLoading />;

  return isLoggedIn ? <AppNavigator /> : <AuthNavigator />;
};
