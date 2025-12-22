import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors, fonts } from "src/utils/styles";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },

  wrapper: {
    paddingHorizontal: 16,
    paddingTop: 10,
    flexGrow: 1,
  },
  chooseLocation: {
    fontFamily: fonts.bold,
    fontSize: 26,
    color: colors.white,
  },
  selectColor: {
    color: colors.gray,
    fontFamily: fonts.regular,
    fontSize: 16,
  },
  textView: {
    marginVertical: 20,
    gap: 10,
  },
  cardStyle: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    backgroundColor: "#3F3F3F",
    marginVertical: 10,
    borderRadius: 10,
  },
  title: {
    color: colors.white,
    fontFamily: fonts.bold,
    fontSize: 25,
  },
  price: {
    color: colors.white,
    fontFamily: fonts.bold,
    fontSize: 25,
  },
  priceLabel: {
    color: colors.gray,
    fontFamily: fonts.regular,
    fontSize: 16,
  },
  featureText: {
    color: colors.white,
    gap: 5,
    marginTop: 5,
  },
  featureRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  check: {
    width: 16,
    height: 10,
    resizeMode: "contain",
    tintColor: colors.white,
  },
  miniCircle: {
    width: 24,
    height: 24,
    backgroundColor: "#6137D1",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
    position: "absolute",
    right: 20,
    top: 30,
  },
  signInBtn: {
    marginTop: 24,
    height: 60,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  signInBtnText: {
    fontSize: 18,
    fontFamily: fonts.semiBold,
    color: "#fff",
  },
});

export default styles;
