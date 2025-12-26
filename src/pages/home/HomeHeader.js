import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { appIcons } from "src/utils/assets";
import { colors, fonts } from "src/utils/styles";
import { useNavigation } from "@react-navigation/native";

const HomeHeader = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.greeting}>Good morning,</Text>
        <Text style={styles.username}>Faheem</Text>
      </View>

      <TouchableOpacity
        onPress={() => navigation.navigate("Notifications")}
        style={styles.bellButton}
      >
        <View style={styles.notificationDot} />
        <appIcons.bell width={20} height={20} />
      </TouchableOpacity>
    </View>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 10,
  },

  textContainer: {
    gap: 5,
  },

  greeting: {
    fontFamily: fonts.regular,
    color: "#9CA3AF",
    fontSize: 16,
  },

  username: {
    fontFamily: fonts.bold,
    fontSize: 26,
    color: colors.white,
  },

  bellButton: {
    backgroundColor: "#1A1C1F",
    width: 42,
    height: 42,
    borderRadius: 21,
    justifyContent: "center",
    alignItems: "center",
  },

  notificationDot: {
    position: "absolute",
    right: 0,
    top: 5,
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#DD2E44",
  },
});
