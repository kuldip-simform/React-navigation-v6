import React from 'react';
import { Text, View } from 'react-native';
import appStyles from '../../styles/appStyles';

function RightToLeftScreen() {
  return (
    <View style={appStyles.centerContent}>
      <Text>
        This screen has custom Right to Left animation, please see carefully
      </Text>
    </View>
  );
}

export default RightToLeftScreen;
