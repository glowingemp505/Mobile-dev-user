import { StyleSheet, Text, View } from "react-native";
import { colors, fonts } from "src/utils/styles";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },
  ScrollView: {
    flexGrow: 1,
    paddingVertical: 10,
    paddingHorizontal: 16,
  },
  check: {
    width: 50,
    height: 50,
    resizeMode: "contain",
    tintColor: colors.white,
  },
  checkCircle: {
    width: 142,
    height: 142,
    borderRadius: 142 / 2,
    backgroundColor: "#8945DE",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginTop: 50,
  },
  greenCircle: {
    width: 36,
    height: 36,
    borderRadius: 36 / 2,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#16A249",
    position: "absolute",
    top: 0,
    right: 0,
  },
  allSet: {
    fontSize: 30,
    fontFamily: fonts.bold,
    color: colors.white,
    textAlign: "center",
    marginTop: 30,
    marginBottom:5
  },
  description: {
    color: "#D6B9F0",
    fontFamily: fonts.medium,
    fontSize: 16,
    textAlign: "center",
  },
  descriptionText: {
    justifyContent: "center",
    alignItems: "center",
    width: "80%",
    alignSelf: "center",
  },
  card: {
    borderWidth: 1,
    borderColor: "#A862E2",
    paddingVertical: 20,
    paddingHorizontal: 16,
    backgroundColor: "#27272A",
    borderRadius: 8,
    marginVertical: 40,
  },
  box: {
    backgroundColor: "#A862E2",
    width: 52,
    height: 52,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 16,
    fontFamily: fonts.semiBold,
    color: colors.white,
  },
  value: {
    fontSize: 14,
    fontFamily: fonts.regular,
    color: colors.white,
  },
  boxRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginVertical: 10,
  },
  goto: {
    color: colors.primary,
    fontFamily: fonts.semiBold,
    fontSize: 18,
  },
  button: {
    height: 60,
    width: "100%",
    backgroundColor: "white",
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default styles;
