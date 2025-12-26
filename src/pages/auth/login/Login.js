import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Image,
  ScrollView,
} from "react-native";
import { colors, commonStyles, fonts, fontSizes } from "src/utils/styles";
import CommonLinearGradient from "src/components/CommonLinearGradient";
import { SafeAreaView } from "react-native-safe-area-context";
import { appIcons } from "src/utils/assets";
import { useNavigation } from "@react-navigation/native";

const { width } = Dimensions.get("window");

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigation = useNavigation();

  const handleTogglePassword = () => setShowPassword((prev) => !prev);

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

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
        keyboardShouldPersistTaps="handled"
      >
        <View style={{ flex: 1 }}>
          <Text style={styles.welcome}>Welcome Back</Text>
          <Text style={styles.subtitle}>
            Sign in to continue managing your money
          </Text>

          {/* Email */}
          <Text style={styles.label}>Email</Text>
          <View style={styles.inputBox}>
            <Image source={appIcons.emailIcon} style={styles.inputIcon} />
            <TextInput
              style={styles.input}
              placeholder="your@email.com"
              placeholderTextColor={colors.gray}
              value={email}
              onChangeText={setEmail}
            />
          </View>

          {/* Password */}
          <Text style={styles.label}>Password</Text>
          <View style={styles.inputBox}>
            <Image source={appIcons.lockIcon} style={styles.inputIcon} />
            <TextInput
              style={[styles.input, { flex: 1, marginRight: 0 }]}
              placeholder="********"
              placeholderTextColor={colors.gray}
              value={password}
              onChangeText={setPassword}
              secureTextEntry={!showPassword}
            />
            <TouchableOpacity
              onPress={handleTogglePassword}
              style={{ justifyContent: "center" }}
            >
              <Image
                source={showPassword ? appIcons.eyeIcon : appIcons.hideIcon}
                style={[styles.inputIcon, { marginRight: 0, marginLeft: 8 }]}
              />
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => navigation.navigate("ForgotPassword")}
            style={styles.forgotBtn}
          >
            <Text style={styles.forgotText}>Forgot Password?</Text>
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => navigation.navigate("Home")}
          >
            <CommonLinearGradient style={styles.signInBtn}>
              <Text style={styles.signInBtnText}>Sign In</Text>
            </CommonLinearGradient>
          </TouchableOpacity>

          <View style={styles.orRow}>
            <View style={styles.line} />
            <Text style={styles.orText}>Or continue with</Text>
            <View style={styles.line} />
          </View>

          <View style={styles.socialRow}>
            <TouchableOpacity style={styles.socialBtn}>
              <Image source={appIcons.googleIcon} style={styles.socialIcon} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.socialBtn}>
              <Image source={appIcons.appleIcon} style={styles.socialIcon} />
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            style={styles.signupRow}
            onPress={() => navigation.navigate("Signup")}
          >
            <Text style={styles.signupText}>
              Don't have an account?{" "}
              <Text style={{ color: colors.primary }}>Sign Up</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },

  scrollContent: {
    paddingHorizontal: 14,
  },

  backBtn: {
    marginTop: 16,
    marginBottom: 16,
    marginLeft: 15,
    width: 40,
    height: 40,
    zIndex: 2,
  },

  ellipse: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#27272A",
    justifyContent: "center",
    alignItems: "center",
  },
  backIcon: {
    width: 18,
    height: 18,
    resizeMode: "contain",
  },

  welcome: {
    marginTop: 10,
    fontFamily: fonts.bold,
    fontSize: 26,
    color: "#fff",
  },

  subtitle: {
    marginTop: 8,
    fontFamily: fonts.regular,
    fontSize: 16,
    color: "#9CA3AF",
    lineHeight: 26,
  },

  label: {
    marginTop: 24,
    fontFamily: fonts.regular,
    fontSize: 16,
    color: "#fff",
  },

  inputBox: {
    flexDirection: "row",
    marginTop: 8,
    height: 56,
    backgroundColor: "#27272A",
    borderRadius: 12,
    justifyContent: "flex-start",
    paddingHorizontal: 16,
  },

  input: {
    color: "#fff",
    fontSize: 16,
  },

  forgotBtn: {
    marginTop: 16,
    alignSelf: "flex-start",
  },

  forgotText: {
    marginTop: 5,
    fontFamily: fonts.medium,
    fontSize: 16,
    color: "#6137D1",
  },

  signInBtn: {
    marginTop: 24,
    height: 60,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
  },

  signInBtnText: {
    fontSize: 18,
    fontFamily: fonts.semiBold,
    color: "#fff",
  },

  orRow: {
    marginTop: 32,
    flexDirection: "row",
    alignItems: "center",
  },

  line: {
    flex: 1,
    height: 1,
    backgroundColor: "#D9D9D9",
  },

  orText: {
    marginHorizontal: 8,
    fontSize: 14,
    color: "#A1A1A9",
  },

  socialRow: {
    marginTop: 24,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  socialBtn: {
    width: "48%",
    height: 60,
    backgroundColor: "#27272A",
    borderRadius: 12,
    justifyContent: "center",
  },

  signupRow: {
    marginTop: 32,
    alignItems: "center",
  },

  signupText: {
    fontSize: 16,
    fontFamily: fonts.regular,
    color: "#fff",
  },
  inputIcon: {
    width: 20,
    height: 20,
    resizeMode: "contain",
    alignSelf: "center",
    marginRight: 12,
    tintColor: colors.white,
  },
  socialIcon: {
    width: 35,
    height: 35,
    resizeMode: "contain",
    alignSelf: "center",
    marginRight: 12,
  },
  dontReceive: {
    color: colors.white,
    fontFamily: fonts.regular,
    fontSize: fontSizes.medium,
  },
});
