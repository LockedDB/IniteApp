import { Provider } from 'react-redux';
import App from '../../App';
import { store } from '../Store/store';
import { NavigationContainer } from '@react-navigation/native';

export const ApplicationWithProviders = () => (
  <Provider store={store}>
    <NavigationContainer>
      <App />
    </NavigationContainer>
  </Provider>
);
