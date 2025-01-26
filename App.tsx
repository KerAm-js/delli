/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React from 'react';
import {SafeAreaView, StatusBar, View} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

function App(): React.JSX.Element {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <StatusBar barStyle={'dark-content'} />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

export default App;
