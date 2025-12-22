import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Image,
  ScrollView,
  Platform,
} from 'react-native';
import { colors, fonts } from 'src/utils/styles';
import CommonLinearGradient from 'src/components/CommonLinearGradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import { appIcons } from 'src/utils/assets';

const Signup = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.backBtn} onPress={() => navigation?.goBack && navigation.goBack()}>
        <View style={styles.ellipse}>
          <Image source={appIcons.leftArrow} style={styles.backIcon} />
        </View>
      </TouchableOpacity>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent} keyboardShouldPersistTaps="handled">
        <Text style={styles.header}>Create Account</Text>
        <Text style={styles.subtitle}>Start your journey to financial freedom</Text>

        {/* Email */}''
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
            <Image source={showPassword ? appIcons.eyeIcon : appIcons.hideIcon} style={[styles.inputIcon, { marginLeft: 8 }]} />
          </TouchableOpacity>
        </View>

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
          <TouchableOpacity onPress={() => setShowConfirmPassword((prev) => !prev)}>
            <Image source={showConfirmPassword ? appIcons.eyeIcon : appIcons.hideIcon} style={[styles.inputIcon, { marginLeft: 8 }]} />
          </TouchableOpacity>
        </View>

        {/* Sign Up Button */}
        <CommonLinearGradient style={styles.signUpBtn}>
          <Text style={styles.signUpBtnText}>Create Account</Text>
        </CommonLinearGradient>


        {/* Already have an account? Sign In */}
        <TouchableOpacity style={styles.signinRow} onPress={() => navigation?.navigate && navigation.navigate('Login')}>
          <Text style={styles.signinText}>
            Already have an account? <Text style={{ color: colors.primary }}>Sign In</Text>
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Signup;

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
    marginLeft: 15,
    width: 40,
    height: 40,
    zIndex: 2,
  },
  ellipse: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#27272A',
    justifyContent: 'center',
    alignItems: 'center',
  },
  backIcon: {
    width: 18,
    height: 18,
    resizeMode: 'contain',
  },
  header: {
    marginTop: 40,
    fontFamily: fonts.bold,
    fontSize: 26,
    color: '#fff',
    textAlign: 'left',
  },
  subtitle: {
    marginTop: 8,
    fontFamily: fonts.regular,
    fontSize: 16,
    color: '#9CA3AF',
    lineHeight: 26,
    marginBottom: 24,
    textAlign: 'left',
  },
  label: {
    marginTop: 24,
    fontFamily: fonts.regular,
    fontSize: 16,
    color: '#fff',
    textAlign: 'left',
  },
  inputBox: {
    flexDirection: 'row',
    marginTop: 8,
    height: 56,
    backgroundColor: '#27272A',
    borderRadius: 12,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  input: {
    color: '#fff',
    fontSize: 16,
  },
  inputIcon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginRight: 12,
  },
  signUpBtn: {
    marginTop: 40,
    height: 60,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  signUpBtnText: {
    fontSize: 18,
    fontFamily: fonts.semiBold,
    color: '#fff',
  },
  signinRow: {
    marginTop: 32,
    alignItems: 'center',
  },
  signinText: {
    fontSize: 16,
    color: '#fff',
  },
});