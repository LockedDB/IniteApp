import { Provider } from 'react-redux';
import { store } from '@/store/store';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import { AppNavigator } from '@/modules/Navigation/routes';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import styles from './styles';

export const ApplicationWithProviders = () => (
  <GestureHandlerRootView style={styles.gestureHandler}>
    <Provider store={store}>
      <NavigationContainer>
        <StatusBar barStyle="dark-content" hidden />
        <AppNavigator />
      </NavigationContainer>
    </Provider>
  </GestureHandlerRootView>
);
