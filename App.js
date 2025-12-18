import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  StatusBar,
  LogBox,
  Platform,
  useColorScheme,
} from 'react-native';
import { useRequestPermissions } from './src/utils/utility-methods/UtillityMethods';
import SplashScreen from './src/pages/spalsh/SplashScreen';
import Route from './src/route/Route';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Toast from 'react-native-toast-message';
import { toastConfig } from './src/CustomToast';
import { colors } from './src/utils/styles';
import { KeyboardProvider } from 'react-native-keyboard-controller';

function App() {
  const isDarkMode = useColorScheme() === 'dark';
  const requestPermissions = useRequestPermissions();
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    requestPermissions();
    setTimeout(() => {
      setLoader(true);
    }, 3000);
  }, []);

  return (
    <GestureHandlerRootView style={styles.container}>
      <KeyboardProvider>
        <StatusBar
          backgroundColor={colors.primary}
          barStyle={'light-content'}
        />
        {!loader ? <SplashScreen /> : <Route />}
        <Toast config={toastConfig} topOffset={40} />
      </KeyboardProvider>
    </GestureHandlerRootView>
  );
}

export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
});
