import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors, fonts } from "src/utils/styles";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },
  wrapper: {
    flexGrow: 1,
    backgroundColor: colors.black,
    paddingVertical: 10,
    paddingHorizontal: 16,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  goals: {
    color: colors.white,
    fontFamily: fonts.bold,
    fontSize: 26,
  },
  circleAdd: {
    width: 41,
    height: 41,
    borderRadius: 41 / 2,
    justifyContent: "center",
    alignItems: "center",
  },
  connect: {
    color: "#9CA3AF",
    fontSize: 16,
    fontFamily: fonts.regular,
  },
  active: {
    color: "#10B981",
    fontSize: 17,
    fontFamily: fonts.regular,
  },
  lableStyle: {
    color: colors.white,
    fontFamily: fonts.bold,
    fontSize: 20,
  },
  card: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    backgroundColor: "#27272A",
    borderRadius: 8,
    gap: 10,
    marginVertical: 4,
  },
  icon: {
    width: 20,
    height: 20,
    resizeMode: "contain",
  },
  circle: {
    width: 48,
    height: 48,
    borderRadius: 48 / 2,
    justifyContent: "center",
    alignItems: "center",
  },
  topRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    justifyContent: "space-between",
  },
  title: {},
  amount: {
    color: "#9CA3AF",
    fontFamily: fonts.regular,
    fontSize: 16,
  },
  percentage: {
    color: "#6137D1",
    fontFamily: fonts.bold,
    fontSize: 23,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  bar: {
    backgroundColor: "#374151",
    height: 8,
    width: "100%",
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
  },
  barMain: {
    width: "100%",
    alignSelf: "flex-start",
  },
  activeBar: {
    backgroundColor: "#6137D1",
    height: 8,
    alignSelf: "flex-start",
    borderRadius:100
  },
  remaining: {
    color: "#9CA3AF",
    fontSize: 16,
    fontFamily: fonts.regular,
  },
});

export default styles;
