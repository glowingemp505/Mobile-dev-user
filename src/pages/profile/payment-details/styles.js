import { Dimensions, StyleSheet } from "react-native";
import { colors, fonts } from "src/utils/styles";

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },

  header: {
    backgroundColor: "#27272A",
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 16,
    marginTop: 10,
  },

  backIcon: {
    width: 18,
    height: 18,
    resizeMode: "contain",
  },

  wrapper: {
    flexGrow: 1,
    paddingHorizontal: 16,
    paddingTop: 20,
    justifyContent:"space-between"
  },

  paymentDetail: {
    color: colors.white,
    fontFamily: fonts.bold,
    fontSize: 26,
  },

  secure: {
    color: "#9CA3AF",
    fontSize: 16,
    fontFamily: fonts.regular,
    marginBottom: 20,
  },

  gradientCard: {
    borderRadius: 16,
    width: width * 0.9,
    minHeight: 207,
    paddingVertical: 16,
    alignSelf: "center",
    marginBottom: 24,
  },

  proTopVIew: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "90%",
    alignSelf: "center",
    marginBottom: 30,
  },

  proIcon: {
    width: 36,
    height: 36,
  },

  proplanView: {
    backgroundColor: "#00000026",
    paddingHorizontal: 16,
    height: 36,
    borderRadius: 20,
    justifyContent: "center",
  },

  proPlanText: {
    color: colors.white,
    fontFamily: fonts.semiBold,
    fontSize: 18,
  },

  topView: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%",
    alignSelf: "center",
    marginBottom: 20,
  },

  rowVIew: {
    flexDirection: "row",
    gap: 6,
  },

  dot: {
    width: 9,
    height: 9,
    borderRadius: 4.5,
    backgroundColor: colors.white,
  },

  numberstyle: {
    color: colors.white,
    fontFamily: fonts.semiBold,
    fontSize: 18,
    letterSpacing: 2,
    left: 20,
  },

  /* Inputs */
  inputVIew: {
    marginBottom: 20,
  },

  label: {
    color: colors.white,
    fontSize: 16,
    fontFamily: fonts.regular,
    marginBottom: 8,
  },

  inputBox: {
    height: 56,
    backgroundColor: "#27272A",
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    gap: 10,
  },

  cardIcon: {
    width: 20,
    height: 20,
    resizeMode: "contain",
  },

  input: {
    flex: 1,
    color: colors.white,
    fontSize: 16,
    fontFamily: fonts.regular,
  },

  rowInput: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  halfInput: {
    width: "48%",
    minWidth: 143,
  },

  singleInput: {
    height: 56,
    backgroundColor: "#27272A",
    borderRadius: 12,
    paddingHorizontal: 16,
    color: colors.white,
    fontSize: 16,
    fontFamily: fonts.regular,
  },
  paymetScreen: {
    color: "#636363",
    fontFamily: fonts.medium,
    fontSize: 18,
  },
  lockText: {
    marginTop: 20,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#515151",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
});

export default styles;
