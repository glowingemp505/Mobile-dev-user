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
import { Formik } from "formik";
import { loginValidationSchema } from "src/utils/validation/authValidation";
import styles from "./styles";

const { width } = Dimensions.get("window");

const Login = () => {
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
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={loginValidationSchema}
          onSubmit={() => navigation.navigate("Home")}
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
          }) => (
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
                  style={{ ...styles.input, flex: 1 }}
                  placeholder="your@email.com"
                  placeholderTextColor={colors.gray}
                  value={values.email}
                  onChangeText={handleChange("email")}
                  onBlur={handleBlur("email")}
                  autoCapitalize="none"

                />
              </View>
              {touched.email && errors.email && (
                <Text style={commonStyles.errorText}>{errors.email}</Text>
              )}

              {/* Password */}
              <Text style={styles.label}>Password</Text>
              <View style={styles.inputBox}>
                <Image source={appIcons.lockIcon} style={styles.inputIcon} />
                <TextInput
                  style={[styles.input, { flex: 1, marginRight: 0 }]}
                  placeholder="********"
                  placeholderTextColor={colors.gray}
                  value={values.password}
                  onChangeText={handleChange("password")}
                  onBlur={handleBlur("password")}
                  secureTextEntry={!showPassword}
                  autoCapitalize="none"
                />
                <TouchableOpacity
                  onPress={handleTogglePassword}
                  style={{ justifyContent: "center" }}
                >
                  <Image
                    source={showPassword ? appIcons.eyeIcon : appIcons.hideIcon}
                    style={[
                      styles.inputIcon,
                      { marginRight: 0, marginLeft: 8 },
                    ]}
                  />
                </TouchableOpacity>
              </View>
              {touched.password && errors.password && (
                <Text style={commonStyles.errorText}>{errors.password}</Text>
              )}

              <TouchableOpacity
                activeOpacity={0.5}
                onPress={() => navigation.navigate("ForgotPassword")}
                style={styles.forgotBtn}
              >
                <Text style={styles.forgotText}>Forgot Password?</Text>
              </TouchableOpacity>

              <TouchableOpacity activeOpacity={0.5} onPress={handleSubmit}>
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
                  <Image
                    source={appIcons.googleIcon}
                    style={styles.socialIcon}
                  />
                </TouchableOpacity>

                <TouchableOpacity style={styles.socialBtn}>
                  <Image
                    source={appIcons.appleIcon}
                    style={styles.socialIcon}
                  />
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
          )}
        </Formik>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;
