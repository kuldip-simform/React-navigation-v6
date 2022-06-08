import { useRoute } from '@react-navigation/native';
import React from 'react';
import { Text, View } from 'react-native';
import BtnGoToNewScreen from '../../component/BtnGoToNewScreen';
import { navigate } from '../../navigation/navigationRef';
import NAVIGATION from '../../navigation/navigationRouteName';
import appStyles from '../../styles/appStyles';

function StackSecondScreen() {
  const route = useRoute();
  const { id, fromSecond, fromFirst } = route.params;

  return (
    <View style={appStyles.centerContent}>
      <Text>This is Second screen in Stack nav</Text>
      <Text>{`id: ${id}`}</Text>
      <Text>{`fromFirst: ${fromFirst}`}</Text>
      <Text>{`fromSecond: ${fromSecond}`}</Text>
      <BtnGoToNewScreen
        title={'navigate to this screen again'}
        onPress={() =>
          navigate({
            name: NAVIGATION.StackSecond,
            params: {
              id: Math.floor(Math.random() * 100),
              fromSecond: "No, I'm from this screen only",
            },
            // merge: false, //merge true will merge this params with older one and false will replace older ones with newer
          })
        }
      />
    </View>
  );
}

export default StackSecondScreen;
