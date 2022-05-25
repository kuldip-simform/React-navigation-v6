import { Header, HeaderTitle } from '@react-navigation/elements';
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import appStyles from '../../styles/appStyles';

function DrawerSecondScreen({ navigation }) {
  return (
    <>
      <Header
        title="Second"
        headerShadowVisible
        headerLeft={() => (
          <Pressable
            style={styles.btnMenu}
            onPress={() => navigation.openDrawer()}>
            <Icon name={'menu'} size={24} color={'blue'} />
          </Pressable>
        )}
      />
      <View style={appStyles.centerContent}>
        <Text>This is second screen in Drawer nav</Text>
        <HeaderTitle numberOfLines={0} style={styles.headerTitle}>
          This screen has header from @react-navigation/elements library and
          this label is shown using HeaderTitle from same library
        </HeaderTitle>
      </View>
    </>
  );
}

export default DrawerSecondScreen;
const styles = StyleSheet.create({
  headerTitle: {
    padding: 20,
    textAlign: 'center',
  },
  btnMenu: {
    paddingStart: 12,
  },
});
