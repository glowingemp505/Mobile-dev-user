import { StyleSheet } from "react-native";
import { colors, fonts } from "src/utils/styles";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
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

  backIcon: {
    width: 18,
    height: 18,
    resizeMode: "contain",
  },

  scroll: {
    flexGrow: 1,
    paddingBottom: 30,
    paddingHorizontal: 16,
  },
  setting: {
    color: colors.white,
    fontFamily: fonts.bold,
    fontSize: 26,
    marginTop: 20,
  },
  prefrances: {
    fontSize: 16,
    fontFamily: fonts.regular,
    color: "#A1A1A9",
    marginTop: 15,
  },
  title: {
    color: "#F0F0F0",
    fontSize: 16,
    fontFamily: fonts.medium,
  },
  cardStyle: {
    height: 60,
    backgroundColor: "#27272A",
    paddingHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 12,
    marginVertical: 10,
  },
  leftArrow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
});
