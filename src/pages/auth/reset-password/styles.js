import { StyleSheet, Text, View } from "react-native";
import { colors, fonts, fontSizes } from "src/utils/styles";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },
  scrollContent: {
    paddingHorizontal: 16,
    flexGrow: 1,
    paddingVertical: 10,
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
  resetDescription: {
    color: colors.gray,
    fontFamily: fonts.regular,
    fontSize: 14,
  },
  inputIcon: {
    width: 20,
    height: 20,
    resizeMode: "contain",
    alignSelf: "center",
    marginRight: 12,
    tintColor: colors.white,
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
  label: {
    fontFamily: fonts.bold,
    fontSize: 15,
    color: colors.white,
  },
  innerView: {
    marginVertical: 30,
    gap: 25,
  },
  signInBtn: {
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
