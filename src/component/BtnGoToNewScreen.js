import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';

const BtnGoToNewScreen = ({ onPress, title, containerStyle = {} }) => {
  return (
    <Pressable style={[styles.btnContainer, containerStyle]} onPress={onPress}>
      <Text style={[styles.textBtn]}>{title}</Text>
    </Pressable>
  );
};

export default BtnGoToNewScreen;

const styles = StyleSheet.create({
  btnContainer: {
    alignSelf: 'stretch',
    padding: 20,
    backgroundColor: 'red',
    marginVertical: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 20,
    borderRadius: 8,
  },
  textBtn: {
    color: 'white',
  },
});
