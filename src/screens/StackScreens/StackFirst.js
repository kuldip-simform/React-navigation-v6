import React from 'react';
import { Text, View } from 'react-native';
import BtnGoToNewScreen from '../../component/BtnGoToNewScreen';
import { navigate } from '../../navigation/navigationRef';
import NAVIGATION from '../../navigation/navigationRouteName';
import appStyles from '../../styles/appStyles';

function StackFirstScreen() {
  return (
    <View style={appStyles.centerContent}>
      <Text>This is First screen in Stack nav</Text>

      <BtnGoToNewScreen
        title={'Go to screen Two'}
        onPress={() => navigate(NAVIGATION.StackSecond)}
      />

      <BtnGoToNewScreen
        title={'Go to Bottom Tab Navigation'}
        onPress={() => navigate(NAVIGATION.TabNav)}
      />

      <BtnGoToNewScreen
        title={'Go to Top Tab Navigation'}
        onPress={() => navigate(NAVIGATION.MaterialTopNav)}
      />
      <BtnGoToNewScreen
        title={'Go to Drawer Navigation'}
        onPress={() => navigate(NAVIGATION.DrawerNav)}
      />

      <BtnGoToNewScreen
        title={'Go to Left to Right animation'}
        onPress={() => navigate(NAVIGATION.LeftToRight)}
      />

      <BtnGoToNewScreen
        title={'Go to Right to Left animation'}
        onPress={() => navigate(NAVIGATION.RightToLeft)}
      />
    </View>
  );
}

export default StackFirstScreen;
