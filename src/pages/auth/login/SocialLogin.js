import {
  ActivityIndicator,
  Alert,
  Image,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import styles from "./styles";
import { appIcons } from "src/utils/assets";
import { colors } from "src/utils/styles";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithCredential,
} from "@react-native-firebase/auth";

GoogleSignin.configure({
  webClientId:
    "644421689498-8etcmoab011c6ot2e12ch7fe2e9pu400.apps.googleusercontent.com",
  offlineAccess: true,
});
const SocialLogin = ({ setIsLoading, isLoading }) => {
  const handleGoogleLogin = async () => {
    try {
      setIsLoading(true);
      await GoogleSignin.hasPlayServices({
        showPlayServicesUpdateDialog: true,
      });
      // Get the users ID token
      const signInResult = await GoogleSignin.signIn();

      // Try the new style of google-sign in result, from v13+ of that module
      let idToken = signInResult.data?.idToken;
      if (!idToken) {

        idToken = signInResult.idToken;
      }
      if (!idToken) {
        throw new Error("No ID token found");
      }
      if (!idToken) {
        // if you are using older versions of google-signin, try old style result
        idToken = signInResult.idToken;
      }
      if (!idToken) {
        throw new Error("No ID token found");
      }

      // Create a Google credential with the token
      const googleCredential = GoogleAuthProvider.credential(
        signInResult.data.idToken
      );

      console.log("====================================");
      console.log(googleCredential, "googleCredential");
      console.log("====================================");

      // Sign-in the user with the credential
      return signInWithCredential(getAuth(), googleCredential);
    } catch (error) {
      setIsLoading(false);
      Alert.alert("Google login failed!", error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <View style={styles.socialRow}>
      <TouchableOpacity
        onPress={handleGoogleLogin}
        style={styles.socialBtn}
        disabled={isLoading} // 🔒 prevent double click
      >
        {isLoading ? (
          <ActivityIndicator size="small" color={colors.primary} />
        ) : (
          <Image source={appIcons.googleIcon} style={styles.socialIcon} />
        )}
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => Alert.alert("Apple pressed")}
        style={styles.socialBtn}
      >
        <Image source={appIcons.appleIcon} style={styles.socialIcon} />
      </TouchableOpacity>
    </View>
  );
};

export default SocialLogin;
