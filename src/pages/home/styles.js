import { StyleSheet } from "react-native";
import { colors, fonts } from "src/utils/styles";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },

  safeArea: (top) => ({
    paddingTop: top > 0 ? top + 5 : 20,
  }),

  scroll: {
    flexGrow: 1,
    paddingVertical: 10,
    paddingHorizontal: 16,
  },

  gradientView: {
    height: 207,
    width: "100%",
    borderRadius: 16,
  },

  gradientInner: {
    paddingVertical: 20,
    paddingHorizontal: 16,
    gap: 20,
  },

  balanceWrapper: {
    gap: 10,
  },

  greeting: {
    fontFamily: fonts.regular,
    color: "#9CA3AF",
    fontSize: 16,
  },

  total: {
    color: colors.white,
    fontFamily: fonts.bold,
    fontSize: 36,
  },

  statsRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "85%",
    gap: 20,
  },

  statItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },

  incomeIcon: {
    backgroundColor: "#6E4ABE",
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: "center",
    alignItems: "center",
  },

  expenseIcon: {
    backgroundColor: "#AA41BF",
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: "center",
    alignItems: "center",
  },

  icon: {
    width: 25,
    height: 25,
    resizeMode: "contain",
  },

  statLabel: {
    color: "#9CA3AF",
    fontSize: 14,
    fontFamily: fonts.regular,
  },

  statValue: {
    fontFamily: fonts.semiBold,
    fontSize: 16,
    color: colors.white,
  },
  icon: {
    width: 24,
    height: 24,
    resizeMode: "contain",
  },
  title: {
    fontSize: 16,
    fontFamily: fonts.regular,
    color: "#9CA3AF",
  },
  boxStyle: {
    width: 60,
    height: 60,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  cardMain: {
    alignItems: "center",
    marginVertical: 25,
    gap: 10,
  },
  recent: {
    fontSize: 18,
    fontFamily: fonts.semiBold,
    color: "#FFFFFF",
  },
  seeAll: {
    color: "#6B26D9",
    fontSize: 16,
    fontFamily: fonts.regular,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
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
    marginVertical: 10,
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
