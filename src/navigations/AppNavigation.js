// @flow
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import HomeNavigation from './HomeNavigation';
import NewsDetails from '../features/app/screens/NewsDetailsScreen';

const Stack = createStackNavigator();

const AppNavigation = () => {
  return (
    <Stack.Navigator headerMode="none" initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeNavigation} />
      <Stack.Screen name="NewsDetails" component={NewsDetails} />
    </Stack.Navigator>
  );
};
export default AppNavigation;
