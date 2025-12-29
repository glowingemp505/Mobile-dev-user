import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors, fonts, fontSizes } from "src/utils/styles";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },

  scrollContent: {
    paddingHorizontal: 14,
  },

  backBtn: {
    marginTop: 16,
    marginBottom: 16,
    marginLeft: 15,
    width: 40,
    height: 40,
    zIndex: 2,
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

  welcome: {
    marginTop: 10,
    fontFamily: fonts.bold,
    fontSize: 26,
    color: "#fff",
  },

  subtitle: {
    marginTop: 8,
    fontFamily: fonts.regular,
    fontSize: 16,
    color: "#9CA3AF",
    lineHeight: 26,
  },

  label: {
    marginTop: 24,
    fontFamily: fonts.regular,
    fontSize: 16,
    color: "#fff",
  },

  inputBox: {
    flexDirection: "row",
    marginTop: 8,
    height: 56,
    backgroundColor: "#27272A",
    borderRadius: 12,
    justifyContent: "flex-start",
    paddingHorizontal: 16,
  },

  input: {
    color: "#fff",
    fontSize: 16,
  },

  forgotBtn: {
    marginTop: 16,
    alignSelf: "flex-start",
  },

  forgotText: {
    marginTop: 5,
    fontFamily: fonts.medium,
    fontSize: 16,
    color: "#6137D1",
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

  orRow: {
    marginTop: 32,
    flexDirection: "row",
    alignItems: "center",
  },

  line: {
    flex: 1,
    height: 1,
    backgroundColor: "#D9D9D9",
  },

  orText: {
    marginHorizontal: 8,
    fontSize: 14,
    color: "#A1A1A9",
  },

  socialRow: {
    marginTop: 24,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  socialBtn: {
    width: "48%",
    height: 60,
    backgroundColor: "#27272A",
    borderRadius: 12,
    justifyContent: "center",
  },

  signupRow: {
    marginTop: 32,
    alignItems: "center",
  },

  signupText: {
    fontSize: 16,
    fontFamily: fonts.regular,
    color: "#fff",
  },
  inputIcon: {
    width: 20,
    height: 20,
    resizeMode: "contain",
    alignSelf: "center",
    marginRight: 12,
    tintColor: colors.white,
  },
  socialIcon: {
    width: 35,
    height: 35,
    resizeMode: "contain",
    alignSelf: "center",
    marginRight: 12,
  },
  dontReceive: {
    color: colors.white,
    fontFamily: fonts.regular,
    fontSize: fontSizes.medium,
  },
});

export default styles;
