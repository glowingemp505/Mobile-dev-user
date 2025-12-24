import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors, fonts } from "src/utils/styles";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },
  insights: {
    color: colors.white,
    fontFamily: fonts.bold,
    fontSize: 26,
  },
  wrapper: {
    flexGrow: 1,
    paddingVertical: 10,
    paddingHorizontal: 16,
    gap:15

  },
});
export default styles;
