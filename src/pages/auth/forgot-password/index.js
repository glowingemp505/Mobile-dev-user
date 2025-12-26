import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { appIcons } from "src/utils/assets";
import styles from "./styles";
import { KeyboardAwareScrollView } from "react-native-keyboard-controller";
import { colors } from "src/utils/styles";
import CommonLinearGradient from "src/components/CommonLinearGradient";
import { useNavigation } from "@react-navigation/native";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        style={styles.backBtn}
        onPress={() => navigation.goBack()}
      >
        <View style={styles.ellipse}>
          <Image source={appIcons.leftArrow} style={styles.backIcon} />
        </View>
      </TouchableOpacity>
      <KeyboardAwareScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
        keyboardShouldPersistTaps="handled"
      >
        <View>
          <Text style={styles.description}>
            We will send an One-Time Passcode to your registered email address.
          </Text>
          <View>
            <Text style={styles.email}>Email Address</Text>
            <View style={styles.inputBox}>
              <Image source={appIcons.emailIcon} style={styles.inputIcon} />
              <TextInput
                style={styles.input}
                placeholder="Enter your email address"
                placeholderTextColor={colors.gray}
                value={email}
                onChangeText={setEmail}
              />
            </View>
          </View>
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() =>
              navigation.navigate("VerifyEmail", {
                routeName: "ForgotPassword",
              })
            }
            // onPress={() => navigation.navigate("Home")}
          >
            <CommonLinearGradient style={styles.signInBtn}>
              <Text style={styles.signInBtnText}>Send</Text>
            </CommonLinearGradient>
          </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default ForgotPassword;
