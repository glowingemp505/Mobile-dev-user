import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { appIcons } from "src/utils/assets";
import styles from "./styles";
import { KeyboardAwareScrollView } from "react-native-keyboard-controller";
import { colors, commonStyles } from "src/utils/styles";
import CommonLinearGradient from "src/components/CommonLinearGradient";
import { useNavigation } from "@react-navigation/native";
import { Formik } from "formik";
import { forgotPasswordValidationSchema } from "src/utils/validation/authValidation";

const ForgotPassword = () => {
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
        <Formik
          initialValues={{ email: "" }}
          validationSchema={forgotPasswordValidationSchema}
          onSubmit={(values) =>
            navigation.navigate("VerifyEmail", {
              routeName: "ForgotPassword",
              email: values.email,
            })
          }
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
          }) => (
            <View>
              <Text style={styles.description}>
                We will send an One-Time Passcode to your registered email
                address.
              </Text>

              <View>
                <Text style={styles.email}>Email Address</Text>
                <View style={styles.inputBox}>
                  <Image source={appIcons.emailIcon} style={styles.inputIcon} />
                  <TextInput
                    style={styles.input}
                    placeholder="Enter your email address"
                    placeholderTextColor={colors.gray}
                    value={values.email}
                    onChangeText={handleChange("email")}
                    onBlur={handleBlur("email")}
                    keyboardType="email-address"
                    autoCapitalize="none"
                  />
                </View>
                {touched.email && errors.email && (
                  <Text style={commonStyles.errorText}>
                    {errors.email}
                  </Text>
                )}
              </View>

              <TouchableOpacity activeOpacity={0.5} onPress={handleSubmit}>
                <CommonLinearGradient style={styles.signInBtn}>
                  <Text style={styles.signInBtnText}>Send</Text>
                </CommonLinearGradient>
              </TouchableOpacity>
            </View>
          )}
        </Formik>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default ForgotPassword;
