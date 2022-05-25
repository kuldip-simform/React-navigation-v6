import React from 'react';
import { Text, View } from 'react-native';
import appStyles from '../../styles/appStyles';

function TabFirstScreen() {
  return (
    <View style={appStyles.centerContent}>
      <Text>This is First screen in Tab nav</Text>
    </View>
  );
}

export default TabFirstScreen;
