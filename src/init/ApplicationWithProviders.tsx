import { Provider } from 'react-redux';
import { store } from '@/store/store';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import styles from './styles';
import { PortalProvider } from '@gorhom/portal';
import { Routes } from '@/modules/navigation/routes';
import { navigationRef } from '@/modules/navigation/types';

export const ApplicationWithProviders = () => (
  <GestureHandlerRootView style={styles.gestureHandler}>
    <PortalProvider>
      <Provider store={store}>
        <NavigationContainer ref={navigationRef}>
          <StatusBar barStyle="dark-content" hidden />
          <Routes />
        </NavigationContainer>
      </Provider>
    </PortalProvider>
  </GestureHandlerRootView>
);
