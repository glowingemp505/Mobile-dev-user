import { StyleSheet, Text, View } from "react-native";
import { colors, fonts } from "src/utils/styles";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },
  scrollContent: {
    paddingHorizontal: 16,
    flexGrow: 1,
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
  description: {
    color: colors.white,
    fontFamily: fonts.regular,
    lineHeight: 28,
    fontSize: 14,
    width: "70%",
  },
  email: {
    color: colors.white,
    fontFamily: fonts.bold,
    lineHeight: 28,
    fontSize: 18,
    marginTop: 20,
  },

  inputBox: {
    flexDirection: "row",
    marginTop: 8,
    height: 60,
    backgroundColor: "#27272A",
    borderRadius: 12,
    justifyContent: "flex-start",
    paddingHorizontal: 16,
  },

  input: {
    color: "#fff",
    fontSize: 16,
    flex: 1,
  },
  inputIcon: {
    width: 20,
    height: 20,
    resizeMode: "contain",
    alignSelf: "center",
    marginRight: 12,
    tintColor: colors.white,
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
