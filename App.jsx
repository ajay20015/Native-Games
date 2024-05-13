/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import 'react-native-gesture-handler';
import React from 'react';
import AppProvider from './src/hooks/AppProvider';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import AppNavigator from './src/navigator/AppNavigator';
import { SafeAreaView } from 'react-native-safe-area-context';

function App() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <GestureHandlerRootView>
        <AppProvider>
          <AppNavigator />
        </AppProvider>
      </GestureHandlerRootView>
    </SafeAreaView>
  );
}


export default App;
