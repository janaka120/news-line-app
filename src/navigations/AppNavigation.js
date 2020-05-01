// @flow
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import HomeNavigation from './HomeNavigation';
const Stack = createStackNavigator();

const AppNavigation = () => {
  return (
    <Stack.Navigator headerMode="none" initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeNavigation} />
    </Stack.Navigator>
  );
};
export default AppNavigation;
