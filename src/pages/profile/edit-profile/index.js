import React, { useState } from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { KeyboardAwareScrollView } from "react-native-keyboard-controller";

import styles from "./styles";
import { appIcons } from "src/utils/assets";
import { colors } from "src/utils/styles";
import CommonLinearGradient from "src/components/CommonLinearGradient";

const EditProfile = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      {/* HEADER */}
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
      <KeyboardAwareScrollView
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={styles.scrollContent}
      >
        <Text style={styles.label}>Email</Text>
        <View style={styles.inputBox}>
          <Image source={appIcons.emailIcon} style={styles.inputIcon} />
          <TextInput
            style={[styles.input, { flex: 1 }]}
            placeholder="your@email.com"
            placeholderTextColor={colors.gray}
            value={email}
            onChangeText={setEmail}
          />
        </View>

        <Text style={styles.label}>Password</Text>
        <View style={styles.inputBox}>
          <Image source={appIcons.lockIcon} style={styles.inputIcon} />
          <TextInput
            style={[styles.input, { flex: 1 }]}
            placeholder="********"
            placeholderTextColor={colors.gray}
            secureTextEntry={!showPassword}
            value={password}
            onChangeText={setPassword}
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
      </KeyboardAwareScrollView>

      <View style={styles.bottomContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate("ChangesPassword")}
          style={styles.resetButton}
        >
          <Text style={styles.title}>Reset Password</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.goBack()}
          activeOpacity={0.7}
        >
          <CommonLinearGradient style={styles.saveButton}>
            <Text style={styles.title}>Save Changes</Text>
          </CommonLinearGradient>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default EditProfile;
