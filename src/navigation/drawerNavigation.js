import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';
import { HeaderBackButton } from '@react-navigation/elements';
import React from 'react';
import { Linking, Pressable, StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import DrawerFifthScreen from '../screens/DrawerScreens/DrawerFifth';
import DrawerFirstScreen from '../screens/DrawerScreens/DrawerFirst';
import DrawerFourthScreen from '../screens/DrawerScreens/DrawerFourth';
import DrawerSecondScreen from '../screens/DrawerScreens/DrawerSecond';
import DrawerThirdScreen from '../screens/DrawerScreens/DrawerThird';
import { navigate } from './navigationRef';
import NAVIGATION from './navigationRouteName';

const Drawer = createDrawerNavigator();

function CustomDrawerContent(props) {
  console.log('props', props);
  return (
    <DrawerContentScrollView {...props}>
      {/* <DrawerItemList {...props} /> */}
      <DrawerItem
        label={'First'}
        onPress={() => navigate(NAVIGATION.DrawerFirst)}
      />
      <Pressable
        onPress={() => navigate(NAVIGATION.DrawerSecond)}
        style={styles.drawerSecond}>
        <Text>Second</Text>
      </Pressable>
      <DrawerItem
        label="Help"
        onPress={() => Linking.openURL('https://www.google.com')}
      />
    </DrawerContentScrollView>
  );
}

export function DrawerNavigator() {
  const DrawerLabel = {
    [NAVIGATION.DrawerFirst]: 'First Item',
    [NAVIGATION.DrawerSecond]: 'Second Item',
    [NAVIGATION.DrawerThird]: 'Third Item',
    [NAVIGATION.DrawerFourth]: 'Fourth Item',
    [NAVIGATION.DrawerFifth]: 'Fifth Item',
  };
  return (
    <Drawer.Navigator
      // backBehavior="order"
      screenOptions={({ route, navigation }) => ({
        drawerType: 'front',
        drawerPosition: 'left',
        drawerActiveTintColor: 'red',
        drawerLabel: DrawerLabel[route.name],
        headerLeft: () => {
          return (
            <View style={styles.viewBtnHeader}>
              <HeaderBackButton onPress={() => navigation.goBack()} />
              <Pressable onPress={() => navigation.openDrawer()}>
                <Icon name={'menu'} size={24} />
              </Pressable>
            </View>
          );
        },
      })}
      // drawerContent={props => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen
        name={NAVIGATION.DrawerFirst}
        component={DrawerFirstScreen}
        options={{ title: 'First' }}
      />
      <Drawer.Screen
        name={NAVIGATION.DrawerSecond}
        component={DrawerSecondScreen}
        options={{ headerShown: false, title: 'Second' }}
      />
      <Drawer.Screen
        name={NAVIGATION.DrawerThird}
        component={DrawerThirdScreen}
        options={{ title: 'Third' }}
      />
      <Drawer.Screen
        name={NAVIGATION.DrawerFourth}
        component={DrawerFourthScreen}
        options={{ title: 'Fourth' }}
      />
      <Drawer.Screen
        name={NAVIGATION.DrawerFifth}
        component={DrawerFifthScreen}
        options={{ title: 'Fifth' }}
      />
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  drawerSecond: {
    marginStart: 16,
    fontWeight: '700',
  },

  viewBtnHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
