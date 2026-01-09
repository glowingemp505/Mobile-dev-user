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
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import { appIcons } from "src/utils/assets";
import { KeyboardAwareScrollView } from "react-native-keyboard-controller";
import { colors, commonStyles } from "src/utils/styles";
import CommonLinearGradient from "src/components/CommonLinearGradient";
import { resetPasswordValidationSchema } from "src/utils/validation/authValidation";
import { Formik } from "formik";

const ChangesPassword = () => {
  const navigation = useNavigation();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleTogglePassword = () => setShowPassword((prev) => !prev);
  const handleToggleConfirmPassword = () =>
    setShowConfirmPassword((prev) => !prev);

  const handleReset = () => {
    navigation.goBack();
  };

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
        <Formik
          initialValues={{ password: "", confirmPassword: "" }}
          validationSchema={resetPasswordValidationSchema}
          onSubmit={handleReset}
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
            isValid,
          }) => (
            <View>
              <Text style={styles.resetDescription}>
                You can now reset your password.
              </Text>

              <View style={styles.innerView}>
                <View style={{ gap: 10 }}>
                  <Text style={styles.label}>Password</Text>
                  <View style={styles.inputBox}>
                    <Image
                      source={appIcons.lockIcon}
                      style={styles.inputIcon}
                    />
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
                        source={
                          showPassword ? appIcons.eyeIcon : appIcons.hideIcon
                        }
                        style={[
                          styles.inputIcon,
                          { marginRight: 0, marginLeft: 8 },
                        ]}
                      />
                    </TouchableOpacity>
                  </View>
                  {touched.password && errors.password && (
                    <Text style={commonStyles.errorText}>
                      {errors.password}
                    </Text>
                  )}
                </View>

                {/* Confirm Password */}
                <View style={{ gap: 10 }}>
                  <Text style={styles.label}>Confirm Password</Text>
                  <View style={styles.inputBox}>
                    <Image
                      source={appIcons.lockIcon}
                      style={styles.inputIcon}
                    />
                    <TextInput
                      style={[styles.input, { flex: 1, marginRight: 0 }]}
                      placeholder="********"
                      placeholderTextColor={colors.gray}
                      value={values.confirmPassword}
                      onChangeText={handleChange("confirmPassword")}
                      onBlur={handleBlur("confirmPassword")}
                      autoCapitalize="none"
                      secureTextEntry={!showConfirmPassword}
                    />
                    <TouchableOpacity
                      onPress={handleToggleConfirmPassword}
                      style={{ justifyContent: "center" }}
                    >
                      <Image
                        source={
                          showConfirmPassword
                            ? appIcons.eyeIcon
                            : appIcons.hideIcon
                        }
                        style={[
                          styles.inputIcon,
                          { marginRight: 0, marginLeft: 8 },
                        ]}
                      />
                    </TouchableOpacity>
                  </View>
                  {touched.confirmPassword && errors.confirmPassword && (
                    <Text style={commonStyles.errorText}>
                      {errors.confirmPassword}
                    </Text>
                  )}
                </View>

                <TouchableOpacity
                  activeOpacity={0.5}
                  onPress={handleSubmit}
                  disabled={!isValid}
                >
                  <CommonLinearGradient
                    style={[styles.signInBtn, { opacity: !isValid ? 0.6 : 1 }]}
                  >
                    <Text style={styles.signInBtnText}>Reset</Text>
                  </CommonLinearGradient>
                </TouchableOpacity>
              </View>
            </View>
          )}
        </Formik>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default ChangesPassword;
