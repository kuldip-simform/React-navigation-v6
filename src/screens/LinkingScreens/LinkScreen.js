import React from 'react';
import { Text, View } from 'react-native';
import appStyles from '../../styles/appStyles';

function LinkScreen() {
  return (
    <View style={appStyles.centerContent}>
      <Text>This screen is opened from linking</Text>
    </View>
  );
}

export default LinkScreen;
