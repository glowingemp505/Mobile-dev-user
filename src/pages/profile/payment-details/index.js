import { Image, View, TouchableOpacity, Text, TextInput } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./styles";
import { appIcons } from "src/utils/assets";
import {
  KeyboardAvoidingView,
  KeyboardAwareScrollView,
} from "react-native-keyboard-controller";
import CommonLinearGradient from "src/components/CommonLinearGradient";
import { colors, fonts } from "src/utils/styles";
import { useNavigation } from "@react-navigation/native";

const PaymentDetails = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.header}
        onPress={() => navigation.goBack()}
      >
        <Image source={appIcons.leftArrow} style={styles.backIcon} />
      </TouchableOpacity>

      <KeyboardAwareScrollView contentContainerStyle={styles.wrapper}>
        <View>
          <Text style={styles.paymentDetail}>Payment Details</Text>
          <Text style={styles.secure}>Secure payment powered by Stripe</Text>
        </View>

        {/* Card Preview */}
        <CommonLinearGradient style={styles.gradientCard}>
          <View style={styles.proTopVIew}>
            <Image source={appIcons.pro} style={styles.proIcon} />
            <View style={styles.proplanView}>
              <Text style={styles.proPlanText}>Pro Plan</Text>
            </View>
          </View>

          <View style={styles.topView}>
            {[1, 2, 3].map((_, index) => (
              <View key={index} style={styles.rowVIew}>
                <View style={styles.dot} />
                <View style={styles.dot} />
                <View style={styles.dot} />
                <View style={styles.dot} />
              </View>
            ))}
          </View>

          <Text style={styles.numberstyle}>4242</Text>
        </CommonLinearGradient>

        {/* Card Number */}
        <View style={styles.inputVIew}>
          <Text style={styles.label}>Card Number</Text>
          <View style={styles.inputBox}>
            <appIcons.card />
            <TextInput
              style={styles.input}
              placeholder="4242 4242 4242 4242"
              placeholderTextColor={colors.gray}
              keyboardType="number-pad"
            />
          </View>
        </View>

        {/* Expiry & CVC Row */}
        <View style={styles.rowInput}>
          {/* Expiry */}
          <View style={styles.halfInput}>
            <Text style={styles.label}>Expiry</Text>
            <TextInput
              style={styles.singleInput}
              placeholder="MM/YY"
              placeholderTextColor={colors.gray}
              keyboardType="number-pad"
            />
          </View>

          {/* CVC */}
          <View style={styles.halfInput}>
            <Text style={styles.label}>CVC</Text>
            <TextInput
              style={styles.singleInput}
              placeholder="***"
              placeholderTextColor={colors.gray}
              keyboardType="number-pad"
              secureTextEntry
            />
          </View>
        </View>

        <View style={styles.lockText}>
          <appIcons.lockGreen />
          <Text style={styles.paymetScreen}>
            Your payment is secure and encrypted
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginVertical: 10,
            marginTop: 20,
          }}
        >
          <Text
            style={{
              color: colors.white,
              fontSize: 18,
              fontFamily: fonts.semiBold,
            }}
          >
            Pro Plan (Monthly)
          </Text>
          <Text
            style={{
              color: colors.white,
              fontSize: 18,
              fontFamily: fonts.semiBold,
            }}
          >
            $9.99
          </Text>
        </View>

        <TouchableOpacity onPress={() => navigation.navigate("LinkYourBank")}>
          <CommonLinearGradient
            style={{
              marginTop: 24,
              height: 60,
              borderRadius: 16,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                color: colors.white,
                fontSize: 18,
                fontFamily: fonts.semiBold,
              }}
            >
              Pay $9.99
            </Text>
          </CommonLinearGradient>
        </TouchableOpacity>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default PaymentDetails;
