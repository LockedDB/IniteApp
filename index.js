/**
 * @format
 */

import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import { ApplicationWithProviders } from './src/Init/ApplicationWithProviders';

AppRegistry.registerComponent(appName, () => ApplicationWithProviders);
