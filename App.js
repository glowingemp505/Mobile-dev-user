import React, { useState, useEffect } from "react";
import { StyleSheet, StatusBar } from "react-native";
import { useRequestPermissions } from "./src/utils/utility-methods/UtillityMethods";
import SplashScreen from "./src/pages/spalsh/SplashScreen";
import Route from "./src/route/Route";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Toast from "react-native-toast-message";
import { toastConfig } from "./src/CustomToast";
import { colors } from "./src/utils/styles";
import { KeyboardProvider } from "react-native-keyboard-controller";

// Firebase Modular Imports (v22+)
import {
  getMessaging,
  requestPermission,
  getToken,
  onTokenRefresh,
  registerDeviceForRemoteMessages,
  AuthorizationStatus,
} from "@react-native-firebase/messaging";

function App() {
  const requestPermissions = useRequestPermissions();
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    requestPermissions();
    setTimeout(() => {
      setLoader(true);
    }, 3000);
  }, []);

  useEffect(() => {
    const initFCM = async () => {
      try {
        const messaging = getMessaging();

        // 1. Request Permission
        const authStatus = await requestPermission(messaging);
        const enabled =
          authStatus === AuthorizationStatus.AUTHORIZED ||
          authStatus === AuthorizationStatus.PROVISIONAL;

        if (enabled) {
          console.log("FCM Authorization status:", authStatus);
          await registerDeviceForRemoteMessages(messaging);

          // 3. Get the Token
          const token = await getToken(messaging);
          console.log("FCM Token:", token);
        }
      } catch (e) {
        // If you are on a simulator, it will always land here
        // with the 'messaging/unregistered' error.
        console.log("FCM Registration failed (Expected on Simulators):", e);
      }
    };

    if (loader) {
      initFCM();
    }
  }, [loader]);

  return (
    <GestureHandlerRootView style={styles.container}>
      <KeyboardProvider>
        <StatusBar backgroundColor={colors.black} barStyle={"light-content"} />
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
