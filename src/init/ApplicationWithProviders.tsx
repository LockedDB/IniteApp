import { Provider } from 'react-redux';
import { store } from '@/store/store';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import { AppNavigator } from '@/modules/Navigation/routes';

export const ApplicationWithProviders = () => (
  <Provider store={store}>
    <NavigationContainer>
      <StatusBar barStyle="dark-content" hidden />
      <AppNavigator />
    </NavigationContainer>
  </Provider>
);
