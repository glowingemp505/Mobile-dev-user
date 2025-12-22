import React, { useState, useRef } from "react";
import CommonLinearGradient from "src/components/CommonLinearGradient";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { colors, commonStyles, fontSizes, fonts } from "src/utils/styles";
import { appIcons, appImages } from "src/utils/assets";
import { SafeAreaView } from "react-native-safe-area-context";

const { width } = Dimensions.get("window");

const onboardingData = [
  {
    image: appImages.Onboarding_1,
    header: "Track Your Spending",
    summary:
      "Connect your bank accounts and get a\ncomplete picture of where your money goes\nevery month",
  },
  {
    image: appImages.Onboarding_2,
    header: "Set Financial Goals",
    summary:
      "Create savings goals for vacations,\nemergencies, or big purchases and track\nyour progress ",
  },
  {
    image: appImages.Onboarding_3,
    header: "AI-Powered Insights",
    summary:
      "Get personalized recommendations and\nsmart alerts to help you save more and\nspend wisely",
  },
  {
    image: appImages.Onboarding_4,
    header: "Bank -Level Security",
    summary:
      "Your date is protected with 256-bit\nencryption and we never store your banking\ncredentials",
  },
];

const Onboarding = ({ navigation }) => {
  const [step, setStep] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const scrollViewRef = useRef(null); // Reference to ScrollView

  const handleNext = () => {
    if (step < onboardingData.length - 1 && !isScrolling) {
      setIsScrolling(true);
      scrollViewRef.current.scrollTo({ x: width * (step + 1), animated: true });
    } else {
      navigation.navigate('Login');
    }
  };

  const handleSkip = () => {
    navigation.navigate('Login');
  };

  const handleScroll = (event) => {
    // Calculate the current step based on the scroll offset
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const currentStep = Math.round(contentOffsetX / width);
    setStep(currentStep); // Update the active step
    setIsScrolling(false); // Allow next button again
  };

  return (
    <SafeAreaView style={commonStyles.container}>
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={[styles.contentContainer, { height: "100%" }]}
        onScroll={handleScroll} // Track scrolling
        scrollEventThrottle={16} // Ensure smooth tracking
        ref={scrollViewRef} // Assign ref to ScrollView
        style={{ height: "100%" }}
        scrollEnabled={true}
      >
        {onboardingData.map((data, idx) => (
          <View key={idx} style={styles.pageContainer}>
            <Image source={data.image} style={styles.image} />
            <Text style={styles.header}>{data.header}</Text>
            <Text style={styles.summary}>{data.summary}</Text>
          </View>
        ))}
      </ScrollView>

      {/* Pagination Dots */}
      <View style={styles.paginationContainer}>
        {onboardingData.map((_, idx) => (
          <View
            key={idx}
            style={step === idx ? styles.dotActive : styles.dotInactive}
          />
        ))}
      </View>

      <View style={styles.buttonRow}>
        {step < onboardingData.length - 1 ? (
          <>
            <TouchableOpacity
              style={styles.btnOutlineContainer}
              onPress={handleSkip}
            >
              <Text style={styles.btnOutlineText}>Skip</Text>
            </TouchableOpacity>
            <View style={{ width: width / 4 }}></View>
            <TouchableOpacity
              onPress={handleNext}
              style={{ flex: 1, marginLeft: 12 }}
            >
              <CommonLinearGradient style={styles.btnContainer}>
                <View style={{ flexDirection: "row", alignItems: "center", gap: 4 }}>
                  <Text style={styles.btnText}>Next</Text>
                  <Image source={appIcons.rightArrow} style={styles.btnImage} />
                </View>
              </CommonLinearGradient>
            </TouchableOpacity>
          </>
        ) : (
          <TouchableOpacity
            onPress={handleNext}
            style={{ flex: 1, marginLeft: 12 }}
          >
            <CommonLinearGradient style={styles.btnContainer}>
              <View style={{ flexDirection: "row", alignItems: "center", gap: 4 }}>
                <Text style={styles.btnText}>Get started</Text>
                <Image source={appIcons.rightArrow} style={styles.btnImage} />
              </View>
            </CommonLinearGradient>
          </TouchableOpacity>
        )}
      </View>
    </SafeAreaView>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  contentContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  pageContainer: {
    width: width,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 24,
  },
  image: {
    width: width,
    height: width * 0.95,
    resizeMode: "contain",
    
  },
  header: {
    fontSize: fontSizes.xlarge,
    fontFamily: fonts.bold,
    color: colors.white,
    textAlign: "center",
    marginBottom: 12,
  },
  summary: {
    ...commonStyles.linkSmallText,
    textAlign: "center",
  },
  paginationContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 32,
  },
  dotActive: {
    width: 22,
    height: 8,
    borderRadius: 6,
    backgroundColor: colors.primary,
    marginHorizontal: 6,
    borderWidth: 2,
    borderColor: colors.primary,
  },
  dotInactive: {
    width: 10,
    height: 10,
    borderRadius: 6,
    backgroundColor: "#374151",
    marginHorizontal: 6,
    borderWidth: 2,
    borderColor: "#374151",
  },

  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginRight: 20,
    marginBottom: 10,
  },
  btnContainer: {
    height: 50,
    borderRadius: 10,
    backgroundColor: colors.primary,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 12,
  },
  btnText: {
    color: colors.white,
    fontFamily: fonts.semiBold,
    fontSize: fontSizes.medium,
  },
  btnOutlineContainer: {
    flex: 1,
    height: 30,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  btnOutlineText: {
    color: "#9CA3AF",
    fontFamily: fonts.medium,
    fontSize: fontSizes.medium,
  },
  btnImage: {
    width: 18,
    height: 18,
    
  },
});
