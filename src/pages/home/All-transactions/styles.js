import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors, fonts } from "src/utils/styles";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
    paddingHorizontal: 16,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 16,
  },

  backBtn: {
    width: 40,
    height: 40,
  },

  ellipse: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#27272A",
    justifyContent: "center",
    alignItems: "center",
  },

  backIcon: {
    width: 18,
    height: 18,
    resizeMode: "contain",
  },

  notificationDot: {
    position: "absolute",
    right: 6,
    top: 6,
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#DD2E44",
  },
  todayCard: {
    backgroundColor: "#27272A",
    paddingVertical: 15,
    paddingHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
    borderRadius: 10,
    marginVertical: 10,
  },

  todayLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },

  todayIcon: {
    width: 30,
    height: 30,
    resizeMode: "contain",
  },

  todayTextWrapper: {
    gap: 4,
  },
  todayTitle: {
    color: colors.white,
    fontFamily: fonts.regular,
    fontSize: 16,
  },

  todayTime: {
    color: "#9CA3AF",
    fontFamily: fonts.regular,
    fontSize: 14,
  },

  todayAmount: {
    color: colors.white,
    fontFamily: fonts.bold,
    fontSize: 14,
  },
});
export default styles;
