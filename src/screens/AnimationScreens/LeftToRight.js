import React from 'react';
import { Text, View } from 'react-native';
import appStyles from '../../styles/appStyles';

function LeftToRightScreen() {
  return (
    <View style={appStyles.centerContent}>
      <Text>
        This screen has custom Left to Right animation, please see carefully
      </Text>
    </View>
  );
}

export default LeftToRightScreen;
