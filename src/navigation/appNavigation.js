import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import LeftToRightScreen from '../screens/AnimationScreens/LeftToRight';
import RightToLeftScreen from '../screens/AnimationScreens/RightToLeft';
import LinkScreen from '../screens/LinkingScreens/LinkScreen';
import StackFirstScreen from '../screens/StackScreens/StackFirst';
import StackSecondScreen from '../screens/StackScreens/StackSecond';
import { DrawerNavigator } from './drawerNavigation';
import { leftToRightAnimation, rightToLeftAnimation } from './helper';
import { MaterialTopNavigator } from './materialTopNavigation';
import NAVIGATION from './navigationRouteName';
import { TabNavigator } from './tabNavigation';

const Stack = createNativeStackNavigator(); // for native navigation component
// const Stack = createStackNavigator(); // for JS implementation of navigation, use this if you want custom animations while navigating to new screen

export function AppNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
        // headerTitleAlign: 'center', // works on android only
        // headerLargeTitle: true, // works on iOS only
        headerBackTitle: 'Back', // works on iOS only
        orientation: 'portrait',
      }}>
      <Stack.Group screenOptions={{ headerTintColor: 'gray' }}>
        <Stack.Screen
          name={NAVIGATION.StackFirst}
          component={StackFirstScreen}
        />
        <Stack.Screen
          name={NAVIGATION.StackSecond}
          component={StackSecondScreen}
          // options={{ orientation: 'landscape_left' }}
        />
      </Stack.Group>
      <Stack.Screen
        name={NAVIGATION.TabNav}
        component={TabNavigator}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name={NAVIGATION.DrawerNav}
        component={DrawerNavigator}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name={NAVIGATION.MaterialTopNav}
        component={MaterialTopNavigator}
        options={{ title: 'Material Top Nav bar' }}
      />

      <Stack.Screen name={NAVIGATION.DeepLink} component={LinkScreen} />

      <Stack.Screen
        name={NAVIGATION.LeftToRight}
        component={LeftToRightScreen}
        options={{
          ...leftToRightAnimation,
        }}
      />
      <Stack.Screen
        name={NAVIGATION.RightToLeft}
        component={RightToLeftScreen}
        options={{
          ...rightToLeftAnimation,
        }}
      />
    </Stack.Navigator>
  );
}
