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
    alignItems: "center",
    paddingBottom: 30,
  },

  cicleView: {
    width: 90,
    height: 90,
    borderRadius: 45,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
  },

  nameText: {
    color: colors.white,
    fontSize: 26,
    fontFamily: fonts.bold,
  },

  userView: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "#27272A",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 0,
    right: 0,
  },

  textView: {
    marginVertical: 15,
    alignItems: "center",
  },

  setting: {
    color: colors.white,
    fontSize: 26,
    fontFamily: fonts.bold,
  },

  email: {
    color: "#A1A1A9",
    fontSize: 16,
    fontFamily: fonts.regular,
    marginTop: 6,
  },

  becomProCard: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    backgroundColor: "#1A1233",
    borderWidth: 1,
    borderColor: "#6137D1",
    borderRadius: 24,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },

  planText: {
    fontSize: 16,
    fontFamily: fonts.medium,
    color: "#6137D1",
  },

  statusList: {
    width: "90%",
    justifyContent: "space-between",
    marginVertical: 25,
  },

  box: {
    backgroundColor: "#27272A",
    borderRadius: 12,
    paddingVertical: 10,
    paddingHorizontal: 18,
    alignItems: "center",
    marginRight: 12,
  },

  number: {
    fontSize: 24,
    fontFamily: fonts.bold,
    color: colors.white,
  },

  titleStyle: {
    color: colors.white,
    fontSize: 16,
    fontFamily: fonts.medium,
  },

  card: {
    width: "100%",
    backgroundColor: "#27272A",
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 14,
    marginBottom: 12,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  leftRow: {
    flexDirection: "row",
    gap:10
  },

  textColumn: {
    marginLeft: 10,
  },

  title: {
    fontSize: 16,
    fontFamily: fonts.medium,
    color: colors.white,
  },

  subtitle: {
    fontSize: 14,
    fontFamily: fonts.regular,
    color: "#A1A1A9",
    marginTop: 4,
  },

  dangerCard: {
    backgroundColor: "#2A1515",
    borderWidth:1,
    borderColor:"#491212"
  },

  dangerText: {
    color:"#DE524C",
  },
});
