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
import { colors } from "src/utils/styles";
import CommonLinearGradient from "src/components/CommonLinearGradient";

const ChangesPassword = () => {
  const navigation = useNavigation();

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleTogglePassword = () => setShowPassword((prev) => !prev);
  const handleToggleConfirmPassword = () =>
    setShowConfirmPassword((prev) => !prev);

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
          <Text style={styles.resetDescription}>
            You can now reset your password.
          </Text>

          <View style={styles.innerView}>
            {/* Password */}
            <View style={{ gap: 10 }}>
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
                    style={[
                      styles.inputIcon,
                      { marginRight: 0, marginLeft: 8 },
                    ]}
                  />
                </TouchableOpacity>
              </View>
            </View>

            {/* Confirm Password */}
            <View style={{ gap: 10 }}>
              <Text style={styles.label}>Confirm Password</Text>
              <View style={styles.inputBox}>
                <Image source={appIcons.lockIcon} style={styles.inputIcon} />
                <TextInput
                  style={[styles.input, { flex: 1, marginRight: 0 }]}
                  placeholder="********"
                  placeholderTextColor={colors.gray}
                  value={confirmPassword}
                  onChangeText={setConfirmPassword}
                  secureTextEntry={!showConfirmPassword}
                />
                <TouchableOpacity
                  onPress={handleToggleConfirmPassword}
                  style={{ justifyContent: "center" }}
                >
                  <Image
                    source={
                      showConfirmPassword ? appIcons.eyeIcon : appIcons.hideIcon
                    }
                    style={[
                      styles.inputIcon,
                      { marginRight: 0, marginLeft: 8 },
                    ]}
                  />
                </TouchableOpacity>
              </View>
            </View>

            <TouchableOpacity
              activeOpacity={0.5}
              onPress={() => {
                navigation.goBack();
              }}
            >
              <CommonLinearGradient style={styles.signInBtn}>
                <Text style={styles.signInBtnText}>Reset</Text>
              </CommonLinearGradient>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default ChangesPassword;
