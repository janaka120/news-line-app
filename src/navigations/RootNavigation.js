import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import AppNavigator from './AppNavigation';
const Stack = createStackNavigator();

const RootNavigation = () => {
  return (
    <Stack.Navigator headerMode="none" initialRouteName="App">
      <Stack.Screen name="App" component={AppNavigator} />
    </Stack.Navigator>
  );
};
export default RootNavigation;
