import { StyleSheet } from "react-native";
import { colors, fonts } from "src/utils/styles";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
    paddingHorizontal: 16,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 16,
  },

  backBtn: {
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

  title: {
    color: colors.white,
    fontSize: 18,
    fontFamily: fonts.semiBold,
  },

  bellButton: {
    backgroundColor: "#1A1C1F",
    width: 42,
    height: 42,
    borderRadius: 21,
    justifyContent: "center",
    alignItems: "center",
  },

  notificationDot: {
    position: "absolute",
    right: 6,
    top: 6,
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#DD2E44",
  },

  notificationItem: {
    flexDirection: "row",
    backgroundColor: "#1A1C1F",
    borderRadius: 12,
    padding: 14,
    marginBottom: 12,
  },

  notificationIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#27272A",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },

  notificationTitle: {
    color: colors.white,
    fontSize: 14,
    fontFamily: fonts.medium,
    marginBottom: 4,
  },

  notificationDesc: {
    color: "#A1A1AA",
    fontSize: 12,
    fontFamily: fonts.regular,
  },

  timeText: {
    color: "#71717A",
    fontSize: 11,
    marginTop: 6,
  },
});

export default styles;
