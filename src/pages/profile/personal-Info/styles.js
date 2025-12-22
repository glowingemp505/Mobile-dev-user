import { StyleSheet } from "react-native";
import { colors, fonts, fontSizes } from "src/utils/styles";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },

  wrapper: {
    paddingHorizontal: 16,
    paddingTop: 10,
  },

  topRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  leftArrow: {
    width: 18,
    height: 18,
    resizeMode: "contain",
  },

  topCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#27272A",
    justifyContent: "center",
    alignItems: "center",
  },

  progressRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },

  empty: {
    width: 40,
  },

  bar: {
    backgroundColor: colors.primary,
    width: 42,
    height: 6,
    borderRadius: 100,
  },

  barUnFill: {
    backgroundColor: colors.gray,
    width: 42,
    height: 6,
    borderRadius: 100,
  },

  scrollContent: {
    paddingHorizontal: 16,
    paddingTop: 40,
    flexGrow: 1,
  },

  heading: {
    fontFamily: fonts.bold,
    fontSize: 26,
    color: colors.white,
  },

  subHeading: {
    marginTop: 8,
    fontFamily: fonts.regular,
    fontSize: 16,
    color: colors.gray,
  },
  headingAndSub: {
    marginVertical: 10,
    gap: 4,
  },
  title: {
    color: colors.white,
    fontFamily: fonts.regular,

    fontSize: fontSizes.xMedium,
  },

  input: {
    color: colors.white,
    fontSize: 16,
    fontFamily: fonts.regular,
    width: "90%",
  },
  inputBox: {
    marginTop: 8,
    height: 56,
    backgroundColor: "#27272A",
    borderRadius: 12,
    paddingHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  inputView: {
    marginTop: 20,
    gap: 10,
    marginBottom: 5,
  },
  pimary: {
    color: colors.white,
    fontFamily: fonts.regular,
    fontSize: fontSizes.xMedium,
  },
  tab: {
    height: 42,
    paddingHorizontal: 20,
    borderRadius: 24,
    backgroundColor: "#27272A",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: colors.white,
    fontFamily: fonts.regular,
    fontSize: fontSizes.medium,
  },
  selectedTabStyle: {
    backgroundColor: "#1C0F34",
    borderWidth: 1,
    borderColor: "#341665",
  },
  selectedTabTitleStyle: {
    color: "#5721A9",
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
});

export default styles;
