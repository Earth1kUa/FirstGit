import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MainStack from '../reactNativeTAXI/src/components/navigation/Navigate'

export default function App() {
  return (
    <View style={styles.containerApp}>

      <MainStack />
    </View>
  );
}

const styles = StyleSheet.create({
  containerApp: {
    flex: 1,
  },
});
