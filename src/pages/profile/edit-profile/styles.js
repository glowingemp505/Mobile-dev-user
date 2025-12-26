import { StyleSheet } from "react-native";
import { colors, fonts } from "src/utils/styles";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  backBtn: {
    margin: 16,
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

  bellButton: {
    width: 40,
    height: 40,
    marginRight: 16,
  },

  title: {
    color: colors.white,
    fontSize: 18,
    fontFamily: fonts.semiBold,
  },

  scrollContent: {
    paddingHorizontal: 16,
  },

  label: {
    marginTop: 24,
    fontSize: 16,
    fontFamily: fonts.regular,
    color: colors.white,
  },

  inputBox: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,
    height: 56,
    backgroundColor: "#27272A",
    borderRadius: 12,
    paddingHorizontal: 16,
  },

  input: {
    color: colors.white,
    fontSize: 16,
  },

  inputIcon: {
    width: 20,
    height: 20,
    resizeMode: "contain",
    tintColor: colors.white,
    marginRight: 12,
  },

  bottomContainer: {
    paddingHorizontal: 16,
    paddingBottom: 16,
    gap: 16,
    backgroundColor: colors.black,
  },

  resetButton: {
    height: 60,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: colors.primary,
    justifyContent: "center",
    alignItems: "center",
  },

  saveButton: {
    height: 60,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default styles;
