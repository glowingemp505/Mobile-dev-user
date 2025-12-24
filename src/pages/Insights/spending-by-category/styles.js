import { StyleSheet } from "react-native";
import { colors, fonts } from "src/utils/styles";

const styles = StyleSheet.create({
  mainCard: {
    backgroundColor: "#27272A",
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 10,
  },

  topView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 16,
  },

  spending: {
    fontSize: 18,
    fontFamily: fonts.bold,
    color: colors.white,
  },

  detail: {
    color: "#8B5CF6",
    fontSize: 13,
    fontFamily: fonts.medium,
  },

  chartPlaceholder: {
    height: 230,
    justifyContent: "center",
    alignItems: "center",
  },

  itemContainer: {
    width: "48%",
    paddingVertical: 6,
  },

  itemRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  itemLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    flex: 1,
  },

  dot: {
    width: 11,
    height: 11,
    borderRadius: 5.5,
  },

  title: {
    color: "#888888",
    fontFamily: fonts.medium,
    fontSize: 14,
    flexShrink: 1,
  },

  percentage: {
    color: "#D1D5DB",
    fontFamily: fonts.bold,
    fontSize: 14,
  },
});

export default styles;
