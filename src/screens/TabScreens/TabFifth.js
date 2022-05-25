import React from 'react';
import { Text, View } from 'react-native';
import BtnGoToNewScreen from '../../component/BtnGoToNewScreen';
import { reset } from '../../navigation/navigationRef';
import NAVIGATION from '../../navigation/navigationRouteName';
import appStyles from '../../styles/appStyles';

function TabFifthScreen() {
  return (
    <View style={appStyles.centerContent}>
      <Text>This is fifth screen in Tab nav</Text>

      <BtnGoToNewScreen
        title={'Go back to Main screen'}
        onPress={() => reset(NAVIGATION.StackFirst)}
      />
    </View>
  );
}

export default TabFifthScreen;
