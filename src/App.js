import React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import AppNavigator from './navigation/AppNavigator';
import Config from 'react-native-config';

export default class App extends React.Component {
  state = {
    isLoadingComplete: false,
  };

  render() {
    console.log(Config.TEST);
    return (
        <View style={styles.container}>
            {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
            <AppNavigator />
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
