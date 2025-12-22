import { StyleSheet } from "react-native";
import { colors, fonts, fontSizes } from "src/utils/styles";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },

  backIcon: {
    width: 18,
    height: 18,
    resizeMode: "contain",
  },

  backBtn: {
    marginTop: 16,
    marginLeft: 15,
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

  scrollContent: {
    paddingHorizontal: 14,
    flexGrow: 1,
    alignItems: "center",
    marginTop: 40,
  },

  boxView: {
    height: 101,
    width: 101,
    backgroundColor: "#1A1233",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },

  emailStyle: {
    width: 37,
    height: 29,
    resizeMode: "contain",
  },

  greenView: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: "#22C55E",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    zIndex: 99,
    right: 0,
    top: -5,
  },

  number: {
    color: colors.white,
    fontFamily: fonts.bold,
    fontSize: fontSizes.medium,
  },

  verifyEmail: {
    fontFamily: fonts.bold,
    fontSize: 26,
    lineHeight: 36,
    color: colors.white,
    marginTop: 20,
  },

  sixDigit: {
    fontFamily: fonts.regular,
    fontSize: fontSizes.medium,
    color: colors.gray,
    marginTop: 15,
  },

  email: {
    fontFamily: fonts.regular,
    fontSize: fontSizes.xMedium,
    color: colors.white,
    marginTop: 10,
  },

  otpContainer: {
    marginTop: 30,
    justifyContent: "space-between",
  },

  pinCodeContainer: {
    width: 50,
    height: 55,
    backgroundColor: "gray",
    borderRadius: 10,
    borderWidth: 0,
    justifyContent: "center",
    alignItems: "center",
  },

  activePinCodeContainer: {
    backgroundColor: "#120D1F",
    borderWidth: 1,
    borderColor: "#6137D1",
  },

  filledPinCodeContainer: {
    backgroundColor: "#120D1F",
    borderWidth: 1,
    borderColor: "#6137D1",
  },

  pinCodeText: {
    color: colors.white,
    fontFamily: fonts.bold,
    fontSize: 18,
  },

  placeholderText: {
    color: "#9CA3AF",
  },
  resendcode: {
    fontFamily: fonts.regular,
    color: colors.gray,
    fontSize: fontSizes.medium,
    marginTop: 30,
  },
  secondText: {
    color: colors.primary,
    marginTop: 20,
  },
  signInBtn: {
    marginTop: 24,
    height: 60,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  signInBtnText: {
    fontSize: 18,
    fontFamily: fonts.semiBold,
    color: "#fff",
  },
  resendText: {
    marginTop: 16,
    color: "#9CA3AF",
    fontSize: 14,
    fontFamily: fonts.regular,
  },

  secondText: {
    color: "#6137D1",
    fontFamily: fonts.semiBold,
  },

  resendBtn: {
    marginTop: 16,
    color: "#6137D1",
    fontSize: 16,
    fontFamily: fonts.semiBold,
  },
  dontReceive: {
    color: colors.white,
    marginTop: 24,
  },
  buttonStyle: {
    marginTop: 24,
  },
});

export default styles;
