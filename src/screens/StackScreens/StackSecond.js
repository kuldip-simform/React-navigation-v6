import React from 'react';
import { Text, View } from 'react-native';
import appStyles from '../../styles/appStyles';

function StackSecondScreen() {
  return (
    <View style={appStyles.centerContent}>
      <Text>This is Second screen in Stack nav</Text>
    </View>
  );
}

export default StackSecondScreen;
