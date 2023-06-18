/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { Fragment } from 'react';
import { StatusBar } from 'react-native';
import HomeScreen from './src/Modules/Home/Screens/HomeScreen/Home.screen';

export const App = () => {
  return (
    <Fragment>
      <StatusBar barStyle="dark-content" hidden />
      <HomeScreen />
    </Fragment>
  );
};

export default App;
