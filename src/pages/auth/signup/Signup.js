import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import { colors } from "src/utils/styles";
import CommonLinearGradient from "src/components/CommonLinearGradient";
import { SafeAreaView } from "react-native-safe-area-context";
import { appIcons } from "src/utils/assets";
import styles from "./styles";
import { KeyboardAwareScrollView } from "react-native-keyboard-controller";

const Signup = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [handleCheckBox, sethandleCheckBox] = useState(false);

  const handleCheckBoxPress = () => {
    sethandleCheckBox((prev) => !prev);
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        style={styles.backBtn}
        onPress={() => navigation?.goBack && navigation.goBack()}
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
        <Text style={styles.header}>Create Account</Text>
        <Text style={styles.subtitle}>
          Start your journey to financial freedom
        </Text>

        {/* Email */}
        <Text style={styles.label}>Email</Text>
        <View style={styles.inputBox}>
          <Image source={appIcons.emailIcon} style={styles.inputIcon} />
          <TextInput
            style={[styles.input, { flex: 1 }]}
            placeholder="your@email.com"
            placeholderTextColor={colors.gray}
            value={email}
            onChangeText={setEmail}
            autoCapitalize="none"
            keyboardType="email-address"
          />
        </View>

        {/* Password */}
        <Text style={styles.label}>Password</Text>
        <View style={styles.inputBox}>
          <Image source={appIcons.lockIcon} style={styles.inputIcon} />
          <TextInput
            style={[styles.input, { flex: 1 }]}
            placeholder="********"
            placeholderTextColor={colors.gray}
            value={password}
            onChangeText={setPassword}
            secureTextEntry={!showPassword}
          />
          <TouchableOpacity onPress={() => setShowPassword((prev) => !prev)}>
            <Image
              source={showPassword ? appIcons.eyeIcon : appIcons.hideIcon}
              style={styles.eyeIconStyle}
            />
          </TouchableOpacity>
        </View>
        {password.length !== 0 && (
          <>
            <View style={styles.lineRow}>
              <View style={styles.line} />
              <View style={styles.line} />
              <View style={{ ...styles.line, backgroundColor: "#4B9E54" }} />
              <View style={{ ...styles.line, backgroundColor: "#27272A" }} />
            </View>
            <Text style={styles.passwordStatusColor}>
              Good password strength
            </Text>
          </>
        )}

        {/* Confirm Password */}
        <Text style={styles.label}>Confirm Password</Text>
        <View style={styles.inputBox}>
          <Image source={appIcons.lockIcon} style={styles.inputIcon} />
          <TextInput
            style={[styles.input, { flex: 1 }]}
            placeholder="********"
            placeholderTextColor={colors.gray}
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry={!showConfirmPassword}
          />
          <TouchableOpacity
            onPress={() => setShowConfirmPassword((prev) => !prev)}
          >
            <Image
              source={
                showConfirmPassword ? appIcons.eyeIcon : appIcons.hideIcon
              }
              style={styles.eyeIconStyle}
            />
          </TouchableOpacity>
        </View>

        {/* Checkbox */}
        <View style={styles.checkBoxRow}>
          <TouchableOpacity
            onPress={handleCheckBoxPress}
            style={styles.checkBox}
          >
            {handleCheckBox && (
              <Image source={appIcons.check} style={styles.check} />
            )}
          </TouchableOpacity>

          <Text style={styles.iagreeText}>
            I agree to the{" "}
            <Text style={{ color: colors.primary }}>Terms of Service</Text> and{" "}
            <Text style={{ color: colors.primary }}>Privacy Policy</Text>
          </Text>
        </View>

        {/* Sign Up Button */}

        <CommonLinearGradient style={styles.signUpBtn}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("VerifyEmail", {
                routeName: "signup",
              })
            }
            activeOpacity={0.5}
            style={styles.btnStyle}
          >
            <Text style={styles.signUpBtnText}>Create Account</Text>
          </TouchableOpacity>
        </CommonLinearGradient>

        {/* Sign In */}
        <TouchableOpacity
          style={styles.signinRow}
          onPress={() => navigation?.navigate && navigation.navigate("Login")}
        >
          <Text style={styles.signinText}>
            Already have an account?{" "}
            <Text style={{ color: colors.primary }}>Sign In</Text>
          </Text>
        </TouchableOpacity>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default Signup;
