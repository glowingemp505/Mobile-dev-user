import { StyleSheet } from "react-native";
import { colors, fonts } from "src/utils/styles";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },

  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: 16,
    paddingVertical: 10,
    gap: 20,
  },

  headerText: {
    color: colors.white,
    fontSize: 26,
    fontFamily: fonts.bold,
  },

  /* Search */
  inputBox: {
    height: 56,
    backgroundColor: "#27272A",
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    gap: 12,
  },

  searchIcon: {
    width: 18,
    height: 18,
    resizeMode: "contain",
    tintColor: colors.white,
  },

  inputStyle: {
    flex: 1,
    color: colors.white,
    fontFamily: fonts.regular,
    fontSize: 16,
  },

  /* Tabs */
  tabsContainer: {
    gap: 10,
  },

  tabStyle: {
    backgroundColor: "#27272A",
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 15,
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },

  activeTabStyle: {
    backgroundColor: "#1A1233",
    borderWidth: 1,
    borderColor: "#6123C5",
  },

  tabText: {
    fontFamily: fonts.medium,
    fontSize: 15,
    color: "#A1A1A9",
  },

  activeText: {
    color: "#6123C5",
  },

  tabIcon: {
    width: 12,
    height: 15,
    resizeMode: "contain",
    tintColor:"#A1A1A9"
  },

  activeIcon: {
    tintColor: "#6123C5",
  },

  /* Today */
  dayText: {
    color: "#A1A1A9",
    fontFamily: fonts.regular,
    fontSize: 14,
    marginVertical:10
  },

  todayCard: {
    backgroundColor: "#27272A",
    paddingVertical: 15,
    paddingHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
    borderRadius: 10,
    marginVertical:10
  },

  todayLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },

  todayIcon: {
    width: 30,
    height: 30,
    resizeMode: "contain",
  },

  todayTextWrapper: {
    gap: 4,
  },

  todayTitle: {
    color: colors.white,
    fontFamily: fonts.regular,
    fontSize: 16,
  },

  todayTime: {
    color: "#9CA3AF",
    fontFamily: fonts.regular,
    fontSize: 14,
  },

  todayAmount: {
    color: colors.white,
    fontFamily: fonts.bold,
    fontSize: 14,
  },
});

export default styles;
