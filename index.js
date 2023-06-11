/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import {ApplicationWithProviders} from './src/init/ApplicationWithProviders';

AppRegistry.registerComponent(appName, () => ApplicationWithProviders);
