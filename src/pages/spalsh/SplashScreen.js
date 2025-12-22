import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  Platform,
} from "react-native";
import { colors, commonStyles } from "src/utils/styles";
import { appIcons } from "src/utils/assets";
import React from "react";

const { height, width } = Dimensions.get("window");
const WP = (percentage) => (width * percentage) / 100;

const SplashScreen = () => {
  return (
    <View style={commonStyles.container}>
      <View style={styles.container}>
        <Image source={appIcons.splashlogo} style={styles.logo} />
        <Text style={[styles.text, { marginTop: -40 }]}>SpendNest</Text>
        <Text style={styles.textsummary}>Smart Money Management</Text>
      </View>
      <View style={styles.paginationContainer}>
        <View style={styles.dotActive} />
        <View style={styles.dotInactive} />
        <View style={styles.dotInactive} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 250,
    height: 250,
    resizeMode: "contain",
    marginTop: -80,
  },
  text: {
    ...commonStyles.header,
    // fontSize: 18,
  },
  textsummary: {
    ...commonStyles.linkSmallText,
    // fontSize: 18,
  },
  paginationContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 40,
    width: '100%',
  },
  dotActive: {
    width: 11,
    height: 11,
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
    backgroundColor: '#321a4a',
    marginHorizontal: 6,
    borderWidth: 2,
    borderColor: '#321a4a',
    
  },
});

export default SplashScreen;
