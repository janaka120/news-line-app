// @flow
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import EntypoIcon from 'react-native-vector-icons/Entypo';

import {scaleFont} from '../styles/Mixins';
import {AppConstant} from '../features/app/AppConstant';
import HomeScreen from '../features/home/screens/HomeScreen';
import CustomNewsFeedScreen from '../features/customNews/screens/CustomNewsFeedScreen';
import UserProfileScreen from '../features/userProfile/screens/UserProfileScreen';
import TabBar from '../features/home/components/TabBar';


const iconSize = scaleFont(17);
const Tab = createBottomTabNavigator();

const HomeNavigation = () => {
  return (
    <Tab.Navigator
      headerMode="none"
      initialRouteName="home"
      tabBar={(props) => <TabBar {...props} />}>
      <Tab.Screen
        name={AppConstant.TAB_LABELS.Home}
        component={HomeScreen}
        options={{
          tabBarLabel: AppConstant.TAB_LABELS.Home,
          tabBarIcon: ({color, size}) => (
            <EntypoIcon name="home" size={iconSize} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={AppConstant.TAB_LABELS.Favorite}
        component={CustomNewsFeedScreen}
        options={{
          tabBarLabel: AppConstant.TAB_LABELS.Favorite,
          tabBarIcon: ({color, size}) => (
            <EntypoIcon name="news" size={iconSize} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={AppConstant.TAB_LABELS.Profile}
        component={UserProfileScreen}
        options={{
          tabBarLabel: AppConstant.TAB_LABELS.Profile,
          tabBarIcon: ({color, size}) => (
            <EntypoIcon name="user" size={iconSize} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
export default HomeNavigation;
