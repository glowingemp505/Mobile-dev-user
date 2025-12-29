import React, { useState } from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { KeyboardAwareScrollView } from "react-native-keyboard-controller";
import { Formik } from "formik";
import styles from "./styles";
import { appIcons } from "src/utils/assets";
import { colors, commonStyles } from "src/utils/styles";
import CommonLinearGradient from "src/components/CommonLinearGradient";
import { editProfileValidationSchema } from "src/utils/validation/authValidation";

const EditProfile = ({ navigation }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backBtn}
          onPress={() => navigation.goBack()}
        >
          <View style={styles.ellipse}>
            <Image source={appIcons.leftArrow} style={styles.backIcon} />
          </View>
        </TouchableOpacity>

        <Text style={styles.title}>Edit Profile</Text>
        <View style={styles.bellButton} />
      </View>

      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={editProfileValidationSchema}
        onSubmit={(values) => {
          console.log("Profile Updated:", values);
          navigation.goBack();
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isValid,
        }) => (
          <>
            <KeyboardAwareScrollView
              showsVerticalScrollIndicator={false}
              keyboardShouldPersistTaps="handled"
              contentContainerStyle={styles.scrollContent}
            >
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
                  secureTextEntry={!showPassword}
                  value={values.password}
                  onChangeText={handleChange("password")}
                  onBlur={handleBlur("password")}
                />

                <TouchableOpacity
                  onPress={() => setShowPassword(!showPassword)}
                  style={{ justifyContent: "center" }}
                >
                  <Image
                    source={showPassword ? appIcons.eyeIcon : appIcons.hideIcon}
                    style={{ ...styles.inputIcon, marginRight: 0 }}
                  />
                </TouchableOpacity>
              </View>
              {touched.password && errors.password && (
                <Text style={commonStyles.errorText}>{errors.password}</Text>
              )}
            </KeyboardAwareScrollView>

            {/* Bottom Buttons */}
            <View style={styles.bottomContainer}>
              <TouchableOpacity
                onPress={() => navigation.navigate("ChangesPassword")}
                style={styles.resetButton}
              >
                <Text style={styles.title}>Reset Password</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={handleSubmit}
                activeOpacity={0.7}
                disabled={!isValid}
              >
                <CommonLinearGradient
                  style={[styles.saveButton, { opacity: !isValid ? 0.6 : 1 }]}
                >
                  <Text style={styles.title}>Save Changes</Text>
                </CommonLinearGradient>
              </TouchableOpacity>
            </View>
          </>
        )}
      </Formik>
    </SafeAreaView>
  );
};

export default EditProfile;
