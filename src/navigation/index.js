import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Linking } from 'react-native';
import { AppNavigator } from './appNavigation';
import { navigationRef } from './navigationRef';
import NAVIGATION from './navigationRouteName';

// npx uri-scheme add myapp --ios => for adding urlscheme in ios and pass --android for android

// npx uri-scheme open myapp://deeplink --ios  => run this in terminal to check for deeplinking working or not

const linking = {
  prefixes: ['myapp://'], // url for deeplink
  enabled: true,

  //when app is closed and opened via deeplink
  async getInitialURL() {
    const url = await Linking.getInitialURL();
    return url;
  },

  // for when app is opened or in background and deeplink is opened
  subscribe: listener => {
    const onReceiveURL = ({ url }) => {
      listener(url);
    };

    const linkingSubscription = Linking.addEventListener('url', onReceiveURL);
    return () => {
      linkingSubscription.remove();
    };
  },
  /* configuration for matching screens with paths */
  config: {
    screens: {
      [NAVIGATION.DeepLink]: 'deeplink',
      [NAVIGATION.TabNav]: {
        path: 'tab',
        initialRouteName: NAVIGATION.TabSecond,
        screens: {
          [NAVIGATION.TabThird]: 'thirdtab',
          [NAVIGATION.TabFourth]: 'fourthtab',
        },
      },
    },
  },
};

export const RootNavigator = () => {
  return (
    <NavigationContainer linking={linking} ref={navigationRef}>
      <AppNavigator />
    </NavigationContainer>
  );
};
