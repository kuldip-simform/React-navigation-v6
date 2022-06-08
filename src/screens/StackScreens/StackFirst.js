import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import BtnGoToNewScreen from '../../component/BtnGoToNewScreen';
import { navigate } from '../../navigation/navigationRef';
import NAVIGATION from '../../navigation/navigationRouteName';
import appStyles from '../../styles/appStyles';

function StackFirstScreen() {
  return (
    <SafeAreaView>
      <ScrollView
        contentContainerStyle={styles.scrollView}
        showsVerticalScrollIndicator={false}>
        <View style={appStyles.centerContent}>
          <Text>This is First screen in Stack nav</Text>

          <BtnGoToNewScreen
            title={'Go to screen Two'}
            onPress={() =>
              navigate({
                name: NAVIGATION.StackSecond,
                params: { id: 1, fromFirst: "Yes, I'm from first" },
              })
            }
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
      </ScrollView>
    </SafeAreaView>
  );
}

export default StackFirstScreen;

const styles = StyleSheet.create({
  scrollView: {
    flexGrow: 1,
    justifyContent: 'center',
  },
});
