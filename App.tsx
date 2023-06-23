/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import ProjectDetailsScreen from 'Modules/ProjectDetails/Screens/ProjectDetails.screen';
import React, { Fragment } from 'react';
import { StatusBar } from 'react-native';

export const App = () => {
  return (
    <Fragment>
      <StatusBar barStyle="dark-content" hidden />
      <ProjectDetailsScreen />
    </Fragment>
  );
};

export default App;
