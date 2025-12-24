import { Image, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import styles from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { appIcons } from "src/utils/assets";
import { KeyboardAwareScrollView } from "react-native-keyboard-controller";
import { OtpInput } from "react-native-otp-entry";
import CommonLinearGradient from "src/components/CommonLinearGradient";

const OTP_TIME = 60;

const VerifyEmail = () => {
  const navigation = useNavigation();

  const [seconds, setSeconds] = useState(OTP_TIME);
  const [isRunning, setIsRunning] = useState(true);
  const timerRef = useRef(null);

  useEffect(() => {
    if (isRunning && seconds > 0) {
      timerRef.current = setInterval(() => {
        setSeconds((prev) => prev - 1);
      }, 1000);
    }

    return () => clearInterval(timerRef.current);
  }, [isRunning, seconds]);

  useEffect(() => {
    if (seconds === 0) {
      clearInterval(timerRef.current);
      setIsRunning(false);
    }
  }, [seconds]);

  const handleVerify = () => {
    clearInterval(timerRef.current);
    setIsRunning(false);
    navigation.navigate("PersonalInfo");
  };

  const handleResend = () => {
    setSeconds(OTP_TIME);
    setIsRunning(true);
  };

  const formatTime = () => `0:${seconds < 10 ? `0${seconds}` : seconds}`;

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
          <View style={styles.greenView}>
            <Text style={styles.number}>1</Text>
          </View>

          <View style={styles.boxView}>
            <Image source={appIcons.emailIcon} style={styles.emailStyle} />
          </View>
        </View>

        <Text style={styles.verifyEmail}>Verify Email</Text>
        <Text style={styles.sixDigit}>We sent a 6-digit code to</Text>
        <Text style={styles.email}>john@example.com</Text>

        <OtpInput
          numberOfDigits={6}
          hideStick
          type="numeric"
          secureTextEntry={true}
          onFilled={(text) => console.log("OTP:", text)}
          theme={{
            containerStyle: styles.otpContainer,
            pinCodeContainerStyle: styles.pinCodeContainer,
            pinCodeTextStyle: styles.pinCodeText,
            focusedPinCodeContainerStyle: styles.activePinCodeContainer,
            filledPinCodeContainerStyle: styles.filledPinCodeContainer,
            placeholderTextStyle: styles.placeholderText,
          }}
        />

        {/* TIMER */}
        <Text style={styles.resendcode}>
          Resend Code in <Text style={styles.secondText}>{formatTime()}</Text>
        </Text>

        <TouchableOpacity
          style={{ width: "100%" }}
          activeOpacity={0.5}
          onPress={handleVerify}
        >
          <CommonLinearGradient style={styles.signInBtn}>
            <Text style={styles.signInBtnText}>Verify Email</Text>
          </CommonLinearGradient>
        </TouchableOpacity>

        <Text style={styles.dontReceive}>
          Din’t receive the code? Resend{" "}
          <Text
            onPress={handleResend}
            disabled={seconds > 0}
            style={[styles.resendBtn, { opacity: seconds > 0 ? 0.5 : 1 }]}
          >
            Resend
          </Text>
        </Text>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default VerifyEmail;
