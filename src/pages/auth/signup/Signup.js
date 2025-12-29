import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { colors, commonStyles } from "src/utils/styles";
import CommonLinearGradient from "src/components/CommonLinearGradient";
import { SafeAreaView } from "react-native-safe-area-context";
import { appIcons } from "src/utils/assets";
import styles from "./styles";
import { KeyboardAwareScrollView } from "react-native-keyboard-controller";
import { Formik } from "formik";
import { signupValidationSchema } from "src/utils/validation/authValidation";

const Signup = ({ navigation }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Password strength logic
  const getPasswordStrength = (password) => {
    let strength = 0;
    if (/[a-z]/.test(password)) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[@$!%*?&#]/.test(password)) strength++;
    return strength;
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
        <Formik
          initialValues={{
            email: "",
            password: "",
            confirmPassword: "",
            terms: false,
          }}
          validationSchema={signupValidationSchema}
          onSubmit={() =>
            navigation.navigate("VerifyEmail", { routeName: "signup" })
          }
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            setFieldValue,
            isValid,
          }) => (
            <>
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
                  value={values.email}
                  onChangeText={handleChange("email")}
                  onBlur={handleBlur("email")}
                  autoCapitalize="none"
                  keyboardType="email-address"
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
                  style={[styles.input, { flex: 1 }]}
                  placeholder="********"
                  placeholderTextColor={colors.gray}
                  value={values.password}
                  onChangeText={handleChange("password")}
                  onBlur={handleBlur("password")}
                  secureTextEntry={!showPassword}
                />
                <TouchableOpacity
                  onPress={() => setShowPassword((prev) => !prev)}
                >
                  <Image
                    source={showPassword ? appIcons.eyeIcon : appIcons.hideIcon}
                    style={styles.eyeIconStyle}
                  />
                </TouchableOpacity>
              </View>
              {touched.password && errors.password && (
                <Text style={commonStyles.errorText}>{errors.password}</Text>
              )}

              {/* Password Strength */}
              {values.password.length !== 0 &&
                (() => {
                  const strength = getPasswordStrength(values.password);
                  return (
                    <>
                      <View style={styles.lineRow}>
                        {/* First line */}
                        <View
                          style={{
                            ...styles.line,
                            backgroundColor:
                              strength >= 1 ? "#6137D1" : "#27272A",
                          }}
                        />

                        {/* Second line */}
                        <View
                          style={{
                            ...styles.line,
                            backgroundColor:
                              strength >= 3 ? "#4B9E54" : "#27272A",
                          }}
                        />

                        {/* Third line */}
                        <View
                          style={{
                            ...styles.line,
                            backgroundColor:
                              strength === 4 ? "#27272A" : "#27272A",
                          }}
                        />
                      </View>

                      <Text style={styles.passwordStatusColor}>
                        {strength < 3
                          ? "Weak password"
                          : strength === 3
                          ? "Good password strength"
                          : "Strong password"}
                      </Text>
                    </>
                  );
                })()}

              {/* Confirm Password */}
              <Text style={styles.label}>Confirm Password</Text>
              <View style={styles.inputBox}>
                <Image source={appIcons.lockIcon} style={styles.inputIcon} />
                <TextInput
                  style={[styles.input, { flex: 1 }]}
                  placeholder="********"
                  placeholderTextColor={colors.gray}
                  value={values.confirmPassword}
                  onChangeText={handleChange("confirmPassword")}
                  onBlur={handleBlur("confirmPassword")}
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
              {touched.confirmPassword && errors.confirmPassword && (
                <Text style={commonStyles.errorText}>
                  {errors.confirmPassword}
                </Text>
              )}

              {/* Checkbox */}
              <View style={styles.checkBoxRow}>
                <TouchableOpacity
                  onPress={() => setFieldValue("terms", !values.terms)}
                  style={styles.checkBox}
                >
                  {values.terms && (
                    <Image source={appIcons.check} style={styles.check} />
                  )}
                </TouchableOpacity>

                <Text style={styles.iagreeText}>
                  I agree to the{" "}
                  <Text style={{ color: colors.primary }}>
                    Terms of Service
                  </Text>{" "}
                  and{" "}
                  <Text style={{ color: colors.primary }}>Privacy Policy</Text>
                </Text>
              </View>
              {touched.terms && errors.terms && (
                <Text style={commonStyles.errorText}>{errors.terms}</Text>
              )}

              {/* Sign Up Button */}
              <CommonLinearGradient
                style={[styles.signUpBtn, { opacity: !isValid ? 0.6 : 1 }]}
              >
                <TouchableOpacity
                  onPress={handleSubmit}
                  activeOpacity={0.5}
                  disabled={!isValid}
                  style={styles.btnStyle}
                >
                  <Text style={styles.signUpBtnText}>Create Account</Text>
                </TouchableOpacity>
              </CommonLinearGradient>

              {/* Sign In */}
              <TouchableOpacity
                style={styles.signinRow}
                onPress={() =>
                  navigation?.navigate && navigation.navigate("Login")
                }
              >
                <Text style={styles.signinText}>
                  Already have an account?{" "}
                  <Text style={{ color: colors.primary }}>Sign In</Text>
                </Text>
              </TouchableOpacity>
            </>
          )}
        </Formik>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default Signup;
