import { StyleSheet } from "react-native";
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
  header: {
    marginTop: 40,
    fontFamily: fonts.bold,
    fontSize: 26,
    color: "#fff",
    textAlign: "left",
  },
  subtitle: {
    marginTop: 8,
    fontFamily: fonts.regular,
    fontSize: 16,
    color: "#9CA3AF",
    lineHeight: 26,
    marginBottom: 24,
    textAlign: "left",
  },
  label: {
    marginTop: 24,
    fontFamily: fonts.regular,
    fontSize: 16,
    color: "#fff",
    textAlign: "left",
  },
  inputBox: {
    flexDirection: "row",
    marginTop: 8,
    height: 56,
    backgroundColor: "#27272A",
    borderRadius: 12,
    alignItems: "center",
    paddingHorizontal: 16,
  },
  input: {
    color: "#fff",
    fontSize: 16,
  },
  inputIcon: {
    width: 20,
    height: 20,
    resizeMode: "contain",
    marginRight: 12,
    tintColor: colors.gray,
  },
  eyeIconStyle: {
    width: 20,
    height: 20,
    resizeMode: "contain",
    tintColor: colors.white,
  },
  signUpBtn: {
    marginTop: 40,
    height: 60,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  signUpBtnText: {
    fontSize: 18,
    fontFamily: fonts.semiBold,
    color: "#fff",
  },
  signinRow: {
    marginTop: 32,
    alignItems: "center",
  },
  signinText: {
    fontSize: 16,
    color: "#fff",
  },
  checkBox: {
    width: 16,
    height: 16,
    borderRadius: 2,
    justifyContent: "center",
    alignItems: "center",
    borderColor: colors.white,
    borderWidth: 1,
  },
  iagreeText: {
    color: colors.white,
    fontSize: fontSizes.xSmall,
    fontFamily: fonts.regular,
  },
  check: {
    width: 12,
    height: 12,
    resizeMode: "contain",
    tintColor: colors.white,
  },
  checkBoxRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginTop: 15,
  },
});

export default styles;
