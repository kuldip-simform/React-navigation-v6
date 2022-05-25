import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React from 'react';
import TopNavFirstScreen from '../screens/MaterialTopScreens/TopNavFirst';
import TopNavSecondScreen from '../screens/MaterialTopScreens/TopNavSecond';
import TopNavThirdScreen from '../screens/MaterialTopScreens/TopNavThird';
import NAVIGATION from './navigationRouteName';

const Tab = createMaterialTopTabNavigator();

export function MaterialTopNavigator() {
  const tabBarLabel = {
    [NAVIGATION.TopNavFirst]: 'First',
    [NAVIGATION.TopNavSecond]: 'Second',
    [NAVIGATION.TopNavThird]: 'Third',
  };
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarLabel: tabBarLabel[route.name],
        tabBarActiveTintColor: 'red',
        tabBarInactiveTintColor: 'gray',
        tabBarIndicatorStyle: { backgroundColor: 'magenta' },
        tabBarScrollEnabled: false,
      })}>
      <Tab.Screen name={NAVIGATION.TopNavFirst} component={TopNavFirstScreen} />
      <Tab.Screen
        name={NAVIGATION.TopNavSecond}
        component={TopNavSecondScreen}
      />
      <Tab.Screen name={NAVIGATION.TopNavThird} component={TopNavThirdScreen} />
    </Tab.Navigator>
  );
}
