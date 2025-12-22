import { StyleSheet } from "react-native";
import { colors, fonts } from "src/utils/styles";

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
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 20,
  },

  headerTexts: {
    gap: 10,
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

  inputStyle: {
    color: colors.white,
    fontFamily: fonts.regular,
    fontSize: 16,
    flex: 1,
  },

  inputBox: {
    height: 56,
    backgroundColor: "#27272A",
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    gap: 15,
    marginBottom: 20,
  },

  backName: {
    fontFamily: fonts.regular,
    fontSize: 12,
    color: colors.white,
    marginTop: 8,
    textAlign: "center",
  },

  cardView: {
    flex: 1,
    minHeight: 100,
    backgroundColor: "#27272A",
    borderRadius: 18,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
    marginHorizontal: 5,
  },

  cardSelected: {
    borderWidth: 1,
    borderColor: "#6B26D9",
    backgroundColor: "#130C20",
  },

  checkIconContainer: {
    width: 20,
    height: 20,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: 8,
    right: 8,
    backgroundColor: "#6B26D9",
  },

  checkIcon: {
    width: 10,
    height: 10,
    resizeMode: "contain",
    tintColor: colors.white,
  },

  columnWrapper: {
    justifyContent: "space-between",
    marginBottom: 10,
  },
  backLevel: {
    fontFamily: fonts.regular,
    fontSize: 14,
    color: "#9CA3AF",
  },
  shieldAndText: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    justifyContent: "center",
    alignSelf: "center",
  },
  connect: {
    color: colors.white,
    fontSize: 18,
    fontFamily: fonts.semiBold,
  },
  signInBtn: {
    marginTop: 24,
    height: 60,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  skipForNow: {
    color: colors.white,
    fontSize: 18,
    fontFamily: fonts.semiBold,
    textAlign:"center",
    marginTop:25
  }
});

export default styles;
