import React from 'react';
import { Text, View } from 'react-native';
import appStyles from '../../styles/appStyles';

function DrawerFirstScreen() {
  return (
    <View style={appStyles.centerContent}>
      <Text>This is First screen in Drawer nav</Text>
    </View>
  );
}

export default DrawerFirstScreen;
