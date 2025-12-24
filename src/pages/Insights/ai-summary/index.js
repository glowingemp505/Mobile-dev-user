import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import CommonLinearGradient from "src/components/CommonLinearGradient";
import { appIcons } from "src/utils/assets";
import { colors, fonts } from "src/utils/styles";

const AISummary = () => {
  return (
    <CommonLinearGradient
      colors={["#160F26", "#271F3C"]}
      style={styles.gradientContainer}
    >
      <View style={styles.content}>
        <View style={styles.headerRow}>
          <Image source={appIcons.overlay} style={styles.icon} />
          <Text style={styles.title}>AI Summary</Text>
        </View>

        <Text style={styles.description}>
          You spent <Text style={styles.successText}>15% less</Text> on dining
          this month compared to last month. Great job! Consider putting that
          extra <Text style={styles.amountText}>$120</Text> towards your
          vacationfund.
        </Text>
      </View>
    </CommonLinearGradient>
  );
};

export default AISummary;

const styles = StyleSheet.create({
  gradientContainer: {
    borderWidth: 1,
    borderColor: "#6137D1",
    borderRadius: 10,
    marginVertical: 10,
  },

  content: {
    paddingVertical: 15,
    paddingHorizontal: 16,
  },

  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },

  icon: {
    width: 48,
    height: 48,
    borderRadius: 20,
  },

  title: {
    fontFamily: fonts.bold,
    fontSize: 20,
    color: colors.white,
  },

  description: {
    marginTop: 15,
    fontFamily: fonts.regular,
    fontSize: 17,
    lineHeight: 30,
    color: colors.white,
  },

  successText: {
    color: "#86EFAC",
    fontFamily: fonts.bold,
  },

  amountText: {
    color: "#7A42D3",
    fontFamily: fonts.bold,
  },
});
