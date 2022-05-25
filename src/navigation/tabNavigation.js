import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import TabFifthScreen from '../screens/TabScreens/TabFifth';
import TabFirstScreen from '../screens/TabScreens/TabFirst';
import TabFourthScreen from '../screens/TabScreens/TabFourth';
import TabSecondScreen from '../screens/TabScreens/TabSecond';
import TabThirdScreen from '../screens/TabScreens/TabThird';
import NAVIGATION from './navigationRouteName';

const Tab = createBottomTabNavigator();

export function TabNavigator() {
  const tabBarLabel = {
    [NAVIGATION.TabFirst]: 'Home',
    [NAVIGATION.TabSecond]: 'Search',
    [NAVIGATION.TabThird]: 'Add',
    [NAVIGATION.TabFourth]: 'Notification',
    [NAVIGATION.TabFifth]: 'Account',
  };

  return (
    <Tab.Navigator
      initialRouteName={NAVIGATION.First}
      screenOptions={({ route }) => ({
        tabBarLabel: tabBarLabel[route.name],

        tabBarIcon: ({ color, size }) => {
          const icons = {
            TabFirst: 'home',
            TabSecond: 'magnify',
            TabThird: 'plus',
            TabFourth: 'bell',
            TabFifth: 'account',
          };

          return <Icon name={icons[route.name]} color={color} size={size} />;
        },
      })}>
      <Tab.Screen
        name={NAVIGATION.TabFirst}
        component={TabFirstScreen}
        options={{ title: 'Home' }}
      />
      <Tab.Screen
        name={NAVIGATION.TabSecond}
        component={TabSecondScreen}
        options={{ title: 'Search' }}
      />
      <Tab.Screen
        name={NAVIGATION.TabThird}
        component={TabThirdScreen}
        options={{ title: 'Add' }}
      />
      <Tab.Screen
        name={NAVIGATION.TabFourth}
        component={TabFourthScreen}
        options={{ title: 'Notification' }}
      />
      <Tab.Screen
        name={NAVIGATION.TabFifth}
        component={TabFifthScreen}
        options={{ title: 'Account' }}
      />
    </Tab.Navigator>
  );
}
